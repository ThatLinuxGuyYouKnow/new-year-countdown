import { Metadata } from 'next'
import { headers } from 'next/headers'
import CountdownPage from './countdown-page'
import { formatCountdown } from './utils/format-countdown'
import fallBackImage from './fallback-image.png'
export const runtime = 'edge'

export async function generateMetadata(): Promise<Metadata> {
  const host = (await headers()).get('host')
  const protocol = process?.env.NODE_ENV === 'development' ? 'http' : 'https'
  const timeLeft = getTimeLeft()
  const { days, hours, minutes, seconds } = formatCountdown(timeLeft)
  const countdownString = `${days}:${hours}:${minutes}:${seconds}`

  return {
    title: 'New Year Countdown',
    description: 'Countdown to the New Year!',
    openGraph: {
      title: 'New Year Countdown',
      description: 'Countdown to the New Year!',
      images: [`${protocol}://${host}/api/og?countdown=${countdownString}`],
    },
    twitter: {
      card: 'summary_large_image',
      title: 'New Year Countdown',
      description: 'Countdown to the New Year!',
      images: ['https://new-year-countdown-eight-lilac.vercel.app/fallback-image.png'],
    },
  }
}

function getTimeLeft(): number {
  const now = new Date()
  const currentYear = now.getFullYear()
  const nextYear = new Date(currentYear + 1, 0, 1)
  return nextYear.getTime() - now.getTime()
}

export default function Page() {
  return <CountdownPage />
}

