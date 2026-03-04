import { DEFAULT_THEME, createTheme, virtualColor } from '@mantine/core'
import { colors } from './colors'
import { components } from './components'
import { poppins, roboto } from './fonts'

export const theme = createTheme({
  breakpoints: {
    xs: '30em',
    sm: '48em',
    md: '64em',
    lg: '74em',
    xl: '90em',
    xxl: '100em',
  },

  autoContrast: true,
  defaultRadius: 'sm',
  cursorType: 'pointer',
  fontFamily: roboto.style.fontFamily,
  fontFamilyMonospace: roboto.style.fontFamily,
  headings: {
    fontFamily: `${poppins.style.fontFamily}, ${DEFAULT_THEME.fontFamily}`,
    fontWeight: '600',
  },
  components: { ...components },

  white: '#ffffff',
  black: '#4b575b',
  primaryColor: 'primary',
  colors: {
    primary: virtualColor({
      name: 'primary',
      light: 'baseGreen',
      dark: 'appDark',
    }),
    ...colors,
  },
  primaryShade: {
    light: 6,
    dark: 6,
  },
})
