import { HydrationBoundary, dehydrate } from '@tanstack/react-query'
import type { PropsWithChildren } from 'react'

import { getQueryClient } from './queryClient'

export const QueryHydrationBoundary: React.FC<PropsWithChildren> = ({
  children,
}) => {
  const queryClient = getQueryClient()
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      {children}
    </HydrationBoundary>
  )
}
