import { ArrowUp } from 'lucide-react';
import { SocialLinks } from '@/components/SocialLinks';
import { profile } from '@/data/profile';

export function Footer({ year }: { year: number }) {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <strong>{profile.name}</strong>
          <p>
            {profile.title} e {profile.secondaryTitle.toLowerCase()}
          </p>
        </div>
        <SocialLinks className="footer-social" />
        <span className="copyright">
          © {year} {profile.name}
        </span>
        <a href="#inicio" className="back-to-top" aria-label="Voltar ao início">
          <ArrowUp size={18} aria-hidden="true" />
        </a>
      </div>
    </footer>
  );
}
