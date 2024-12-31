'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export function Snowflake() {

    const [position, setPosition] = useState({ x: 0, y: 0 })

    useEffect(() => {
        setPosition({
            x: Math.random() * window?.innerWidth,
            y: -20,
        })
    }, [])

    return (
        <motion.div
            className="absolute text-yellow-100/20 pointer-events-none"
            initial={{ x: position.x, y: position.y }}
            animate={{
                y: window?.innerHeight + 20,
                x: position.x + (Math.random() * 200 - 100),
            }}
            transition={{
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                ease: 'linear',
            }}
            style={{
                fontSize: Math.random() * 20 + 10,
            }}
        >
            ❄
        </motion.div>
    )
}


