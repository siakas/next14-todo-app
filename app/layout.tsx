import { Providers } from '@/app/provider'
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
    <html className="light" lang="ja">
      <body className={inter.className}>
        <div className="m-auto max-w-5xl p-8">
          <Providers>{children}</Providers>
        </div>
      </body>
    </html>
  )
}
