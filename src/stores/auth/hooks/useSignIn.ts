import { authService } from '@/services/authService'
import type { SignInPayload } from '@/types/auth'
import { useLingui } from '@lingui/react'
import { notifications } from '@mantine/notifications'
import { useMutation } from '@tanstack/react-query'
import { useAuthActions } from '../AuthProvider'

export const useSignIn = () => {
  const i18n = useLingui()
  const { setUser, setAccessToken } = useAuthActions()

  return useMutation({
    mutationFn: (payload: SignInPayload) => authService.signIn(payload),
    onSuccess: async (data) => {
      setAccessToken(data.accessToken)
      const user = await authService.fetchUserInfo()
      setUser(user)

      notifications.show({
        title: i18n._('Success'),
        message: i18n._('Welcome back to Zynk'),
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
