// This plugin has been registered in @nuxt/auth-next
// under `auth.plugin` property of `nuxt.config.js`.

// https://stackoverflow.com/questions/52364451/how-to-make-nuxt-auth-and-nuxt-i18n-to-be-friends

export default function i18nRedirect ({ app }) {
  const redirect = app.$auth.$storage.options.redirect;
  for (const key in redirect) {
    redirect[key] = '/' + app.i18n.locale + redirect[key];
  }
  app.$auth.$storage.options.redirect = redirect;
}
