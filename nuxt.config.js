// ~ and ~~ -> https://nuxtjs.org/guide/directory-structure#aliases

export default {
  srcDir: 'src/',

  mode: process.env.NO_SSR ? 'spa' : 'universal',

  env: {
    NODE_ENV: process.env.NODE_ENV
  },

  css: [
    '~~/node_modules/normalize.css/normalize.css',
    '~/styles/index.scss'
  ],

  modules: [],

  styleResources: {
    sass: []
  },

  router: {
    middleware: []
  },

  pugPlain: {},

  plugins: [
    '~/plugins/index'
  ],

  build: {
    transpile: []
  },

  // don't confuse it with routes middleware
  // which are being called before each route in client side or SSR
  // https://nuxtjs.org/api/configuration-servermiddleware
  serverMiddleware: [],

  head: {
    meta: [
      {charset: 'utf-8'},
      {name: 'robots', content: 'nofollow,noindex'},
      {'http-equiv': 'X-UA-Compatible', content: 'IE=edge'},
      {name: 'viewport', content: 'width=device-width,initial-scale=1'},
      {name: 'referrer', content: 'origin'}
    ]
  },

  manifest: {
    short_name: 'Nuxt 2.4.x Prototype Issue'
  },

  loading: {
    color: '#00d630'
  }
};
