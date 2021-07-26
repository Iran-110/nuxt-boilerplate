<template>
  <div class="flex-1 flex flex-col justify-center items-center">
    <div class="text-2xl font-bold mb-5">{{ $t('inTheNameOfGod') }}</div>
    <img
      v-tippy="{placement: direction === 'ltr' ? 'right' : 'left', arrow: true}"
      :content="$t('homepage.nuxtBoilerplate')"
      class="w-1/4"
      src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Nuxt_logo.svg/1280px-Nuxt_logo.svg.png"
      alt="nuxt-logo"
    >
    <a class="mt-5" href="https://github.com/Iran-110/nuxt-boilerplate" target="_blank">{{ $t('homepage.moreInfo') }}</a>
    <nuxt-link :to="localePath('/login')">{{ $t('loginPage.title') }}</nuxt-link>
    <nuxt-link
      v-for="locale in availableLocales"
      :key="locale.code"
      :to="switchLocalePath(locale.code)"
    >
      {{ locale.name }}
    </nuxt-link>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: 'IndexPage',
  layout: 'default',
  computed: {
    availableLocales(): any[] {
      return (this.$i18n.locales as any[]).filter((i: any) => i.code !== this.$i18n.locale);
    },
    direction(): 'rtl' | 'ltr' {
      return <'rtl' | 'ltr'> this.$i18n.localeProperties?.dir;
    },
  },
});
</script>

<style>
.new-transition {
  -webkit-transition: transform 1s cubic-bezier(.19,1,.22,1) 0s;
  -moz-transition: transform 1s cubic-bezier(.19,1,.22,1) 0s;
  -o-transition: transform 1s cubic-bezier(.19,1,.22,1) 0s;
  transition: transform 1s cubic-bezier(.19,1,.22,1) 0s;
}

* {
  box-sizing: border-box;
}
</style>
