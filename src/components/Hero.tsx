import Image from 'next/image';
import type { CSSProperties } from 'react';
import { ArrowDown, ArrowUpRight, Download } from 'lucide-react';
import { SocialLinks } from '@/components/SocialLinks';
import { disciplines, experience, profile } from '@/data/profile';

// The leader of each discipline, like the callouts of a technical drawing:
// from under its label to a dot on the portrait, in the visual's own grid of
// 500 × 600 units. The label covers the first stretch of the line.
const leaders = [
  { path: 'M100 24V118H150', dot: [150, 118] },
  { path: 'M420 150V190H366', dot: [366, 190] },
  { path: 'M60 380H130V340', dot: [130, 340] },
  { path: 'M430 470H372V432', dot: [372, 432] },
] as const;

const currentRole = experience.find((item) => item.current);
const companies = [...new Set(experience.map((item) => item.companyShort))];

export function Hero() {
  return (
    <section id="apresentacao" className="hero" aria-labelledby="hero-title">
      <div className="hero-backdrop" aria-hidden="true" />
      <div className="container hero-inner">
        <div className="hero-copy">
          {currentRole && (
            <p className="hero-status">
              <span className="status-dot" aria-hidden="true" />
              {currentRole.role} na {currentRole.companyShort}
            </p>
          )}
          <p className="hero-name">{profile.name}</p>
          <h1 id="hero-title">
            <span className="hero-title-line">Segurança do trabalho</span>{' '}
            <span className="hero-title-line hero-title-accent">
              com rigor de engenharia.
            </span>
          </h1>
          <p className="hero-description">
            Engenheira civil e engenheira de segurança do trabalho. Na Brink’s,
            cuido de procedimentos, indicadores e investigações de SSMA, da
            documentação legal ao acompanhamento das atividades de risco em
            campo.
          </p>
          <div className="hero-actions">
            <a className="button button-accent" href="#experiencia">
              Ver trajetória <ArrowUpRight size={18} aria-hidden="true" />
            </a>
            <a className="button button-ghost" href={profile.resume} download>
              <Download size={17} aria-hidden="true" /> Baixar currículo
            </a>
          </div>
          <div className="hero-links">
            <SocialLinks />
            <span className="hero-location">{profile.location}</span>
          </div>
        </div>
        <div className="hero-visual">
          <figure className="hero-figure">
            <div className="hero-frame">
              <Image
                src={profile.photo}
                alt="Amanda Assumpção sorrindo, de blusa escura, diante de um painel de folhagens"
                fill
                sizes="(max-width: 760px) 84vw, 380px"
                loading="eager"
                fetchPriority="high"
                className="hero-photo"
              />
              <span className="frame-mark is-top-left" aria-hidden="true" />
              <span className="frame-mark is-top-right" aria-hidden="true" />
              <span className="frame-mark is-bottom-left" aria-hidden="true" />
              <span className="frame-mark is-bottom-right" aria-hidden="true" />
            </div>
            <figcaption className="hero-caption">
              <span>Fig. 01</span>
              <span>
                {profile.name} · {profile.title}
              </span>
            </figcaption>
          </figure>
          <svg
            className="hero-leaders"
            viewBox="0 0 500 600"
            aria-hidden="true"
            focusable="false"
          >
            {leaders.map(({ path, dot }, index) => (
              <g key={path} style={{ '--i': index } as CSSProperties}>
                <path d={path} pathLength={1} />
                <circle cx={dot[0]} cy={dot[1]} r={4} />
              </g>
            ))}
          </svg>
          <ul className="hero-callouts" aria-hidden="true">
            {disciplines.map((name, index) => (
              <li
                key={name}
                className="hero-callout"
                style={{ '--i': index } as CSSProperties}
              >
                {name}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="container hero-proof">
        <span className="hero-proof-label">Onde já atuei</span>
        <ul className="hero-companies">
          {companies.map((company) => (
            <li key={company}>{company}</li>
          ))}
        </ul>
        <a className="scroll-cue" href="#sobre">
          Explorar <ArrowDown size={14} aria-hidden="true" />
        </a>
      </div>
    </section>
  );
}
