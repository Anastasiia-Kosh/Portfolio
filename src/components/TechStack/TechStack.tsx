import { techGroups } from "../../data/techGroups";
import css from "./TechStack.module.css";
import Reveal from "../Reveal/Reveal";

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
  return (
    <section className={css.techStack} id="tech-stack">
      <div className="container">
        <p className={css.eyebrow}>ТЕХНОЛОГІЇ</p>
        <h2 className={css.title}>Технологічний стек</h2>

        <p className={css.subtitle}>
          Технології, які я використовую для створення вебзастосунків.
        </p>

        <div className={css.groups}>
          {techGroups.map((group, index) => (
             <Reveal key={group.title}>
            <TechGroup
              key={group.title}
              title={group.title}
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
