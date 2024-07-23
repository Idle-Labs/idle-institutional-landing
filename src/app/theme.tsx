'use client'

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
      sizes: {
        xl: {
          fontSize: '1.4rem',
          fontWeight: 'bold',
          padding: '1rem 1.5rem',
        },
      },
    },
  },
})
