# Nuxt Boilerplate 💐

## Available packages

### General packages
+ `@nuxtjs/tailwindcss` write a css-free application without pain. (`rtl` is supported)
+ `vue-tippy` a vue tooltip handler based on `tippy.js`.
+ `vue-izitoast` a good Toaster or SnackBar for `vue` (we used `vue-izitoast2` for typescript support)
+ `vue-slick-carousel` a carousel or slider that is rendered in server-side (SSR). (we used `vue-slick-carousel` for handling localization correctly)
  + `draggable-nuxt-link` an internal plugin for preparing a good UX `nuxt-link` while sliding carousel. (available in the `plugins/draggable-nuxt-link` folder, you can use it by `<DNuxtLink>` tag in your project)
+ `vue-select` a vue dropdown
+ `v-aspect-ratio` vue-based aspect-ratio handler. (Highly usable for layout of images with `position: absolute` style)

### Authorization and Authentication
+ `@nuxtjs/auth-next` handling authentication.
+ `@casl/ability` handling authorization.
  
### Localization
+ `nuxt-i18n` multi-language support.
+ `moment-jalaali` persian date support.
+ `vue-persian-datetime-picker` multi-language date-picker.
+ `vue-slick-carousel-rtl` a carousel or slider SSR
+ `tailwindcss-rtl` support tailwind `rtl`.
  
### Networking
+ `axios` a substitution of `fetch` to handling network requests.
+ GraphQL support:
  + `@nuxt/apollo` communicating with GraphQL (integrated with `axios-fetch`).
  + `@vue/apollo-composable` use `@nuxt/apollo` in Composition-API context.
  
### Form validation
+ `vee-validate` form validation (with i18n activated)

### Development Tools
+ `eslint` linting and syntax control (with typescript support)
+ `@nuxt/typescript-build` using typescript in the project by `lang="ts"` direction.
  (**Note**: At the moment `"@nuxt/typescript-build@^2.1.0` is consistent with `typescript@~4.2`, so this package contains the ~4.2 version)
  
### Vuex
+ `vuex` is activated by an empty `index.js` file in the `store/` directory. (It's important for some features like `redirecting`)

## How to import?

```bash
# write this line in your terminal or cmd
git clone https://github.com/Iran-110/nuxt-boilerplate.git
```

## Nuxt Build Setup

```bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev

# build for production and launch server
$ yarn build
$ yarn start

# generate static project
$ yarn generate
```

# Contribution
If you want to suggest some new packages, you can open a new [issue](https://github.com/Iran-110/nuxt-boilerplate/issues).
