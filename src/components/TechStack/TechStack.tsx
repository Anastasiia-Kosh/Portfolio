import css from "./TechStack.module.css";
import { useEffect, useRef, useState } from "react";

const techGroups = [
  {
    title: "Frontend",
    technologies: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "React Router",
      "CSS Modules",
    ],
  },
  {
    title: "State Management & Data Fetching",
    technologies: [
      "Redux Toolkit",
      "Zustand",
      "TanStack Query",
      "Axios",
      "use-debounce",
    ],
  },
  {
    title: "Forms & UI Libraries",
    technologies: [
      "React Hook Form",
      "Formik",
      "Yup",
      "React Hot Toast",
      "React Paginate",
      "Swiper",
      "TipTap",
    ],
  },
  {
    title: "Backend",
    technologies: [
      "Node.js",
      "Express.js",
      "REST API",
      "JWT",
      "bcrypt",
      "Multer",
      "Joi",
      "Celebrate",
      "Nodemailer",
      "Mongoose",
    ],
  },
  {
    title: "Databases & Services",
    technologies: ["MongoDB", "Cloudinary"],
  },
  {
    title: "Tools & Deployment",
    technologies: [
      "Git",
      "GitHub",
      "Vite",
      "Vercel",
      "Render",
      "Swagger",
      "Figma",
      "Trello",
    ],
  },
];

type TechGroupProps = {
  title: string;
  technologies: string[];
  index: number;
};

function TechGroup({ title, technologies, index }: TechGroupProps) {
  const [isVisible, setIsVisible] = useState(false);
  const groupRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const element = groupRef.current;

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
    <div
      ref={groupRef}
      className={`${css.group} ${isVisible ? css.visible : ""}`}
    >
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
            <TechGroup
              key={group.title}
              title={group.title}
              technologies={group.technologies}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
