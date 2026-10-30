import css from "./ProjectItem.module.css";
import Reveal from "../Reveal/Reveal";
import ProjectSwiper from "../ProjectSwiper/ProjectSwiper";
import type { projects } from "../../data/projects";

type Project = (typeof projects)[number];

type ProjectItemProps = {
  project: Project;
  index: number;
};

export default function ProjectItem({ project, index }: ProjectItemProps) {
  const reverse = index % 2 !== 0;

  return (
  <Reveal>
    <article
      className={`${css.project} ${reverse ? css.reverse : ""}`}
    >
      <div className={css.content}>
        <span className={css.number}>{String(index + 1).padStart(2, "0")}</span>

        <h3 className={css.title}>{project.title}</h3>

        <p className={css.description}>{project.description}</p>

        <ul className={css.technologies}>
          {project.technologies.map((technology) => (
            <li key={technology}>{technology}</li>
          ))}
        
        </ul>

        <div className={css.links}>
          <a href={project.githubUrl} target="_blank" rel="noreferrer">
            GitHub frontend ↗
          </a>
          {project.backendUrl && <a href={project.backendUrl} target="_blank" rel="noreferrer">
            GitHub backend ↗
          </a>}
          <a href={project.demoUrl} target="_blank" rel="noreferrer">
            Live demo ↗
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
