import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Translation files
import translationEN from './locales/en/translation.json';
import translationSQ from './locales/sq/translation.json';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: translationEN },
      sq: { translation: translationSQ }, 
    },
    fallbackLng: 'sq',
    interpolation: {
      escapeValue: false,
    },
    detection: {
      // Optional: customize detection order if needed
      order: ['localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage'],
    },
  });

export default i18n;
