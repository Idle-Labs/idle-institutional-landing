import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  config: {
    initialColorMode: "dark",
    useSystemColorMode: false,
  },
  fonts: {
    heading: `'Open Sans', sans-serif`,
    body: `"Source Sans Pro", sans-serif`,
  },
  colors: {
    white: "#FFFFFF",
    dark: "#1B1E27",
  },
  styles: {
    global: {
      body: {
        bg: "dark",
        color: "white",
      },
      a: {
        _hover: {
          textDecoration: "none",
        },
      },
    },
  },
  textStyles: {
    base: {
      fontSize: "sm",
      fontWeight: 500,
    },
  },
  components: {
    Button: {
      sizes: {
        xl: {
          fontSize: '1.5rem',
          padding: '1rem 1.5rem'
        }
      }
    }
  }
});
