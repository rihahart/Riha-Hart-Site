"use client"

import React from "react"
import useMobileDetection from "@/_utilities/useMobileDetection"
import { impactBox } from "@/data/EFCU/impactBox"

type ScreenSize = "mobile" | "tablet" | "desktop1440" | "large"

const cardStyles: Record<
  ScreenSize,
  {
    cardClass: string
    iconWidth: number
    iconHeight: number
    iconTranslateY: number
    metricClass: string
    descriptionClass: string
    metricGap: string
    contentGap: string
  }
> = {
  mobile: {
    cardClass: "p-[var(--spacing-xl)]",
    iconWidth: 18,
    iconHeight: 24,
    iconTranslateY: 1,
    metricClass: "h2",
    descriptionClass: "body",
    metricGap: "gap-[var(--spacing-s)]",
    contentGap: "gap-[var(--spacing-m)]"
  },
  tablet: {
    cardClass: "h-[225px] p-[var(--spacing-xl)]",
    iconWidth: 16,
    iconHeight: 23,
    iconTranslateY: 1,
    metricClass: "h3",
    descriptionClass: "caption",
    metricGap: "gap-[var(--spacing-s)]",
    contentGap: "gap-[var(--spacing-m)]"
  },
  desktop1440: {
    cardClass: " h-[250px] p-[var(--spacing-2xl)]",
    iconWidth: 20,
    iconHeight: 30,
    iconTranslateY: 1,
    metricClass: "h3",
    descriptionClass: "caption",
    metricGap: "gap-[var(--spacing-m)]",
    contentGap: "gap-[var(--spacing-lg)]"
  },
  large: {
    cardClass: "h-[275px] p-[var(--spacing-3xl)]",
    iconWidth: 34,
    iconHeight: 40,
    iconTranslateY: 1,
    metricClass: "h2",
    descriptionClass: "caption",
    metricGap: "gap-[var(--spacing-lg)]",
    contentGap: "gap-[var(--spacing-lg)]"
  }
}

export default function ImpactBox() {
  const { isMobile, isTablet, isDesktop1440px } = useMobileDetection()

  const Card = ({
    item,
    index,
    screenSize
  }: {
    item: { metric: string; description: string }
    index: number
    screenSize: ScreenSize
  }) => {
    const { cardClass, iconWidth, iconHeight, iconTranslateY, metricClass, descriptionClass, metricGap, contentGap } =
      cardStyles[screenSize]
    return (
      <div
        className={`flex flex-col items-start justify-start text-left border border-[var(--green-200)] bg-[var(--color-primary-inverse)] shadow-md w-full ${contentGap} ${cardClass}`}
      >
        <div className={`flex w-full items-center justify-center ${metricGap}`}>
          {index === 1 && (
            <img
              src="/Icons/IconsGreen.svg"
              alt=""
              width={iconWidth}
              height={iconHeight}
              className="flex-shrink-0 self-center"
              style={iconTranslateY ? { transform: `translateY(${iconTranslateY}px)` } : undefined}
            />
          )}
          <span className={`${metricClass} text-[var(--color-primary)]`}>
            {item.metric}
          </span>
        </div>
        <p
          className={`${descriptionClass} text-[var(--color-primary)] text-left w-full`}
        >
          {item.description}
        </p>
      </div>
    )
  }

  // Mobile (≤768px): stacked, full width cards
  if (isMobile) {
    return (
      <div className="w-full bg-[var(--green-100)] p-[var(--spacing-m)]">
        <div className="w-full flex flex-col gap-[var(--spacing-lg)]">
          {impactBox.map((item, index) => (
            <Card key={index} item={item} index={index} screenSize="mobile" />
          ))}
        </div>
      </div>
    )
  }

  // Tablet (769px - 1024px): 3 columns, smaller padding
  if (isTablet) {
    return (
      <div className="w-full bg-[var(--green-100)] p-[var(--spacing-lg)]">
        <div className="w-full grid grid-cols-3 gap-[var(--spacing-lg)]">
          {impactBox.map((item, index) => (
            <Card key={index} item={item} index={index} screenSize="tablet" />
          ))}
        </div>
      </div>
    )
  }

  // Desktop 1440px (1025px - 1440px): 3 columns, more gap
  if (isDesktop1440px) {
    return (
      <div className="w-full bg-[var(--green-100)] p-[var(--spacing-xl)]">
        <div className="w-full grid grid-cols-3 gap-[var(--spacing-2xl)]">
          {impactBox.map((item, index) => (
            <Card key={index} item={item} index={index} screenSize="desktop1440" />
          ))}
        </div>
      </div>
    )
  }

  // Large Desktop (>1440px): 3 columns, max-width container, card height 275 + 4xl padding
  return (
    <div className="w-full max-w-[1600px] mx-auto bg-[var(--green-100)] p-[var(--spacing-3xl)]">
      <div className="w-full grid grid-cols-3 gap-[var(--spacing-3xl)]">
        {impactBox.map((item, index) => (
          <Card key={index} item={item} index={index} screenSize="large" />
        ))}
      </div>
    </div>
  )
}
