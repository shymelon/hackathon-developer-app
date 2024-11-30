// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    "@nuxtjs/tailwindcss",
    [
      "@nuxtjs/google-fonts",
      {
        families: {
          Inter: true,
        },
      },
    ],
    "@nuxt/eslint",
  ],
  plugins: ["~/plugins/preline.client.ts"],
  devtools: { enabled: true },
  compatibilityDate: "2024-11-01",
  eslint: {
    config: {
      stylistic: false,
    },
  },
  tailwindcss: {
    cssPath: ["~/assets/css/tailwind.css", { injectPosition: "first" }],
    configPath: "tailwind.config",
  },
  runtimeConfig: {
    databaseUrl: process.env.DATABASE_URL,
    databaseUrlUnpooled: process.env.DATABASE_URL_UNPOOLED,
  },
});
