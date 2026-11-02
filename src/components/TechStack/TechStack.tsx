import { techGroups } from "../../data/techGroups";
import css from "./TechStack.module.css";
import Reveal from "../Reveal/Reveal";
import { useLanguageContext } from "../../hooks/useLanguage";

type TechGroupProps = {
  title: string;
  technologies: string[];
  index: number;
};

function TechGroup({ title, technologies, index }: TechGroupProps) {
  return (
    <div className={css.group}>
      <div className={css.heading}>
        <span className={css.number}>{String(index + 1).padStart(2, "0")}</span>

        <h3 className={css.groupTitle}>{title}</h3>
      </div>

      <ul className={css.technologies}>
        {technologies.map((technology) => (
          <li key={technology}>{technology}</li>
        ))}
      </ul>
    </div>
  );
}

export default function TechStack() {
  const { t } = useLanguageContext();
  return (
    <section className={css.techStack} id="tech-stack">
      <div className="container">
        <p className={css.eyebrow}>{t.techStack.eyebrow}</p>
        <h2 className={css.title}>{t.techStack.title}</h2>

        <p className={css.subtitle}>{t.techStack.subtitle}</p>

        <div className={css.groups}>
          {techGroups.map((group, index) => (
            <Reveal key={group.title}>
              <TechGroup
                key={group.title}
                title={t.techStack.groups[group.id]}
                technologies={group.technologies}
                index={index}
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
