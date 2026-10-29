import css from "./ProjectItem.module.css";
import ProjectSwiper from "../ProjectSwiper/ProjectSwiper";
import type { projects } from "../../data/projects";
import { useEffect, useRef, useState } from "react";

type Project = (typeof projects)[number];

type ProjectItemProps = {
  project: Project;
  index: number;
};

export default function ProjectItem({ project, index }: ProjectItemProps) {
  const reverse = index % 2 !== 0;

  const [isVisible, setIsVisible] = useState(false);
  const projectRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const element = projectRef.current;

    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.15,
      },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <article
      ref={projectRef}
      className={`${css.project} ${reverse ? css.reverse : ""} ${
        isVisible ? css.visible : ""
      }`}
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
  );
}
