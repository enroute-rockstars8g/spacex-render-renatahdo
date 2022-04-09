import { extendTheme } from '@chakra-ui/react'

const colors = {
  teal: {
    100: '#E6FFFA',
    200: '#B2F5EA',
    300: '#81E6D9',
    400: '#4FD1C5',
    500: '#38B2AC',
    600: '#319795',
    700: '#2C7A7B',
    800: '#285E61',
    900: '#234E52',
  },
  red: {
    100: '#FFF5F5',
    200: '#FED7D7',
    300: '#FEB2B2',
    400: '#FC8181',
    500: '#F56565',
    600: '#E53E3E',
    700: '#C53030',
    800: '#9B2C2C',
    900: '#822727',
  },
  gray: {
    100: '#F7FAFC',
    200: '#F0F2F5',
    300: '#E2E8F0',
    400: '#CBD5E0',
    500: '#A0AEC0',
    600: '#718096',
    700: '#4A5568',
    800: '#2D3748',
    900: '#1A202C',
  },
}

const fontSizes = {
  xs: '0.75rem',
  sm: '0.9rem',
  md: '1rem',
  lg: '1.125rem',
  xl: '1.25rem',
  '2xl': '1.5rem',
  '3xl': '1.75rem',
  '4xl': '2.25rem',
  '5xl': '3rem',
  '6xl': '3.125rem',
  '7xl': '4rem',
}

const fontWeights = {
  extralight: 100,
  light: 200,
  normal: 300,
  medium: 400,
  bold: 600,
  extrabold: 600,
}

const lineHeights = {
  normal: 'normal',
  none: '1',
  shorter: '1.25',
  short: '1.375',
  base: '1.5',
  tall: '1.625',
  taller: '2.3',
}

const letterSpacings = {
  tighter: '-0.05rem',
  tight: '-0.025rem',
  normal: '0',
  wide: '0.025rem',
  wider: '0.05rem',
  widest: '0.1rem',
}

const textStyles = {
  h1: {
    fontSize: '2xl',
    color: 'teal.600',
    letterSpacing: 'wide',
  },
  h2: {
    fontSize: '2xl',
    color: 'gray.500',
    lineHeight: 'taller',
    letterSpacing: 'wide',
  },
  h3: {
    fontSize: 'xl',
    color: 'teal.600',
    lineHeight: 'taller',
    letterSpacing: 'wide',
    textTransform: 'uppercase',
  },
  paragraph: {
    color: 'gray.900',
    fontSize: 'lg',
    lineHeight: 'taller',
    letterSpacing: 'wide',
    textAlign: 'justify',
  },
  link: {
    color: 'teal.500',
    fontSize: 'sm',
    fontWeight: 'light',
    lineHeight: 'taller',
    letterSpacing: 'wide',
    _active: {
      border: '0',
    },
    _focus: {
      border: '0',
    },
    selected: {
      border: '0',
    },
  },
}

const components = {
  Button: {
    baseStyle: {
      letterSpacing: 'wide',
    },
    sizes: {
      lg: {
        h: '3rem',
        fontSize: 'lg',
        px: 'auto',
        w: '8rem',
      },
    },
    variants: {
      teal: {
        bg: 'white',
        color: 'teal.500',
        boxShadow: 'lg',
        border: '2px solid',
        borderColor: 'teal.500',
        borderRadius: '0.8rem',
        _hover: {
          bg: 'teal.500',
          border: '0',
          color: 'white',
          boxShadow: 'lg',
        },
        _active: {
          bg: 'teal.500',
          border: '0',
          color: 'white',
          boxShadow: 'lg',
        },
        _focus: {
          bg: 'teal.500',
          border: '0',
          color: 'white',
          boxShadow: 'lg',
        },
        _selected: {
          bg: 'secondary.500',
          border: '0',
          boxShadow: 'lg',
        },
      },
      gray: {
        bg: 'gray.500',
        color: 'white',
        boxShadow: 'lg',
        border: '0',
        borderRadius: '0.8rem',
        _hover: {
          bg: 'gray.600',
          border: '0',
          boxShadow: 'lg',
        },
        _active: {
          bg: 'gray.600',
          border: '0',
          boxShadow: 'lg',
        },
        _focus: {
          bg: 'gray.600',
          border: '0',
          boxShadow: 'lg',
        },
        _selected: {
          bg: 'gray.600',
          border: '0',
          boxShadow: 'lg',
        },
      },
    },
  },
}

export const customTheme = extendTheme({
  colors,
  fontSizes,
  fontWeights,
  lineHeights,
  letterSpacings,
  textStyles,
  components,
})
