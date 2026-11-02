import { useLanguageContext } from "../../hooks/useLanguage";
import css from "./Footer.module.css";

export default function Footer() {
  const { t } = useLanguageContext();
  return (
    <footer className={css.footer}>
      <div className="container">
        <div className={css.content}>
          <a href="#hero" className={css.name}>
            {t.header.name}
          </a>
          <p>
            © {new Date().getFullYear()} {t.footer.title}. {t.footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}
