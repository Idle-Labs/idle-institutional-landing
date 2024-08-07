import { extendTheme } from "@chakra-ui/react";
import { openSans, sourceSans } from "./fonts";

export const theme = extendTheme({
  config: {
    initialColorMode: 'dark',
    useSystemColorMode: false,
  },
  fonts: {
    heading: openSans.style.fontFamily,
    body: sourceSans.style.fontFamily,
  },
  colors: {
    white: '#FFFFFF',
    dark: '#1B1E27',
    primary: '#1682FE',
    bgWhite: {
      backgroundColor: 'white',
      color: 'dark'
    }
  },
  styles: {
    global: {
      body: {
        bg: 'dark',
        color: 'white',
      },
      a: {
        _hover: {
          textDecoration: 'none',
        },
      },
    },
  },
  textStyles: {
    base: {
      fontSize: 'sm',
      fontWeight: 500,
    },
  },
  components: {
    Button: {
      variants: {
        neutral: {
          bg: 'white',
          color: 'gray.800',
          _hover: {
            bg: 'gray.200',
          },
        }
      },
      defaultProps: {
        variant: 'neutral'
      },
      sizes: {
        xl: {
          fontSize: '1.4rem',
          fontWeight: 600,
          padding: '1rem 1.5rem',
        },
      },
    },
    Modal: {
      variants: {
        dark: {
          dialog: {
            bg: 'dark',
            padding: '1rem 3rem'
          },
        }
      }
    },
    Input: {
      sizes: {
        xl: {
          field: {
            fontSize: '2rem',
            fontWeight: 'bold',
            borderRadius: 'xl'
          }
        }
      },
      variants: {
        dark: {
          field: {
            bg: 'grey',
            border: 0,
            caretColor: 'transparent',
            _focus: {
              bg: 'primary'
            }
          }
        }
      }
    }
  },
})
