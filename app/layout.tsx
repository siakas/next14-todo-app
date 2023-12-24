import '@/styles/globals.css'
import { inter } from '@/utils/fonts'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  description: 'Generated by create next app',
  title: 'Create Next App',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body className={inter.className}>
        <div className="m-auto max-w-4xl p-8">{children}</div>
      </body>
    </html>
  )
}
