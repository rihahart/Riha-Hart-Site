"use client"

import React, { useState, useEffect } from "react"
import useMobileDetection from "@/_utilities/useMobileDetection"
import { clarifyingMembership } from "@/data/EFCU/Membershiploans/clarifyingMembership"

const NAV_FRAMES = [
  "/EFCU/ClarifyingNavAnimation/Navigation/01FinalNavigation.png",
  "/EFCU/ClarifyingNavAnimation/Navigation/02FinalNavigation.png",
  "/EFCU/ClarifyingNavAnimation/Navigation/03FinalNavigation.png",
  "/EFCU/ClarifyingNavAnimation/Navigation/04FinalNavigation.png",
  "/EFCU/ClarifyingNavAnimation/Navigation/05FinalNavigation.png"
]

function NavigationFrameAnimation() {
  const [index, setIndex] = useState(0)
  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % NAV_FRAMES.length)
    }, 800)
    return () => clearInterval(id)
  }, [])
  return (
    <img
      src={NAV_FRAMES[index]}
      alt=""
      className="w-full h-full max-h-[280px] object-contain"
      aria-hidden
    />
  )
}

export default function ClarifyingMembership() {
  const { isMobile, isTablet, isDesktop1440px } = useMobileDetection()
  const section = clarifyingMembership

  const heading = (
    <h3 className="h3 text-[var(--blue-500)]">
      {section.title}
    </h3>
  )

  const paragraph = (
    <p className="body text-[var(--color-primary)]">{section.description}</p>
  )

  if (isMobile) {
    return (
      <div className="w-full flex flex-col gap-[var(--spacing-xl)] items-start">
        <div className="flex flex-col gap-[var(--spacing-s)]">
          {heading}
          {paragraph}
        </div>
        <div className="w-full flex flex-col gap-[var(--spacing-xl)] items-center">
          <video
            src="/EFCU/ClarifyingNavAnimation/HueristicEvaluation.mp4"
            className="w-full max-h-[auto] object-contain"
            muted
            playsInline
            autoPlay
            loop
            aria-label="Heuristic evaluation"
          />
          <div className="w-full flex items-center justify-center">
            <NavigationFrameAnimation />
          </div>
        </div>
      </div>
    )
  }

  if (isTablet) {
    return (
      <div className="w-full flex flex-col gap-[var(--spacing-lg)] items-start">
        <div className="flex flex-col gap-[var(--spacing-s)]">
          {heading}
          {paragraph}
        </div>
        <div className="w-full flex flex-col gap-[var(--spacing-xl)] mt-[var(--spacing-xl)] items-center">
          <video
            src="/EFCU/ClarifyingNavAnimation/HueristicEvaluation.mp4"
            className="w-full max-h-[auto] object-contain"
            muted
            playsInline
            autoPlay
            loop
            aria-label="Heuristic evaluation"
          />
          <div className="w-full flex items-center justify-center">
            <NavigationFrameAnimation />
          </div>
        </div>
      </div>
    )
  }

  if (isDesktop1440px) {
    return (
      <div className="w-full flex flex-col justify-between items-center gap-[var(--spacing-2xl)]">
        <div className="flex flex-col gap-[var(--spacing-s)]">
          {heading}
          {paragraph}
        </div>
        <div className="w-full flex flex-row gap-[var(--spacing-xl)] items-center">
          <div className="w-1/2 min-w-0 flex items-center justify-center">
            <video
              src="/EFCU/ClarifyingNavAnimation/HueristicEvaluation.mp4"
              className="max-h-[300px] w-full object-contain"
              muted
              playsInline
              autoPlay
              loop
              aria-label="Heuristic evaluation"
            />
          </div>
          <div className="w-1/2 min-w-0 flex items-center justify-center">
            <NavigationFrameAnimation />
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="w-full flex flex-col justify-between items-center gap-[var(--spacing-2xl)]">
      <div className="flex flex-col gap-[var(--spacing-s)]">
        {heading}
        {paragraph}
      </div>
      <div className="w-full flex flex-row gap-[var(--spacing-xl)] items-center">
        <div className="w-1/2 min-w-0 flex items-center justify-center">
          <video
            src="/EFCU/ClarifyingNavAnimation/HueristicEvaluation.mp4"
            className="max-h-[350px] w-full object-contain"
            muted
            playsInline
            autoPlay
            loop
            aria-label="Heuristic evaluation"
          />
        </div>
        <div className="w-1/2 min-w-0 flex items-center justify-center">
          <NavigationFrameAnimation />
        </div>
      </div>
    </div>
  )
}
