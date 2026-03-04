import { QueryClientProvider } from '@tanstack/react-query'
import type React from 'react'
import type { PropsWithChildren } from 'react'

import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { getQueryClient } from './queryClient'

export const QueryProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const queryClient = getQueryClient()
  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}
