"use client"

import React, { useState, useEffect, useRef } from 'react'

interface DolphinAnimationProps {
    className?: string
}

export default function DolphinAnimation({ className = '' }: DolphinAnimationProps) {
    const [currentFrame, setCurrentFrame] = useState(48)
    const directionRef = useRef<'forward' | 'backward'>('forward')
    const minFrame = 48 // Start from frame 48
    const maxFrame = 119 // End at frame 119
    const fps = 24
    const frameInterval = 1000 / fps // ~41.67ms per frame
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

    const frameSrc = `/Photos/DolphinPhotos/Frame${currentFrame}.png`

    return (
        <div className={className}>
            <img
                src={frameSrc}
                alt="Dolphin animation"
                style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'contain',
                    display: 'block'
                }}
            />
        </div>
    )
}
