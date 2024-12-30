'use client'

import { motion } from 'framer-motion'
import confetti from 'canvas-confetti'
import { useEffect } from 'react'

export function Celebration() {
    useEffect(() => {
        const duration = 15 * 1000
        const animationEnd = Date.now() + duration
        const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 }

        function randomInRange(min: number, max: number) {
            return Math.random() * (max - min) + min
        }

        const interval = setInterval(function () {
            const timeLeft = animationEnd - Date.now()

            if (timeLeft <= 0) {
                return clearInterval(interval)
            }

            const particleCount = 50 * (timeLeft / duration)

            confetti({
                ...defaults,
                particleCount,
                origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 }
            })
            confetti({
                ...defaults,
                particleCount,
                origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 }
            })
        }, 250)

        return () => clearInterval(interval)
    }, [])

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            className="text-center z-10"
        >
            <h1 className="text-6xl md:text-8xl font-bold mb-8 bg-gradient-to-r from-yellow-200 to-yellow-500 text-transparent bg-clip-text">
                Happy New Year!
            </h1>
            <p className="text-yellow-200 text-xl md:text-2xl">
                Welcome to {new Date().getFullYear()}
            </p>
        </motion.div>
    )
}

