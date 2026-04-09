"use client"

import { useState, useEffect, useRef, useMemo } from "react"
import useWindowWidth from "@/_utilities/useWindowWidth"

const BASE_PATH = "/getToKnowMe/Re-educationAnimation/Re-educationAnimation_"
const TOTAL_FRAMES = 144
const CONCURRENCY = 6
const START_AFTER_FRAMES = 12

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

// Load frames with limited concurrency — never more than CONCURRENCY in-flight at once
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
  const imgRef = useRef<HTMLImageElement>(null)
  const loadedFramesRef = useRef<Set<number>>(new Set())
  const frameCounterRef = useRef(0)
  const lastTickRef = useRef<number | null>(null)
  const windowWidth = useWindowWidth()

  const framePaths = useMemo(() => buildFramePaths(), [])

  useEffect(() => {
    let isCancelled = false
    const loaded = new Set<number>()
    loadedFramesRef.current = loaded
    frameCounterRef.current = 0
    lastTickRef.current = null

    // Defer until page is interactive
    const start = () => {
      loadWithConcurrency(framePaths, loaded, () => {
        if (!isCancelled) setPreloaded(true)
      }, () => isCancelled)
    }

    if ("requestIdleCallback" in window) {
      (window as any).requestIdleCallback(start)
    } else {
      setTimeout(start, 300)
    }

    return () => { isCancelled = true }
  }, [framePaths])

  useEffect(() => {
    if (!preloaded || !imgRef.current) return

    const frameInterval = 1000 / fps

    const tick = (now: number) => {
      const img = imgRef.current
      if (!img) { rafRef.current = requestAnimationFrame(tick); return }

      const loadedCount = loadedFramesRef.current.size
      if (loadedCount === 0) { rafRef.current = requestAnimationFrame(tick); return }

      if (lastTickRef.current === null) lastTickRef.current = now
      const delta = now - lastTickRef.current

      if (delta >= frameInterval) {
        lastTickRef.current = now
        frameCounterRef.current = (frameCounterRef.current + 1) % loadedCount
        img.src = framePaths[frameCounterRef.current]
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
