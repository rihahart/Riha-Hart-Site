"use client"

import React from "react"
import useMobileDetection from "@/_utilities/useMobileDetection"
import { navandScan } from "@/data/iklass/NavandScan"

function SectionCards({ variant }: { variant?: "desktop" }) {
  if (variant === "desktop") {
    return (
      <div className="border-l-4 border-l-[var(--color-secondary)] pl-[var(--spacing-xl)] flex flex-col gap-[var(--spacing-l)] w-full">
        {navandScan.sections.map((section, i) => (
          <div key={i}>
            <h4 className="h4 text-[var(--color-brand-hover)]">
              {section.heading}
            </h4>
            <p className="body text-[var(--color-primary)] py-[var(--spacing-m)]">
              {section.paragraph}
            </p>
          </div>
        ))}
      </div>
    )
  }
  return (
    <div className="border-t-4 border-t-[var(--color-secondary)] pt-[var(--spacing-xl)] flex flex-col gap-[var(--spacing-l)] w-full">
      {navandScan.sections.map((section, i) => (
        <div key={i} className="py-[var(--spacing-m)]">
          <h4 className="h4 text-[var(--color-brand-hover)]">
            {section.heading}
          </h4>
          <p className="body text-[var(--color-primary)]">
            {section.paragraph}
          </p>
        </div>
      ))}
    </div>
  )
}

export default function NavandScan() {
  const { isMobile, isTablet, isDesktop1440px } = useMobileDetection()

  if (isMobile) {
    return (
      <div className="w-full flex flex-col items-start gap-[var(--spacing-s)] py-[var(--spacing-xl)]">
        <h2 className="h2 text-[var(--color-primary)]">
          {navandScan.title}
        </h2>
        <SectionCards />
      </div>
    )
  }

  if (isTablet) {
    return (
      <div className="w-full flex flex-col items-start gap-[var(--spacing-2xl)] p-[var(--spacing-xl)]">
        <h2 className="h2 text-[var(--color-primary)]">
          {navandScan.title}
        </h2>
        <SectionCards />
      </div>
    )
  }

  if (isDesktop1440px) {
    return (
      <div className="w-full flex flex-row items-start gap-[var(--spacing-xl)] p-[var(--spacing-xl)]">
        <div className="flex flex-col items-start w-[40%] min-w-0">
          <h2 className="h2 text-[var(--color-primary)]">
            {navandScan.title}
          </h2>
        </div>
        <div className="flex flex-col items-start gap-[var(--spacing-xl)] flex-1 min-w-0">
          <SectionCards variant="desktop" />
        </div>
      </div>
    )
  }

  return (
    <div className="w-full flex flex-row items-start gap-[var(--spacing-xl)] p-[var(--spacing-xl)]">
      <div className="flex flex-col items-start w-[40%] min-w-0">
        <h2 className="h2 text-[var(--color-primary)]">
          {navandScan.title}
        </h2>
      </div>
      <div className="flex flex-col items-start gap-[var(--spacing-xl)] flex-1 min-w-0">
        <SectionCards variant="desktop" />
      </div>
    </div>
  )
}
