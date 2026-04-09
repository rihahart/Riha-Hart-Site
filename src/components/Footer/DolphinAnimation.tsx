"use client"

import { useEffect, useRef, useState } from 'react'

interface DolphinAnimationProps {
    className?: string
}

const MIN_FRAME = 48
const MAX_FRAME = 119
const TOTAL_FRAMES = MAX_FRAME - MIN_FRAME + 1
const FPS = 24
const PRELOAD_BATCH = 8
const START_AFTER_FRAMES = 16

function buildFramePaths(): string[] {
    return Array.from({ length: TOTAL_FRAMES }, (_, i) =>
        `/Photos/DolphinPhotos/Frame${MIN_FRAME + i}.png`
    )
}

export default function DolphinAnimation({ className = '' }: DolphinAnimationProps) {
    const [preloaded, setPreloaded] = useState(false)
    const imgRef = useRef<HTMLImageElement>(null)
    const loadedFramesRef = useRef<Set<number>>(new Set())
    const rafRef = useRef<number | null>(null)
    const startTimeRef = useRef<number | null>(null)
    const lastDisplayedRef = useRef(0)

    const framePaths = useRef(buildFramePaths()).current

    useEffect(() => {
        let cancelled = false
        const loaded = loadedFramesRef.current

        const loadOne = (src: string, index: number): Promise<void> =>
            new Promise((resolve) => {
                const img = new window.Image()
                img.onload = () => { loaded.add(index); resolve() }
                img.onerror = () => resolve()
                img.src = src
            })

        const run = async () => {
            let firstChunkDone = false
            for (let i = 0; i < framePaths.length; i += PRELOAD_BATCH) {
                const batch = framePaths.slice(i, i + PRELOAD_BATCH)
                await Promise.all(batch.map((src, j) => loadOne(src, i + j)))
                if (!firstChunkDone && loaded.size >= START_AFTER_FRAMES) {
                    firstChunkDone = true
                    if (!cancelled) setPreloaded(true)
                }
            }
        }

        run()
        return () => { cancelled = true }
    }, [framePaths])

    useEffect(() => {
        if (!preloaded || !imgRef.current) return

        const frameInterval = 1000 / FPS
        startTimeRef.current = performance.now()

        const tick = () => {
            const img = imgRef.current
            if (!img) return

            const loadedCount = loadedFramesRef.current.size
            if (loadedCount === 0) { rafRef.current = requestAnimationFrame(tick); return }

            const start = startTimeRef.current ?? performance.now()
            const elapsed = performance.now() - start
            const totalTicks = Math.floor(elapsed / frameInterval)

            // Bounce back and forth
            const cycleLength = (loadedCount - 1) * 2
            const pos = totalTicks % cycleLength
            const frameIndex = pos < loadedCount ? pos : cycleLength - pos

            if (lastDisplayedRef.current !== frameIndex) {
                img.src = framePaths[frameIndex]
                lastDisplayedRef.current = frameIndex
            }

            rafRef.current = requestAnimationFrame(tick)
        }

        rafRef.current = requestAnimationFrame(tick)
        return () => {
            if (rafRef.current != null) {
                cancelAnimationFrame(rafRef.current)
                rafRef.current = null
            }
        }
    }, [preloaded, framePaths])

    return (
        <div className={className}>
            <img
                ref={imgRef}
                src={framePaths[0]}
                alt="Dolphin animation"
                style={{ width: '100%', height: '100%', objectFit: 'contain', display: 'block' }}
            />
        </div>
    )
}
