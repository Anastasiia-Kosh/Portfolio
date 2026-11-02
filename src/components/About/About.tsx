import { useLanguageContext } from "../../hooks/useLanguage";
import Reveal from "../Reveal/Reveal";
import css from "./About.module.css";

export default function About() {
  const { t } = useLanguageContext();
  return (
    <Reveal>
      <section className={css.aboutMe} id="about">
        <div className="container">
          <p className={css.eyebrow}>{t.about.eyebrow}</p>
          <h2 className={css.title}>{t.about.title}</h2>

          {t.about.paragraphs.map((paragraph, index) => (
            <p className={css.subtitle} key={index}>
              {paragraph}
            </p>
          ))}
        </div>
      </section>
    </Reveal>
  );
}
