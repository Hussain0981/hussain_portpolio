// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss', '@nuxt/eslint', '@nuxt/image', '@nuxt/icon', '@nuxt/fonts', '@nuxtjs/color-mode', 'nuxt-particles'],
  devtools: { enabled: true },
  css: [
    '~/assets/css/main.css',
  ],
  colorMode: {
    preference: 'system', // pehli visit par OS preference follow karega
    fallback: 'light', // agar system preference detect na ho
    dataValue: 'theme', // <html data-theme="dark"> generate karega (humare CSS variables se match)
    classSuffix: '', // class-based fallback bhi clean rahega agar kahin use ho
    storageKey: 'app-theme', // localStorage key
  },
  compatibilityDate: '2025-07-15',
  eslint: {
    config: {
      stylistic: true,
      standalone: false,
    },
  },
})
