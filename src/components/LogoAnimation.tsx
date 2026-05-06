"use client"

import { useEffect, useRef } from "react"

const FIRST = 12
const LAST  = 79
const TOTAL = LAST - FIRST + 1

function frameSrc(n: number) {
  return `/Logo/LogoWhiteRedGlow/Logo/Logo_${String(n).padStart(5, "0")}.png`
}

export interface LogoAnimationProps {
  fps?:         number
  className?:   string
  onComplete?:  () => void
  staticFrame?: boolean
  heartGlow?:   boolean
}

export default function LogoAnimation({
  fps         = 24,
  className   = "",
  onComplete,
  staticFrame = false,
  heartGlow   = false,
}: LogoAnimationProps) {
  const imgRef = useRef<HTMLImageElement>(null)

  useEffect(() => {
    const img = imgRef.current
    if (!img) return

    if (staticFrame) {
      img.src = frameSrc(LAST)
      return
    }

    let frameIdx = 0
    img.src = frameSrc(FIRST)

    const id = setInterval(() => {
      frameIdx++
      if (frameIdx >= TOTAL) {
        clearInterval(id)
        onComplete?.()
        return
      }
      img.src = frameSrc(FIRST + frameIdx)
    }, 1000 / fps)

    return () => clearInterval(id)
  }, [fps, onComplete, staticFrame])

  return (
    <>
      {heartGlow && (
        <style>{`
          @keyframes logo-heart-shimmer {
            0%   { filter: drop-shadow(0 0 3px rgba(241,103,98,0.4)); }
            15%  { filter: drop-shadow(0 0 14px rgba(241,103,98,1.0)) drop-shadow(0 0 28px rgba(241,103,98,0.6)); }
            30%  { filter: drop-shadow(0 0 2px rgba(241,103,98,0.15)); }
            50%  { filter: drop-shadow(0 0 10px rgba(241,103,98,0.85)) drop-shadow(0 0 20px rgba(241,103,98,0.4)); }
            70%  { filter: drop-shadow(0 0 3px rgba(241,103,98,0.3)); }
            88%  { filter: drop-shadow(0 0 16px rgba(241,103,98,1.0)) drop-shadow(0 0 32px rgba(241,103,98,0.7)); }
            100% { filter: drop-shadow(0 0 3px rgba(241,103,98,0.4)); }
          }
          .logo-heart-glow { animation: logo-heart-shimmer 2.4s linear infinite; }
        `}</style>
      )}
      <img
        ref={imgRef}
        src={frameSrc(FIRST)}
        alt="Riha Hart logo animation"
        className={`${className}${heartGlow ? " logo-heart-glow" : ""}`}
        width={1920}
        height={900}
        style={{ width: "100%", height: "auto", display: "block", aspectRatio: "1920/900" }}
      />
    </>
  )
}
