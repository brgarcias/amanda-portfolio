import { createHash, createHmac, timingSafeEqual } from 'node:crypto';
import type { IncomingMessage } from 'node:http';
import { getStore } from '@netlify/blobs';

type PanelRequest = IncomingMessage & {
  cookies: Partial<Record<string, string>>;
};

const cookieName = 'panel_session';
const sessionSeconds = 7 * 24 * 60 * 60;
// Each client gets a few tries per username, and all clients together get a
// ceiling, so a weak password still cannot be guessed by brute force.
const clientLimit = { attempts: 5, windowMs: 15 * 60 * 1000 };
const overallLimit = { attempts: 100, windowMs: 60 * 60 * 1000 };

function panelConfig() {
  const { PANEL_USERNAME, PANEL_PASSWORD, PANEL_SESSION_SECRET } = process.env;
  if (!PANEL_USERNAME || !PANEL_PASSWORD || !PANEL_SESSION_SECRET) return null;
  return {
    username: PANEL_USERNAME,
    password: PANEL_PASSWORD,
    secret: PANEL_SESSION_SECRET,
  };
}

export function isPanelConfigured() {
  return panelConfig() !== null;
}

function digest(value: string) {
  return createHash('sha256').update(value).digest();
}

export function credentialsMatch(username: string, password: string) {
  const config = panelConfig();
  if (!config) return false;
  // Equal-length digests keep the comparison time independent of the input.
  const usernameMatches = timingSafeEqual(
    digest(username),
    digest(config.username),
  );
  const passwordMatches = timingSafeEqual(
    digest(password),
    digest(config.password),
  );
  return usernameMatches && passwordMatches;
}

// The credentials are part of the key, so changing the password ends every
// open session.
function sign(payload: string) {
  const config = panelConfig();
  if (!config) return null;
  return createHmac(
    'sha256',
    `${config.secret}:${config.username}:${config.password}`,
  )
    .update(payload)
    .digest('base64url');
}

function sessionCookie(value: string, maxAge: number, req: IncomingMessage) {
  const attributes = [
    `${cookieName}=${value}`,
    'Path=/',
    `Max-Age=${maxAge}`,
    'HttpOnly',
    'SameSite=Strict',
  ];
  const isLocal = /^(localhost|127\.0\.0\.1)(:\d+)?$/.test(
    req.headers.host ?? '',
  );
  if (!isLocal) attributes.push('Secure');
  return attributes.join('; ');
}

export function createSessionCookie(req: IncomingMessage) {
  const payload = Buffer.from(
    JSON.stringify({ expiresAt: Date.now() + sessionSeconds * 1000 }),
  ).toString('base64url');
  return sessionCookie(`${payload}.${sign(payload)}`, sessionSeconds, req);
}

export function clearSessionCookie(req: IncomingMessage) {
  return sessionCookie('', 0, req);
}

export function hasSession(req: PanelRequest) {
  const [payload, signature] = req.cookies[cookieName]?.split('.') ?? [];
  const expected = payload && sign(payload);
  if (!expected || !signature) return false;
  const expectedBytes = Buffer.from(expected);
  const signatureBytes = Buffer.from(signature);
  if (
    expectedBytes.length !== signatureBytes.length ||
    !timingSafeEqual(expectedBytes, signatureBytes)
  ) {
    return false;
  }
  try {
    const { expiresAt } = JSON.parse(
      Buffer.from(payload, 'base64url').toString(),
    );
    return typeof expiresAt === 'number' && expiresAt > Date.now();
  } catch {
    return false;
  }
}

/**
 * Changes must come from the panel itself: a JSON request whose origin is
 * this site. Together with the SameSite cookie, this blocks cross-site forms.
 */
export function isSameOriginJson(req: IncomingMessage) {
  const { origin } = req.headers;
  if (!req.headers['content-type']?.startsWith('application/json') || !origin) {
    return false;
  }
  const hosts = [req.headers.host, req.headers['x-forwarded-host']];
  try {
    return hosts.includes(new URL(origin).host);
  } catch {
    return false;
  }
}

type Attempts = { count: number; since: number };

function attemptStore() {
  return getStore({ name: 'panel-attempts', consistency: 'strong' });
}

function attemptKeys(req: IncomingMessage, username: string) {
  const ip =
    req.headers['x-nf-client-connection-ip'] ?? req.socket.remoteAddress;
  // Hashed, so the store never keeps IP addresses.
  const client = createHash('sha256')
    .update(`${ip}:${username.trim().toLowerCase()}`)
    .digest('hex');
  return { client: `client-${client}`, overall: 'overall' };
}

async function readAttempts(key: string, windowMs: number) {
  const attempts = (await attemptStore().get(key, {
    type: 'json',
  })) as Attempts | null;
  return attempts && Date.now() - attempts.since < windowMs
    ? attempts
    : { count: 0, since: Date.now() };
}

export async function isLockedOut(req: IncomingMessage, username: string) {
  const keys = attemptKeys(req, username);
  const [client, overall] = await Promise.all([
    readAttempts(keys.client, clientLimit.windowMs),
    readAttempts(keys.overall, overallLimit.windowMs),
  ]);
  return (
    client.count >= clientLimit.attempts ||
    overall.count >= overallLimit.attempts
  );
}

async function addAttempt(key: string, windowMs: number) {
  const attempts = await readAttempts(key, windowMs);
  await attemptStore().setJSON(key, { ...attempts, count: attempts.count + 1 });
}

export async function recordFailedLogin(
  req: IncomingMessage,
  username: string,
) {
  const keys = attemptKeys(req, username);
  await Promise.all([
    addAttempt(keys.client, clientLimit.windowMs),
    addAttempt(keys.overall, overallLimit.windowMs),
  ]);
}

export async function clearFailedLogins(
  req: IncomingMessage,
  username: string,
) {
  await attemptStore().delete(attemptKeys(req, username).client);
}
