import { createContext} from 'react';
import { uk } from "../locales/uk";

export type Translations = typeof uk;
export type Language = "uk" | "en";

interface LanguageContextValue {
    language: Language;
    setLanguage: React.Dispatch<React.SetStateAction<Language>>;
    t: Translations;
}

export const LanguageContext = createContext<LanguageContextValue | null>(null);

