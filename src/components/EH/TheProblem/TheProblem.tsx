"use client"

import React from "react"
import useMobileDetection from "@/_utilities/useMobileDetection"
import { theProblem } from "@/data/EH/theProblem"

const ARROW_COLOR = "#FFD966"

function ArrowRightIcon({
  className,
  width = 16,
}: {
  className?: string
  width?: number
}) {
  const height = Math.round((11 / 16) * width)
  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox="0 0 16 11"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M1 5.5h14M10 1l5 4.5-5 4.5"
        stroke={ARROW_COLOR}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function PointList({ variant }: { variant?: "desktop" }) {
  const textClass = "body text-[var(--color-primary)]"
  const itemGap = "gap-[var(--spacing-xl)]"
  if (variant === "desktop") {
    return (
      <div className="flex flex-col gap-[var(--spacing-l)] w-full">
        {theProblem.points.map((text, i) => (
          <div
            key={i}
            className={`flex flex-row items-center ${itemGap} pl-0`}
          >
            <ArrowRightIcon className="flex-shrink-0" width={40} />
            <p className={`${textClass} flex-1 min-w-0`}>{text}</p>
          </div>
        ))}
      </div>
    )
  }
  return (
    <div className="flex flex-col gap-[var(--spacing-l)] w-full">
      {theProblem.points.map((text, i) => (
        <div
          key={i}
          className={`flex flex-row items-center ${itemGap} px-[var(--spacing-m)] py-[var(--spacing-m)]`}
        >
          <ArrowRightIcon className="flex-shrink-0" width={24} />
          <p className={`${textClass} flex-1 min-w-0`}>{text}</p>
        </div>
      ))}
    </div>
  )
}

export default function TheProblem() {
  const { isMobile, isTablet, isDesktop1440px } = useMobileDetection()

  if (isMobile) {
    return (
      <div className="w-full flex flex-col gap-[var(--spacing-xl)] py-[var(--spacing-xl)]">
        <div className="flex flex-row items-start justify-start gap-[var(--spacing-m)] w-full ">
          <div className="flex flex-col gap-[var(--spacing-s)] w-[80%] min-w-0 text-left">
            <h2 className="h2 text-[var(--color-primary)]">
              {theProblem.heading}
            </h2>
          </div>
        </div>
        <div className="w-full">
          <PointList />
        </div>
      </div>
    )
  }

  if (isTablet) {
    return (
      <div className="w-full flex flex-col gap-[var(--spacing-2xl)] p-[var(--spacing-xl)]">
        <div className="flex flex-row items-start justify-start gap-[var(--spacing-xl)] w-full">
          <div className="flex flex-col gap-[var(--spacing-s)] w-[60%] min-w-0 text-left">
            <h2 className="h2 text-[var(--color-primary)]">
              {theProblem.heading}
            </h2>
          </div>
        </div>
        <PointList />
      </div>
    )
  }

  if (isDesktop1440px) {
    return (
      <div className="w-full flex flex-row items-start gap-[var(--spacing-3xl)] p-[var(--spacing-xl)]">
        <div className="flex flex-col items-start gap-[var(--spacing-s)] py-[var(--spacing-xl)] w-[40%] min-w-0 text-left">
          <h2 className="h3 text-[var(--color-primary)]">
            {theProblem.heading}
          </h2>
        </div>
        <div className="flex flex-col items-start gap-[var(--spacing-xl)] flex-1 min-w-0">
          <PointList variant="desktop" />
        </div>
      </div>
    )
  }

  return (
    <div className="w-full flex flex-row items-start gap-[var(--spacing-xl)] p-[var(--spacing-xl)]">
      <div className="flex flex-col items-start gap-[var(--spacing-s)] py-[var(--spacing-xl)] w-[40%] min-w-0 text-left">
        <h2 className="h3 text-[var(--color-secondary-inverse)]">
          {theProblem.heading}
        </h2>
      </div>
      <div className="flex flex-col items-start gap-[var(--spacing-xl)] flex-1 min-w-0">
        <PointList variant="desktop" />
      </div>
    </div>
  )
}
