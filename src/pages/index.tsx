import Head from 'next/head';
import type { GetStaticProps, InferGetStaticPropsType } from 'next';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Expertise } from '@/components/Expertise';
import { Practice } from '@/components/Practice';
import { Experience } from '@/components/Experience';
import { Education } from '@/components/Education';
import { Testimonials } from '@/components/Testimonials';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';
import { education, experience, profile, site } from '@/data/profile';
import { currentMonth } from '@/lib/dates';
import { listTestimonials, type Testimonial } from '@/lib/reviews';
import { useReveal } from '@/lib/use-reveal';

type HomeProps = { year: number; today: string; testimonials: Testimonial[] };

// The panel rebuilds this page when a review changes. The short interval
// also brings published reviews back soon after a deploy, and keeps the
// duration of the current role up to date.
export const getStaticProps = (async () => ({
  props: {
    year: new Date().getFullYear(),
    today: currentMonth(),
    testimonials: await listTestimonials(),
  },
  revalidate: 60,
})) satisfies GetStaticProps<HomeProps>;

const currentRole = experience.find((item) => item.current);

export default function Home({
  year,
  today,
  testimonials,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  useReveal();
  const title = `${profile.name} — Engenharia de Segurança do Trabalho e Engenharia Civil`;
  const description =
    'Amanda Assumpção é engenheira de segurança do trabalho e engenheira civil em São Paulo, especialista de segurança do trabalho na Brink’s. Experiência em SSMA, gestão de riscos, documentação legal, indicadores e sustentabilidade.';
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
    worksFor: currentRole && {
      '@type': 'Organization',
      name: currentRole.company,
    },
    alumniOf: education.map((item) => ({
      '@type': 'EducationalOrganization',
      name: item.institution,
    })),
    knowsAbout: [
      'Segurança do trabalho',
      'Engenharia civil',
      'SSMA',
      'Gestão de riscos',
      'Sustentabilidade',
      'ESG',
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
          content={`${profile.name}, ${profile.title.toLowerCase()} e ${profile.secondaryTitle.toLowerCase()}, em um retrato emoldurado sobre uma prancha de desenho`}
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={`${site.url}${site.shareImage}`} />
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
          <Practice />
          <Experience today={today} />
          <Education />
          <Testimonials testimonials={testimonials} />
          <Contact />
        </main>
        <Footer year={year} />
      </div>
    </>
  );
}
