
import { Context } from "@nuxt/types";
import { provide, onGlobalSetup, defineNuxtPlugin } from "@nuxtjs/composition-api";
import { DefaultApolloClient } from "@vue/apollo-composable";

// https://github.com/nuxt-community/apollo-module/issues/288#issuecomment-713454495
export default defineNuxtPlugin(({app}: Context): void => {
  onGlobalSetup(() => {
    provide(DefaultApolloClient, app.apolloProvider?.defaultClient);
  });
});
