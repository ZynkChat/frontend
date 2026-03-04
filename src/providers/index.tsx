"use client"

import { I18nProvider } from "@/i18n/I18nProvider"
import type { SupportedLocale } from "@/i18n/i18n-config"
import { QueryProvider } from "@/queries/client/QueryProvider"
import { StoreProvider } from "@/stores/StoreProvider"
import { ThemeProvider } from "@/theme/ThemeProvider"
import type { Messages } from "@lingui/core"
import type { MantineColorScheme } from "@mantine/core"
import type { PropsWithChildren } from "react"

export type ProvidersProps = PropsWithChildren<{
  colorScheme: MantineColorScheme
  locale: SupportedLocale
  messages: Messages
}>

export const Providers: React.FC<ProvidersProps> = ({
  children,
  locale,
  messages,
}) => {
  return (
    <I18nProvider initialLocale={locale} initialMessages={messages}>
      <ThemeProvider>
        <QueryProvider>
          <StoreProvider>{children}</StoreProvider>
        </QueryProvider>
      </ThemeProvider>
    </I18nProvider>
  )
}
