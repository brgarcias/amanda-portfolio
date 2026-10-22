import Link from 'next/link';
import {
  ArrowUpRight,
  BriefcaseBusiness,
  Download,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Star,
} from 'lucide-react';
import { profile } from '@/data/profile';

export function Contact({ number }: { number: string }) {
  return (
    <section id="contato" className="contact-section section-pad">
      <div className="container contact-layout">
        <div className="contact-intro">
          <p className="eyebrow">
            <span>{number}</span> Vamos conversar
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
              <span>E-mail</span>
              <strong>{profile.email}</strong>
            </span>
            <ArrowUpRight size={19} aria-hidden="true" />
          </a>
          <a className="contact-row" href={profile.phoneHref}>
            <Phone size={21} aria-hidden="true" />
            <span>
              <span>Telefone</span>
              <strong>{profile.phone}</strong>
            </span>
            <ArrowUpRight size={19} aria-hidden="true" />
          </a>
          <a
            className="contact-row"
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            <BriefcaseBusiness size={21} aria-hidden="true" />
            <span>
              <span>LinkedIn</span>
              <strong>Ver perfil profissional</strong>
            </span>
            <ArrowUpRight size={19} aria-hidden="true" />
          </a>
          <div className="contact-row">
            <MapPin size={21} aria-hidden="true" />
            <span>
              <span>Localização</span>
              <strong>{profile.location}</strong>
            </span>
          </div>
          <a className="contact-link" href={profile.resume} download>
            <Download size={18} aria-hidden="true" /> Baixar currículo em PDF{' '}
            <ArrowUpRight size={17} aria-hidden="true" />
          </a>
          <Link className="contact-link" href="/avaliar">
            <Star size={18} aria-hidden="true" /> Avaliar um serviço prestado{' '}
            <ArrowUpRight size={17} aria-hidden="true" />
          </Link>
          <p className="contact-note">
            <MessageCircle size={15} aria-hidden="true" /> Uma boa conversa pode
            ser o começo.
          </p>
        </div>
      </div>
    </section>
  );
}
