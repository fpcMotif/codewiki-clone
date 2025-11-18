import i18next from 'i18next';
import HttpApi from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

// Supported languages
export const supportedLanguages = {
  en: { name: 'English', dir: 'ltr' },
  'zh-CN': { name: '简体中文', dir: 'ltr' },
  'zh-TW': { name: '繁體中文', dir: 'ltr' },
  ja: { name: '日本語', dir: 'ltr' },
  de: { name: 'Deutsch', dir: 'ltr' },
  fr: { name: 'Français', dir: 'ltr' },
  ko: { name: '한국어', dir: 'ltr' },
  ar: { name: 'العربية', dir: 'rtl' }
};

// Initialize i18n
void i18next
  .use(HttpApi)
  .use(LanguageDetector)
  .init({
    // Default and fallback language
    fallbackLng: 'en',
    debug: true, // Set to true for debugging

    // Detection options
    detection: {
      order: ['localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage'],
      lookupLocalStorage: 'i18nextLng'
    },

    // Language mapping
    load: 'languageOnly',

    // Backend options
    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json'
    },

    // Interpolation
    interpolation: {
      escapeValue: false // Not needed for React
    },

    // Load namespaces
    ns: ['translation'],
    defaultNS: 'translation'
  });

// Handle RTL for Arabic (guard against SSR)
if (typeof document !== "undefined") {
  i18next.on('languageChanged', (lng) => {
    const dir = supportedLanguages[lng as keyof typeof supportedLanguages]?.dir || 'ltr';
    document.documentElement.dir = dir;
    document.documentElement.lang = lng;
  });
}

// Export for use in components
export default i18next;
