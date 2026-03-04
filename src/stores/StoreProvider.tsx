import type React from "react"
import type { PropsWithChildren } from "react"
import { ModalProvider } from "./modal/ModalProvider"

export const StoreProvider: React.FC<PropsWithChildren> = ({ children }) => {
  return <ModalProvider>{children}</ModalProvider>
}
