"use client"

import React, { useState, useEffect, useRef } from "react"

const BUILDING_CONNECTION_IMAGES = [
  "1 Nametags.jpg",
  "2 Lineup.jpg",
  "3 BrandingImages.jpg",
  "4 AGMposing.jpg",
  "5 branding.jpg",
  "6 CEO.jpg",
  "7 Team.jpg",
  "8 EFCUPosing.jpg",
  "9 EFCUWomenPosing.jpg"
].map(
  (name) =>
    `/EFCU/Branding/BuildingConnection/${encodeURIComponent(name)}`
)

const INTERVAL_MS = 3000

export default function BuildingCommunity() {
  const [index, setIndex] = useState(0)
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setIndex((i) => (i + 1) % BUILDING_CONNECTION_IMAGES.length)
    }, INTERVAL_MS)
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [])

  return (
    <div className="w-full aspect-[4/3] flex items-center justify-center overflow-hidden bg-[var(--color-bg,transparent)]">
      <img
        src={BUILDING_CONNECTION_IMAGES[index]}
        alt=""
        className="w-full h-full object-contain"
        style={{ boxShadow: "var(--glow-shadow)" }}
        aria-hidden
      />
    </div>
  )
}
