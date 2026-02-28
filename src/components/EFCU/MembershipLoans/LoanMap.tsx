"use client"

import React from "react"
import useMobileDetection from "@/_utilities/useMobileDetection"

export default function LoanMap() {
  const { isMobile, isTablet, isDesktop1440px } = useMobileDetection()

  if (isMobile) {
    return <div className="w-full flex flex-col gap-[var(--spacing-2xl)] items-start" />
  }

  if (isTablet) {
    return <div className="w-full flex flex-col gap-[var(--spacing-2xl)] items-start" />
  }

  if (isDesktop1440px) {
    return <div className="w-full flex flex-row gap-[var(--spacing-2xl)] items-center" />
  }

  return <div className="w-full flex flex-row justify-between items-center" />
}
