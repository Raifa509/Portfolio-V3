
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from './locales/en.json';
import ar from './locales/ar.json';

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    ar: { translation: ar }
  },
  lng: 'en',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false
  }
});

const updateDocumentLanguage = (language) => {
  const lang = language?.startsWith('ar') ? 'ar' : 'en';

  document.documentElement.lang = lang;
  document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
};

i18n.on('languageChanged', updateDocumentLanguage);

updateDocumentLanguage(i18n.language);

export default i18n;
