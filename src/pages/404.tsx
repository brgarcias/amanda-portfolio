import Head from 'next/head';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

export default function NotFound() {
  return (
    <>
      <Head>
        <title>Página não encontrada | Amanda Assumpção</title>
        <meta name="robots" content="noindex" />
      </Head>
      <main className="not-found container">
        <p className="eyebrow">Erro 404</p>
        <h1>
          Vamos encontrar
          <br />
          um novo caminho.
        </h1>
        <p>A página que você procura não está disponível.</p>
        <Link className="button button-accent" href="/">
          Voltar ao portfólio <ArrowUpRight size={18} aria-hidden="true" />
        </Link>
      </main>
    </>
  );
}
