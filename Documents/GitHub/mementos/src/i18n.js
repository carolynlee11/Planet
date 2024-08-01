import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import HttpBackend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(HttpBackend) // Load translations using http backend
  .use(LanguageDetector) // Detect language in browser
  .use(initReactI18next) // Pass the i18n instance to react-i18next.
  .init({
    fallbackLng: 'en', // Use English if detected language is not available
    debug: true,
    interpolation: {
      escapeValue: false, // Not needed for React as it escapes by default
    }
  });

export default i18n;
