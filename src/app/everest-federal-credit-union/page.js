"use client"

import React from "react"
import useMobileDetection from "@/_utilities/useMobileDetection"

export default function EverestFederalCreditUnion() {
  const { isMobile, isTablet, isDesktop1440px } = useMobileDetection()

  // Mobile (≤768px)
  if (isMobile) {
    return (
      <div className="w-full flex flex-col items-center px-[var(--spacing-lg)] pt-[var(--spacing-lg)] pb-[var(--spacing-8xl)] gap-[var(--spacing-xl)]">
        <div className="flex justify-center h-full w-full">
          <video
            src="/EFCU/Everest FCU.mp4"
            autoPlay
            muted
            playsInline
            loop
            className="w-full h-full object-contain"
          />
        </div>
      </div>
    )
  }

  // Tablet (769px - 1024px)
  if (isTablet) {
    return (
      <div className="flex flex-col items-center px-[var(--spacing-2xl)] pt-[var(--spacing-2xl)] pb-[var(--spacing-10xl)] gap-[var(--spacing-4xl)] w-full mx-auto">
        <div className="flex justify-center h-full w-full">
          <video
            src="/EFCU/Everest FCU.mp4"
            autoPlay
            muted
            playsInline
            loop
            className="w-full h-full object-contain"
          />
        </div>
      </div>
    )
  }

  // Desktop 1440px (1025px - 1440px)
  if (isDesktop1440px) {
    return (
      <div className="flex flex-col items-center px-[var(--spacing-2xl)] gap-[var(--spacing-4xl)] pt-[var(--spacing-2xl)] pb-[var(--spacing-10xl)] w-full mx-auto">
        <div className="flex justify-center h-full w-full">
          <video
            src="/EFCU/Everest FCU.mp4"
            autoPlay
            muted
            playsInline
            loop
            className="w-full h-full object-contain"
          />
        </div>
      </div>
    )
  }

  // Large Desktop (>1440px)
  return (
    <div className="flex flex-col items-center px-[var(--spacing-3xl)] gap-[var(--spacing-5xl)] pt-[var(--spacing-2xl)] pb-[var(--spacing-12xl)] w-full max-w-[1600px] mx-auto">
      <div className="flex justify-center h-full w-full">
        <video
          src="/EFCU/Everest FCU.mp4"
          autoPlay
          muted
          playsInline
          loop
          className="w-full h-full object-contain"
        />
      </div>
    </div>
  )
}


