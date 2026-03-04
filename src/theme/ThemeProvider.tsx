import { DirectionProvider, MantineProvider } from '@mantine/core'
import { Notifications } from '@mantine/notifications'
import type { PropsWithChildren } from 'react'
import { theme } from './theme'

export const ThemeProvider: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <DirectionProvider>
      <MantineProvider theme={theme} defaultColorScheme="light">
        <Notifications limit={1} />
        {children}
      </MantineProvider>
    </DirectionProvider>
  )
}
