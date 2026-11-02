import { projects } from "../../data/projects";
import { useLanguageContext } from "../../hooks/useLanguage";
import ProjectItem from "../ProjectItem/ProjectItem";
import css from "./Projects.module.css";

export default function Projects() {
  const {t} = useLanguageContext()
  return (
    <section className={css.projects} id="projects">
      <div className="container">
        <div className={css.intro}>
          <p className={css.eyebrow}>{t.projects.eyebrow}</p>
          <h2 className={css.title}>{t.projects.title}</h2>
          <p className={css.description}>{t.projects.description}
          </p>
        </div>
        <div className={css.projectList}>
          {projects.map((project, index) => (
            <ProjectItem key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
