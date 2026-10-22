import Image from 'next/image';
import {
  ArrowDown,
  ArrowUpRight,
  Download,
  MapPin,
  ShieldCheck,
} from 'lucide-react';
import { profile } from '@/data/profile';

export function Hero() {
  return (
    <section className="hero container" aria-labelledby="hero-title">
      <div className="hero-copy">
        <p className="eyebrow hero-eyebrow">
          <span className="status-dot" /> Engenharia com propósito
        </p>
        <h1 id="hero-title">
          Cuidar de pessoas.
          <br />
          Construir um
          <br />
          <span>futuro seguro.</span>
        </h1>
        <p className="hero-description">
          Sou Amanda Assumpção, engenheira de segurança do trabalho e engenheira
          civil. Conecto prevenção, gestão e sustentabilidade para colocar as
          pessoas no centro de cada decisão.
        </p>
        <div className="hero-actions">
          <a className="button button-accent" href="#experiencia">
            Conheça minha trajetória{' '}
            <ArrowUpRight size={18} aria-hidden="true" />
          </a>
          <a className="text-link" href={profile.resume} download>
            Baixar currículo <Download size={17} aria-hidden="true" />
          </a>
        </div>
        <p className="hero-location">
          <span>
            <MapPin size={15} aria-hidden="true" /> {profile.location}
          </span>
          <span>Saúde, segurança & meio ambiente</span>
        </p>
      </div>
      <div className="hero-visual">
        <div className="hero-image">
          <Image
            src="/images/architecture.webp"
            alt="Edifícios vistos de baixo, destacando as linhas e estruturas da arquitetura"
            fill
            sizes="(max-width: 760px) 100vw, 44vw"
            priority
            className="architecture-image"
          />
          <span className="image-index">01 / PERSPECTIVAS QUE TRANSFORMAM</span>
          <div className="engineering-orbit" aria-hidden="true">
            <span />
            <ShieldCheck strokeWidth={1} />
          </div>
          <div className="image-caption">
            <span className="caption-line" />
            <p>
              Um olhar técnico.
              <br />
              <strong>Um compromisso humano.</strong>
            </p>
          </div>
        </div>
        <div className="hero-label">
          <span className="status-dot" /> PREVENÇÃO É O PONTO DE PARTIDA{' '}
          <ArrowUpRight size={16} aria-hidden="true" />
        </div>
        <span className="visual-cross cross-top" aria-hidden="true">
          +
        </span>
        <span className="visual-cross cross-bottom" aria-hidden="true">
          +
        </span>
      </div>
      <a className="scroll-cue" href="#sobre">
        <span>Explore o portfólio</span>
        <ArrowDown size={15} aria-hidden="true" />
      </a>
    </section>
  );
}
