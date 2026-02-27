"use client"

import React from "react"
import useMobileDetection from "@/_utilities/useMobileDetection"
import { impactBox } from "@/data/EFCU/impactBox"

export default function ImpactBox() {
  const { isMobile, isTablet, isDesktop1440px } = useMobileDetection()

  const Card = ({ item, index }: { item: { metric: string; description: string }; index: number }) => (
    <div className="flex flex-col items-center justify-center text-center p-[var(--spacing-2xl)] border border-[var(--green-200)] bg-[var(--color-primary-inverse)] shadow-md w-full">
      <div className="flex items-center justify-center gap-[var(--spacing-s)]">
        {index === 1 && (
          <img
            src="/Icons/IconsGreen.svg"
            alt=""
            width={17}
            height={25}
            className="flex-shrink-0 self-center"
          />
        )}
        <span className="h3 text-[var(--color-primary)]">{item.metric}</span>
      </div>
      <p className="caption text-[var(--color-primary)] mt-[var(--spacing-m)] text-left">
        {item.description}
      </p>
    </div>
  )

  // Mobile (≤768px): stacked, full width cards
  if (isMobile) {
    return (
      <div className="w-full bg-[var(--green-100)] p-[var(--spacing-xl)]">
        <div className="w-full flex flex-col gap-[var(--spacing-xl)]">
          {impactBox.map((item, index) => (
            <Card key={index} item={item} index={index} />
          ))}
        </div>
      </div>
    )
  }

  // Tablet (769px - 1024px): 3 columns, smaller padding
  if (isTablet) {
    return (
      <div className="w-full bg-[var(--green-100)] p-[var(--spacing-2xl)]">
        <div className="w-full grid grid-cols-3 gap-[var(--spacing-xl)]">
          {impactBox.map((item, index) => (
            <Card key={index} item={item} index={index} />
          ))}
        </div>
      </div>
    )
  }

  // Desktop 1440px (1025px - 1440px): 3 columns, more gap
  if (isDesktop1440px) {
    return (
      <div className="w-full bg-[var(--green-100)] p-[var(--spacing-2xl)]">
        <div className="w-full grid grid-cols-3 gap-[var(--spacing-2xl)]">
          {impactBox.map((item, index) => (
            <Card key={index} item={item} index={index} />
          ))}
        </div>
      </div>
    )
  }

  // Large Desktop (>1440px): 3 columns, max-width container
  return (
    <div className="w-full max-w-[1600px] mx-auto bg-[var(--green-100)] p-[var(--spacing-3xl)]">
      <div className="w-full grid grid-cols-3 gap-[var(--spacing-3xl)]">
        {impactBox.map((item, index) => (
          <Card key={index} item={item} index={index} />
        ))}
      </div>
    </div>
  )
}
