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
    neutral1: '#2B2E3C',
    neutral2: '#6D727A',
    neutral3: '#96999F',
    neutral4: '#ACB1B6',
    neutral5: '#EDECEC',
    neutral6: '#FFFFFF',
  },
  spacing: {
    xs: 4,
    s: 8,
    m: 16,
    l: 24,
    xl: 36,
    '2xl': 48,
    '3xl': 60,
  },
  borderRadii: {
    xs: 2,
    s: 4,
    m: 10,
    l: 25,
    xl: 50,
    '2xl': 75,
  },
  breakpoints: {
    phone: 0,
    tablet: 768,
  },
  textVariants: {
    largeTitle: {
      fontSize: 28,
      lineHeight: 48,
      fontFamily: 'Roboto-Bold',
      color: 'neutral1',
    },
    title: {
      fontSize: 24,
      lineHeight: 32,
      fontFamily: 'Roboto-Bold',
      color: 'neutral1',
    },
    headline1: {
      fontSize: 20,
      lineHeight: 32,
      fontFamily: 'Roboto-Medium',
      color: 'neutral1',
    },
    headline2: {
      fontSize: 18,
      lineHeight: 28,
      fontFamily: 'Roboto-Bold',
      color: 'neutral2',
    },
    caption: {
      fontSize: 12,
      lineHeight: 16,
      fontFamily: 'Roboto-Medium',
      color: 'neutral1',
    },
    body1: {
      fontSize: 16,
      lineHeight: 24,
      fontFamily: 'Roboto-Bold',
      color: 'neutral1',
    },
    body2: {
      fontSize: 16,
      lineHeight: 24,
      fontFamily: 'Roboto-Medium',
      color: 'neutral1',
    },
    body3: {
      fontSize: 14,
      lineHeight: 20,
      fontFamily: 'Roboto-Medium',
      color: 'neutral1',
    },
    body4: {
      fontSize: 14,
      lineHeight: 20,
      fontFamily: 'Roboto-Regular',
      color: 'neutral1',
    },
    content: {
      fontSize: 14,
      lineHeight: 24,
      fontFamily: 'Literata-Medium',
      color: 'neutral1',
    },
  },
});

export type Theme = typeof theme;

export const Box = createBox<Theme>();
export const Text = createText<Theme>();

export default theme;
