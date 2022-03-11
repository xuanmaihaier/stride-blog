import { defineNuxtConfig } from 'nuxt3'
const axios = require('axios')
// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  plugins: [
    "@/plugins/axios",
  ],
  modules: [
    ['@nuxtjs/axios',{proxyHeaders:false}]
],
  axios: {
    proxy: true,
    credentials: true,
    // See https://github.com/nuxt-community/axios-module#options
  },
})
