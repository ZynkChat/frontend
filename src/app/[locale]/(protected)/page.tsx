import { Chat } from '@/components/Chat'
import { LayoutChat } from '@/components/Layouts/LayoutChat'
import { getDictionary } from '@/i18n/helper'

export async function generateMetadata(props: {
  params: Promise<{ locale: string }>
}) {
  const i18n = await getDictionary((await props.params).locale)

  return {
    title: i18n._('Zynk Chat'),
    description: i18n._('Zynk Chat'),
  }
}

export default function ChatPage() {
  return <Chat />
}
