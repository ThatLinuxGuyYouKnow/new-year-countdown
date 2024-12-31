import { ImageResponse } from '@vercel/og'
import { NextRequest } from 'next/server'

export const runtime = 'edge'

export async function GET(req: NextRequest) {
    try {
        const { searchParams } = new URL(req.url)
        const hasCountdown = searchParams.has('countdown')
        const countdown = hasCountdown
            ? searchParams.get('countdown')
            : 'Countdown to New Year!'

        return new ImageResponse(
            (
                <div
                    style={{
                        height: '100%',
                        width: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: 'black',
                        fontSize: 60,
                        fontWeight: 'bold',
                    }}
                >
                    <div style={{ color: '#FCD34D' }}>New Year Countdown</div>
                    <div style={{ color: 'white', marginTop: 40 }}>{countdown}</div>
                </div>
            ),
            {
                width: 1200,
                height: 630,
            }
        )
    } catch (e: any) {
        console.log(`${e.message}`)
        return new Response(`Failed to generate the image`, {
            status: 500,
        })
    }
}

