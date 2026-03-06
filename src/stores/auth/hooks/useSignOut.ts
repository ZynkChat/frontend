import { authService } from '@/services/authService'
import { useLingui } from '@lingui/react'
import { notifications } from '@mantine/notifications'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useAuthActions } from '../AuthProvider'

export const useSignOut = () => {
  const i18n = useLingui()
  const { clearAuth } = useAuthActions()
  const queryClient = useQueryClient()

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
    },
    onError: () =>
      notifications.show({
        title: i18n._('Error'),
        message: i18n._('Something went wrong'),
        color: 'red',
      }),
  })
}
