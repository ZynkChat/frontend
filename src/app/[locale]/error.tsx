'use client'

import { useLingui } from '@lingui/react'
import { Button, Container, Group, Text, Title, rem } from '@mantine/core'
import { IconHome, IconReload } from '@tabler/icons-react'
import Link from 'next/link'
import { useEffect } from 'react'

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  const { i18n } = useLingui()

  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <Container
      size="md"
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        textAlign: 'center',
        padding: rem(20),
      }}
    >
      <div style={{ marginBottom: rem(50) }}>
        <div
          style={{
            fontSize: rem(80),
            marginBottom: rem(20),
          }}
        >
          😕
        </div>

        <Title
          order={1}
          style={{
            fontSize: rem(36),
            fontWeight: 700,
            marginBottom: rem(16),
          }}
        >
          {i18n._('Something went wrong')}
        </Title>

        <Text
          c="dimmed"
          size="lg"
          style={{
            maxWidth: rem(500),
            margin: '0 auto',
            marginBottom: rem(30),
          }}
        >
          {i18n._("We're having trouble loading this page. Please try again.")}
        </Text>

        <Group justify="center" gap="md">
          <Button
            leftSection={<IconReload size={18} />}
            onClick={() => reset()}
            size="md"
            variant="light"
          >
            {i18n._('Try again')}
          </Button>

          <Button
            component={Link}
            href="/"
            leftSection={<IconHome size={18} />}
            size="md"
          >
            {i18n._('Back to Home')}
          </Button>
        </Group>

        {process.env.NODE_ENV === 'development' && (
          <details
            style={{
              marginTop: rem(40),
              textAlign: 'left',
              maxWidth: rem(600),
              margin: `${rem(40)} auto 0`,
            }}
          >
            <summary
              style={{
                cursor: 'pointer',
                color: 'var(--mantine-color-dimmed)',
                fontSize: rem(14),
              }}
            >
              {i18n._('Error details (dev only)')}
            </summary>
            <pre
              style={{
                marginTop: rem(10),
                padding: rem(10),
                backgroundColor: 'var(--mantine-color-gray-1)',
                borderRadius: rem(4),
                fontSize: rem(12),
                overflow: 'auto',
              }}
            >
              {error.message}
            </pre>
          </details>
        )}
      </div>
    </Container>
  )
}
