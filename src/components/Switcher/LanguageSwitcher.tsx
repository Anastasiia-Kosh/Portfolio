import { useLanguageContext } from "../../hooks/useLanguage";
import css from "./Switcher.module.css";

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguageContext();

  return (
    <div className={css.languageSwitcher}>
      <button
        onClick={() => setLanguage("uk")}
        className={`${css.buttonLang} ${
          language === "uk" ? css.activeLang : ""
        }`}
      >
        UA
      </button>

      <span>·</span>

      <button
        onClick={() => setLanguage("en")}
        className={`${css.buttonLang} ${
          language === "en" ? css.activeLang : ""
        }`}
      >
        EN
      </button>
    </div>
  );
}
