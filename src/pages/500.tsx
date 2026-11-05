import Head from 'next/head';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

export default function ServerError() {
  return (
    <>
      <Head>
        <title>Erro no servidor | Amanda Assumpção</title>
        <meta name="robots" content="noindex" />
      </Head>
      <main className="not-found container">
        <div className="hero-backdrop" aria-hidden="true" />
        <p className="eyebrow">Erro 500</p>
        <h1>
          Algo saiu do
          <br />
          esperado por aqui.
        </h1>
        <p>
          O servidor não conseguiu responder agora. Tente de novo em instantes.
        </p>
        <Link className="button button-accent" href="/">
          Voltar ao portfólio <ArrowUpRight size={18} aria-hidden="true" />
        </Link>
      </main>
    </>
  );
}
