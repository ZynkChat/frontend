'use client'

import { useSignIn } from '@/stores/auth/hooks/useSignIn'
import type { SignInPayload } from '@/types/auth'
import { useLingui } from '@lingui/react'
import { Button, PasswordInput, Stack, Text, TextInput } from '@mantine/core'
import { Form, useForm } from '@mantine/form'
import Link from 'next/link'
import { useCallback } from 'react'

export const SignInForm: React.FC = () => {
  const i18n = useLingui()

  const { mutate, isPending } = useSignIn()

  const formSignIn = useForm<SignInPayload>({
    mode: 'uncontrolled',
    initialValues: {
      username: '',
      password: '',
    },

    validate: {
      username: (value) =>
        value.length > 0 ? null : i18n._('Username is required'),
      password: (value) =>
        value.length > 0 ? null : i18n._('Password is required'),
    },
  })

  const handleSubmit = useCallback(
    (value: SignInPayload) => mutate(value),
    [mutate],
  )

  return (
    <Form form={formSignIn} onSubmit={handleSubmit}>
      <Stack gap={25} py={15}>
        <TextInput
          label={i18n._('Username')}
          placeholder={i18n._('john')}
          key={formSignIn.key('username')}
          {...formSignIn.getInputProps('username')}
        />
        <PasswordInput
          label={i18n._('Password')}
          placeholder="*******"
          key={formSignIn.key('password')}
          {...formSignIn.getInputProps('password')}
        />

        <Button
          type="submit"
          loading={isPending}
          disabled={!formSignIn.isDirty()}
        >
          {i18n._('Sign In')}
        </Button>

        <Text size="sm" ta="center">
          {i18n._("Don't have an account?")}{' '}
          <Text
            component={Link}
            href="/auth/sign-up"
            c="primary"
            td="underline"
          >
            {i18n._('Sign Up')}
          </Text>
        </Text>
      </Stack>
    </Form>
  )
}
