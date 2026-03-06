'use client'

import { useLingui } from '@lingui/react'
import { Box, Grid, Image, Paper, Stack, Text, Title } from '@mantine/core'
import { SignInForm } from '../Forms/SignInForm'
import { Logo } from '../Logo'
import classes from './Auth.module.css'

export const SignIn: React.FC = () => {
  const i18n = useLingui()
  return (
    <Paper className={classes.paperWrapper}>
      <Grid>
        {/* Form */}
        <Grid.Col span={{ base: 12, sm: 6 }} className={classes.col}>
          <Stack align="center" gap={10}>
            <Logo />
            <Title order={2}>{i18n._('Welcome back')}</Title>
            <Text>{i18n._('Sign in to your Zynk account')}</Text>
          </Stack>

          {/* Form */}
          <SignInForm />
        </Grid.Col>

        {/* Image placeholder */}
        <Grid.Col span={6} visibleFrom="sm">
          <Box miw={450}>
            <Image w="100%" h="100%" src="/placeholder.png" alt="Sign In" />
          </Box>
        </Grid.Col>
      </Grid>
    </Paper>
  )
}
