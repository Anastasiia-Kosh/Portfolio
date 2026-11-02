import { useLanguageContext } from "../../hooks/useLanguage";

import css from "./Hero.module.css";

export default function Hero() {
  const { t } = useLanguageContext();

  return (
    <section className={css.hero} id="hero">
      <div className="container">
        <div className={css.heroContent}>
          <div className={css.heroText}>
            <h1 className={css.title}>{t.hero.title}</h1>

            <p className={css.stack}>
              Fullstack Developer · React · Next.js · Node.js
            </p>

            <p className={css.descr}>{t.hero.description}</p>

            <a
              className={css.button}
              href="/cv/Koshutska Anastasiia Fullstack_resume_en.pdf"
              download="Koshutska Anastasiia Fullstack_resume_en.pdf"
            >
              <svg className={css.icon}>
                <use href="/icons/sprite.svg#icon-download" />
              </svg>
              {t.hero.downloadCv}
            </a>
          </div>

          <div className={css.heroVisual} aria-hidden="true">
              <div className={css.heroImageWrapper}>
            <img
              className={css.heroImage}
              src="/images/hero/hero-orb.png"
              alt=""
            /></div>
          </div>
        </div>
      </div>
    </section>
  );
}
