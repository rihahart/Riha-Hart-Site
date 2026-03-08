"use client"

import React from "react"
import useMobileDetection from "@/_utilities/useMobileDetection"
import { keyInsight } from "@/data/iklass/KeyInsight"
import KeyInsightAnimation from "./KeyInsightAnimation"

const YELLOW = "#FFDD86"

function InsightContentBox() {
  return (
    <div
      className="flex flex-col gap-[var(--spacing-l)] w-full border-4 px-[var(--spacing-m)] py-[var(--spacing-m)] bg-white"
      style={{ borderColor: YELLOW }}
    >
      {keyInsight.insights.map((item, i) => (
        <div key={i} className="flex flex-col gap-[var(--spacing-s)]">
          <h3 className="h3 text-[var(--color-brand)]">
            {item.heading}
          </h3>
          <p className="body text-[var(--color-primary)]">{item.paragraph}</p>
        </div>
      ))}
    </div>
  )
}

export default function KeyInsight() {
  const { isMobile, isTablet, isDesktop1440px } = useMobileDetection()

  const verticalTitle = (
    <div className="flex items-center justify-center [writing-mode:vertical-rl] rotate-180">
      <h2 className="h2 text-[var(--color-primary)] whitespace-nowrap">
        {keyInsight.title}
      </h2>
    </div>
  )

  if (isMobile) {
    return (
      <div className="w-full flex flex-col gap-[var(--spacing-xl)]">
        <div className="flex flex-row items-end justify-end gap-[var(--spacing-m)] w-full">
          <div className="flex-shrink-0 max-w-[100px]">
            <KeyInsightAnimation />
          </div>
          <div className="flex-shrink-0 self-stretch flex items-end justify-end">
            {verticalTitle}
          </div>
        </div>
        <InsightContentBox />
      </div>
    )
  }

  if (isTablet) {
    return (
      <div className="w-full flex flex-col gap-[var(--spacing-xl)] p-[var(--spacing-xl)]">
        <div className="flex flex-row items-end justify-end gap-[var(--spacing-m)] w-full">
          <div className="flex-shrink-0 max-w-[150px]">
            <KeyInsightAnimation />
          </div>
          <div className="flex-shrink-0 self-stretch flex items-end justify-end">
            {verticalTitle}
          </div>
        </div>
        <InsightContentBox />
      </div>
    )
  }

  if (isDesktop1440px) {
    return (
      <div className="w-full flex flex-row items-stretch gap-[var(--spacing-xl)] p-[var(--spacing-xl)]">
        <div className="flex flex-row items-center justify-center gap-[var(--spacing-2xl)] w-[40%] min-w-0 min-h-0">
          <div className="w-full max-w-[275px]">
            <KeyInsightAnimation />
          </div>
          {verticalTitle}
        </div>
        <div className="flex flex-col items-start gap-[var(--spacing-xl)] flex-1 min-w-0">
          <InsightContentBox />
        </div>
      </div>
    )
  }

  return (
    <div className="w-full flex flex-row items-stretch gap-[var(--spacing-xl)] p-[var(--spacing-xl)]">
      <div className="flex flex-row items-center gap-[var(--spacing-2xl)] flex-shrink-0 w-[40%] min-w-0 min-h-0">
        <div className="w-full max-w-[350px]">
          <KeyInsightAnimation />
        </div>
        {verticalTitle}
      </div>
      <div className="flex flex-col items-start gap-[var(--spacing-xl)] flex-1 min-w-0">
        <InsightContentBox />
      </div>
    </div>
  )
}
