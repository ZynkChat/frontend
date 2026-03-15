'use client'

import { type PropsWithChildren, createContext, useContext } from 'react'
import { useStore } from 'zustand'
import { useShallow } from 'zustand/react/shallow'
import type { StoreApi } from 'zustand/vanilla'
import { type IAuthStore, authStore } from '.'

export const AuthStoreContext = createContext<StoreApi<IAuthStore>>(authStore)

export const AuthProvider: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <AuthStoreContext.Provider value={authStore}>
      {children}
    </AuthStoreContext.Provider>
  )
}

export const useAuthStore = <T,>(selector: (store: IAuthStore) => T): T => {
  const store = useContext(AuthStoreContext)
  return useStore(store, selector)
}

export const useAuth = <T,>(selector: (store: IAuthStore) => T): T =>
  useAuthStore(useShallow(selector))

export const useAuthActions = () =>
  useAuthStore(useShallow((state) => state.actions))

export const useUser = () => useAuthStore(useShallow((state) => state.user))
