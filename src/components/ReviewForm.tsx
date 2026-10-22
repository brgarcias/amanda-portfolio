import Link from 'next/link';
import {
  ArrowUpRight,
  CircleCheck,
  ChevronDown,
  Send,
  Star,
} from 'lucide-react';
import { useEffect, useRef, useState, type FormEvent } from 'react';
import { expertise, profile } from '@/data/profile';

// Must match the hidden form in public/__forms.html, which Netlify reads
// at deploy time to accept submissions.
const formName = 'avaliacoes';
const quoteLimit = 600;
const ratings = [1, 2, 3, 4, 5] as const;
const services = [...expertise.map((item) => item.title), 'Outro serviço'];

type Status = 'idle' | 'sending' | 'sent' | 'error';

export function ReviewForm() {
  const [status, setStatus] = useState<Status>('idle');
  const [quoteLength, setQuoteLength] = useState(0);
  const sentHeadingRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (status === 'sent') sentHeadingRef.current?.focus();
  }, [status]);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    setStatus('sending');
    try {
      const response = await fetch('/__forms.html', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(
          [...data].map(([key, value]) => [key, String(value)]),
        ).toString(),
      });
      setStatus(response.ok ? 'sent' : 'error');
    } catch {
      setStatus('error');
    }
  }

  if (status === 'sent') {
    return (
      <div className="review-sent" role="status">
        <CircleCheck size={34} strokeWidth={1.4} aria-hidden="true" />
        <h2 ref={sentHeadingRef} tabIndex={-1}>
          Obrigada pela avaliação!
        </h2>
        <p>
          Seu depoimento foi enviado e aparece no portfólio depois de revisado.
        </p>
        <Link className="button button-accent" href="/">
          Voltar ao portfólio <ArrowUpRight size={18} aria-hidden="true" />
        </Link>
      </div>
    );
  }

  return (
    <form className="review-form" name={formName} onSubmit={handleSubmit}>
      <input type="hidden" name="form-name" value={formName} />
      <p hidden>
        <label>
          Não preencha este campo: <input name="bot-field" />
        </label>
      </p>
      <fieldset className="form-field">
        <legend>Avaliação geral</legend>
        <div className="rating">
          {ratings.map((value) => (
            <label key={value}>
              <input
                className="visually-hidden"
                type="radio"
                name="avaliacao"
                value={value}
                required
              />
              <Star aria-hidden="true" />
              <span className="visually-hidden">
                {value} {value === 1 ? 'estrela' : 'estrelas'}
              </span>
            </label>
          ))}
        </div>
      </fieldset>
      <div className="form-row">
        <div className="form-field">
          <label htmlFor="review-name">Nome</label>
          <input
            id="review-name"
            name="nome"
            autoComplete="name"
            maxLength={80}
            required
          />
        </div>
        <div className="form-field">
          <label htmlFor="review-role">
            Cargo e empresa <span className="form-optional">(opcional)</span>
          </label>
          <input
            id="review-role"
            name="cargo"
            autoComplete="organization-title"
            maxLength={100}
          />
        </div>
      </div>
      <div className="form-field">
        <label htmlFor="review-service">Serviço prestado</label>
        <div className="select-wrapper">
          <select id="review-service" name="servico" required defaultValue="">
            <option value="" disabled>
              Selecione uma área
            </option>
            {services.map((service) => (
              <option key={service}>{service}</option>
            ))}
          </select>
          <ChevronDown size={18} aria-hidden="true" />
        </div>
      </div>
      <div className="form-field">
        <label htmlFor="review-quote">Depoimento</label>
        <textarea
          id="review-quote"
          name="depoimento"
          maxLength={quoteLimit}
          required
          aria-describedby="review-quote-hint"
          onChange={(event) => setQuoteLength(event.target.value.length)}
        />
        <p id="review-quote-hint" className="form-hint">
          Conte como foi o serviço e o resultado para você. {quoteLength} de{' '}
          {quoteLimit} caracteres.
        </p>
      </div>
      <div className="form-field">
        <label htmlFor="review-email">E-mail</label>
        <input
          id="review-email"
          name="email"
          type="email"
          autoComplete="email"
          required
          aria-describedby="review-email-hint"
        />
        <p id="review-email-hint" className="form-hint">
          Não é publicado. Serve apenas para confirmar o depoimento, se
          necessário.
        </p>
      </div>
      <div className="consent-field">
        <input
          id="review-consent"
          name="consentimento"
          type="checkbox"
          value="sim"
          required
          aria-describedby="review-consent-hint"
        />
        <label htmlFor="review-consent">
          Autorizo a publicação do meu nome, cargo, avaliação e depoimento neste
          portfólio.
        </label>
      </div>
      <p id="review-consent-hint" className="form-hint">
        Você pode pedir a remoção a qualquer momento pelo e-mail{' '}
        <a href={`mailto:${profile.email}`}>{profile.email}</a>.
      </p>
      {status === 'error' && (
        <p className="form-error" role="alert">
          Não foi possível enviar agora. Tente de novo em instantes ou escreva
          para <a href={`mailto:${profile.email}`}>{profile.email}</a>.
        </p>
      )}
      <button
        className="button button-accent"
        type="submit"
        disabled={status === 'sending'}
      >
        {status === 'sending' ? 'Enviando…' : 'Enviar avaliação'}
        <Send size={17} aria-hidden="true" />
      </button>
    </form>
  );
}
