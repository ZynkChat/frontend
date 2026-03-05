import { SignIn } from "@/components/Auth/SignIn"
import { getDictionary } from "@/i18n/helper"

export async function generateMetadata(props: {
  params: Promise<{ locale: string }>
}) {
  const i18n = await getDictionary((await props.params).locale)

  return {
    title: i18n._("Sign In | Zynk Chat"),
    description: i18n._("Sign In | Zynk Chat"),
  }
}

export default function SignInPage() {
  return <SignIn />
}
