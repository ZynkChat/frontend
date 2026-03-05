"use client"

import { useLingui } from "@lingui/react"
import { Button, PasswordInput, Stack, Text, TextInput } from "@mantine/core"
import { Form, useForm } from "@mantine/form"
import Link from "next/link"
import { useCallback } from "react"

type formSignInDataType = {
  username: string
  password: string
}

export const SignInForm: React.FC = () => {
  const i18n = useLingui()

  const formSignIn = useForm<formSignInDataType>({
    mode: "uncontrolled",
    initialValues: {
      username: "",
      password: "",
    },

    validate: {
      username: (value) =>
        value.length > 0 ? null : i18n._("Username is required"),
      password: (value) =>
        value.length > 0 ? null : i18n._("Password is required"),
    },
  })

  const handleSubmit = useCallback(
    async (value: formSignInDataType) => {
      console.log(value)
    },
    [i18n],
  )

  return (
    <Form form={formSignIn} onSubmit={handleSubmit}>
      <Stack gap={25} py={15}>
        <TextInput
          label={i18n._("Username")}
          placeholder={i18n._("sam")}
          key={formSignIn.key("username")}
          {...formSignIn.getInputProps("username")}
        />
        <PasswordInput
          label={i18n._("Password")}
          placeholder="*******"
          key={formSignIn.key("password")}
          {...formSignIn.getInputProps("password")}
        />

        <Button type="submit">{i18n._("Sign In")}</Button>

        <Text size="sm" ta="center">
          {i18n._("Don't have an account?")}{" "}
          <Text
            component={Link}
            href="/auth/sign-up"
            c="primary"
            td="underline"
          >
            {i18n._("Sign Up")}
          </Text>
        </Text>
      </Stack>
    </Form>
  )
}
