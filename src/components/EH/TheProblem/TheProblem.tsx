"use client"

import React from "react"
import Image from "next/image"
import useMobileDetection from "@/_utilities/useMobileDetection"
import { theProblems } from "@/data/EH/theProblems"

function ProgressSummary({ className, maxWidth }: { className?: string; maxWidth?: number }) {
  return (
    <Image
      src="/EarthHero/EHScreens/ProgressSummary.svg"
      alt="Progress Summary"
      width={maxWidth ?? 400}
      height={300}
      className={`h-auto object-contain ${className ?? ""}`}
      style={{ width: "100%", maxWidth: maxWidth ? `${maxWidth}px` : "100%" }}
    />
  )
}

function HeroLevels({ maxWidth }: { maxWidth?: number }) {
  return (
    <Image
      src={theProblems.heroLevelsImage}
      alt="Hero Levels"
      width={maxWidth ?? 400}
      height={300}
      className="h-auto object-contain"
      style={{ width: "100%", maxWidth: maxWidth ? `${maxWidth}px` : "100%" }}
    />
  )
}

function IndicatorCards({ variant, borderWidth = 4 }: { variant?: "desktop"; borderWidth?: number }) {
  const bodyClass = "body text-[var(--color-primary)]"
  const itemInner = (item: (typeof theProblems.indicators)[0]) => (
    <div className="flex flex-col gap-[var(--spacing-xl)]">
      <h3 className="h3 text-[var(--color-primary)]">{item.title}</h3>
      <div className="flex flex-col gap-[var(--spacing-s)]">
        <p className={bodyClass}>{item.description1}</p>
        <p className={bodyClass}>{item.description2}</p>
      </div>
    </div>
  )
  if (variant === "desktop") {
    return (
      <div className="flex flex-col gap-[var(--spacing-l)] w-full">
        {theProblems.indicators.map((item, i) => (
          <div
            key={i}
            style={{ borderTopWidth: borderWidth, borderTopStyle: "solid", borderTopColor: item.color }}
          >
            <div className="py-[var(--spacing-m)]">{itemInner(item)}</div>
          </div>
        ))}
      </div>
    )
  }
  return (
    <div className="flex flex-col gap-[var(--spacing-l)] w-full">
      {theProblems.indicators.map((item, i) => (
        <div
          key={i}
          className="px-[var(--spacing-m)] py-[var(--spacing-m)]"
          style={{ borderTopWidth: borderWidth, borderTopStyle: "solid", borderTopColor: item.color }}
        >
          {itemInner(item)}
        </div>
      ))}
    </div>
  )
}

export default function TheProblem() {
  const { isMobile, isTablet, isDesktop1440px } = useMobileDetection()

  if (isMobile) {
    return (
      <div className="w-full flex flex-col items-center gap-[var(--spacing-xs)] py-[var(--spacing-xl)]">
        <ProgressSummary maxWidth={320} />
        <HeroLevels maxWidth={320}  />
        <div className="py-[var(--spacing-lg)]">
          <IndicatorCards borderWidth={4} />
        </div>
        
      </div>
    )
  }

  if (isTablet) {
    return (
      <div className="w-full flex flex-col items-center gap-[var(--spacing-xl)] p-[var(--spacing-xl)]">
        <div className="flex w-full flex-row gap-[var(--spacing-m)] items-end justify-center">
          <ProgressSummary maxWidth={350} />
          <HeroLevels maxWidth={320} />
        </div>
        <IndicatorCards borderWidth={6} />
      </div>
    )
  }

  if (isDesktop1440px) {
    return (
      <div className="w-full flex flex-row items-center justify-between p-[var(--spacing-xl)]">
        <div className="flex flex-col items-start gap-[var(--spacing-m)] w-[45%] min-w-0">
          <ProgressSummary maxWidth={560} />
          <HeroLevels maxWidth={560} />
        </div>
        <div className="flex flex-col items-end gap-[var(--spacing-xl)] w-[40%] min-w-0">
          <IndicatorCards variant="desktop" borderWidth={8} />
        </div>
      </div>
    )
  }

  return (
    <div className="w-full  flex flex-row items-center justify-between p-[var(--spacing-xl)]">
      <div className="flex flex-col items-center  gap-[var(--spacing-m)] w-[45%] h-full min-w-0">
        <ProgressSummary maxWidth={680} />
        <HeroLevels maxWidth={680} />
      </div>
      <div className="flex flex-col items-end gap-[var(--spacing-xl)] w-[40%] min-w-0">
        <IndicatorCards variant="desktop" borderWidth={12} />
      </div>
    </div>
  )
}
