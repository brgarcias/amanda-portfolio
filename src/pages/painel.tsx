import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import type { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { ArrowLeft, LogOut } from 'lucide-react';
import { Brand } from '@/components/Brand';
import { Footer } from '@/components/Footer';
import { PanelLogin } from '@/components/PanelLogin';
import { ReviewPanel } from '@/components/ReviewPanel';
import { profile } from '@/data/profile';
import { hasSession } from '@/lib/panel-auth';
import { listReviews, type Review } from '@/lib/reviews';

type PanelProps = {
  year: number;
  signedIn: boolean;
  reviews: Review[] | null;
};

export const getServerSideProps = (async ({ req }) => {
  const year = new Date().getFullYear();
  if (!hasSession(req)) {
    return { props: { year, signedIn: false, reviews: null } };
  }
  try {
    return { props: { year, signedIn: true, reviews: await listReviews() } };
  } catch (error) {
    console.error('Could not load the reviews', error);
    return { props: { year, signedIn: true, reviews: null } };
  }
}) satisfies GetServerSideProps<PanelProps>;

export default function Panel({
  year,
  signedIn,
  reviews,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const router = useRouter();

  async function signOut() {
    await fetch('/api/panel/logout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: '{}',
    });
    await router.replace(router.asPath);
  }

  return (
    <>
      <Head>
        <title>{`Painel de avaliações | ${profile.name}`}</title>
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      <a className="skip-link" href="#conteudo">
        Pular para o conteúdo
      </a>
      <div id="inicio" className="page-shell">
        <header className="site-header">
          <div className="container header-inner">
            <Brand href="/" />
            {signedIn ? (
              <button className="back-link" type="button" onClick={signOut}>
                <LogOut size={18} aria-hidden="true" />
                <span>Sair</span>
              </button>
            ) : (
              <Link className="back-link" href="/">
                <ArrowLeft size={18} aria-hidden="true" />
                <span>Voltar ao portfólio</span>
              </Link>
            )}
          </div>
        </header>
        <main id="conteudo" className="section-pad">
          {signedIn ? <ReviewPanel initialReviews={reviews} /> : <PanelLogin />}
        </main>
        <Footer year={year} />
      </div>
    </>
  );
}
