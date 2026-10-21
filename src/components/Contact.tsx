import {
  ArrowUpRight,
  Download,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
} from 'lucide-react';
import { profile } from '@/data/profile';

export function Contact() {
  return (
    <section id="contato" className="contact-section section-pad">
      <div className="container contact-layout">
        <div className="contact-intro">
          <p className="eyebrow">
            <span>05</span> Vamos conversar
          </p>
          <h2>
            Boas conexões.
            <br />
            <span>Novas possibilidades.</span>
          </h2>
          <p>
            Para falar sobre oportunidades profissionais, trocar experiências ou
            iniciar uma conversa sobre engenharia e segurança do trabalho.
          </p>
          <a
            className="button button-accent"
            href={profile.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
          >
            Conversar no WhatsApp <ArrowUpRight size={19} aria-hidden="true" />
          </a>
        </div>
        <div className="contact-details">
          <a className="contact-row" href={`mailto:${profile.email}`}>
            <Mail size={21} aria-hidden="true" />
            <span>
              <span>E-MAIL</span>
              <strong>{profile.email}</strong>
            </span>
            <ArrowUpRight size={19} aria-hidden="true" />
          </a>
          <a className="contact-row" href={profile.phoneHref}>
            <Phone size={21} aria-hidden="true" />
            <span>
              <span>TELEFONE</span>
              <strong>{profile.phone}</strong>
            </span>
            <ArrowUpRight size={19} aria-hidden="true" />
          </a>
          <div className="contact-row">
            <MapPin size={21} aria-hidden="true" />
            <span>
              <span>LOCALIZAÇÃO</span>
              <strong>{profile.location}</strong>
            </span>
          </div>
          <a className="contact-resume" href={profile.resume} download>
            <Download size={18} aria-hidden="true" /> Baixar currículo em PDF{' '}
            <ArrowUpRight size={17} aria-hidden="true" />
          </a>
          <p className="contact-note">
            <MessageCircle size={15} aria-hidden="true" /> Uma boa conversa pode
            ser o começo.
          </p>
        </div>
      </div>
    </section>
  );
}
