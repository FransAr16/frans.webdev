"use client"

import React, { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'motion/react'

export default function BorderLine() {
    const Ref = useRef<HTMLDivElement | null>(null)
    const isInView = useInView(Ref, { once: true }) // Ensure it only triggers once
    const [hasAnimated, setHasAnimated] = useState(false)
    const animationDelay = 0.2

    useEffect(() => {
        if (isInView && !hasAnimated) {
            setHasAnimated(true)
        }
    }, [isInView, hasAnimated])

    return (
        <motion.div ref={Ref}>
            <motion.div
                initial={{ width: '0%' }}  // Initial state of width is 0%
                animate={{ width: hasAnimated ? '100%' : '0%' }} // Animate to 100% when in view
                transition={{
                    duration: 1,
                    ease: [0.76, 0, 0.24, 1],
                    delay: animationDelay,
                  }}
                className='absolute top-0 left-0 h-[1px] bg-border' // Added color for visibility
            />
        </motion.div>
    )
}
