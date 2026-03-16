"use client"

import { useEffect, useRef, useState } from "react"
import useMobileDetection from "@/_utilities/useMobileDetection"

const LOGO_SRC = "/EarthHero/EHLogos/EHPointLogo.svg"
const LEVEL4_LOGO_SRC = "/EarthHero/EHLogos/Level4.svg"
const PROGRESS = 80 // percent

interface DividerConfig {
  trackHeight: string
  logoWidth: string
  level4Width: string
  fontSize: string
}

function ProgressBar({ trackHeight, logoWidth, level4Width, fontSize }: DividerConfig) {
  const ref = useRef<HTMLDivElement>(null)
  const [animate, setAnimate] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimate(false)
          requestAnimationFrame(() => {
            requestAnimationFrame(() => setAnimate(true))
          })
        } else {
          setAnimate(false)
        }
      },
      { threshold: 0.5 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div className="flex flex-col w-full py-[var(--spacing-xl)] gap-[var(--spacing-lg)] items-start">
      {/* Level4 header */}
      <div className="flex items-end gap-[var(--spacing-xs)]" style={{ color: "#8C8C91" }}>
        <img
          src={LEVEL4_LOGO_SRC}
          alt="Level 4 logo"
          style={{ width: level4Width, height: "auto" }}
        />
        <span style={{ fontSize, fontWeight: 500, lineHeight: 1 }}>LEVEL 4</span>
      </div>

      {/* Bar */}
      <div ref={ref} className="relative w-full" style={{ height: trackHeight }}>
        {/* Track */}
        <div
          className="absolute inset-0 w-full rounded-full"
          style={{ backgroundColor: "#E9F5F0", height: trackHeight }}
        />

        {/* Progress fill */}
        <div
          className="absolute left-0 top-0 rounded-full"
          style={{
            height: trackHeight,
            width: animate ? `${PROGRESS}%` : "0%",
            background: "linear-gradient(90deg, #D8C9C1 0%, #636FBD 48.5%, #5C9C83 100%)",
            transition: animate ? "width 0.6s cubic-bezier(0.22, 1, 0.36, 1)" : "none",
          }}
        />

        {/* Logo at progress end */}
        <img
          src={LOGO_SRC}
          alt="EarthHero point logo"
          style={{
            position: "absolute",
            top: "50%",
            left: animate ? `${PROGRESS}%` : "0%",
            transform: "translate(-25%, -50%)",
            width: logoWidth,
            height: "auto",
            transition: animate ? "left 0.6s cubic-bezier(0.22, 1, 0.36, 1)" : "none",
          }}
        />
      </div>
    </div>
  )
}

export default function Divider() {
  const { isMobile, isTablet, isDesktop1440px } = useMobileDetection()

  if (isMobile) {
    return (
      <div className="w-full">
        <ProgressBar trackHeight="6px" logoWidth="24px" level4Width="40px" fontSize="14px" />
      </div>
    )
  }

  if (isTablet) {
    return (
      <div className="w-full">
        <ProgressBar trackHeight="7px" logoWidth="28px" level4Width="56px" fontSize="16px" />
      </div>
    )
  }

  if (isDesktop1440px) {
    return (
      <div className="w-full">
        <ProgressBar trackHeight="8px" logoWidth="32px" level4Width="60px" fontSize="18px" />
      </div>
    )
  }

  return (
    <div className="w-full">
      <ProgressBar trackHeight="12px" logoWidth="40px" level4Width="70px" fontSize="20px" />
    </div>
  )
}
