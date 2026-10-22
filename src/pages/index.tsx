import Head from 'next/head';
import type { GetStaticProps, InferGetStaticPropsType } from 'next';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Expertise } from '@/components/Expertise';
import { Experience } from '@/components/Experience';
import { Education } from '@/components/Education';
import { Testimonials } from '@/components/Testimonials';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';
import { profile, site } from '@/data/profile';

export const getStaticProps = (() => ({
  props: { year: new Date().getFullYear() },
  revalidate: 86400,
})) satisfies GetStaticProps<{ year: number }>;

export default function Home({
  year,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const title = `${profile.name} | Engenharia de Segurança do Trabalho`;
  const description =
    'Conheça a trajetória de Amanda Assumpção, engenheira de segurança do trabalho e engenheira civil em São Paulo. Experiência em SSMA, gestão de riscos, indicadores e sustentabilidade.';
  const pageUrl = `${site.url}/`;
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: profile.fullName,
    jobTitle: profile.title,
    description,
    url: pageUrl,
    image: `${site.url}${profile.photo}`,
    sameAs: [profile.linkedin],
    email: profile.email,
    telephone: profile.phoneE164,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'São Paulo',
      addressRegion: 'SP',
      addressCountry: 'BR',
    },
    knowsAbout: [
      'Segurança do trabalho',
      'Engenharia civil',
      'SSMA',
      'Gestão de riscos',
      'Sustentabilidade',
    ],
  };

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href={pageUrl} />
        <meta
          name="google-site-verification"
          content={site.googleSiteVerification}
        />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="profile" />
        <meta property="og:locale" content="pt_BR" />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:site_name" content={profile.name} />
        <meta property="og:image" content={`${site.url}${site.shareImage}`} />
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta
          property="og:image:alt"
          content={`${profile.name}, ${profile.title.toLowerCase()}`}
        />
        <meta name="twitter:card" content="summary_large_image" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData).replace(/</g, '\\u003c'),
          }}
        />
      </Head>
      <a className="skip-link" href="#conteudo">
        Pular para o conteúdo
      </a>
      <div id="inicio">
        <Header />
        <main id="conteudo">
          <Hero />
          <About />
          <Expertise />
          <Experience />
          <Education />
          <Testimonials />
          <Contact />
        </main>
        <Footer year={year} />
      </div>
    </>
  );
}
