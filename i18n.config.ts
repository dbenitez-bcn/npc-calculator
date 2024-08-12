import es from "~/locales/es.json";

export default defineI18nConfig(() => ({
  legacy: false,
  locale: 'es',
  fallbackLocale: 'en',
  warnHtmlMessage: false, 
  messages: {
    en: { // English

    },
    es,
    ca: { // Catalan

    },
    de: { // German

    },
    fr: { //French
    },
    pt: { // Portuguese

    },
    it: { // italian

    }
  }
}))