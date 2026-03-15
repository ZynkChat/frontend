import { i18nRouter } from 'next-i18n-router'
import type { NextRequest } from 'next/server'
import { i18n } from './i18n/i18n-config'

export async function middleware(request: NextRequest) {
  return i18nRouter(request, {
    ...i18n,
    prefixDefault: false,
  })
}

export const config = {
  matcher:
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|map|woff2|ttf|woff|eot)$).*)',
}
