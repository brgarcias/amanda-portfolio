import { ArrowUpRight, Download } from 'lucide-react';
import { profile } from '@/data/profile';

export function Contact() {
  return (
    <section
      id="contato"
      className="contact-section section-pad"
      aria-labelledby="contato-titulo"
    >
      <div className="container contact-layout">
        <div className="contact-intro" data-reveal>
          <p className="eyebrow">
            <span className="eyebrow-index">07</span>Contato
          </p>
          <h2 id="contato-titulo">
            Uma boa conversa
            <br />
            <span>pode ser o começo.</span>
          </h2>
          <p>
            Para falar sobre oportunidades profissionais, trocar experiências ou
            iniciar uma conversa sobre engenharia, segurança do trabalho e ESG.
          </p>
          <div className="contact-actions">
            <a
              className="button button-accent"
              href={profile.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
            >
              Conversar no WhatsApp{' '}
              <ArrowUpRight size={18} aria-hidden="true" />
            </a>
            <a className="button button-outline" href={profile.resume} download>
              <Download size={17} aria-hidden="true" /> Currículo em PDF
            </a>
          </div>
        </div>
        <ul className="contact-list" role="list" data-reveal>
          <li>
            <a className="contact-row" href={`mailto:${profile.email}`}>
              <span className="contact-label">E-mail</span>
              <strong>{profile.email}</strong>
              <ArrowUpRight size={18} aria-hidden="true" />
            </a>
          </li>
          <li>
            <a className="contact-row" href={profile.phoneHref}>
              <span className="contact-label">Telefone</span>
              <strong>{profile.phone}</strong>
              <ArrowUpRight size={18} aria-hidden="true" />
            </a>
          </li>
          <li>
            <a
              className="contact-row"
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="contact-label">LinkedIn</span>
              <strong>Ver perfil profissional</strong>
              <ArrowUpRight size={18} aria-hidden="true" />
            </a>
          </li>
          <li>
            <div className="contact-row">
              <span className="contact-label">Localização</span>
              <strong>{profile.location}</strong>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}
