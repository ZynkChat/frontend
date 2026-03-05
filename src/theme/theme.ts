import { DEFAULT_THEME, createTheme, virtualColor } from "@mantine/core"
import { colors } from "./colors"
import { components } from "./components"
import { inter } from "./fonts"

export const theme = createTheme({
  breakpoints: {
    xs: "30em",
    sm: "48em",
    md: "64em",
    lg: "74em",
    xl: "90em",
    xxl: "100em",
  },

  autoContrast: true,
  defaultRadius: "lg",
  cursorType: "pointer",
  fontFamily: inter.style.fontFamily,
  fontFamilyMonospace: inter.style.fontFamily,
  headings: {
    fontFamily: `${inter.style.fontFamily}, ${DEFAULT_THEME.fontFamily}`,
    fontWeight: "700",
  },
  components: { ...components },
  white: "#f1f5f9",
  black: "#4b575b",
  primaryColor: "primary",
  colors: {
    primary: virtualColor({
      name: "primary",
      light: "basePurple",
      dark: "appDark",
    }),
    ...colors,
  },
  primaryShade: {
    light: 6,
    dark: 6,
  },
})
