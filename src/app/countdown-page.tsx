'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Snowflake } from './components/snowflake'
import { Celebration } from './components/celebration'
import { formatCountdown } from './utils/format-countdown'

export default function CountdownPage() {
    const [timeLeft, setTimeLeft] = useState<number>(0)
    const [isNewYear, setIsNewYear] = useState(false)
    const [showCelebration, setShowCelebration] = useState(false)

    useEffect(() => {
        const calculateTimeLeft = () => {
            const now = new Date()
            const currentYear = now.getFullYear()
            const nextYear = new Date(currentYear + 1, 0, 1)
            const difference = nextYear.getTime() - now.getTime()

            // Check if it's New Year's Day
            const isJanFirst = now.getMonth() === 0 && now.getDate() === 1
            setIsNewYear(isJanFirst)

            // Show celebration only on Jan 1st
            setShowCelebration(isJanFirst && now.getDate() === 1)

            return difference > 0 ? difference : 0
        }

        setTimeLeft(calculateTimeLeft())

        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft())
        }, 1000)

        return () => clearInterval(timer)
    }, [])

    const { days, hours, minutes, seconds } = formatCountdown(timeLeft)

    return (
        <div className="min-h-screen bg-black flex items-center justify-center relative overflow-hidden">
            {/* Snowflakes */}
            {Array.from({ length: 50 }).map((_, i) => (
                <Snowflake key={i} />
            ))}

            <AnimatePresence>
                {showCelebration ? (
                    <Celebration />
                ) : (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.5 }}
                        className="text-center z-10"
                    >
                        <h1 className="text-4xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-yellow-200 to-yellow-500 text-transparent bg-clip-text">
                            New Year Countdown
                        </h1>
                        <div className="grid grid-cols-4 gap-4">
                            {[
                                { label: 'Days', value: days },
                                { label: 'Hours', value: hours },
                                { label: 'Minutes', value: minutes },
                                { label: 'Seconds', value: seconds },
                            ].map(({ label, value }) => (
                                <div key={label} className="flex flex-col items-center">
                                    <motion.div
                                        className="text-3xl md:text-6xl font-bold mb-2"
                                        style={{
                                            textShadow: '0 0 10px rgba(234, 179, 8, 0.5)',
                                            color: '#FCD34D',
                                        }}
                                        animate={{
                                            scale: [1, 1.1, 1],
                                        }}
                                        transition={{
                                            duration: 1,
                                            repeat: Infinity,
                                            repeatType: 'reverse',
                                        }}
                                    >
                                        {value}
                                    </motion.div>
                                    <span className="text-yellow-200 text-sm md:text-base">{label}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}

