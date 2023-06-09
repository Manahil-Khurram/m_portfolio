"use client"
import './globals.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { ThemeProvider } from 'next-themes'

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className=''  >
      <ThemeProvider enableSystem={true} attribute="class">
          <Navbar />
          {children}
          <Footer />
          </ThemeProvider>
        </body>
    </html>
  )
}
