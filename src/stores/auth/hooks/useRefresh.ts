import { authService } from '@/services/authService'
import { useLingui } from '@lingui/react'
import { notifications } from '@mantine/notifications'
import { useMutation } from '@tanstack/react-query'
import { useAuthActions } from '../AuthProvider'

export const useRefresh = () => {
  const i18n = useLingui()
  const { setAccessToken, setUser } = useAuthActions()

  return useMutation({
    mutationFn: authService.refresh,
    onSuccess: async (accessToken) => {
      setAccessToken(accessToken)
      const user = await authService.fetchUserInfo()
      setUser(user)
    },
    onError: () => {
      notifications.show({
        title: i18n._('Error'),
        message: i18n._('Session expired. Please login again.'),
        color: 'red',
      })
    },
  })
}
