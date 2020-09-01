import color from 'tinycolor2';

/**
 * Primary Color
 */
const base = {
  main: '#F2FAF7',
  light: '',
  lightest: '',
  dark: '',
  darker: '',
  contrastText: '#2E3136',
};

/**
 * Secondary color
 */
const secondary = {
  main: '#2E3136',
  light: '#42464D',
  lightest: '',
  dark: '',
  darker: '',
  contrastText: '#F2FAF7',
};

/**
 * Accent Colors
 */
const primary = {
  main: '#24F2C2',
  light: '',
  lightest: '',
  dark: '#17BC9A',
  darker: '',
};

/**
 * Background colors
 */
const background = {
  paper: secondary.main,
  default: secondary.main,
};

/**
 * Pallette Type
 */
const type = 'dark';

/**
 * Common colors
 */
const common = {
  black: secondary.main,
  white: base.main,
};

/**
 * Text Color
 */
const text = {
  primary: base.main,
  secondary: color(base.main)
    .setAlpha(0.7)
    .toRgbString(),
  disabled: color(base.main)
    .setAlpha(0.5)
    .toRgbString(),
  hint: color(base.main)
    .setAlpha(0.5)
    .toRgbString(),
  icon: color(base.main)
    .setAlpha(0.5)
    .toRgbString(),
};

export default {
  type,
  common,
  primary,
  secondary,
  base,
  background,
  text,
};
