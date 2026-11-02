import { useThemeContext } from "../../hooks/useThemeContext";
import css from "./Switcher.module.css"

export default function ThemeSwitcher() {
  const { theme, setTheme } = useThemeContext();

  return (
    <div className={css.themeSwitcher}>
      <button
        onClick={() => setTheme("dark")}
        className={`${css.buttonTheme} ${
          theme === "dark" ? css.activeTheme : ""
        }`}
      >
          <svg className={css.icon}>
                  <use href="/icons/sprite.svg#icon-moon" />
                </svg>
      </button>

      <span>·</span>

      <button
        onClick={() => setTheme("light")}
        className={`${css.buttonTheme} ${
          theme === "light" ? css.activeTheme : ""
        }`}
      >
         <svg className={css.icon}>
                  <use href="/icons/sprite.svg#icon-sun" />
                </svg>
      </button>
    </div>
  );
}