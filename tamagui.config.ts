import { createFont, createTamagui } from '@tamagui/core';

const opensansReqular = createFont({
  family: 'OpenSans',
  size: { sm: 12, md: 14, lg: 16 },
});
const opensansBold = createFont({
  family: 'OpenSans-Bold',
  size: { sm: 12, md: 14, lg: 16 },
});
const opensansSemiBold = createFont({
  family: 'OpenSans-SemiBold',
  size: { sm: 12, md: 14, lg: 16 },
});
const opensansLight = createFont({
  family: 'OpenSans-Light',
  size: { sm: 12, md: 14, lg: 16 },
});
const opensansExtraBold = createFont({
  family: 'OpenSans-ExtraBold',
  size: { sm: 12, md: 14, lg: 16 },
});

const config = createTamagui({
  // act like CSS variables at your root
  tokens: {
    size: { sm: 8, md: 12, lg: 20 },
    space: { sm: 4, md: 8, lg: 12, xl: 20 },
    color: { white: '#fff', black: '#000' },
  },
  fonts: {
    OpenSans: opensansReqular,
    'OpenSans-Bold': opensansBold,
    'OpenSans-SemiBold': opensansSemiBold,
    'OpenSans-Light': opensansLight,
    'OpenSans-ExtraBold': opensansExtraBold,
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
