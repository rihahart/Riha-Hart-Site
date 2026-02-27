"use client"

import React from "react"
import useMobileDetection from "@/_utilities/useMobileDetection"
import WeakOnlineApp from "./WeakOnlineApp"
import Bottleneck from "./Bottleneck"
import LowTrust from "./LowTrust"

const baseStyle: React.CSSProperties = {
  backgroundColor: "#F6F6F8",
  borderLeftColor: "var(--blue-300)",
  borderLeftStyle: "solid"
}

export default function BankScale() {
  const { isMobile, isTablet, isDesktop1440px } = useMobileDetection()

  if (isMobile) {
    return (
      <div
        className="w-full flex flex-col px-[var(--spacing-lg)] py-[var(--spacing-2xl)] gap-[var(--spacing-4xl)]"
  
      >
        <WeakOnlineApp />
        <Bottleneck />
        <LowTrust />
      </div>
    )
  }

  if (isTablet) {
    return (
      <div
        className="w-full flex flex-col px-[var(--spacing-xl)] py-[var(--spacing-xl)] gap-[var(--spacing-6xl)]"
    
      >
        <WeakOnlineApp />
        <Bottleneck />
        <LowTrust />
      </div>
    )
  }

  if (isDesktop1440px) {
    return (
      <div
        className="w-full flex flex-col px-[var(--spacing-2xl)] py-[var(--spacing-4xl)] gap-[var(--spacing-8xl)]"
     
      >
        <WeakOnlineApp />
        <Bottleneck />
        <LowTrust />
      </div>
    )
  }

  return (
    <div
      className="w-full flex flex-col px-[var(--spacing-6xl)] py-[var(--spacing-4xl)] gap-[var(--spacing-9xl)]"

    >
      <WeakOnlineApp />
      <Bottleneck />
      <LowTrust />
    </div>
  )
}
