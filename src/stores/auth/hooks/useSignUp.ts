import { authService } from '@/services/authService'
import type { SignUpPayload } from '@/types/auth'
import { useLingui } from '@lingui/react'
import { notifications } from '@mantine/notifications'
import { useMutation } from '@tanstack/react-query'

export const useSignUp = () => {
  const i18n = useLingui()

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
    },
    onError: () =>
      notifications.show({
        title: i18n._('Error'),
        message: i18n._('Something went wrong'),
        color: 'red',
      }),
  })
}
