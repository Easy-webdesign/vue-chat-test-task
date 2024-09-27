// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: [ '@pinia/nuxt' ],
  css: [
    "@/assets/scss/index.scss"
  ],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/assets/scss/helpers/index.scss";',
        },
      },
    },
  },
  components: {
    global: true,
    dirs: [
      {path: "@/components/blocks/", extensions:['.vue']},
      {path: "@/components/items/", extensions:['.vue']},
      {path: "@/components/ui/", extensions:['.vue']},
    ]
  },
})
