import css from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={css.hero} id="about">
      <div className="container">
        <div className={css.heroContent}>
          <div className={css.heroText}>
            <h1 className={css.title}>Від ідеї - до працюючого продукту.</h1>

            <p className={css.stack}>
              Fullstack Developer · React · Next.js · Node.js
            </p>

            <p className={css.descr}>
              Люблю розбиратися, як усе працює: від інтерфейсу, який бачить
              користувач, до логіки та даних на сервері. Створюю вебзастосунки,
              у яких дизайн і функціональність працюють разом.
            </p>

            <button className={css.button}>Завантажити резюме</button>
          </div>

          <div className={css.heroVisual} aria-hidden="true">
            <img
              className={css.heroImage}
              src="/images/hero-orb8.png"
              alt="orbita"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
