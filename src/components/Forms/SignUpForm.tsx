"use client"

import { useSignUp } from "@/stores/auth/hooks/useSignUp"
import type { SignUpPayload } from "@/types/auth"
import { useLingui } from "@lingui/react"
import {
  Button,
  Group,
  PasswordInput,
  Stack,
  Text,
  TextInput,
} from "@mantine/core"
import { Form, useForm } from "@mantine/form"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useCallback } from "react"

export const SignUpForm: React.FC = () => {
  const i18n = useLingui()
  const router = useRouter()
  const { mutate, isPending } = useSignUp()

  const formSignUp = useForm<SignUpPayload>({
    mode: "uncontrolled",
    initialValues: {
      lastName: "",
      firstName: "",
      username: "",
      email: "",
      password: "",
    },

    validate: {
      lastName: (value) =>
        value.length > 1 ? null : i18n._("Last name is required"),
      firstName: (value) =>
        value.length > 1 ? null : i18n._("First name is required"),
      username: (value) =>
        value.length >= 3
          ? null
          : i18n._("Username must be at least 3 characters"),
      email: (value) =>
        /^\S+@\S+$/.test(value) ? null : i18n._("Invalid email"),
      password: (value) =>
        value.length >= 8
          ? null
          : i18n._("Password must be at least 8 characters"),
    },
  })

  const handleSubmit = useCallback(
    (value: SignUpPayload) => {
      mutate(value, {
        onSuccess: () => router.push("/auth/sign-in"),
      })
    },
    [mutate, router],
  )

  return (
    <Form form={formSignUp} onSubmit={handleSubmit}>
      <Stack gap={25} py={15}>
        <Group grow align="flex-start">
          <TextInput
            label={i18n._("First Name")}
            placeholder={i18n._("John")}
            key={formSignUp.key("firstName")}
            {...formSignUp.getInputProps("firstName")}
          />
          <TextInput
            label={i18n._("Last Name")}
            placeholder={i18n._("Doe")}
            key={formSignUp.key("lastName")}
            {...formSignUp.getInputProps("lastName")}
          />
        </Group>
        <TextInput
          label={i18n._("Username")}
          placeholder={i18n._("john")}
          key={formSignUp.key("username")}
          {...formSignUp.getInputProps("username")}
        />
        <TextInput
          label={i18n._("Email")}
          placeholder={i18n._("john@gmail.com")}
          key={formSignUp.key("email")}
          {...formSignUp.getInputProps("email")}
        />
        <PasswordInput
          label={i18n._("Password")}
          placeholder="*******"
          key={formSignUp.key("password")}
          {...formSignUp.getInputProps("password")}
        />

        <Button
          type="submit"
          disabled={!formSignUp.isDirty()}
          loading={isPending}
        >
          {i18n._("Sign Up")}
        </Button>

        <Text size="sm" ta="center">
          {i18n._("Already have an account?")}{" "}
          <Text
            component={Link}
            href="/auth/sign-in"
            c="primary"
            td="underline"
          >
            {i18n._("Sign In")}
          </Text>
        </Text>
      </Stack>
    </Form>
  )
}
