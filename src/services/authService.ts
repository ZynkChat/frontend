import { api } from '@/lib/axios'
import type { SignInPayload, SignInResponse, SignUpPayload } from '@/types/auth'
import type { IUser } from '@/types/user'

export const authService = {
  signUp: (payload: SignUpPayload): Promise<void> =>
    api.post('/auth/signup', payload),

  signIn: (payload: SignInPayload): Promise<SignInResponse> =>
    api.post('/auth/signin', payload).then((r) => r.data),

  signOut: (): Promise<void> => api.post('/auth/signout'),

  fetchUserInfo: (): Promise<IUser> =>
    api.get('/users/info').then((r) => r.data),

  refresh: (): Promise<string> =>
    api.post('/auth/refresh').then((r) => r.data.accessToken),
}
