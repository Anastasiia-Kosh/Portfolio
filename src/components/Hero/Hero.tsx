import css from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={css.hero} id="hero">
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

                
            <a className={css.button} href="/cv/Koshutska Anastasiia Fullstack_resume_en.pdf"
  download="Koshutska Anastasiia Fullstack_resume_en.pdf"> <svg className={css.icon}>
                  <use href="/icons/sprite.svg#icon-download" />
                </svg>Завантажити резюме</a>

          </div>

          <div className={css.heroVisual} aria-hidden="true">
            <img
              className={css.heroImage}
              src="/images/hero/hero-orb8.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
}
