"use client"

import React, { useState, useEffect, useRef, useMemo } from "react"
import useWindowWidth from "@/_utilities/useWindowWidth"

const BASE_PATH = "/getToKnowMe/Re-educationAnimation/Re-educationAnimation_"
const TOTAL_FRAMES = 144
const PRELOAD_BATCH = 8
const START_AFTER_FRAMES = 16

function buildFramePaths(): string[] {
  return Array.from({ length: TOTAL_FRAMES }, (_, i) =>
    `${BASE_PATH}${String(i).padStart(5, "0")}.png`
  )
}

function getContainerWidth(windowWidth: number): number | string {
  if (windowWidth >= 1440) return 600
  if (windowWidth >= 1025) return 500
  if (windowWidth >= 768) return 500
  return "100%"
}

function preloadInBatches(
  urls: string[],
  onFirstChunkLoaded: () => void,
  onFrameLoaded: (index: number) => void
): Promise<void> {
  let firstChunkDone = false
  const loadOne = (src: string, index: number): Promise<void> =>
    new Promise((resolve) => {
      const img = new Image()
      img.onload = () => {
        onFrameLoaded(index)
        resolve()
      }
      img.onerror = () => resolve()
      img.src = src
    })

  const run = async () => {
    for (let i = 0; i < urls.length; i += PRELOAD_BATCH) {
      const batch = urls.slice(i, i + PRELOAD_BATCH)
      await Promise.all(batch.map((src, j) => loadOne(src, i + j)))
      if (!firstChunkDone && i + PRELOAD_BATCH >= START_AFTER_FRAMES) {
        firstChunkDone = true
        onFirstChunkLoaded()
      }
    }
  }
  return run()
}

export interface ReEducationAnimationProps {
  fps?: number
  className?: string
}

export default function ReEducationAnimation({
  fps = 24,
  className = "",
}: ReEducationAnimationProps) {
  const [preloaded, setPreloaded] = useState(false)
  const rafRef = useRef<number | null>(null)
  const startTimeRef = useRef<number | null>(null)
  const imgRef = useRef<HTMLImageElement>(null)
  const loadedFramesRef = useRef<Set<number>>(new Set())
  const lastDisplayedRef = useRef(0)
  const windowWidth = useWindowWidth()

  const framePaths = useMemo(() => buildFramePaths(), [])

  useEffect(() => {
    let cancelled = false
    const loaded = new Set<number>()
    loadedFramesRef.current = loaded

    preloadInBatches(
      framePaths,
      () => {
        if (!cancelled) setPreloaded(true)
      },
      (index) => {
        loaded.add(index)
      }
    )

    return () => {
      cancelled = true
    }
  }, [framePaths])

  useEffect(() => {
    if (!preloaded || !imgRef.current) return

    const frameInterval = 1000 / fps
    startTimeRef.current = performance.now()
    lastDisplayedRef.current = 0

    const tick = () => {
      const img = imgRef.current
      if (!img) return

      const start = startTimeRef.current ?? performance.now()
      const elapsed = performance.now() - start
      const loaded = loadedFramesRef.current

      // Loop through loaded frames at full speed
      const loadedCount = loaded.size
      if (loadedCount === 0) { rafRef.current = requestAnimationFrame(tick); return }
      const targetFrame = Math.floor(elapsed / frameInterval) % loadedCount

      if (lastDisplayedRef.current !== targetFrame) {
        img.src = framePaths[targetFrame]
        lastDisplayedRef.current = targetFrame
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
  }, [preloaded, fps, framePaths])

  const containerWidth = getContainerWidth(windowWidth)
  const widthStyle =
    typeof containerWidth === "string"
      ? { width: containerWidth }
      : { width: `${containerWidth}px` }

  return (
    <div
      className={`overflow-hidden ${className}`.trim()}
      style={widthStyle}
      aria-label="Re-education animation"
    >
      <img
        ref={imgRef}
        src={framePaths[0]}
        alt=""
        role="presentation"
        aria-hidden
        className="block w-full h-auto object-contain"
      />
    </div>
  )
}