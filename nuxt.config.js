export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',
  router: {
    base: '/co-wellness-test/'
  },
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'cowellness',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://cdn.materialdesignicons.com/5.4.55/css/materialdesignicons.min.css' }
    ],
    script: [{
      src: 'https://maps.googleapis.com/maps/api/js?key=AIzaSyBzXIUvyEfFV7t7kmkengXi2UcIAQ7toXk&libraries=places'
    }]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss'
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
  ],

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  }
};
