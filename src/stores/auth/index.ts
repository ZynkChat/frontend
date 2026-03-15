import type { IUser } from '@/types/user'
import { createStore } from 'zustand/vanilla'

export interface IAuth {
  readonly user: IUser | null
  readonly accessToken: string | null
}

export interface IAuthActions {
  readonly actions: {
    setUser: (user: IUser | null) => void
    setAccessToken: (accessToken: string | null) => void
    clearAuth: () => void
  }
}

export interface IAuthStore extends IAuth, IAuthActions {}

export const initAuthState: IAuth = {
  user: null,
  accessToken: null,
}

export type AuthStore = ReturnType<typeof createAuthStore>

export const createAuthStore = (initState: IAuth = initAuthState) => {
  return createStore<IAuthStore>()((set) => ({
    ...initState,
    actions: {
      setUser: (user) => set({ user }),
      setAccessToken: (accessToken) => set({ accessToken }),
      clearAuth: () => set(initAuthState),
    },
  }))
}

export const authStore = createAuthStore()
