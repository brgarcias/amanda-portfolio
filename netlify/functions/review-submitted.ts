import { reviewFromSubmission, saveReview } from '../../src/lib/reviews';

type FormSubmittedEvent = { data: Record<string, string | undefined> };

// Netlify runs this for every submission that passes its spam filter, and
// signs the call, so it cannot be triggered from outside. Submissions to other
// forms lack the review fields and are ignored.
// Netlify's docs declare event handlers as an object literal default export.
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  async formSubmitted(event: FormSubmittedEvent) {
    const review = reviewFromSubmission(event.data);
    if (review) await saveReview(review);
  },
};
