import { useRouter } from 'next/router';
import { useState } from 'react';
import { Check, EyeOff, Star, Trash2 } from 'lucide-react';
import type { Review } from '@/lib/reviews';

type Action = 'publish' | 'unpublish' | 'delete';

const stars = [1, 2, 3, 4, 5] as const;
const doneMessages: Record<Action, string> = {
  publish: 'Avaliação publicada.',
  unpublish: 'Avaliação retirada do portfólio.',
  delete: 'Avaliação excluída.',
};
const receivedDate = new Intl.DateTimeFormat('pt-BR', {
  dateStyle: 'short',
  timeZone: 'America/Sao_Paulo',
});

type CardProps = {
  review: Review;
  busy: boolean;
  onAction: (review: Review, action: Action) => void;
};

function ReviewCard({ review, busy, onAction }: CardProps) {
  const reviewOf = (
    <span className="visually-hidden">: avaliação de {review.name}</span>
  );

  return (
    <article className="panel-card">
      <div className="panel-card-top">
        <p
          className="testimonial-rating"
          role="img"
          aria-label={`Avaliação: ${review.rating} de 5`}
        >
          {stars.map((value) => (
            <Star
              key={value}
              aria-hidden="true"
              className={value <= review.rating ? 'is-filled' : undefined}
            />
          ))}
        </p>
        <p className="panel-card-date">
          Recebida em {receivedDate.format(new Date(review.receivedAt))}
        </p>
      </div>
      <blockquote>
        <p>{review.quote}</p>
      </blockquote>
      <dl className="panel-card-details">
        <div>
          <dt>Nome</dt>
          <dd>{review.name}</dd>
        </div>
        <div>
          <dt>Cargo e empresa</dt>
          <dd>{review.role ?? 'Não informado'}</dd>
        </div>
        <div>
          <dt>Serviço</dt>
          <dd>{review.service}</dd>
        </div>
        <div>
          <dt>E-mail</dt>
          <dd>
            <a href={`mailto:${review.email}`}>{review.email}</a>
          </dd>
        </div>
      </dl>
      {!review.consent && (
        <p className="form-error">
          Quem avaliou não autorizou a publicação deste depoimento.
        </p>
      )}
      <div className="panel-card-actions">
        {review.status === 'pending' ? (
          <button
            className="button button-accent"
            type="button"
            disabled={busy || !review.consent}
            onClick={() => onAction(review, 'publish')}
          >
            <span>Publicar no portfólio{reviewOf}</span>
            <Check size={17} aria-hidden="true" />
          </button>
        ) : (
          <button
            className="button button-dark"
            type="button"
            disabled={busy}
            onClick={() => onAction(review, 'unpublish')}
          >
            <span>Retirar do portfólio{reviewOf}</span>
            <EyeOff size={17} aria-hidden="true" />
          </button>
        )}
        <button
          className="panel-delete"
          type="button"
          disabled={busy}
          onClick={() => onAction(review, 'delete')}
        >
          <Trash2 size={16} aria-hidden="true" />
          <span>Excluir{reviewOf}</span>
        </button>
      </div>
    </article>
  );
}

type GroupProps = {
  id: string;
  title: string;
  empty: string;
  reviews: Review[];
  busyId: string | null;
  onAction: CardProps['onAction'];
};

function ReviewGroup({
  id,
  title,
  empty,
  reviews,
  busyId,
  onAction,
}: GroupProps) {
  return (
    <section className="panel-group" aria-labelledby={id}>
      <h2 id={id}>
        {title} <span className="panel-count">({reviews.length})</span>
      </h2>
      {reviews.length > 0 ? (
        <ul className="panel-list">
          {reviews.map((review) => (
            <li key={review.id}>
              <ReviewCard
                review={review}
                busy={busyId === review.id}
                onAction={onAction}
              />
            </li>
          ))}
        </ul>
      ) : (
        <p className="panel-empty">{empty}</p>
      )}
    </section>
  );
}

export function ReviewPanel({
  initialReviews,
}: {
  initialReviews: Review[] | null;
}) {
  const router = useRouter();
  const [reviews, setReviews] = useState(initialReviews);
  const [busyId, setBusyId] = useState<string | null>(null);
  const [message, setMessage] = useState('');
  const [error, setError] = useState<string | null>(null);

  async function handleAction(review: Review, action: Action) {
    if (
      action === 'delete' &&
      !window.confirm(
        `Excluir a avaliação de ${review.name}? Essa ação não pode ser desfeita.`,
      )
    ) {
      return;
    }
    setBusyId(review.id);
    setMessage('');
    setError(null);
    try {
      const response = await fetch('/api/panel/reviews', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id: review.id, action }),
      });
      if (response.status === 401) {
        await router.replace(router.asPath);
        return;
      }
      const body = await response.json().catch(() => ({}));
      if (!response.ok) {
        setError(body.error ?? 'Não foi possível concluir. Tente de novo.');
        return;
      }
      setReviews(body.reviews);
      setMessage(
        `${doneMessages[action]} ${
          body.refreshed
            ? 'O portfólio já mostra a mudança.'
            : 'O portfólio mostra a mudança em até um minuto.'
        }`,
      );
    } catch {
      setError('Não foi possível concluir. Confira a conexão e tente de novo.');
    } finally {
      setBusyId(null);
    }
  }

  return (
    <div className="container">
      <div className="panel-intro">
        <p className="eyebrow">
          <span className="status-dot" /> Painel
        </p>
        <h1>Avaliações recebidas</h1>
        <p>
          Revise cada depoimento antes de publicar. O e-mail de quem avaliou
          aparece só aqui, nunca no portfólio.
        </p>
      </div>
      <div role="status">
        {message && <p className="panel-message">{message}</p>}
      </div>
      {error && (
        <p className="form-error panel-message" role="alert">
          {error}
        </p>
      )}
      {reviews ? (
        <>
          <ReviewGroup
            id="pendentes"
            title="Aguardando revisão"
            empty="Nenhuma avaliação aguardando revisão."
            reviews={reviews.filter((review) => review.status === 'pending')}
            busyId={busyId}
            onAction={handleAction}
          />
          <ReviewGroup
            id="publicadas"
            title="Publicadas no portfólio"
            empty="Nenhuma avaliação publicada ainda."
            reviews={reviews.filter((review) => review.status === 'published')}
            busyId={busyId}
            onAction={handleAction}
          />
        </>
      ) : (
        <p className="form-error" role="alert">
          Não foi possível carregar as avaliações agora. Atualize a página em
          instantes.
        </p>
      )}
      <p className="form-hint panel-note">
        Cada avaliação também fica guardada no Netlify, em Forms. Para atender a
        um pedido de remoção, exclua a avaliação aqui e lá.
      </p>
    </div>
  );
}
