'use client'

import { authService } from '@/services/authService'
import type { SignInPayload } from '@/types/auth'
import { useLingui } from '@lingui/react'
import { notifications } from '@mantine/notifications'
import { useMutation } from '@tanstack/react-query'
import type { AxiosError } from 'axios'
import { useRouter } from 'next/navigation'
import { useAuthActions } from '../AuthProvider'

export const useSignIn = () => {
  const i18n = useLingui()
  const router = useRouter()
  const { setAccessToken } = useAuthActions()

  return useMutation({
    mutationFn: (payload: SignInPayload) => authService.signIn(payload),
    onSuccess: async (data) => {
      setAccessToken(data.accessToken)

      notifications.show({
        title: i18n._('Success'),
        message: i18n._(data.message),
        color: 'green',
      })
      router.push('/')
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
