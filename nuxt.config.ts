// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from 'nuxt/config'



export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss", "@vueuse/nuxt"],
  ssr: false,
  runtimeConfig: {
    OPENAI_API_KEY: "",
  },
});
