"use client"

import React from "react"
import useMobileDetection from "@/_utilities/useMobileDetection"
import GroundLevelResearch from "@/components/EFCU/GroundLevelResearch"

export default function Research() {
  const { isMobile, isTablet, isDesktop1440px } = useMobileDetection()

  const padding = isMobile
    ? "px-[var(--spacing-lg)] py-[var(--spacing-2xl)]"
    : isTablet
      ? "px-[var(--spacing-2xl)] py-[var(--spacing-3xl)]"
      : isDesktop1440px
        ? "px-[var(--spacing-2xl)] py-[var(--spacing-4xl)]"
        : "px-[var(--spacing-3xl)] py-[var(--spacing-4xl)]"

  const gap = isMobile
    ? "var(--spacing-2xl)"
    : isTablet
      ? "var(--spacing-3xl)"
      : "var(--spacing-4xl)"

  return (
    <div
      className={`w-full flex flex-col ${padding} max-w-[1600px] mx-auto`}
      style={{ gap }}
    >
      <GroundLevelResearch />
    </div>
  )
}
