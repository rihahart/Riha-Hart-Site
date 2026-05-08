"use client"

import React from "react"
import useMobileDetection from "@/_utilities/useMobileDetection"
import { researchApproach } from "@/data/iklass/ResearchApproach"
import ResearchApproachAnimation from "./ResearchApproachAnimation"

function ParagraphCards({ variant }: { variant?: "desktop" }) {
  if (variant === "desktop") {
    return (
      <div className="flex flex-col gap-[var(--spacing-l)] w-full">
        {researchApproach.paragraphs.map((para, i) => (
          <div
            key={i}
            className="border-l-4 border-l-[var(--color-brand)] bg-[var(--color-primary-inverse)] pl-[var(--spacing-xl)]" style={{ boxShadow: "var(--glow-shadow)" }}
          >
            <p className="body text-[var(--color-primary)] py-[var(--spacing-m)]">
              {para}
            </p>
          </div>
        ))}
      </div>
    )
  }
  return (
    <div className="flex flex-col gap-[var(--spacing-l)] w-full">
      {researchApproach.paragraphs.map((para, i) => (
        <div
          key={i}
          className="border-t-4 border-t-[var(--color-brand)] bg-[var(--color-primary-inverse)] px-[var(--spacing-m)] py-[var(--spacing-m)]"
          style={{ boxShadow: "var(--glow-shadow)" }}
        >
          <p className="body text-[var(--color-primary)]">
            {para}
          </p>
        </div>
      ))}
    </div>
  )
}

export default function ResearchApproach() {
  const { isMobile, isTablet, isDesktop1440px } = useMobileDetection()

  if (isMobile) {
    return (
      <div className="w-full flex flex-col gap-[var(--spacing-xl)] py-[var(--spacing-xl)]">
        <div className="flex flex-row items-end justify-between gap-[var(--spacing-m)] w-full">
          <h2 className="h2 text-[var(--color-primary)] flex-1 min-w-0">
            {researchApproach.heading}
          </h2>
          <div className="flex-shrink-0 w-full max-w-[90px]">
            <ResearchApproachAnimation />
          </div>
        </div>
        <ParagraphCards />
      </div>
    )
  }

  if (isTablet) {
    return (
      <div className="w-full flex flex-col gap-[var(--spacing-2xl)] p-[var(--spacing-xl)]">
        <div className="flex flex-row items-end justify-between  gap-[var(--spacing-xl)] w-full">
          <h2 className="h2 text-[var(--color-primary)] w-[50%] min-w-0">
            {researchApproach.heading}
          </h2>

          <div className="flex-shrink-0 w-full max-w-[100px]">
            <ResearchApproachAnimation />
          </div>
        </div>
        <ParagraphCards />
      </div>
    )
  }

  if (isDesktop1440px) {
    return (
      <div className="w-full flex flex-row items-center gap-[var(--spacing-xl)] p-[var(--spacing-xl)]">
        <div className="flex flex-col items-start gap-[var(--spacing-m)] w-[40%] min-w-0">
          <h2 className="h2 text-[var(--color-primary)]">
            {researchApproach.heading}
          </h2>
          <div className="w-full max-w-[175px]">
          <ResearchApproachAnimation />
          </div>
        </div>
        <div className="flex flex-col items-start gap-[var(--spacing-xl)] flex-1 min-w-0">
          <ParagraphCards variant="desktop" />
        </div>
      </div>
    )
  }

  return (
    <div className="w-full flex flex-row items-center gap-[var(--spacing-xl)] p-[var(--spacing-xl)]">
      <div className="flex flex-col items-start gap-[var(--spacing-m)] w-[40%] min-w-0">
        <h2 className="h2 text-[var(--color-primary)]">
          {researchApproach.heading}
        </h2>
        <div className="w-full max-w-[225px]">
          <ResearchApproachAnimation />
        </div>
      </div>
      <div className="flex flex-col items-start gap-[var(--spacing-xl)] flex-1 min-w-0">
        <ParagraphCards variant="desktop" />
      </div>
    </div>
  )
}
