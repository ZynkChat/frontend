import { SignUp } from "@/components/Auth/SignUp"
import { getDictionary } from "@/i18n/helper"

export async function generateMetadata(props: {
  params: Promise<{ locale: string }>
}) {
  const i18n = await getDictionary((await props.params).locale)

  return {
    title: i18n._("Sign Up | Zynk Chat"),
    description: i18n._("Sign Up | Zynk Chat"),
  }
}

export default function SignUpPage() {
  return <SignUp />
}
