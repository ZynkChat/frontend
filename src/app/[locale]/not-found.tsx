import { useLingui } from '@lingui/react'
import { Button, Container, Group, Text, Title, rem } from '@mantine/core'
import { IconArrowLeft } from '@tabler/icons-react'
import Link from 'next/link'

export default function NotFound() {
  const { i18n } = useLingui()

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
        <Title
          style={{
            fontSize: rem(120),
            fontWeight: 900,
            lineHeight: 1,
            marginBottom: rem(20),
            color: 'var(--mantine-color-blue-6)',
          }}
        >
          404
        </Title>

        <Title
          order={2}
          style={{
            fontSize: rem(32),
            marginBottom: rem(20),
          }}
        >
          {i18n._('Page not found')}
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
          {i18n._('The page you are looking for does not exist.')}
        </Text>

        <Group justify="center">
          <Button
            component={Link}
            href="/"
            leftSection={<IconArrowLeft size={20} />}
            size="md"
          >
            {i18n._('Go to home')}
          </Button>
        </Group>
      </div>
    </Container>
  )
}
