import type { NextApiRequest, NextApiResponse } from 'next';
import { hasSession, isSameOriginJson } from '@/lib/panel-auth';
import {
  deleteReview,
  getReview,
  listReviews,
  saveReview,
} from '@/lib/reviews';

const actions = ['publish', 'unpublish', 'delete'] as const;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  res.setHeader('Cache-Control', 'no-store');
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).end();
  }
  if (!hasSession(req)) {
    return res
      .status(401)
      .json({ error: 'Sua sessão terminou. Entre de novo para continuar.' });
  }
  if (!isSameOriginJson(req)) {
    return res.status(403).json({ error: 'Pedido não permitido.' });
  }
  const { id, action } = req.body ?? {};
  if (typeof id !== 'string' || !actions.includes(action)) {
    return res.status(400).json({ error: 'Pedido inválido.' });
  }
  const review = await getReview(id);
  if (!review) {
    return res
      .status(404)
      .json({ error: 'Essa avaliação não existe mais. Atualize a página.' });
  }
  if (action === 'publish' && !review.consent) {
    return res.status(409).json({
      error: 'Quem avaliou não autorizou a publicação deste depoimento.',
    });
  }

  if (action === 'delete') {
    await deleteReview(id);
  } else {
    await saveReview({
      ...review,
      status: action === 'publish' ? 'published' : 'pending',
    });
  }
  // Rebuild the home page now, so the change shows right away.
  let refreshed = true;
  try {
    await res.revalidate('/');
  } catch (error) {
    console.error('Could not revalidate the home page', error);
    refreshed = false;
  }
  return res.status(200).json({ reviews: await listReviews(), refreshed });
}
