import { Languages, Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { t, i18n } = useTranslation();

  const isArabic = i18n.language.startsWith('ar');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll(); // handle page reloaded mid-scroll
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const changeLanguage = () => {
    const nextLanguage = isArabic ? 'en' : 'ar';
    i18n.changeLanguage(nextLanguage);
    document.documentElement.lang = nextLanguage;
    document.documentElement.dir = nextLanguage === 'ar' ? 'rtl' : 'ltr';
    setMenuOpen(false);
  };

  const navLinks = {
    home: '#home',
    about: '#about',
    experience: '#experience',
    skills: '#skills',
    projects: '#projects',
  };

  return (
    <>
      <header
        dir={isArabic ? 'rtl' : 'ltr'}
        className={`fixed inset-x-0 top-0 z-50 transition-[padding] duration-300 ease-out ${scrolled ? 'px-4 pt-3' : 'px-0 pt-0'
          }`}
      >
        <nav
          className={`relative mx-auto flex items-center justify-between font-heading transition-all duration-300 ease-out ${scrolled
            ? 'h-14 max-w-4xl rounded-full border border-white/10 bg-bg/70 px-5 shadow-lg backdrop-blur-md'
            : 'h-16 max-w-full border border-transparent bg-transparent px-5 md:px-8'
            }`}
        >
          {/* Logo */}
          <h1
            className={`shrink-0 font-semibold transition-all duration-300 ${scrolled ? 'text-lg' : 'text-xl'
              }`}
          >
            FR .
          </h1>

          {/* Desktop Navigation */}
          <ul className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-5 text-[14.5px] md:flex">
            {Object.entries(navLinks).map(([key, href]) => (
              <li key={key}>
                <a href={href} className="navbar-btn cursor-pointer">
                  {t(`navbar.${key}`)}
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop Language Switcher */}
          <div className="ms-auto hidden items-center md:flex">
            <button
              type="button"
              onClick={changeLanguage}
              aria-label="Switch language"
              className="flex items-center gap-2 text-text transition-colors hover:text-highlights"
            >
              <Languages size={19} />
              <span className="text-sm">{isArabic ? 'EN' : 'عربي'}</span>
            </button>
          </div>

          {/* Mobile Controls */}
          <div className="ms-auto flex items-center gap-4 md:hidden">
            <button
              type="button"
              onClick={changeLanguage}
              aria-label="Switch language"
              className="flex items-center gap-1 text-text transition-colors hover:text-highlights"
            >
              <Languages size={19} />
              <span className="text-xs">{isArabic ? 'EN' : 'عربي'}</span>
            </button>

            <button
              type="button"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
              className="text-text"
            >
              {menuOpen ? <X size={19} /> : <Menu size={19} />}
            </button>
          </div>
        </nav>

        {menuOpen && (
          <ul className="fixed inset-x-0 top-0 -z-10 flex h-screen flex-col gap-1 bg-bg px-5 pt-24 md:hidden">
            {Object.entries(navLinks).map(([key, href]) => (
              <li
                key={key}
                onClick={() => setMenuOpen(false)}
                className="navbar-btn cursor-pointer px-3 py-3 text-[14px] hover:text-highlights"
              >
                <a href={href}>{t(`navbar.${key}`)}</a>
              </li>
            ))}
          </ul>
        )}
      </header>
    </>
  );
}