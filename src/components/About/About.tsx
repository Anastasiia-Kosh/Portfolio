import Reveal from "../Reveal/Reveal";
import css from "./About.module.css";

export default function About() {
  return (
      <Reveal>
    <section className={css.aboutMe} id="about">
      <div className="container">
        <p className={css.eyebrow}>ТРОХИ ПРО МЕНЕ</p>
        <h2 className={css.title}>Від аналітики до розробки</h2>
        <p className={css.subtitle}>
          Мій шлях у розробку почався з цікавості до того, як працюють цифрові
          продукти, і бажання створювати їх самостійно.
        </p>

        <p className={css.subtitle}>
          Майже 10 років у статистиці й аналітиці навчили мене працювати з
          даними, помічати закономірності та системно розв’язувати задачі.
          Згодом я працювала з CRM, API та інтеграціями баз даних, що допомогло
          мені краще зрозуміти взаємодію між різними системами.
        </p>
        <p className={css.subtitle}>
          Після завершення Fullstack-курсу в GoIT я зосередилася на розробці
          вебзастосунків. Працюю з React, Next.js, TypeScript і Node.js,
          розвиваю свої навички через власні та командні проєкти.
        </p>
        <p className={css.subtitle}>
          Мені подобається не просто писати код, а розуміти, як усе працює разом
          — від інтерфейсу користувача до серверної логіки.
        </p>
      </div>
      </section>
      </Reveal>
  );
}
