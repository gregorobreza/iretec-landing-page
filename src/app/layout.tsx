
import { Header } from '@/components/header'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'IRETEC | Iris REcognition TEChnology',
  description: 'Research and development in the field of iris recognition technology.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}><Header/>{children}</body>
    </html>
  )
}
