import { ArrowUpRight, Download, Menu, X } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { Brand } from '@/components/Brand';
import { navigation, profile } from '@/data/profile';

// The sections the bar can highlight, plus the first screen, which clears it.
const sectionIds = [
  'apresentacao',
  ...navigation.map((item) => item.href.slice(1)),
  'contato',
];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string | null>(null);
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

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Highlights the section crossing the middle of the screen. Browsers
  // without IntersectionObserver simply get no highlight.
  useEffect(() => {
    if (!('IntersectionObserver' in window)) return;
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((element): element is HTMLElement => element !== null);
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const { id } = entry.target;
          setActive(id === 'apresentacao' ? null : id);
        }
      },
      { rootMargin: '-45% 0px -50% 0px' },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const closeMenu = () => setMenuOpen(false);
  const headerClass = [
    'site-header',
    scrolled && 'is-scrolled',
    menuOpen && 'is-menu-open',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <header className={headerClass}>
      <div className="container header-inner">
        <Brand href="#inicio" onClick={closeMenu} />
        <nav
          id="main-navigation"
          aria-label="Navegação principal"
          className={`main-navigation ${menuOpen ? 'is-open' : ''}`}
        >
          <ul className="nav-list">
            {navigation.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="nav-link"
                  aria-current={
                    active === item.href.slice(1) ? 'location' : undefined
                  }
                  onClick={closeMenu}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="nav-actions">
            <a
              className="button button-ghost header-resume"
              href={profile.resume}
              download
              onClick={closeMenu}
            >
              <Download size={16} aria-hidden="true" /> Currículo
            </a>
            <a
              href="#contato"
              className="button button-dark header-contact"
              onClick={closeMenu}
            >
              Vamos conversar <ArrowUpRight size={16} aria-hidden="true" />
            </a>
          </div>
        </nav>
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
      </div>
    </header>
  );
}
