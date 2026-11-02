import css from "./Contacts.module.css";
import Reveal from "../Reveal/Reveal";
import { useLanguageContext } from "../../hooks/useLanguage";

export default function Contacts() {
  const { t } = useLanguageContext();
  return (
    <section className={css.contacts} id="contacts">
      <div className="container">
        <Reveal>
          <p className={css.eyebrow}>{t.contacts.eyebrow}</p>
          <h2 className={css.title}>{t.contacts.title}</h2>
          <p className={css.subtitle}>{t.contacts.subtitle}</p>

          <div className={css.contactList}>
            <a
              href="https://t.me/Anastasiia_Kosh"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className={css.iconWrap}>
                <svg className={css.icon}>
                  <use href="/icons/sprite.svg#icon-telegram" />
                </svg>
                <span className={css.linkName}>Telegram</span>
              </div>
              <span className={css.link}>@Anastasiia_Kosh</span>
            </a>

            <a
              href="https://www.linkedin.com/in/anastasiia-koshutska/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className={css.iconWrap}>
                <svg className={css.icon}>
                  <use href="/icons/sprite.svg#icon-linkedin" />
                </svg>
                <span className={css.linkName}>LinkedIn</span>
              </div>
              <span className={css.link}>
                linkedin.com/in/anastasiia-koshutska
              </span>
            </a>

            <a
              href="https://github.com/Anastasiia-Kosh"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className={css.iconWrap}>
                <svg className={css.icon}>
                  <use href="/icons/sprite.svg#icon-github" />
                </svg>
                <span className={css.linkName}>GitHub</span>
              </div>
              <span className={css.link}>github.com/Anastasiia-Kosh</span>
            </a>
            <a
              href="mailto:zaporozhetsnastya89@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className={css.iconWrap}>
                <svg className={css.icon}>
                  <use href="/icons/sprite.svg#icon-mail" />
                </svg>
                <span className={css.linkName}>Email</span>
              </div>
              <span className={css.link}>zaporozhetsnastya89@gmail.com</span>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
