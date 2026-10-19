
import { Languages, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { t, i18n } = useTranslation();

  const isArabic = i18n.language.startsWith('ar');

  const changeLanguage = () => {
    const nextLanguage = isArabic ? 'en' : 'ar';

    i18n.changeLanguage(nextLanguage);

    document.documentElement.lang = nextLanguage;
    document.documentElement.dir =
      nextLanguage === 'ar' ? 'rtl' : 'ltr';

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
    <nav
      dir={isArabic ? 'rtl' : 'ltr'}
      className="relative flex h-16 items-center justify-between px-5 font-heading md:px-8"
    >
      {/* Logo */}
      <h1 className="shrink-0 text-xl font-semibold">
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
          <span className="text-sm">
            {isArabic ? 'EN' : 'عربي'}
          </span>
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
          <span className="text-xs">
            {isArabic ? 'EN' : 'عربي'}
          </span>
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

      {/* Mobile Navigation Dropdown */}
      {menuOpen && (
        <ul className="absolute left-0 top-16 z-50 flex min-h-screen w-full flex-col gap-1 border-t border-border bg-bg px-5 py-4 shadow-lg md:hidden">
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
    </nav>
  );
}
