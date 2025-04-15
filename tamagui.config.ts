import { createFont, createTamagui } from '@tamagui/core';

const opensansReqular = createFont({
  family: 'OpenSans',
  size: {},
});
const opensansBold = createFont({
  family: 'OpenSans-Bold',
  size: {},
});
const opensansSemiBold = createFont({
  family: 'OpenSans-SemiBold',
  size: {},
});
const opensansLight = createFont({
  family: 'OpenSans-Light',
  size: {},
});
const opensansExtraBold = createFont({
  family: 'OpenSans-ExtraBold',
  size: {},
});

const config = createTamagui({
  // act like CSS variables at your root
  tokens: {
    size: {},
    space: {},
    color: {
      // Brand shades
      'brand-25': '#FBFBFB',
      'brand-50': '#F0F0F0',
      'brand-100': '#E3E3E3',
      'brand-200': '#D1D1D1',
      'brand-300': '#BDBDBD',
      'brand-400': '#A8A8A8',
      'brand-500': '#949494',
      'brand-600': '#7F7F7F',
      'brand-700': '#6B6B6B',
      'brand-800': '#575757',
      'brand-900': '#424242',
      'brand-950': '#2E2E2E',
      'brand-1000': '#1F1F1F',

      // Accent shades
      'accent-25': '#F7F7F7',
      'accent-50': '#F0F0F0',
      'accent-100': '#E3E3E3',
      'accent-200': '#D1D1D1',
      'accent-300': '#BDBDBD',
      'accent-400': '#A8A8A8',
      'accent-500': '#949494',
      'accent-600': '#7F7F7F',
      'accent-700': '#6B6B6B',
      'accent-800': '#575757',
      'accent-900': '#424242',
      'accent-950': '#2E2E2E',
      'accent-1000': '#121111',

      // Text shades
      'text-25': '#FBFBFB',
      'text-50': '#F0F0F0',
      'text-100': '#E3E3E3',
      'text-200': '#D1D1D1',
      'text-300': '#BDBDBD',
      'text-400': '#A8A8A8',
      'text-500': '#949494',
      'text-600': '#7F7F7F',
      'text-700': '#6B6B6B',
      'text-800': '#575757',
      'text-900': '#424242',
      'text-950': '#2E2E2E',
      'text-1000': '#121111',

      // Neutral shades
      'neutral-25': '#F6F7F9',
      'neutral-50': '#EDEFF3',
      'neutral-100': '#DDE2E9',
      'neutral-200': '#C8D0DA',
      'neutral-300': '#AFBBCA',
      'neutral-400': '#97A6BA',
      'neutral-500': '#7E91A9',
      'neutral-600': '#667C99',
      'neutral-700': '#566881',
      'neutral-800': '#3E454E',
      'neutral-900': '#354050',
      'neutral-950': '#31373F',
      'neutral-1000': '#1B1E23',

      // Success shades
      'success-25': '#F5FAF7',
      'success-50': '#EBF5EF',
      'success-100': '#D9EDE1',
      'success-200': '#C0E2CE',
      'success-300': '#A3D7B8',
      'success-400': '#85CCA2',
      'success-500': '#65C38C',
      'success-600': '#48BB78',
      'success-700': '#389F63',
      'success-800': '#2B824F',
      'success-900': '#1F653D',
      'success-950': '#15472A',
      'success-1000': '#0D301C',

      // Error shades
      'error-25': '#FCF2F2',
      'error-50': '#FAE5E5',
      'error-100': '#F8CECE',
      'error-200': '#F5ADAD',
      'error-300': '#F48585',
      'error-400': '#F56565',
      'error-500': '#F73131',
      'error-600': '#FB0404',
      'error-700': '#D60000',
      'error-800': '#AD0000',
      'error-900': '#850000',
      'error-950': '#5C0000',
      'error-1000': '#3D0000',

      // Warning shades
      'warning-25': '#FCFAF3',
      'warning-50': '#F9F5E6',
      'warning-100': '#F5EDD1',
      'warning-200': '#F1E3B2',
      'warning-300': '#EDD88C',
      'warning-400': '#EBCE66',
      'warning-500': '#ECC94B',
      'warning-600': '#ECBD13',
      'warning-700': '#CAA10C',
      'warning-800': '#A78406',
      'warning-900': '#836702',
      'warning-950': '#5C4800',
      'warning-1000': '#3D3000',

      // Other colors
      background: '#141414',
      white: '#fff',
      black: '#000',
    },
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
