<template>
  <div class="flex-1 flex flex-col justify-center items-center">
    <div class="text-center text-xl font-bold">{{ $t('loginPage.title') }}</div>
    <div>{{ $t('loginPage.thisIsATestPage') }}</div>
    <div>{{ $t('loginPage.typeSomethingAndErase') }}</div>
    <ValidationProvider v-slot="{errors}" class="my-3" rules="required">
      <input v-model="username" type="text">
      <div v-if="errors && errors[0]" class="text-red-800">{{ errors[0] }}</div>
    </ValidationProvider>
    <nuxt-link :to="localePath('/')">{{ $t('homepage.title') }}</nuxt-link>
  </div>
</template>

<script lang="ts">
import {ValidationProvider} from "vee-validate";
import Vue from "vue";

export default Vue.extend({
  name: 'Login',
  components: {
    ValidationProvider,
  },
  layout: 'default',
  data() {
    return {
      username: '',
    };
  }
});
</script>

<style scoped>

</style>
