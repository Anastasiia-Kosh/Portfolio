import { useState } from 'react';
import css from './Header.module.css';
import LanguageSwitcher from '../Switcher/LanguageSwitcher';
import { useLanguageContext } from '../../hooks/useLanguage';
import ThemeSwitcher from '../Switcher/ThemeSwitcher';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const handleMobileMenu = () => {
    setIsMobileMenuOpen(prev => !prev);
  };
  const handleCloseMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };
  const { t } = useLanguageContext();
  return (
    <header className={css.header}>
      <div className="container">
        <div className={css.headerInner}>
          <a href="#hero" className={css.name}>
            {t.header.name}
          </a>
          <button
            type="button"
            onClick={handleMobileMenu}
            aria-label={
              isMobileMenuOpen ? t.header.closeMenu : t.header.openMenu
            }
            className={css.menuButton}
            aria-expanded={isMobileMenuOpen}
          >
            <svg
              className={css.icon}
              width={24}
              height={24}
              aria-hidden="true"
              focusable="false"
            >
              {isMobileMenuOpen ? (
                <use href={`/icons/sprite.svg#icon-close`} />
              ) : (
                <use href={`/icons/sprite.svg#icon-menu`} />
              )}
            </svg>
          </button>

          <nav className={css.navigation}>
            <ul className={css.navigationList}>
              <li className={css.navLink}>
                <a href="#projects">{t.header.projects}</a>
              </li>
              <li className={css.navLink}>
                <a href="#tech-stack">{t.header.technologies}</a>
              </li>
              <li className={css.navLink}>
                <a href="#about">{t.header.about}</a>
              </li>
              <li className={css.navLink}>
                <a href="#contacts">{t.header.contacts}</a>
              </li>
            </ul>
          </nav>
          <div className={css.buttonsMenu}>
            <LanguageSwitcher />
            <ThemeSwitcher />
          </div>
          {isMobileMenuOpen && (
            <div className={css.mobileMenu}>
              <div className={css.mobileButtonsMenu}>
                <LanguageSwitcher />
                <ThemeSwitcher />
              </div>
              <nav className={css.mobileNav}>
                <ul className={css.mobileNavigation}>
                  <li className={css.navLink}>
                    <a href="#projects" onClick={handleCloseMobileMenu}>
                      {t.header.projects}
                    </a>
                  </li>
                  <li className={css.navLink}>
                    <a href="#tech-stack" onClick={handleCloseMobileMenu}>
                      {t.header.technologies}
                    </a>
                  </li>
                  <li className={css.navLink}>
                    <a href="#about" onClick={handleCloseMobileMenu}>
                      {t.header.about}
                    </a>
                  </li>
                  <li className={css.navLink}>
                    <a href="#contacts" onClick={handleCloseMobileMenu}>
                      {t.header.contacts}
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
