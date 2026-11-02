
import { ThemeContext, type Theme } from "./ThemeContext";
import { useLocalStorage } from 'usehooks-ts';

type Props = {
  children: React.ReactNode;
};

export const ThemeProvider  = ({ children }: Props) => {
  const [theme, setTheme] = useLocalStorage<Theme>('ui-theme', 'dark');

  return (
    <ThemeContext value={{ theme, setTheme}}>
      {children}
    </ThemeContext>
  );
};