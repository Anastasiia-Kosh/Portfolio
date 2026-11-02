import { use } from 'react';
import { LanguageContext } from '../context/LanguageContext';


export const useLanguageContext = () => {
  const context = use(LanguageContext);

  if (!context) {
    throw new Error('useLanguageContext must be used within LanguageProvider');
  }

  return context;
};