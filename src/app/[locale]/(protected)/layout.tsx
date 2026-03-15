"use client"

import { LayoutChat } from "@/components/Layouts/LayoutChat"
import { authService } from "@/services/authService"
import { useAuth, useAuthActions } from "@/stores/auth/AuthProvider"
import { useGetUser } from "@/stores/user/hooks/useGetUser"
import { useLingui } from "@lingui/react"
import { Center, Loader } from "@mantine/core"
import { notifications } from "@mantine/notifications"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"

export default function ProtectedLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const i18n = useLingui()
  const router = useRouter()
  const user = useAuth((state) => state.user)
  const accessToken = useAuth((state) => state.accessToken)
  const { setAccessToken } = useAuthActions()
  const { refetch } = useGetUser()
  const [starting, setStarting] = useState(true)

  const init = async () => {
    try {
      if (!accessToken) {
        const token = await authService.refresh()
        setAccessToken(token)
      }

      if (!user) {
        const result = await refetch()
        if (result.isError) {
          throw result.error
        }
      }
    } catch {
      notifications.show({
        title: i18n._("Session expired"),
        message: i18n._("Please login again"),
        color: "red",
      })
      router.replace("/auth/sign-in")
    } finally {
      setStarting(false)
    }
  }
  // biome-ignore lint/correctness/useExhaustiveDependencies: run once on mount
  useEffect(() => {
    init()
  }, [])

  if (starting) {
    return (
      <Center h={"100vh"}>
        <Loader />
      </Center>
    )
  }

  return <LayoutChat>{children}</LayoutChat>
}
