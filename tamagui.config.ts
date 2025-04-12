import { createFont, createTamagui } from '@tamagui/core';

const fonts = createFont({
  family: 'OpenSans',
  size: {
    xs: 10,
    sm: 12,
    md: 14,
    lg: 18,
    xl: 24,
  },
  lineHeight: {
    xs: 12,
    sm: 16,
    md: 20,
    lg: 24,
    xl: 30,
  },
  weight: {
    '200': 'extraLight',
    '300': 'light',
    '400': 'regular',
    '500': 'medium',
    '600': 'semibold',
    '700': 'bold',
    '800': 'extrabold',
    '900': 'black',
    extraLight: '200',
    light: '300',
    regular: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
    extrabold: '800',
    black: '900',
  },
});

const config = createTamagui({
  // act like CSS variables at your root
  tokens: {
    // width="$sm"
    size: { sm: 8, md: 12, lg: 20 },
    // margin="$-sm"
    space: { sm: 4, md: 8, lg: 12, xl: 20 },
    // radius="$none"
    radius: { none: 0, sm: 3 },
    color: { white: '#fff', black: '#000' },
  },
  fonts: {
    OpenSans: fonts,
  },
  themes: {
    light: {
      bg: '#f2f2f2',
      color: '#fff',
      primary: 'red',
    },
    dark: {
      bg: '#111',
      color: '#000',
      primary: '#0A84FF',
    },
  },

  // media query definitions can be used to style,
  // but also can be used with "groups" to do container queries by size:
  media: {
    sm: { maxWidth: 860 },
    gtSm: { minWidth: 860 + 1 },
    short: { maxHeight: 820 },
    hoverNone: { hover: 'none' },
    pointerCoarse: { pointer: 'coarse' },
  },

  shorthands: {
    // <View px={20} />
    px: 'paddingHorizontal',
  },

  settings: {
    disableSSR: true, // for client-side apps gains a bit of performance
    allowedStyleValues: 'somewhat-strict-web', // if targeting only web
  },
});

export default config;

// get typescript types on @tamagui/core imports:
type AppConfig = typeof config;
declare module '@tamagui/core' {
  interface TamaguiCustomConfig extends AppConfig {}
}
