import './globals.css'
import { Montserrat } from 'next/font/google'
import Navbar from '@/components/Navbar'
const montserrat = Montserrat({ subsets: ['latin'] })



export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <Navbar></Navbar>

        <div className="flex items-center text-black w-full min-h-screen">
          {children}
        </div>
      </body>
    </html>
  )
}
