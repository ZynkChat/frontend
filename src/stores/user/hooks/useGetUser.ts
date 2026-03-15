import { authService } from '@/services/authService'
import { useAuthActions } from '@/stores/auth/AuthProvider'
import { useQuery } from '@tanstack/react-query'

export const useGetUser = () => {
  const { setUser } = useAuthActions()

  return useQuery({
    queryKey: ['user-info'],
    queryFn: async () => {
      const user = await authService.fetchUserInfo()
      setUser(user)
      return user
    },
    retry: false,
    enabled: false,
  })
}
