import { createBox, createText, createTheme } from '@shopify/restyle';

const theme = createTheme({
  colors: {
    primary1: '#F86D36',
    primary2: '#F5AD90',
    primary3: '#FFE7DE',
    accent1: '#36C1F8',
    accent2: '#CDF1FF',
    sematic1: '#FF5572',
    sematic2: '#12A537',
    sematic3: '#FA1E1E',
    neutral1: '#2B2E3C',
    neutral2: '#6D727A',
    neutral3: '#96999F',
    neutral4: '#ACB1B6',
    neutral5: '#EDECEC',
    neutral6: '#F6F6F7',
    white: '#FFFFFF',
    gold: '#FFC107',
    black: '#000000',
    transparent: 'transparent',
  },
  spacing: {
    none: 0,
    xs: 4,
    s: 8,
    m: 16,
    l: 24,
    xl: 32,
    '2xl': 48,
    '3xl': 64,
    '4xl': 88,
  },
  borderRadii: {
    '2xs': 2,
    xs: 4,
    s: 8,
    m: 16,
    l: 24,
    xl: 32,
  },
  breakpoints: {
    phone: 0,
    tablet: 768,
  },
  textVariants: {
    largeTitle: {
      fontFamily: 'Roboto-Bold',
      fontSize: 28,
      lineHeight: 48,
      color: 'neutral1',
    },
    title: {
      fontFamily: 'Roboto-Bold',
      fontSize: 24,
      lineHeight: 32,
      color: 'neutral1',
    },
    headline1: {
      fontFamily: 'Roboto-Medium',
      fontSize: 20,
      lineHeight: 32,
      color: 'neutral1',
    },
    headline2: {
      fontFamily: 'Roboto-Bold',
      fontSize: 18,
      lineHeight: 28,
      color: 'neutral1',
    },
    headline3: {
      fontFamily: 'Roboto-Regular',
      fontSize: 18,
      lineHeight: 28,
      color: 'neutral2',
    },
    caption: {
      fontFamily: 'Roboto-Medium',
      fontSize: 12,
      lineHeight: 16,
      color: 'neutral1',
    },
    body1: {
      fontFamily: 'Roboto-Bold',
      fontSize: 16,
      lineHeight: 24,
      color: 'neutral1',
    },
    body2: {
      fontFamily: 'Roboto-Medium',
      fontSize: 16,
      lineHeight: 24,
      color: 'neutral1',
    },
    body3: {
      fontFamily: 'Roboto-Medium',
      fontSize: 14,
      lineHeight: 20,
      color: 'neutral1',
    },
    body4: {
      fontFamily: 'Roboto-Regular',
      fontSize: 14,
      lineHeight: 20,
      color: 'neutral1',
    },
    content: {
      fontFamily: 'Literata-Medium',
      fontSize: 14,
      lineHeight: 24,
      color: 'neutral1',
    },
    base: {
      fontFamily: 'Roboto-Regular',
      fontSize: 16,
      lineHeight: 24,
      color: 'neutral1',
    },
  },
});

export type Theme = typeof theme;

export const Box = createBox<Theme>();
export const Text = createText<Theme>();

export default theme;
