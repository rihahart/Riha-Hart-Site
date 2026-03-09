"use client"

import React from "react"
import useMobileDetection from "@/_utilities/useMobileDetection"
import { ehCommunicates } from "@/data/EH/EHCommunicates"

function IndicatorCards({ variant }: { variant?: "desktop" }) {
  const bodyClass = "body text-[var(--color-secondary-inverse)]"
  const itemInner = (item: (typeof ehCommunicates.indicators)[0]) => (
    <div className="flex flex-col gap-[var(--spacing-xs)]">
      <h3 className="h3 text-[#FFDD86]">{item.title}</h3>
      <p className={bodyClass}>{item.description}</p>
    </div>
  )
  if (variant === "desktop") {
    return (
      <div className="flex flex-col gap-[var(--spacing-l)] w-full">
        {ehCommunicates.indicators.map((item, i) => (
          <div
            key={i}
            className="border-l-4 border-l-[var(--color-brand)] pl-[var(--spacing-xl)]"
          >
            <div className="py-[var(--spacing-m)]">{itemInner(item)}</div>
          </div>
        ))}
      </div>
    )
  }
  return (
    <div className="flex flex-col gap-[var(--spacing-l)] w-full">
      {ehCommunicates.indicators.map((item, i) => (
        <div
          key={i}
          className="border-t-4 border-t-[var(--color-brand)] px-[var(--spacing-m)] py-[var(--spacing-m)]"
        >
          {itemInner(item)}
        </div>
      ))}
    </div>
  )
}

export default function EHCommunications() {
  const { isMobile, isTablet, isDesktop1440px } = useMobileDetection()

  if (isMobile) {
    return (
      <div className="w-full flex flex-col gap-[var(--spacing-xl)] py-[var(--spacing-xl)]">
        <div className="flex flex-row items-start justify-start gap-[var(--spacing-m)] w-full">
          <h2 className="h2 text-[var(--color-secondary-inverse)] w-[80%] min-w-0 text-left">
            {ehCommunicates.heading}
          </h2>
        </div>
        <div className="py-[var(--spacing-lg)]">
          <IndicatorCards />
        </div>
      </div>
    )
  }

  if (isTablet) {
    return (
      <div className="w-full flex flex-col gap-[var(--spacing-3xl)] p-[var(--spacing-xl)]">
        <div className="flex flex-row items-start justify-start gap-[var(--spacing-xl)] w-full">
          <h2 className="h2 text-[var(--color-secondary-inverse)] w-[60%] min-w-0 text-left">
            {ehCommunicates.heading}
          </h2>
        </div>
        <IndicatorCards />
      </div>
    )
  }

  if (isDesktop1440px) {
    return (
      <div className="w-full flex flex-row items-start gap-[var(--spacing-3xl)] p-[var(--spacing-xl)]">
        <div className="flex flex-col items-start gap-[var(--spacing-m)] py-[var(--spacing-xl)] w-[40%] min-w-0">
          <h2 className="h3 text-[var(--color-secondary-inverse)]">
            {ehCommunicates.heading}
          </h2>
        </div>
        <div className="flex flex-col items-start gap-[var(--spacing-xl)] flex-1 min-w-0">
          <IndicatorCards variant="desktop" />
        </div>
      </div>
    )
  }

  return (
    <div className="w-full flex flex-row items-start gap-[var(--spacing-3xl)] p-[var(--spacing-xl)]">
      <div className="flex flex-col items-start gap-[var(--spacing-m)] py-[var(--spacing-xl)] w-[40%] min-w-0">
        <h2 className="h3 text-[var(--color-secondary-inverse)]">
          {ehCommunicates.heading}
        </h2>
      </div>
      <div className="flex flex-col items-start gap-[var(--spacing-xl)] flex-1 min-w-0">
        <IndicatorCards variant="desktop" />
      </div>
    </div>
  )
}
