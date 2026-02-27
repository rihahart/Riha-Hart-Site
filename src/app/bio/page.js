"use client"

import React from "react"
import useMobileDetection from "@/_utilities/useMobileDetection"
import Image from "next/image"
import Button from "@/components/Button"
import { bioData } from "@/data/bioData"

export default function Bio() {
  const { isMobile, isTablet, isDesktop1440px } = useMobileDetection()

  // Mobile (≤768px)
  if (isMobile) {
    return (
      <div className="w-full flex flex-col items-center px-[var(--spacing-lg)] pt-[var(--spacing-lg)] pb-[var(--spacing-8xl)] gap-[var(--spacing-xl)]">
        <div className="w-full flex flex-col items-center justify-center gap-[var(--spacing-2xl)]">
          <img src={bioData.image.src} alt={bioData.image.alt} />
          <div className="flex flex-col items-start justify-center gap-[var(--spacing-lg)]">
            <h2 className="h2 text-[var(--color-primary)]">
              {bioData.heading}
            </h2>
            {bioData.paragraphs.map((paragraph, index) => (
              <p key={index} className="body text-[var(--color-primary)]">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    )
  }

  // Tablet (769px - 1024px)
  if (isTablet) {
    return (
      <div className="flex flex-col items-center px-[var(--spacing-2xl)] pt-[var(--spacing-2xl)] pb-[var(--spacing-10xl)] gap-[var(--spacing-4xl)] w-full  mx-auto">
        <div className="w-full flex flex-col items-center justify-center gap-[var(--spacing-4xl)]">
          <img src={bioData.image.src} alt={bioData.image.alt} />
          <div className="flex flex-col items-start justify-center gap-[var(--spacing-xl)]">
            <h2 className="h2 text-[var(--color-primary)]">
              {bioData.heading}
            </h2>
            {bioData.paragraphs.map((paragraph, index) => (
              <p key={index} className="body text-[var(--color-primary)]">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    )
  }

  // Desktop 1440px (1025px - 1440px)
  if (isDesktop1440px) {
    return (
      <div className="flex flex-col items-center px-[var(--spacing-2xl)] gap-[var(--spacing-4xl)] pt-[var(--spacing-2xl)] pb-[var(--spacing-10xl)] w-full mx-auto">
        <div className="w-full flex items-center justify-center gap-[var(--spacing-5xl)] py-[var(--spacing-xl)]">
          <img src={bioData.image.src} alt={bioData.image.alt} className="w-[50%]" />
          <div className="w-[50%] flex flex-col items-start justify-center gap-[var(--spacing-2xl)]">
            <h2 className="h2 text-[var(--color-primary)]">
              {bioData.heading}
            </h2>
            {bioData.paragraphs.map((paragraph, index) => (
              <p key={index} className="body text-[var(--color-primary)]">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    )
  }

  // Large Desktop (>1440px)
  return (
    <div className="flex flex-col items-center px-[var(--spacing-3xl)] gap-[var(--spacing-5xl)] pt-[var(--spacing-2xl)] pb-[var(--spacing-12xl)] w-full max-w-[1600px]  mx-auto">
      <div className="w-full flex items-center justify-center gap-[var(--spacing-6xl)] py-[var(--spacing-3xl)]">
        <img src={bioData.image.src} alt={bioData.image.alt} className="w-[50%]" />
        <div className="w-[50%] flex flex-col items-start justify-center gap-[var(--spacing-3xl)]">
          <h2 className="h2 text-[var(--color-primary)]">
            {bioData.heading}
          </h2>
          {bioData.paragraphs.map((paragraph, index) => (
            <p key={index} className="body text-[var(--color-primary)]">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </div>
  )
}



