import { useRouter } from 'next/router';
import { useState, type FormEvent } from 'react';
import { LogIn } from 'lucide-react';

export function PanelLogin() {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);
  const [sending, setSending] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    setSending(true);
    setError(null);
    try {
      const response = await fetch('/api/panel/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          username: data.get('username'),
          password: data.get('password'),
        }),
      });
      if (response.ok) {
        await router.replace(router.asPath);
        return;
      }
      const body = await response.json().catch(() => ({}));
      setError(body.error ?? 'Não foi possível entrar agora. Tente de novo.');
    } catch {
      setError(
        'Não foi possível entrar agora. Confira a conexão e tente de novo.',
      );
    } finally {
      setSending(false);
    }
  }

  return (
    <div className="container review-layout">
      <div className="review-intro">
        <p className="eyebrow">
          <span className="status-dot" /> Área restrita
        </p>
        <h1>
          Painel de <br />
          <span>avaliações</span>
        </h1>
        <p>
          Entre para revisar os depoimentos recebidos e escolher quais aparecem
          no portfólio.
        </p>
      </div>
      <form className="review-form panel-login" onSubmit={handleSubmit}>
        <div className="form-field">
          <label htmlFor="panel-username">Usuário</label>
          <input
            id="panel-username"
            name="username"
            autoComplete="username"
            autoCapitalize="none"
            spellCheck={false}
            required
          />
        </div>
        <div className="form-field">
          <label htmlFor="panel-password">Senha</label>
          <input
            id="panel-password"
            name="password"
            type="password"
            autoComplete="current-password"
            required
          />
        </div>
        {error && (
          <p className="form-error" role="alert">
            {error}
          </p>
        )}
        <button
          className="button button-accent"
          type="submit"
          disabled={sending}
        >
          {sending ? 'Entrando…' : 'Entrar'}
          <LogIn size={17} aria-hidden="true" />
        </button>
      </form>
    </div>
  );
}
