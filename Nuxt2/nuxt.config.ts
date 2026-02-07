export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },

  app: {
    head: {
      meta: [
        { name: "viewport", content: "width=device-width, initial-scale=1" },
      ],
      link: [
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Inter&display=swap",
        },
      ],
    },
  },

  css: ["~/assets/css/main.scss"],
});
