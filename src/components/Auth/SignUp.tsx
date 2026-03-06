'use client'

import { useLingui } from '@lingui/react'
import {
  Box,
  Grid,
  Group,
  Image,
  Paper,
  Stack,
  Text,
  Title,
} from '@mantine/core'
import { SignUpForm } from '../Forms/SignUpForm'
import { Logo } from '../Logo'
import classes from './Auth.module.css'

export const SignUp: React.FC = () => {
  const i18n = useLingui()

  return (
    <Paper className={classes.paperWrapper}>
      <Grid>
        {/* Form */}
        <Grid.Col span={{ base: 12, sm: 6 }} className={classes.col}>
          <Stack align="center" gap={10}>
            <Logo />
            <Title order={2}>{i18n._('Create a Zynk Account')}</Title>
            <Text>{i18n._('Welcome! Sign up to get started!')}</Text>
          </Stack>

          {/* Form */}
          <SignUpForm />
        </Grid.Col>

        {/* Image placeholder */}
        <Grid.Col span={6} visibleFrom="sm">
          <Group miw={450} h="100%" align="center">
            <Image w="100%" src="/placeholderSignUp.png" alt="Sign Up" />
          </Group>
        </Grid.Col>
      </Grid>
    </Paper>
  )
}
