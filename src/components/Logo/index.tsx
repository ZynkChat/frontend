import { Box, Image } from "@mantine/core"

export const Logo: React.FC = () => {
  return (
    <Box w={50} h={40}>
      <Image w="100%" h="100%" src="/logo.svg" alt="Logo" />
    </Box>
  )
}
