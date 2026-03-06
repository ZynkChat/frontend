'use client'

import {
  type PropsWithChildren,
  createContext,
  useContext,
  useRef,
} from 'react'
import { useStore } from 'zustand'
import { useShallow } from 'zustand/react/shallow'
import type { StoreApi } from 'zustand/vanilla'
import { type IAuthStore, createAuthStore } from '.'

export const AuthStoreContext = createContext<StoreApi<IAuthStore> | null>(null)

export const AuthProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const storeRef = useRef<StoreApi<IAuthStore> | null>(null)

  if (!storeRef.current) {
    storeRef.current = createAuthStore()
  }

  return (
    <AuthStoreContext.Provider value={storeRef.current}>
      {children}
    </AuthStoreContext.Provider>
  )
}

export const useAuthStore = <T,>(selector: (store: IAuthStore) => T): T => {
  const store = useContext(AuthStoreContext)
  if (!store) {
    throw new Error('useAuthStore must be used within an AuthProvider')
  }
  return useStore(store, selector)
}

export const useAuth = <T,>(selector: (store: IAuthStore) => T): T =>
  useAuthStore(useShallow(selector))

export const useAuthActions = () =>
  useAuthStore(useShallow((state) => state.actions))

export const useUser = () => useAuthStore(useShallow((state) => state.user))

export const useIsAuthenticated = () =>
  useAuthStore((state) => state.user !== null)
