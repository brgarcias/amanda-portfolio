import type { NextApiRequest, NextApiResponse } from 'next';
import {
  clearFailedLogins,
  createSessionCookie,
  credentialsMatch,
  isLockedOut,
  isPanelConfigured,
  isSameOriginJson,
  recordFailedLogin,
} from '@/lib/panel-auth';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  res.setHeader('Cache-Control', 'no-store');
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).end();
  }
  if (!isSameOriginJson(req)) {
    return res.status(403).json({ error: 'Pedido não permitido.' });
  }
  if (!isPanelConfigured()) {
    return res
      .status(503)
      .json({ error: 'O painel ainda não foi configurado no Netlify.' });
  }
  const { username, password } = req.body ?? {};
  if (typeof username !== 'string' || typeof password !== 'string') {
    return res.status(400).json({ error: 'Informe o usuário e a senha.' });
  }
  if (await isLockedOut(req, username)) {
    return res.status(429).json({
      error: 'Muitas tentativas seguidas. Tente de novo daqui a 15 minutos.',
    });
  }
  if (!credentialsMatch(username, password)) {
    await recordFailedLogin(req, username);
    return res.status(401).json({ error: 'Usuário ou senha incorretos.' });
  }
  await clearFailedLogins(req, username);
  res.setHeader('Set-Cookie', createSessionCookie(req));
  return res.status(204).end();
}
