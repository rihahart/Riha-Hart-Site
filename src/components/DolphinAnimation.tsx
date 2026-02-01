"use client"

import React, { useState, useEffect, useRef } from 'react'

interface DolphinAnimationProps {
    className?: string
}

export default function DolphinAnimation({ className = '' }: DolphinAnimationProps) {
    const [currentFrame, setCurrentFrame] = useState(1)
    const directionRef = useRef<'forward' | 'backward'>('forward')
    const frameCount = 119 // Frame1.png through Frame119.png
    const fps = 24
    const frameInterval = 1000 / fps // ~41.67ms per frame
    const intervalRef = useRef<NodeJS.Timeout | null>(null)

    useEffect(() => {
        // Start animation on mount
        intervalRef.current = setInterval(() => {
            setCurrentFrame((prev) => {
                if (directionRef.current === 'forward') {
                    if (prev >= frameCount) {
                        directionRef.current = 'backward'
                        return frameCount - 1
                    }
                    return prev + 1
                } else {
                    if (prev <= 1) {
                        directionRef.current = 'forward'
                        return 2
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
    }, [frameCount, frameInterval])

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

