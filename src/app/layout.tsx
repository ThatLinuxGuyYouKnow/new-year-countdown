import './globals.css'
import { Inter } from 'next/font/google'
import { Metadata } from 'next'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'New Year Countdown',
    description: 'Countdown to the New Year!',
    openGraph: {
        title: 'New Year Countdown',
        description: 'Countdown to the New Year!',
        images: ['icon.png']

    },
    twitter: {
        card: 'summary_large_image',
        title: 'Twitter New Year Countdown',
        description: 'Countdown to the New Year!',
        images: ['icon.png']


    },
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

