"use client";
import { useState } from "react";
import css from "./Header.module.css";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const handleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };
  const handleCloseMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };
  return (
    <header className={css.header}>
      <div className="container">
        <div className={css.headerInner}>
          <p className={css.name}>Анастасія Кошуцька</p>
          <button
            type="button"
            onClick={handleMobileMenu}
            aria-label={isMobileMenuOpen ? "Закрити меню" : "Відкрити меню"}
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
                <a href="#projects">Проєкти</a>
              </li>
              <li className={css.navLink}>
                <a href="#about">Про мене</a>
              </li>
              <li className={css.navLink}>
                <a href="#contacts">Контакти</a>
              </li>
            </ul>
          </nav>
          <div className={css.buttonsMenu}>
            <button type="button" className={css.buttonLang}>
              EN/UA
            </button>
            <button type="button" className={css.buttonTheme}>
              Dark/Light
            </button>
          </div>
          {isMobileMenuOpen && (
            <div className={css.mobileMenu}>
              <nav className={css.mobileNav}>
            <ul className={css.mobileNavigation}>
              <li className={css.navLink}>
                <a href="#projects" onClick={handleCloseMobileMenu}>Проєкти</a>
              </li>
              <li className={css.navLink} >
                <a href="#about" onClick={handleCloseMobileMenu}>Про мене</a>
              </li>
              <li className={css.navLink}>
                <a href="#contacts" onClick={handleCloseMobileMenu}>Контакти</a>
              </li>
            </ul>
          </nav>
          <div className={css.mobileButtonsMenu}>
            <button type="button" className={css.buttonLang} onClick={handleCloseMobileMenu}>
              EN/UA
            </button>
            <button type="button" className={css.buttonTheme} onClick={handleCloseMobileMenu}>
              Dark/Light
            </button>
          </div>
          </div>)}
        </div>
      </div>
    </header>
  );
}
