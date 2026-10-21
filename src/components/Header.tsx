import Image from 'next/image';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { navigation, profile } from '@/data/profile';

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!menuOpen) return;
    const onEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMenuOpen(false);
        toggleRef.current?.focus();
      }
    };
    document.addEventListener('keydown', onEscape);
    return () => document.removeEventListener('keydown', onEscape);
  }, [menuOpen]);

  return (
    <header className="site-header">
      <div className="container header-inner">
        <a
          className="brand"
          href="#inicio"
          aria-label={`${profile.name} — início`}
          onClick={() => setMenuOpen(false)}
        >
          <Image
            src="/assets/images/logo/amanda-portfolio-logo-transparency.webp"
            alt=""
            width={48}
            height={48}
            priority
          />
          <span>
            <strong>{profile.name}</strong>
            <span>ENGENHARIA & SEGURANÇA</span>
          </span>
        </a>
        <button
          className="menu-toggle"
          type="button"
          ref={toggleRef}
          aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={menuOpen}
          aria-controls="main-navigation"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
        <nav
          id="main-navigation"
          aria-label="Navegação principal"
          className={`main-navigation ${menuOpen ? 'is-open' : ''}`}
        >
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contato"
            className="button button-dark header-contact"
            onClick={() => setMenuOpen(false)}
          >
            Vamos conversar <ArrowUpRight size={17} aria-hidden="true" />
          </a>
        </nav>
      </div>
    </header>
  );
}
