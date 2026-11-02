import css from "./ProjectItem.module.css";
import Reveal from "../Reveal/Reveal";
import ProjectSwiper from "../ProjectSwiper/ProjectSwiper";
import type { projects } from "../../data/projects";
import { useLanguageContext } from "../../hooks/useLanguage";

type Project = (typeof projects)[number];

type ProjectItemProps = {
  project: Project;
  index: number;
};

export default function ProjectItem({ project, index }: ProjectItemProps) {
  const reverse = index % 2 !== 0;
  const { t } = useLanguageContext();
  return (
    <Reveal>
      <article className={`${css.project} ${reverse ? css.reverse : ""}`}>
        <div className={css.content}>
          <span className={css.number}>
            {String(index + 1).padStart(2, "0")}
          </span>

          <h3 className={css.title}>{project.title}</h3>

          <p className={css.description}>
            {t.projects.items[project.id].description}
          </p>

          <ul className={css.technologies}>
            {project.technologies.map((technology) => (
              <li key={technology}>{technology}</li>
            ))}
          </ul>

          <div className={css.links}>
            {project.id === "recipeBook" ?
            <a href={project.githubUrl} target="_blank" rel="noreferrer">
              GitHub frontend ↗
              </a> :
              <a href={project.githubUrl} target="_blank" rel="noreferrer">
              GitHub  ↗
            </a>}
            {project.backendUrl && (
              <a href={project.backendUrl} target="_blank" rel="noreferrer">
                GitHub backend ↗
              </a>
            )}
            <a href={project.demoUrl} target="_blank" rel="noreferrer">
              {t.projects.link}
            </a>
          </div>
        </div>

        <div className={css.preview}>
          <ProjectSwiper
            screenshots={project.screenshots}
            projectName={project.title}
          />
        </div>
      </article>
    </Reveal>
  );
}
