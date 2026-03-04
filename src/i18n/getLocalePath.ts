import { i18n } from './i18n-config'

export const getLocalePath = (locale: string | undefined) => {
  return locale &&
    i18n.locales.includes(locale) &&
    locale !== i18n.defaultLocale
    ? `/${locale}`
    : ''
}
