"use client"

import React from "react"
import useMobileDetection from "@/_utilities/useMobileDetection"
import { introToEH } from "@/data/EH/introToEH"
import { Button } from "@/components/Buttons"

export default function IntroToEH() {
  const { isMobile, isTablet, isDesktop1440px } = useMobileDetection()

  const handleVisitWebsite = () => {
    window.open("https://www.earthhero.org/", "_blank")
  }

  // Mobile (≤768px)
  if (isMobile) {
    return (
      <div className="w-full flex justify-center align-center">
        <div className="flex flex-col items-start justify-center gap-[var(--spacing-xl)] py-[var(--spacing-xl)]">
          <div className="inline-block">
            <h2 className="h1 text-[var(--color-primary)] inline-block">
              {introToEH.heading}
            </h2>
            <p className="h4 text-[var(--color-secondary)] mt-[var(--spacing-xs)]">
              {introToEH.subtitle}
            </p>
          </div>
          <div className="flex flex-col gap-[var(--spacing-s)]">
            <p className="body text-[var(--color-primary)]">
              {introToEH.body}
            </p>
            <p className="body text-[var(--color-primary)]">
              {introToEH.body2}
            </p>
          </div>
          <Button
            text="Visit site"
            onClick={handleVisitWebsite}
            variant="redPrimary"
          />
        </div>
      </div>
    )
  }

  // Tablet (769px - 1024px)
  if (isTablet) {
    return (
      <div className="flex w-full align-center justify-center">
        <div className="flex flex-col items-start justify-center gap-[var(--spacing-2xl)] py-[var(--spacing-2xl)] px-[var(--spacing-2xl)]">
          <div className="inline-block">
            <h2 className="h1 text-[var(--color-primary)] inline-block">
              {introToEH.heading}
            </h2>
            <p className="h4 text-[var(--color-secondary)] mt-[var(--spacing-s)]">
              {introToEH.subtitle}
            </p>
          </div>
          <div className="flex flex-col gap-[var(--spacing-s)]">
            <p className="body text-[var(--color-primary)]">
              {introToEH.body}
            </p>
            <p className="body text-[var(--color-primary)]">
              {introToEH.body2}
            </p>
          </div>
          <Button
            text="Visit site"
            onClick={handleVisitWebsite}
            variant="redPrimary"
          />
        </div>
      </div>
    )
  }

  // Desktop 1440px (1025px - 1440px)
  if (isDesktop1440px) {
    return (
      <div className="w-full flex justify-end">
        <div className="flex flex-col items-start justify-center w-[700px] p-[var(--spacing-lg)] gap-[var(--spacing-lg)]">
          <div className="flex flex-col items-start justify-center gap-[var(--spacing-xs)]">
            <h2 className="h1 text-[var(--color-primary)]">
              {introToEH.heading}
            </h2>
            <p className="h4 text-[var(--color-secondary)]">
              {introToEH.subtitle}
            </p>
          </div>
          <div className="flex flex-col gap-[var(--spacing-s)]">
            <p className="body text-[var(--color-primary)]">
              {introToEH.body}
            </p>
            <p className="body text-[var(--color-primary)]">
              {introToEH.body2}
            </p>
          </div>
          <Button
            text="Visit site"
            onClick={handleVisitWebsite}
            variant="redPrimary"
          />
        </div>
      </div>
    )
  }

  // Large Desktop (>1440px)
  return (
    <div className="w-full flex justify-end">
      <div className="flex flex-col items-start justify-center w-[800px] p-[var(--spacing-lg)] gap-[var(--spacing-lg)]">
        <div className="flex flex-col items-start justify-center gap-[var(--spacing-xs)]">
          <h2 className="h1 text-[var(--color-primary)]">
            {introToEH.heading}
          </h2>
          <p className="h4 text-[var(--color-secondary)]">
            {introToEH.subtitle}
          </p>
        </div>
        <div className="flex flex-col gap-[var(--spacing-s)]">
          <p className="body text-[var(--color-primary)]">
            {introToEH.body}
          </p>
          <p className="body text-[var(--color-primary)]">
            {introToEH.body2}
          </p>
        </div>
        <Button
          text="Visit site"
          onClick={handleVisitWebsite}
          variant="redPrimary"
        />
      </div>
    </div>
  )
}
