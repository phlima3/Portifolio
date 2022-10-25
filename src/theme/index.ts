import { theme as chakraTheme, extendTheme } from "@chakra-ui/react";

const breakpoints = {
  start: "0px",
  sm: "320px",
  md: "768px",
  lg: "1024px",
  xl: "1366px",
};

const fonts = {
  ...chakraTheme.fonts,
  body: `'Montserrat', sans-serif`,
  heading: `'Montserrat', sans-serif`,
};

const colors = {
  ...chakraTheme.colors,
  background: {
    primary: {
      50: "#e3e3e3",
      100: "#bababa",
      200: "#8c8c8c",
      300: "#5e5e5e",
      400: "#3c3c3c",
      500: "#191919",
      600: "#161616",
      700: "#121212",
      800: "#0e0e0e",
      900: "#080808",
    },
    secondary: {
      50: "#ffe7e8",
      100: "#fec3c6",
      200: "#fd9ba0",
      300: "#fc7279",
      400: "#fc545d",
      500: "#fb3640",
      600: "#fa303a",
      700: "#fa2932",
      800: "#f9222a",
      900: "#f8161c",
    },
    tertiary: {
      50: "#f6f5fa",
      100: "#e9e6f2",
      200: "#dad5ea",
      300: "#cbc4e1",
      400: "#c0b8da",
      500: "#b5abd4",
      600: "#aea4cf",
      700: "#a59ac9",
      800: "#9d91c3",
      900: "#8d80b9",
    },
  },
  linears: {
    primary: "linear-gradient(135deg, #D9AFD9 0%, #97D9E1 33%)",
  },
  text: {
    primary: "#E0E0E0",
    secondary: "#A3A3A3",
    white: "#FFFFFF",
  },
};

const newTheme: any = extendTheme({
  fonts,
  colors,
  breakpoints,
  components: { Button: { baseStyle: { _focus: { boxShadow: "none" } } } },
});

export { newTheme };
