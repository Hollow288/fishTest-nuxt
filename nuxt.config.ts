import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  devtools: { enabled: true },
  plugins: [
    '~/plugins/bootstrap.client.ts',
    '~/plugins/scrollreveal.client.ts'
  ],
  css: [
    "bootstrap/dist/css/bootstrap.min.css",
    "@fortawesome/fontawesome-free/css/all.min.css",
    "/public/css/fonts.css",
    "/public/css/style.css",
    "/public/css/responsive.css",
    "/public/css/style3.css",
    "/public/css/portfollostyle.css"
  ],
  app: {
    head: {
      script: [
        // 这里可以添加额外的 script 标签
      ],
    },
  },
  vite: {
    plugins: [
      // 如果有其他 Vite 插件，这里添加
    ],
  },
  compatibilityDate: "2025-03-10",
})
