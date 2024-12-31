import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
    title: 'New Year Countdown',
    description: 'Countdown to the New Year!',
    images: ['https://new-year-countdown-eight-lilac.vercel.app/icon.png']

}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body className={inter.className}>{children}</body>
        </html>
    )
}

