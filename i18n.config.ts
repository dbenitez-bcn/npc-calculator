import en from "~/locales/en.json";
import es from "~/locales/es.json";
import ca from "~/locales/ca.json";
import de from "~/locales/de.json";
import fr from "~/locales/fr.json";
import pt from "~/locales/pt.json";
import it from "~/locales/it.json";

export default defineI18nConfig(() => ({
  legacy: false,
  locale: 'es',
  fallbackLocale: 'en',
  warnHtmlMessage: false, 
  messages: {
    en,
    es,
    ca,
    de,
    fr,
    pt,
    it,
  }
}))