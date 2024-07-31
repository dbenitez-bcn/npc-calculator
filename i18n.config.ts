export default defineI18nConfig(() => ({
  legacy: false,
  locale: 'es',
  fallbackLocale: 'en',
  messages: {
    en: { // English

    },
    es: { // Spanish
      landing: {
        title: "NPC CALCULATOR",
        'sub-title': "¿Es tu amigo un NPC?",
        content: {
          title1: "¿Que es un NPC?",
          body1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur et pulvinar orci. Maecenas luctus maximus ultrices. Fusce efficitur augue mollis orci sodales, vitae volutpat diam tempor.",
          title2: "¿Como funciona NPC calculator?",
          body2: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur et pulvinar orci. Maecenas luctus maximus ultrices. Fusce efficitur augue mollis orci sodales, vitae volutpat diam tempor.",
          body3: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur et pulvinar orci. Maecenas luctus maximus ultrices. Fusce efficitur augue mollis orci sodales, vitae volutpat diam tempor.",
          btn1: "Es mi amigo un NPC?",
          btn2: "Es mi amiga una NPC?",
          btn3: "Calcular ahora"
        }
      },
      footer: {
        copy: "NPC Calculator ©",
        about: "Sobre nosotros",
        privacy: "Política de privacidad"
      }
    },
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