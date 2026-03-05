import { getDictionary } from "@/i18n/helper"
import { i18n } from "@/i18n/i18n-config"
import { Providers } from "@/providers"
import { roboto } from "@/theme/fonts"
import "@/theme/globals.css"
import { ColorSchemeScript, mantineHtmlProps } from "@mantine/core"

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ locale }))
}

export async function generateMetadata(props: {
  params: Promise<{ locale: string }>
}) {
  const i18n = await getDictionary((await props.params).locale)

  return {
    title: i18n._("Zynk Chat"),
    description: i18n._("Zynk Chat"),
  }
}

export default async function RootLayout({
  params,
  children,
}: {
  params: Promise<{ locale: string }>
  children: React.ReactNode
}) {
  const lang = (await params).locale as string
  const i18n = await getDictionary(lang)

  return (
    <html lang={lang} {...mantineHtmlProps}>
      <head>
        <ColorSchemeScript defaultColorScheme="light" />
        <link rel="icon" href="/logo.svg" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
      </head>
      <body>
        <Providers colorScheme="auto" locale={lang} messages={i18n.messages}>
          {children}
        </Providers>
      </body>
    </html>
  )
}
