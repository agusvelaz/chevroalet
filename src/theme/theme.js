import { extendTheme } from '@chakra-ui/react';
import fonts from './font';
import colors from './colors';

// 2. Call `extendTheme` and pass your custom values
const theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: '#121212',
        color: '#fff',
        fontFamily: fonts.body,
      },
    },
  },
  components: {
    Button: {
      baseStyle: {
        textTransform: 'uppercase',
        fontWeight: 'bold',
        color: '#fff',
        bg:'#ffa600',
        _hover: {
          bg: '#8b5a00',
          // color:"#000",
        },
      },

    },
    Link: {
      baseStyle: {
        _hover: {
          textDecoration: 'none',
        },
      },
    },
  },

  colors,
  fonts,
});

export default theme;
