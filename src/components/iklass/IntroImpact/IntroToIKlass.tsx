"use client"

import React from "react"
import useMobileDetection from "@/_utilities/useMobileDetection"
import { introToIKlass } from "@/data/iklass/introToIKlass"
import Button from "@/components/Button"

export default function IntroToIKlass() {
  const { isMobile, isTablet, isDesktop1440px } = useMobileDetection()

  const handleVisitWebsite = () => {
    window.open("https://www.iklass.org/", "_blank")
  }

  // Mobile (≤768px)
  if (isMobile) {
    return (
      <div className="w-full flex justify-center align-center">
        <div className="flex flex-col items-start justify-center gap-[var(--spacing-xl)] py-[var(--spacing-xl)]">
          <div className="inline-block">
            <h2 className="h2 text-[var(--color-primary)] inline-block">
              {introToIKlass.heading}
            </h2>
            <p className="h4 text-[var(--color-secondary)] mt-[var(--spacing-xs)]">
              {introToIKlass.subtitle}
            </p>
          </div>
          <p className="body text-[var(--color-primary)]">
            {introToIKlass.body}
          </p>
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
            <h2 className="h2 text-[var(--color-primary)] inline-block">
              {introToIKlass.heading}
            </h2>
            <p className="h4 text-[var(--color-secondary)] mt-[var(--spacing-s)]">
              {introToIKlass.subtitle}
            </p>
          </div>
          <p className="body text-[var(--color-primary)]">
            {introToIKlass.body}
          </p>
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
        <div className="flex flex-col items-start justify-center w-[800px] p-[var(--spacing-lg)] gap-[var(--spacing-lg)]">
          <div className="flex flex-col items-start justify-center gap-[var(--spacing-xs)]">
            <h2 className="h2 text-[var(--color-primary)]">
              {introToIKlass.heading}
            </h2>
            <p className="h4 text-[var(--color-secondary)]">
              {introToIKlass.subtitle}
            </p>
          </div>
          <p className="body text-[var(--color-primary)]">
            {introToIKlass.body}
          </p>
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
      <div className="flex flex-col items-start justify-center w-[1000px] p-[var(--spacing-lg)] gap-[var(--spacing-lg)]">
        <div className="flex flex-col items-start justify-center gap-[var(--spacing-xs)]">
          <h2 className="h2 text-[var(--color-primary)]">
            {introToIKlass.heading}
          </h2>
          <p className="h4 text-[var(--color-secondary)]">
            {introToIKlass.subtitle}
          </p>
        </div>
        <p className="body text-[var(--color-primary)]">
          {introToIKlass.body}
        </p>
        <Button
          text="Visit site"
          onClick={handleVisitWebsite}
          variant="redPrimary"
        />
      </div>
    </div>
  )
}
