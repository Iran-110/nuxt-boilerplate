<template>
  <NuxtLink v-slot="{href, navigate, route, isActive, isExactActive}" custom :to="to">
    <a
      v-if="!custom"
      :href="href"
      @click="(ev) => onMouseClick(ev, navigate)"
      @mousedown="onMouseDown"
    >
      <slot :href="href" :navigate="navigate" :route="route" :isActive="isActive" :isExactActive="isExactActive" />
    </a>
    <slot
      v-else
      :href="href"
      :navigate="navigate"
      :route="route"
      :isActive="isActive"
      :isExactActive="isExactActive"
    />
  </NuxtLink>
</template>

<script>
import Vue from "vue";

export default Vue.extend({
  name: 'DNuxtLink',
  props: {
    to: {
      type: String,
      required: true,
    },
    custom: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      onMouseOver: null,
    };
  },
  methods: {
    onMouseClick(ev, navigate) {
      if (
        this.onMouseOver &&
        this.onMouseOver.x !== ev.clientX &&
        this.onMouseOver.y !== ev.clientY
      ) {
        ev.preventDefault();
        this.onMouseOver = null;
      } else {
        navigate(ev);
      }
    },
    onMouseDown(ev) {
      this.onMouseOver = {
        x: ev.clientX,
        y: ev.clientY,
      };
    },
  },
});
</script>

<style scoped>

</style>
