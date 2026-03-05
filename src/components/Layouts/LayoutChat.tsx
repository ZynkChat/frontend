import { Box } from "@mantine/core"
import { PropsWithChildren } from "react"

type Props = PropsWithChildren

export const LayoutChat: React.FC<Props> = ({ children }) => {
  return <Box>{children}</Box>
}
