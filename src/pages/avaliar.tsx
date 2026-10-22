import Head from 'next/head';
import Link from 'next/link';
import type { GetStaticProps, InferGetStaticPropsType } from 'next';
import { ArrowLeft } from 'lucide-react';
import { Brand } from '@/components/Brand';
import { Footer } from '@/components/Footer';
import { ReviewForm } from '@/components/ReviewForm';
import { profile } from '@/data/profile';

export const getStaticProps = (() => ({
  props: { year: new Date().getFullYear() },
  revalidate: 86400,
})) satisfies GetStaticProps<{ year: number }>;

export default function Review({
  year,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Head>
        <title>{`Avaliar um serviço | ${profile.name}`}</title>
        <meta
          name="description"
          content={`Conte como foi o serviço prestado por ${profile.name}.`}
        />
        <meta name="robots" content="noindex" />
      </Head>
      <a className="skip-link" href="#conteudo">
        Pular para o conteúdo
      </a>
      <div id="inicio" className="page-shell">
        <header className="site-header">
          <div className="container header-inner">
            <Brand href="/" />
            <Link className="back-link" href="/">
              <ArrowLeft size={18} aria-hidden="true" />
              <span>Voltar ao portfólio</span>
            </Link>
          </div>
        </header>
        <main id="conteudo" className="review-page section-pad">
          <div className="container review-layout">
            <div className="review-intro">
              <p className="eyebrow">
                <span className="status-dot" /> Avaliação
              </p>
              <h1>
                Como foi trabalhar
                <br />
                <span>comigo?</span>
              </h1>
              <p>
                Sua opinião ajuda outras pessoas e empresas a conhecerem meu
                trabalho. Conte como foi o serviço que prestei para você.
              </p>
              <p className="review-note">
                Os depoimentos aparecem no portfólio depois de revisados. Seu
                e-mail nunca é publicado.
              </p>
            </div>
            <ReviewForm />
          </div>
        </main>
        <Footer year={year} />
      </div>
    </>
  );
}
