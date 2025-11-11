import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  colors: {
    brand: {
      50: '#fef6f8',
      100: '#fce5eb',
      200: '#f9c4d1',
      300: '#f6a1b7',
      400: '#f47fa0',
      500: '#db6686',
      600: '#ab4e6a',
      700: '#7b374e',
      800: '#4d2133',
      900: '#1f0a1a'
    }
  },
  fonts: {
    heading: `'Playfair Display', serif`,
    body: `'Open Sans', sans-serif`
  },
  components: {
    Button: {
      baseStyle: {
        borderRadius: 'md',
        fontWeight: 'medium'
      },
      variants: {
        solid: {
          bg: 'brand.500',
          color: 'white',
          _hover: {
            bg: 'brand.600'
          }
        }
      }
    }
  }
});

export default theme;
