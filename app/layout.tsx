import { Inter } from 'next/font/google'

import ToasterContext from './context/ToasterContext'
import AuthContext from './context/AuthContext'
import ActiveStatus from './components/ActiveStatus'

import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'SkySync: Real Time Chat & Video Calling App',
  description: 'SkySync is a real-time chat and video calling app built with Next.js, Pusher, and ZegoCloud.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthContext>
          <ToasterContext />
          <ActiveStatus />
          {children}
        </AuthContext>
      </body>
    </html>
  )
}
