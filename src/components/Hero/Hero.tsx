import css from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={css.hero} id="about">
      <div className="container">
        <h1 className={css.title}>
          Будую вебзастосунки від інтерфейсу до сервера
        </h1>
        <p className={css.descr}>
          Fullstack-розробниця із практичним досвідом роботи з HTML, JavaScript, React, Next.js і Node.js.  <br/>Шукаю
          можливість працювати над реальними проєктами та професійно розвиватися
          в IT-команді.
        </p>
        <button className={css.button}>Завантажити резюме</button>
      </div>
    </section>
  );
}
