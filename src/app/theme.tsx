import { extendTheme } from '@chakra-ui/react'
import { openSans, sourceSans } from './fonts'

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
    green: '#4DE3B0',
    greenDark: '#00AE8F',
    red: '#D43B3B',
    redDark: '#903030',
    bgWhite: {
      backgroundColor: 'white',
      color: 'dark',
    },
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
            _disabled: {
              bg: 'gray.200',
            },
          },
        },
        outline: {
          color: 'gray.200',
          _hover: {
            color: 'gray.800',
            bg: 'white',
          },
        },
      },
      defaultProps: {
        variant: 'neutral',
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
      baseStyle: {
        dialog: {
          bg: 'dark',
          padding: '1rem 3rem',
        },
      },
      variants: {
        success: {
          dialog: {
            outline: '5px solid var(--chakra-colors-green)',
          },
        },
        error: {
          dialog: {
            outline: '5px solid var(--chakra-colors-red)',
          },
        },
      },
    },
    Input: {
      sizes: {
        xl: {
          field: {
            fontSize: '2rem',
            fontWeight: 'bold',
            borderRadius: 'xl',
          },
        },
      },
      baseStyle: {
        field: {
          border: 0,
          caretColor: 'transparent',
        },
      },
      variants: {
        default: {
          field: {
            bg: 'grey',
            _focus: {
              bg: 'primary',
            },
          },
        },
        success: {
          field: {
            bg: 'greenDark',
            _focus: {
              bg: 'green',
            },
          },
        },
        error: {
          field: {
            bg: 'redDark',
            _focus: {
              bg: 'red',
            },
          },
        },
      },
    },
  },
})
