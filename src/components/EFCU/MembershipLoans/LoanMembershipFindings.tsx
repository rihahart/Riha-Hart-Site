"use client"

import React, { useState, useEffect, useRef } from "react"
import useMobileDetection from "@/_utilities/useMobileDetection"
import { loanMembershipFindings } from "@/data/EFCU/Membershiploans/loanMembershipFindings"

const JOURNEY_FRAMES = Array.from({ length: 20 }, (_, i) =>
  `/EFCU/ClarifyingNavAnimation/JourneyAnimation/${String(i + 1).padStart(2, "0")}Journey.png`
)

const FRAME_MS = 100 

// Preload all frames so switching src doesn’t show a blank frame
function preloadJourneyFrames() {
  JOURNEY_FRAMES.forEach((src) => {
    const img = new Image()
    img.src = src
  })
}

function JourneyFrameAnimation({ large = false }: { large?: boolean }) {
  const [index, setIndex] = useState(0)
  const [isInView, setIsInView] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const wasInViewRef = useRef(false)

  useEffect(() => {
    preloadJourneyFrames()
  }, [])

  useEffect(() => {
    const el = containerRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries
        const intersecting = entry.isIntersecting
        if (intersecting !== wasInViewRef.current) {
          wasInViewRef.current = intersecting
          setIsInView(intersecting)
        }
      },
      { threshold: 0.25, rootMargin: "50px 0px 50px 0px" }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!isInView) {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
        intervalRef.current = null
      }
      return
    }
    setIndex(0)
    intervalRef.current = setInterval(() => {
      setIndex((i) => {
        if (i >= JOURNEY_FRAMES.length - 1) {
          if (intervalRef.current) clearInterval(intervalRef.current)
          intervalRef.current = null
          return i
        }
        return i + 1
      })
    }, FRAME_MS)
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [isInView])

  return (
    <div ref={containerRef} className="w-full h-full">
      <img
        src={JOURNEY_FRAMES[index]}
        alt=""
        className={`w-full h-full object-contain ${large ? "max-h-[560px]" : "max-h-[400px]"}`}
        aria-hidden
      />
    </div>
  )
}

export default function LoanMembershipFindings() {
  const { isMobile, isTablet, isDesktop1440px } = useMobileDetection()
  const { bullets } = loanMembershipFindings

  if (isMobile) {
    return (
      <div className="w-full flex flex-col gap-[var(--spacing-xl)] p-[var(--spacing-m)] items-start shadow-md border-t-2 border-t-[var(--color-brand)]">
        <h3 className="h3 text-[var(--color-primary)]">
          This was not just a UX issue but a structural positioning problem.
        </h3>
        <JourneyFrameAnimation />
        <ul className="flex flex-col gap-[var(--spacing-m)] list-none pl-0">
          {bullets.map((item, i) => (
            <li
              key={i}
              className="body text-[var(--color-primary)] flex items-start gap-[var(--spacing-m)]"
            >
              <img
                src="/Icons/Pin.png"
                alt=""
                className="w-[14px] h-[14px] flex-shrink-0 mt-1"
                aria-hidden
              />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    )
  }

  if (isTablet) {
    return (
      <div className="w-full flex flex-col gap-[var(--spacing-m)] p-[var(--spacing-m)] items-start shadow-md border-t-4 border-t-[var(--color-brand)]">
        <h3 className="h3 text-[var(--color-secondary)]">
          This was not just a UX issue but a structural positioning problem.
        </h3>
        <JourneyFrameAnimation />
        <ul className="flex flex-col gap-[var(--spacing-m)] list-none pl-0">
          {bullets.map((item, i) => (
            <li
              key={i}
              className="body text-[var(--color-primary)] flex items-start gap-[var(--spacing-m)]"
            >
              <img
                src="/Icons/Pin.png"
                alt=""
                className="w-[16px] h-[16px] flex-shrink-0 mt-0.5"
                aria-hidden
              />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    )
  }

  if (isDesktop1440px) {
    return (
      <div className="w-full flex flex-col gap-[var(--spacing-m)] p-[var(--spacing-m)] items-start shadow-md border-t-4 border-t-[var(--color-brand)]">
        <h3 className="h3 text-[var(--color-secondary)]">
          This was not just a UX issue but a structural positioning problem.
        </h3>
        <div className="flex flex-row gap-[var(--spacing-xl)] items-center w-full">
        <ul className="flex flex-col gap-[var(--spacing-m)] list-none pl-0 w-1/2 min-w-0">
          {bullets.map((item, i) => (
            <li
              key={i}
              className="body text-[var(--color-primary)] flex items-start gap-[var(--spacing-m)]"
            >
              <img
                src="/Icons/Pin.png"
                alt=""
                className="w-[18px] h-[18px] flex-shrink-0 mt-0.5"
                aria-hidden
              />
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <div className="w-1/2 min-w-0 flex items-center justify-center">
          <JourneyFrameAnimation large />
        </div>
        </div>
      </div>
    )
  }

  return (
    <div className="w-full flex flex-col gap-[var(--spacing-m)] p-[var(--spacing-m)] items-start shadow-md border-t-6 border-t-[var(--color-brand)]">
      <h3 className="h3 text-[var(--color-secondary)]">
        This was not just a UX issue but a structural positioning problem.
      </h3>
      <div className="flex flex-row gap-[var(--spacing-xl)] items-center w-full">
        <ul className="flex flex-col gap-[var(--spacing-m)] list-none pl-0 flex-1 min-w-0">
          {bullets.map((item, i) => (
            <li
              key={i}
              className="body text-[var(--color-primary)] flex items-start gap-[var(--spacing-m)]"
            >
              <img
                src="/Icons/Pin.png"
                alt=""
                className="w-[20px] h-[20px] flex-shrink-0 mt-0.5"
                aria-hidden
              />
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <div className="flex-1 min-w-0 flex items-center justify-center">
          <JourneyFrameAnimation />
        </div>
      </div>
    </div>
  )
}
