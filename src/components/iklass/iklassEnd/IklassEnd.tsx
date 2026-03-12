"use client"

import React from "react"
import useMobileDetection from "@/_utilities/useMobileDetection"
import { iklassEnd } from "@/data/iklass/iklassEnd"
import Button from "@/components/Button"

export default function IklassEnd() {
  const { isMobile, isTablet, isDesktop1440px } = useMobileDetection()

  const handleVisitWebsite = () => {
    window.open("https://www.iklass.org/", "_blank")
  }

  if (isMobile) {
    return (
      <div className="w-full flex flex-col items-center gap-[var(--spacing-xl)] shadow-[0_0_10px_0_rgba(0,0,0,0.1)] py-[var(--spacing-xl)] px-[var(--spacing-lg)] rounded-[4px]">
        <div className="flex flex-col items-center gap-[var(--spacing-xs)] text-center">
          <h2 className="body text-[var(--color-secondary)] uppercase">
            {iklassEnd.caption}
          </h2>
          <p className="h3 text-[var(--color-primary)]">
            {iklassEnd.body}
          </p>
        </div>
        <Button
          text="Visit Site"
          onClick={handleVisitWebsite}
          variant="redPrimary"
        />
        <div className="w-full flex items-center justify-center py-[var(--spacing-l)]">
          <img
            src="/iklass/LookandFeel.gif"
            alt="iKlass website look and feel on desktop and mobile"
            className="w-full max-w-[900px] h-auto object-contain drop-shadow-[0_4px_12px_rgba(0,0,0,0.12)]"
          />
        </div>
      </div>
    )
  }

  if (isTablet) {
    return (
      <div className="w-full flex flex-col items-center gap-[var(--spacing-xl)] shadow-[0_0_10px_0_rgba(0,0,0,0.1)] p-[var(--spacing-2xl)] rounded-[4px]">
        <div className="flex flex-col items-center gap-[var(--spacing-xs)] text-center">
          <h2 className="body text-[var(--color-secondary)] uppercase">
            {iklassEnd.caption}
          </h2>
          <p className="h3 text-[var(--color-primary)]">
            {iklassEnd.body}
          </p>
        </div>
        <Button
          text="Visit Site"
          onClick={handleVisitWebsite}
          variant="redPrimary"
        />
        <div className="w-full flex items-center justify-center py-[var(--spacing-l)]">
          <img
            src="/iklass/LookandFeel.gif"
            alt="iKlass website look and feel on desktop and mobile"
            className="w-full max-w-[900px] h-auto object-contain drop-shadow-[0_4px_12px_rgba(0,0,0,0.12)]"
          />
        </div>
      </div>
    )
  }

  if (isDesktop1440px) {
    return (
      <div className="w-full flex flex-col md:flex-row items-start p-[var(--spacing-2xl)]  shadow-[0_0_10px_0_rgba(0,0,0,0.1)] rounded-[4px] gap-[var(--spacing-2xl)]">
        <div className="flex flex-col items-start gap-[var(--spacing-l)] min-w-0 flex-1 max-w-xl">
          <div className="flex flex-col items-start gap-[var(--spacing-xs)]">
          <h2 className="body text-[var(--color-secondary)] uppercase">
            {iklassEnd.caption}
          </h2>
          <p className="h4 text-[var(--color-primary)]">
            {iklassEnd.body}
          </p>
          </div>
          <Button
            text="Visit Site"
            onClick={handleVisitWebsite}
            variant="redPrimary"
          />
        </div>
        <div className="w-full flex-1 min-w-0 flex items-center justify-center">
          <img
            src="/iklass/LookandFeel.gif"
            alt="iKlass website look and feel on desktop and mobile"
            className="w-full max-w-[900px] h-auto object-contain drop-shadow-[0_4px_16px_rgba(0,0,0,0.12)]"
          />
        </div>
      </div>
    )
  }

  return (
    <div className="w-full flex flex-col md:flex-row items-start p-[var(--spacing-2xl)] shadow-[0_0_10px_0_rgba(0,0,0,0.1)] rounded-[4px] gap-[var(--spacing-2xl)]">
      <div className="flex flex-col items-start gap-[var(--spacing-lg)]">
      <div className="flex flex-col items-start gap-[var(--spacing-xs)] min-w-0 flex-1 max-w-xl">
        <h2 className="body text-[var(--color-secondary)] uppercase">
          {iklassEnd.caption}
        </h2>
        <p className="h4 text-[var(--color-primary)]">
          {iklassEnd.body}
        </p>
       
        </div>
        <Button
          text="Visit Site"
          onClick={handleVisitWebsite}
          variant="redPrimary"
        />
      </div>
      <div className="w-full flex-1 min-w-0 flex items-center justify-center">
        <img
          src="/iklass/LookandFeel.gif"
          alt="iKlass website look and feel on desktop and mobile"
          className="w-full max-w-[900px] h-auto object-contain drop-shadow-[0_4px_16px_rgba(0,0,0,0.12)]"
        />
      </div>
    </div>
  )
}
