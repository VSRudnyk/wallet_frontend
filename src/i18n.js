import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import English from './locale/en/translation.json';
import Ukrainian from './locale/ua/translation.json';
import Spanish from './locale/es/translation.json';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: false,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: {
        translation: English,
      },
      ua: {
        translation: Ukrainian,
      },
      es: {
        translation: Spanish,
      },
    },
  });

export default i18n;
