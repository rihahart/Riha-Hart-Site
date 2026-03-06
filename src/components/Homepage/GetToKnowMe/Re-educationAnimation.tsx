"use client"

import React, { useState, useEffect, useRef, useMemo } from "react"
import useWindowWidth from "@/_utilities/useWindowWidth"

const BASE_PATH = "/getToKnowMe/Re-educationAnimation/Re-educationAnimation_"
const TOTAL_FRAMES = 144 // Re-educationAnimation_00000.png through Re-educationAnimation_00143.png

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

function preloadImages(urls: string[]): Promise<void> {
  const promises = urls.map(
    (src) =>
      new Promise<void>((resolve, reject) => {
        const img = new Image()
        img.onload = () => resolve()
        img.onerror = () => resolve() // resolve anyway so animation can still run
        img.src = src
      })
  )
  return Promise.all(promises).then(() => {})
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
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const windowWidth = useWindowWidth()

  const framePaths = useMemo(() => buildFramePaths(), [])

  // Preload all frames
  useEffect(() => {
    let cancelled = false
    preloadImages(framePaths).then(() => {
      if (!cancelled) setPreloaded(true)
    })
    return () => {
      cancelled = true
    }
  }, [framePaths])

  // Frame advance with setInterval; clean up on unmount
  useEffect(() => {
    if (!preloaded) return

    const intervalMs = 1000 / fps
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % TOTAL_FRAMES)
    }, intervalMs)

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
        intervalRef.current = null
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
