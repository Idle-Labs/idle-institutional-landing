import type { Metadata } from 'next'
import './globals.scss'
import { Providers } from './providers'

const baseUrl = new URL('https://institutional.idle.finance/')
export const metadata: Metadata = {
  metadataBase: baseUrl,
  title: 'Idle Institutional',
  description:
    'Modernizing credit markets to bring speed, programmability, and compliance advantages of blockchain tokenization.',
  openGraph: {
    type: 'website',
    url: baseUrl,
    title: 'Idle Institutional',
    description:
      'Modernizing credit markets to bring speed, programmability, and compliance advantages of blockchain tokenization.',
    siteName: 'Idle Institutional',
    images: [
      {
        width: '1200',
        height: '630',
        url: '/logos/idle-full-og.png',
      },
    ],
  },
  twitter: {
    card: 'summary',
    title: 'Idle Institutional',
    description:
      'Modernizing credit markets to bring speed, programmability, and compliance advantages of blockchain tokenization.',
    images: [
      {
        width: '1200',
        height: '630',
        url: '/logos/idle-full-og.png',
      },
    ],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
