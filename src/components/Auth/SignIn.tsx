"use client"

import { Box, Grid, Image, Paper, Stack, Text, Title } from "@mantine/core"
import classes from "./Auth.module.css"
import { Logo } from "../Logo"
import { useLingui } from "@lingui/react"
import { SignInForm } from "../Forms/SignInForm"

export const SignIn: React.FC = () => {
  const i18n = useLingui()
  return (
    <Paper className={classes.paperWrapper}>
      <Grid>
        {/* Form */}
        <Grid.Col span={{ base: 12, sm: 6 }} bg="#fff" p="xl">
          <Stack align="center" gap={10}>
            <Logo />
            <Title order={2}>{i18n._("Welcome back")}</Title>
            <Text>{i18n._("Sign in to your account")}</Text>
          </Stack>

          {/* Form */}
          <SignInForm />
        </Grid.Col>

        {/* Image placeholder */}
        <Grid.Col span={6} visibleFrom="sm">
          <Box h={450} w={450}>
            <Image w="100%" h="100%" src="/placeholder.png" alt="Sign In" />
          </Box>
        </Grid.Col>
      </Grid>
    </Paper>
  )
}
