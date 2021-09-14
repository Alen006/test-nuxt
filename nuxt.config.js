import { resolve } from 'path'
export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'TIM SA',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
	{ rel:"stylesheet", type:"text/css", href:'https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css' },
{ rel:"stylesheet", type:"text/css",href:'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css'}]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~assets/css/variables.styl'
  ],
  alias:{
	  '@c': resolve(__dirname,'./components/')
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
  ssr: false,
  loading: '~/components/PreLoader.vue',
  loadingIndicator: {
    name: 'circle',
    color: '#fd0',
  }
}
