import { ArrowUp } from 'lucide-react';
import { profile } from '@/data/profile';

export function Footer({ year }: { year: number }) {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div>
          <strong>
            {profile.name}
            <span className="footer-dot">.</span>
          </strong>
          <p>Engenharia com propósito. Segurança com cuidado.</p>
        </div>
        <span className="copyright">
          © {year} {profile.name}
        </span>
        <a href="#inicio" className="back-to-top" aria-label="Voltar ao início">
          <ArrowUp size={19} aria-hidden="true" />
        </a>
      </div>
    </footer>
  );
}
