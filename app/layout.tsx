import type { Metadata, Viewport } from 'next'
import { Manrope } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-sans',
})

export const metadata: Metadata = {
  title: 'Casa Wiki - Venta Mayorista de Blanqueria',
  description: 'Venta mayorista de blanqueria. Sabanas, cortinas, acolchados y mas de la mejor calidad a precios mayoristas. Buenos Aires, Argentina.',
  icons: {
    icon: '/images/logo-casa-wiki.png',
    apple: '/images/logo-casa-wiki.png',
  },
  openGraph: {
    title: 'Casa Wiki - Venta Mayorista de Blanqueria',
    description: 'Sabanas, cortinas, acolchados y mas de la mejor calidad a precios mayoristas.',
    images: ['/images/logo-casa-wiki.png'],
  },
}

export const viewport: Viewport = {
  themeColor: '#f6f7f8',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={`${_manrope.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
