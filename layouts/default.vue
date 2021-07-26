<template>
  <div class="min-h-screen flex flex-col bg-gray-100">
    <Nuxt />
  </div>
</template>

<script>
export default {
  head () {
    return {
      bodyAttrs: {
        dir: this.$i18n.localeProperties?.dir || 'auto',
      }
    };
  },
};
</script>

<style>
html {
  font-family:
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

input:focus, button:focus, a:focus {
  outline: none;
}

/*
 https://stackoverflow.com/questions/12906789/preventing-an-image-from-being-draggable-or-selectable-without-using-js
 https://stackoverflow.com/questions/704564/disable-drag-and-drop-on-html-elements
 */
img, .no-select {
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Old versions of Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none; /* Non-prefixed version, currently
                        supported by Chrome, Edge, Opera and Firefox */
  -webkit-user-drag: none;
  user-drag: none;

  -webkit-tap-highlight-color:  rgba(255, 255, 255, 0);
  -webkit-tap-highlight-color:  transparent;
}

* {
  -webkit-tap-highlight-color:  rgba(255, 255, 255, 0);
  -webkit-tap-highlight-color:  transparent;
}
</style>
