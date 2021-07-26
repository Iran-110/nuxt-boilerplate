<template>
  <div class="min-h-screen flex flex-col">
    <div class="flex-1 bg-gray-100">
      <div class="text-center text-xl font-bold">{{ $t('panel.adminPanel') }}</div>
      <div class="md:container mx-auto flex space-s-3 py-4">
        <div class="w-1/4 sm:pe-2">
          <div class="flex flex-col space-y-2 font-bold text-lg">
            <nuxt-link v-if="ability.can('manage', 'Profile')" :to="localePath('/panel')" exact class="flex items-center space-s-2 py-3 px-4 rounded border border-blue-100 bg-blue-50 hover:border-blue-200 hover:bg-blue-100"><span>{{ $t('panel.profile') }}</span></nuxt-link>
            <nuxt-link v-if="ability.can('manage', 'Product')" :to="localePath('/panel/products')" class="flex items-center space-s-2 py-3 px-4 rounded border border-blue-100 bg-blue-50 hover:border-blue-200 hover:bg-blue-100"><span>{{ $t('panel.products') }}</span></nuxt-link>
          </div>
        </div>
        <Nuxt class="w-3/4" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import {AppAbility, defineAbilityFor, User} from '~/plugins/auth/ability';

export default Vue.extend({
  name: 'DashboardLayout',
  middleware: ['auth'],
  head () {
    return {
      bodyAttrs: {
        dir: this.$i18n.localeProperties?.dir || 'auto',
      }
    };
  },
  computed: {
    ability(): AppAbility {
      return defineAbilityFor(<User><unknown>(this.$auth.user));
    },
  },
});
</script>

<style scoped>
a.nuxt-link-active {
  @apply bg-blue-200 border-blue-300;
}
</style>
