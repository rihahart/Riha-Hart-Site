"use client"

import React from "react"
import useMobileDetection from "@/_utilities/useMobileDetection"
import { clarifyingMembership } from "@/data/EFCU/Membershiploans/clarifyingMembership"

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
      <div className="w-full flex flex-col gap-[var(--spacing-m)] items-start">
        {heading}
        {paragraph}
      </div>
    )
  }

  if (isTablet) {
    return (
      <div className="w-full flex flex-col gap-[var(--spacing-m)] items-start">
        {heading}
        {paragraph}
      </div>
    )
  }

  if (isDesktop1440px) {
    return (
      <div className="w-full flex flex-row gap-[var(--spacing-2xl)] items-center">
        <div className="flex flex-col gap-[var(--spacing-m)] flex-1 min-w-0">
          {heading}
          {paragraph}
        </div>
      </div>
    )
  }

  return (
    <div className="w-full flex flex-row justify-between items-center">
      <div className="flex flex-col gap-[var(--spacing-m)] ">
        {heading}
        {paragraph}
      </div>
    </div>
  )
}
