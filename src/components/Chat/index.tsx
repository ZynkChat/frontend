'use client'

import { useAuth } from '@/stores/auth/AuthProvider'
import { useSignOut } from '@/stores/auth/hooks/useSignOut'
import { Button } from '@mantine/core'

export const Chat: React.FC = () => {
  const user = useAuth((state) => state.user)
  console.log(user)

  const { mutate: signOut } = useSignOut()
  const handleSignOut = () => {
    signOut()
  }
  return (
    <>
      <Button onClick={handleSignOut}>logout</Button>
    </>
  )
}
