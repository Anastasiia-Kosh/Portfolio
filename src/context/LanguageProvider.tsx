import { translations } from "../locales";
import { LanguageContext, type Language } from "./LanguageContext";
import { useLocalStorage } from 'usehooks-ts';

type Props = {
  children: React.ReactNode;
};

export const LanguageProvider = ({ children }: Props) => {
  const [language, setLanguage] = useLocalStorage<Language>(
  "language",
  "uk",
  );
  const t = translations[language];

  return (
    <LanguageContext value={{ language, setLanguage, t}}>
      {children}
    </LanguageContext>
  );
};