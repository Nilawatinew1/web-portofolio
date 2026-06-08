'use client'

import * as React from 'react'
import {
  ThemeProvider as NextThemesProvider,
  type ThemeProviderProps,
} from 'next-themes'

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return (
    <NextThemesProvider 
      {...props} 
      forcedTheme="light" // 👈 Tambahkan ini untuk mengunci ke mode terang
      defaultTheme="light" // 👈 Tambahkan ini sebagai tema standar
    >
      {children}
    </NextThemesProvider>
  )
}