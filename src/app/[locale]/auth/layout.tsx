import { LayoutAuth } from "@/components/Layouts/LayoutAuth"

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <LayoutAuth>{children}</LayoutAuth>
}
