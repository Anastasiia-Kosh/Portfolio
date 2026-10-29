import { projects } from "../../data/projects";
import ProjectItem from "../ProjectItem/ProjectItem";
import css from "./Projects.module.css";

export default function Projects() {
  return (
    <section className={css.projects} id="projects">
      <div className="container">
        <div className={css.intro}>
          <p className={css.eyebrow}>MY WORK</p>
          <h2 className={css.title}>Проєкти</h2>
          <p className={css.description}>
            Від ідеї до реалізації — проєкти, у яких я поєдную інтерфейс, логіку
            та роботу з даними.
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
