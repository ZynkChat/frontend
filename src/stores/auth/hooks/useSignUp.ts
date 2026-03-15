'use client'

import { authService } from '@/services/authService'
import type { SignUpPayload } from '@/types/auth'
import { useLingui } from '@lingui/react'
import { notifications } from '@mantine/notifications'
import { useMutation } from '@tanstack/react-query'
import type { AxiosError } from 'axios'
import { useRouter } from 'next/navigation'

export const useSignUp = () => {
  const i18n = useLingui()
  const router = useRouter()

  return useMutation({
    mutationFn: (payload: SignUpPayload) => authService.signUp(payload),
    onSuccess: () => {
      notifications.show({
        title: i18n._('Success'),
        message: i18n._(
          'Sign up successfully. You will be redirected to the login page.',
        ),
        color: 'green',
      })
      router.push('/auth/sign-in')
    },
    onError: (error: AxiosError<{ message: string }>) => {
      notifications.show({
        title: i18n._('Error'),
        message:
          error.response?.data?.message ?? i18n._('Something went wrong'),
        color: 'red',
      })
    },
  })
}
