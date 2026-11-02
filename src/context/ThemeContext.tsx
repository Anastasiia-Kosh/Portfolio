import { createContext } from 'react';

export type Theme = 'dark' | 'light';

interface ThemeContextValue {
    theme: Theme;
    setTheme: React.Dispatch<React.SetStateAction<Theme>>;
}

export const ThemeContext = createContext<ThemeContextValue | null>(null);