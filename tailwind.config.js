const colors = require('tailwindcss/colors');
const flattenColorPalette = require('tailwindcss/lib/util/flattenColorPalette').default;

module.exports = {
  // https://github.com/nuxt-community/tailwindcss-module/issues/319
  // mode: 'jit',

  purge: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.server_config.{js,ts}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: colors.white,
      blue: colors.blue,
      green: colors.emerald,
      gray: colors.coolGray,
      indigo: colors.indigo,
      purple: colors.purple,
      red: colors.red,
      yellow: colors.amber,
      black: colors.black,
    },
    extend: {
      boxShadow: {
        'center-red': '0 0 10px 2px rgba(255, 0, 0, 0.4), 0 0px 6px 1px rgba(255, 0, 0, 0.2)',
        'lg-center': '0 0 15px 0 rgba(0, 0, 0, 0.1), 0 0px 6px 0 rgba(0, 0, 0, 0.06)',
      },
      transitionProperty: {
        spacing: 'margin, padding',
      },
      listStyleType: false,
    },
    namedGroups: ['cart', 'image'],
  },
  variants: {
    extend: {
      width: ['group-hover', 'group-focus'],
      margin: ['group-hover', 'group-focus'],
      translate: ['group-hover', 'group-focus'],
      inset: ['group-hover'],
    },
  },
  plugins: [
    require('tailwindcss-rtl'),
    require("tailwindcss-named-groups"),

    ({ addUtilities, theme, variants }) => { /* e, */
      const colors = flattenColorPalette(theme('borderColor'));
      delete colors.default;

      const borderColorMap = Object.keys(colors)
        .map(color => ({
          [`.border-t-${color}`]: {borderTopColor: colors[color]},
          [`.border-r-${color}`]: {borderRightColor: colors[color]},
          [`.border-b-${color}`]: {borderBottomColor: colors[color]},
          [`.border-l-${color}`]: {borderLeftColor: colors[color]},
          [`.border-s-${color}`]: {borderLeftColor: colors[color]},
          [`.border-e-${color}`]: {borderLeftColor: colors[color]},
        }));
      const utilities = Object.assign({}, ...borderColorMap);

      addUtilities(utilities, variants('borderColor'));
    },
  ],
};
