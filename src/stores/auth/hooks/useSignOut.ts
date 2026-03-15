'use client'

import { authService } from '@/services/authService'
import { useLingui } from '@lingui/react'
import { notifications } from '@mantine/notifications'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import type { AxiosError } from 'axios'
import { useRouter } from 'next/navigation'
import { useAuthActions } from '../AuthProvider'

export const useSignOut = () => {
  const i18n = useLingui()
  const router = useRouter()
  const queryClient = useQueryClient()
  const { clearAuth } = useAuthActions()

  return useMutation({
    mutationFn: authService.signOut,
    onSuccess: () => {
      clearAuth()
      queryClient.clear()

      notifications.show({
        title: i18n._('Success'),
        message: i18n._('Logout successfully'),
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
