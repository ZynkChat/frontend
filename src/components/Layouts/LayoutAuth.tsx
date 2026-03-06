'use client'

import { useLingui } from '@lingui/react'
import { Anchor, Center, Container, Flex, Stack, Text } from '@mantine/core'
import type { PropsWithChildren } from 'react'

type Props = PropsWithChildren

export const LayoutAuth: React.FC<Props> = ({ children }) => {
  const i18n = useLingui()
  return (
    <Flex
      direction="column"
      p="md"
      w="100%"
      mih="100vh"
      bg="var(--bg-gradient-purple)"
      align="center"
      justify="center"
    >
      <Center mih="100%">
        <Stack w="100%" align="center">
          {children}

          <Text fz="xs" c="dimmed" ta="center">
            {i18n._('By continuing, you agree to our ')}
            <Anchor
              href="#"
              target="_blank"
              underline="always"
              c="inherit"
              fz="xs"
              fw={300}
            >
              {i18n._('Terms of Service')}
            </Anchor>
            {i18n._(' and ')}
            <Anchor
              href="#"
              target="_blank"
              underline="always"
              c="inherit"
              fz="xs"
              fw={300}
            >
              {i18n._('Privacy Policy')}
            </Anchor>
          </Text>
        </Stack>
      </Center>
    </Flex>
  )
}
