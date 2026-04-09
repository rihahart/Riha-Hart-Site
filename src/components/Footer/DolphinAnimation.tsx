"use client"

import { useEffect, useRef, useState } from 'react'

interface DolphinAnimationProps {
    className?: string
}

const MIN_FRAME = 48
const MAX_FRAME = 119
const TOTAL_FRAMES = MAX_FRAME - MIN_FRAME + 1
const FPS = 24
const CONCURRENCY = 6
const START_AFTER_FRAMES = 8

function buildFramePaths(): string[] {
    return Array.from({ length: TOTAL_FRAMES }, (_, i) =>
        `/Photos/DolphinPhotos/Frame${MIN_FRAME + i}.png`
    )
}

async function loadWithConcurrency(
    paths: string[],
    loaded: Set<number>,
    onReady: () => void,
    cancelled: () => boolean
) {
    let readyFired = false
    let index = 0

    const loadOne = (i: number): Promise<void> =>
        new Promise((resolve) => {
            const img = new window.Image()
            img.onload = img.onerror = () => {
                loaded.add(i)
                if (!readyFired && loaded.size >= START_AFTER_FRAMES) {
                    readyFired = true
                    if (!cancelled()) onReady()
                }
                resolve()
            }
            img.src = paths[i]
        })

    const workers = Array.from({ length: CONCURRENCY }, async () => {
        while (index < paths.length) {
            const i = index++
            await loadOne(i)
        }
    })

    await Promise.all(workers)
}

export default function DolphinAnimation({ className = '' }: DolphinAnimationProps) {
    const [preloaded, setPreloaded] = useState(false)
    const imgRef = useRef<HTMLImageElement>(null)
    const loadedFramesRef = useRef<Set<number>>(new Set())
    const rafRef = useRef<number | null>(null)
    const frameCounterRef = useRef(0)
    const lastTickRef = useRef<number | null>(null)

    const framePaths = useRef(buildFramePaths()).current

    useEffect(() => {
        let isCancelled = false
        const loaded = new Set<number>()
        loadedFramesRef.current = loaded
        frameCounterRef.current = 0
        lastTickRef.current = null

        const start = () => {
            loadWithConcurrency(framePaths, loaded, () => {
                if (!isCancelled) setPreloaded(true)
            }, () => isCancelled)
        }

        if ('requestIdleCallback' in window) {
            (window as any).requestIdleCallback(start)
        } else {
            setTimeout(start, 300)
        }

        return () => { isCancelled = true }
    }, [framePaths])

    useEffect(() => {
        if (!preloaded || !imgRef.current) return

        const frameInterval = 1000 / FPS

        const tick = (now: number) => {
            const img = imgRef.current
            if (!img) { rafRef.current = requestAnimationFrame(tick); return }

            const loadedCount = loadedFramesRef.current.size
            if (loadedCount < 2) { rafRef.current = requestAnimationFrame(tick); return }

            if (lastTickRef.current === null) lastTickRef.current = now
            const delta = now - lastTickRef.current

            if (delta >= frameInterval) {
                lastTickRef.current = now
                frameCounterRef.current++
                const cycleLength = (loadedCount - 1) * 2
                const pos = frameCounterRef.current % cycleLength
                const frameIndex = pos < loadedCount ? pos : cycleLength - pos
                img.src = framePaths[frameIndex]
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
