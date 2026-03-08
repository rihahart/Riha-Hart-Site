"use client"

import React, { useState, useEffect, useRef } from "react"

const FRAME_PATHS = [
  "Frame1.png",
  "Frame2.png",
  "Frame3.png",
  "Frame4.png"
].map(
  (name) =>
    `/iklass/Research/KeyInsightAnimation/${encodeURIComponent(name)}`
)

const INTERVAL_MS = 2000

export default function KeyInsightAnimation() {
  const [index, setIndex] = useState(0)
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setIndex((i) => (i + 1) % FRAME_PATHS.length)
    }, INTERVAL_MS)
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [])

  return (
    <div className="w-full flex items-center justify-center overflow-hidden">
      <img
        src={FRAME_PATHS[index]}
        alt=""
        className="w-full max-w-full h-auto object-contain"
        aria-hidden
      />
    </div>
  )
}
