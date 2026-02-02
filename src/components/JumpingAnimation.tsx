"use client"

import React, { useState, useEffect, useRef } from 'react'

interface JumpingAnimationProps {
    className?: string
}

export default function JumpingAnimation({ className = '' }: JumpingAnimationProps) {
    const [currentFrame, setCurrentFrame] = useState(1)
    const directionRef = useRef<'forward' | 'backward'>('forward')
    const minFrame = 1 // Start from frame 1
    const maxFrame = 7 // End at frame 7
    const fps = 6
    const frameInterval = 1000 / fps // ~166.67ms per frame
    const intervalRef = useRef<NodeJS.Timeout | null>(null)

    useEffect(() => {
        // Start animation on mount
        intervalRef.current = setInterval(() => {
            setCurrentFrame((prev) => {
                if (directionRef.current === 'forward') {
                    if (prev >= maxFrame) {
                        directionRef.current = 'backward'
                        return maxFrame - 1
                    }
                    return prev + 1
                } else {
                    if (prev <= minFrame) {
                        directionRef.current = 'forward'
                        return minFrame + 1
                    }
                    return prev - 1
                }
            })
        }, frameInterval)

        // Cleanup on unmount
        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current)
            }
        }
    }, [minFrame, maxFrame, frameInterval])

    const frameSrc = `/Photos/Jumping/Jumping${currentFrame}.png`

    return (
        <div className={className} style={{ overflow: 'hidden', position: 'relative' }}>
            <img
                src={frameSrc}
                alt="Jumping animation"
                style={{
                    width: '140%',
                    height: '100%',
                    objectFit: 'contain',
                    display: 'block',
                    objectPosition: 'center',
                    marginLeft: '-20%',
                    marginRight: '-20%'
                }}
            />
        </div>
    )
}

