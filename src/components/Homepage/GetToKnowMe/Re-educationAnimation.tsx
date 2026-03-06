"use client"

import React, { useState, useEffect, useRef, useMemo } from "react"
import useWindowWidth from "@/_utilities/useWindowWidth"

const BASE_PATH = "/getToKnowMe/Re-educationAnimation/Re-educationAnimation_"
const TOTAL_FRAMES = 144 // Re-educationAnimation_00000.png through Re-educationAnimation_00143.png
const PRELOAD_BATCH = 8 // load 8 frames at a time to avoid overwhelming the browser
const START_AFTER_FRAMES = 24 // start playing after first second of frames (at 24fps)

function buildFramePaths(): string[] {
  return Array.from({ length: TOTAL_FRAMES }, (_, i) =>
    `${BASE_PATH}${String(i).padStart(5, "0")}.png`
  )
}

// Match GetToKnowMe breakpoints: mobile ≤768, tablet 769–1024, desktop 1025–1440, 1440+
function getContainerWidth(windowWidth: number): number | string {
  if (windowWidth >= 1440) return 600   // 1440px and up
  if (windowWidth >= 1025) return 500   // 1025px – 1440px
  if (windowWidth >= 768) return 500   // tablet 769–1024
  return "100%"                          // mobile
}

/** Preload frames in batches; resolve when the first START_AFTER_FRAMES are loaded so playback can begin quickly */
function preloadInBatches(
  urls: string[],
  onFirstChunkLoaded: () => void
): Promise<void> {
  let firstChunkDone = false
  const loadOne = (src: string): Promise<void> =>
    new Promise((resolve) => {
      const img = new Image()
      img.onload = () => resolve()
      img.onerror = () => resolve()
      img.src = src
    })

  const run = async () => {
    for (let i = 0; i < urls.length; i += PRELOAD_BATCH) {
      const batch = urls.slice(i, i + PRELOAD_BATCH)
      await Promise.all(batch.map(loadOne))
      if (!firstChunkDone && i + PRELOAD_BATCH >= START_AFTER_FRAMES) {
        firstChunkDone = true
        onFirstChunkLoaded()
      }
    }
  }
  return run()
}

export interface ReEducationAnimationProps {
  /** Frames per second (default 24) */
  fps?: number
  className?: string
}

export default function ReEducationAnimation({
  fps = 24,
  className = "",
}: ReEducationAnimationProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [preloaded, setPreloaded] = useState(false)
  const rafRef = useRef<number | null>(null)
  const startTimeRef = useRef<number | null>(null)
  const windowWidth = useWindowWidth()

  const framePaths = useMemo(() => buildFramePaths(), [])

  // Preload in batches; start playing after first chunk so page feels fast
  useEffect(() => {
    let cancelled = false
    preloadInBatches(framePaths, () => {
      if (!cancelled) setPreloaded(true)
    })
    return () => {
      cancelled = true
    }
  }, [framePaths])

  // requestAnimationFrame for smooth playback synced to display refresh
  useEffect(() => {
    if (!preloaded) return

    const frameInterval = 1000 / fps
    startTimeRef.current = performance.now()

    const tick = () => {
      const start = startTimeRef.current ?? performance.now()
      const elapsed = performance.now() - start
      const frame = Math.floor((elapsed / frameInterval) % TOTAL_FRAMES)
      setCurrentIndex(frame)
      rafRef.current = requestAnimationFrame(tick)
    }
    rafRef.current = requestAnimationFrame(tick)

    return () => {
      if (rafRef.current != null) {
        cancelAnimationFrame(rafRef.current)
        rafRef.current = null
      }
    }
  }, [preloaded, fps])

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
        src={framePaths[currentIndex]}
        alt=""
        role="presentation"
        aria-hidden
        className="block w-full h-auto object-contain"
      />
    </div>
  )
}
