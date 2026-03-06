"use client"

import React, { useState, useEffect, useRef, useMemo } from "react"
import useWindowWidth from "@/_utilities/useWindowWidth"

const BASE_PATH = "/getToKnowMe/Re-educationAnimation/Re-educationAnimation_"
const TOTAL_FRAMES = 144 // Re-educationAnimation_00000.png through Re-educationAnimation_00143.png
const PRELOAD_BATCH = 16 // load 16 at a time so production stays ahead of playback
const START_AFTER_FRAMES = 48 // start after 2s of frames so slow networks have buffer

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

/** Preload frames in batches; call onFrameLoaded(index) when each frame is ready; call onFirstChunkLoaded when enough frames to start playback */
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
  /** Frames per second (default 24) */
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

  // Preload in batches; track loaded frames so we only show ready frames (smooth on slow networks)
  useEffect(() => {
    let cancelled = false
    const loaded = new Set<number>()
    preloadInBatches(
      framePaths,
      () => {
        if (!cancelled) setPreloaded(true)
      },
      (index) => {
        loaded.add(index)
      }
    )
    loadedFramesRef.current = loaded
    return () => {
      cancelled = true
    }
  }, [framePaths])

  // requestAnimationFrame: update img.src only when frame is loaded (no setState = no re-render jank)
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
      const targetFrame = Math.floor((elapsed / frameInterval) % TOTAL_FRAMES)
      const loaded = loadedFramesRef.current
      // Only advance when this frame is loaded (avoids pause on production where network is slower)
      if (loaded.has(targetFrame)) {
        if (lastDisplayedRef.current !== targetFrame) {
          img.src = framePaths[targetFrame]
          lastDisplayedRef.current = targetFrame
        }
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
