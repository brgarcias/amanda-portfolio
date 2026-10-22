import type { NextApiRequest, NextApiResponse } from 'next';
import { clearSessionCookie, isSameOriginJson } from '@/lib/panel-auth';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.setHeader('Cache-Control', 'no-store');
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).end();
  }
  if (!isSameOriginJson(req)) {
    return res.status(403).json({ error: 'Pedido não permitido.' });
  }
  res.setHeader('Set-Cookie', clearSessionCookie(req));
  return res.status(204).end();
}
