import { getStore } from '@netlify/blobs';

// Shared with netlify/functions/review-submitted.ts, so this module only uses
// relative imports.

export type Rating = 1 | 2 | 3 | 4 | 5;

/** A review sent through /avaliar, as kept in Netlify Blobs. */
export type Review = {
  id: string;
  status: 'pending' | 'published';
  receivedAt: string;
  rating: Rating;
  name: string;
  role: string | null;
  service: string;
  quote: string;
  email: string;
  consent: boolean;
};

/** The public part of a published review. The email stays in the panel. */
export type Testimonial = Pick<
  Review,
  'id' | 'rating' | 'name' | 'role' | 'service' | 'quote'
> & { date: string };

// Field limits from the review form. Longer values did not come from it.
const limits = { name: 80, role: 100, service: 80, quote: 600, email: 254 };
const months = [
  'Jan.',
  'Fev.',
  'Mar.',
  'Abr.',
  'Mai.',
  'Jun.',
  'Jul.',
  'Ago.',
  'Set.',
  'Out.',
  'Nov.',
  'Dez.',
];

function readText(value: string | undefined, limit: number) {
  // Browsers send textarea line breaks as CRLF but count them as one
  // character against maxlength.
  const text = value?.replace(/\r\n/g, '\n').trim();
  return text && text.length <= limit ? text : null;
}

/** Turns a verified Netlify Forms submission into a pending review. */
export function reviewFromSubmission(
  data: Record<string, string | undefined>,
): Review | null {
  const rating = Number(data.avaliacao);
  const name = readText(data.nome, limits.name);
  const service = readText(data.servico, limits.service);
  const quote = readText(data.depoimento, limits.quote);
  const email = readText(data.email, limits.email);
  if (
    !Number.isInteger(rating) ||
    rating < 1 ||
    rating > 5 ||
    !name ||
    !service ||
    !quote ||
    !email
  ) {
    return null;
  }
  return {
    id: crypto.randomUUID(),
    status: 'pending',
    receivedAt: new Date().toISOString(),
    rating: rating as Rating,
    name,
    role: readText(data.cargo, limits.role),
    service,
    quote,
    email,
    consent: data.consentimento === 'sim',
  };
}

function reviewStore() {
  return getStore({ name: 'reviews', consistency: 'strong' });
}

/** All reviews, newest first. */
export async function listReviews() {
  const store = reviewStore();
  const { blobs } = await store.list();
  const reviews = await Promise.all(
    blobs.map(
      ({ key }) => store.get(key, { type: 'json' }) as Promise<Review | null>,
    ),
  );
  return reviews
    .filter((review): review is Review => review !== null)
    .sort((a, b) => b.receivedAt.localeCompare(a.receivedAt));
}

export async function getReview(id: string) {
  return (await reviewStore().get(id, { type: 'json' })) as Review | null;
}

export async function saveReview(review: Review) {
  await reviewStore().setJSON(review.id, review);
}

export async function deleteReview(id: string) {
  await reviewStore().delete(id);
}

function formatMonth(isoDate: string) {
  const [year, month] = new Intl.DateTimeFormat('en-CA', {
    timeZone: 'America/Sao_Paulo',
    year: 'numeric',
    month: '2-digit',
  })
    .format(new Date(isoDate))
    .split('-');
  return `${months[Number(month) - 1]} ${year}`;
}

function hasBlobsContext() {
  return Boolean(
    (globalThis as { netlifyBlobsContext?: unknown }).netlifyBlobsContext ||
    process.env.NETLIFY_BLOBS_CONTEXT,
  );
}

/**
 * Published reviews for the home page. `next build` and `next dev` do not
 * read Blobs, so a new deploy starts without testimonials and fills them in
 * on the first revalidation.
 */
export async function listTestimonials(): Promise<Testimonial[]> {
  if (
    process.env.NEXT_PHASE === 'phase-production-build' ||
    !hasBlobsContext()
  ) {
    return [];
  }
  const reviews = await listReviews();
  return reviews
    .filter((review) => review.status === 'published' && review.consent)
    .map(({ id, rating, name, role, service, quote, receivedAt }) => ({
      id,
      rating,
      name,
      role,
      service,
      quote,
      date: formatMonth(receivedAt),
    }));
}
