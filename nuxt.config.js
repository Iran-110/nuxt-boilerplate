import fs from 'fs';
import {directive as aspectRatioDirective} from "v-aspect-ratio/dist/v-aspect-ratio.ssr.common";
import serverConfig from './server_config/server-config.json';

let https = {};
if (serverConfig?.https) {
  https = {
    https: {
      key: fs.readFileSync(serverConfig.https.key),
      cert: fs.readFileSync(serverConfig.https.cert),
    }
  };
}

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Nuxt Boilerplate',
    htmlAttrs: {
      lang: 'fa'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'vue-slick-carousel-rtl/dist/vue-slick-carousel-rtl.css',
    '@/assets/css/vue-slick-carousel-theme.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/utilities/vue-persian-datepicker.js', mode: 'client' },
    { src: '~/plugins/utilities/vue-tooltip.js', mode: 'client' },
    '~/plugins/utilities/vee-validate.js',
    '~/plugins/utilities/v-aspect-ratio.js',
    '~/plugins/utilities/vue-select.js',
    '~/plugins/utilities/vue-carousel.js',
    '~/plugins/d-nuxt-link.js',
    { src: '~/plugins/utilities/vue-izitoast.js', mode: 'client' },
    '~/plugins/auth/ability.ts',
    '~/plugins/auth/vue-casl-ability.js',
    '~/plugins/apollo/apollo-composable.ts',
    '~/plugins/vuex-persist.js',
  ],

  render: {
    bundleRenderer: {
      directives: {
        // https://github.com/andrewvasilchuk/v-aspect-ratio
        'aspect-ratio': aspectRatioDirective,
      },
    },
  },

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Runtime lint: https://typescript.nuxtjs.org/guide/lint#runtime-lint
  // https://blog.logrocket.com/how-to-write-a-vue-js-app-completely-in-typescript/
  typescript: {
    typeCheck: {
      eslint: {
        files: './**/*.{ts,js,vue}',
      }
    }
  },

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxt/typescript-build',
    '@nuxtjs/composition-api/module',
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/apollo',
    '@nuxtjs/axios',
    '@nuxtjs/auth-next',
    'nuxt-compress',
    'nuxt-i18n',
  ],

  // usage:
  // 0. https://github.com/nuxt-community/apollo-module/issues/278
  // 0. https://github.com/vuejs/vue-apollo/issues/623#issuecomment-544452874
  // 1. https://github.com/nuxt-community/apollo-module/blob/master/test/fixture/pages/asyncData.vue
  // 2. => vue-apollo-composable
  apollo: {
    clientConfigs: {
      // alternativeClient: {
      //   httpEndpoint: 'http://localhost:8000/graphql',
      //   tokenName: "auth._token.local",
      // },
      default: '~/plugins/apollo/custom-apollo-config.ts',
    },
    // https://stackoverflow.com/questions/61277352
    authenticationType: '',
  },

  // https://auth.nuxtjs.org/guide/scheme
  // https://github.com/nuxt-community/auth-module/issues/209
  auth: {
    strategies: {
      // superuser: { scheme: 'oauth2', /* ... */ },
      local: {
        scheme: 'local',
        endpoints: {
          login: { url: '/auth'/*, propertyName: 'token' */},
          user: { url: '/user'/*, propertyName: false */},
          // prevent to perform post request after logging out:
          logout: 0,
        },
        token: {
          property: 'token',
          type: 'Bearer',
          maxAge: 600,
        },
        user: {
          property: false,
        },
        refresh_token: false,
        responseType: 'token',
      },
      customer: { scheme: 'oauth2', /* ... */ },
      // custom: { scheme: '~/schemes/customStrategy', /* ... */ },
    },
    redirect: {
      login: '/login',
      logout: '/logout',
      callback: '/',
      home: '/',
    },
    plugins: [
      '~/plugins/auth/casl-ability-initializing.js',
      '~/plugins/auth/i18n-redirect.js',
    ]
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Used as fallback if no runtime config is provided
    baseURL: 'http://localhost:8000/api',
  },

  publicRuntimeConfig: {
    graphQLBrowserBaseURL: process.env.GRAPHQL_BROWSER_BASE_URL,
    axios: {
      browserBaseURL: process.env.BROWSER_BASE_URL,
    }
  },

  privateRuntimeConfig: {
    graphQLBaseURL: process.env.GRAPHQL_BASE_URL,
    axios: {
      baseURL: process.env.BASE_URL,
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: {
      plugins: {
        // https://github.com/sveltejs/svelte-loader/issues/188
        // https://github.com/nuxt-community/tailwindcss-module/issues/319
        // '@tailwindcss/jit': {},
        autoprefixer: true,
        'postcss-import': true,
      },
    },
    transpile: [
      "vee-validate/dist/rules",
    ],
  },

  generate: {
    // choose to suit your project ( nuxtjs/composition-api )
    interval: 2000,
  },

  loading: {
    color: 'green',
    height: '3px',
    rtl: true,
  },

  // asset compression (build time)
  "nuxt-compress": {
    gzip: {
      cache: true,
    },
    brotli: {
      threshold: 10240,
    },
  },

  server: {
    port: serverConfig?.port || 3000,
    host: serverConfig?.host || 'localhost',
    ...https
  },

  i18n: {
    locales: [
      {
        name: 'فارسی',
        code: 'fa',
        file: 'fa-IR.js',
        dir: 'rtl',
      },
      {
        name: 'English',
        code: 'en',
        file: 'en-US.js',
        dir: 'ltr',
      },
    ],
    defaultLocale: 'en',
    lazy: true,
    langDir: 'lang/',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      onlyOnRoot: true, // recommended
    },
  }
};
