"use client"

import React from "react"
import useMobileDetection from "@/_utilities/useMobileDetection"
import IntroToEH from "@/components/EH/IntroImpact/IntroToEH"
import ResearchDeck from "@/components/EH/ResearchDeck/ResearchDeck"  

export default function EarthHero() {
  const { isMobile, isTablet, isDesktop1440px } = useMobileDetection()  

  // Mobile (≤768px)
  if (isMobile) {
  return (
    <div className="flex flex-col items-center w-full mx-auto">

      {/* div with margins starts here*/}
      <div className="flex flex-col items-center w-full p-[var(--spacing-lg)] pb-[var(--spacing-4xl)] gap-[var(--spacing-4xl)] mx-auto">
        <div className="flex flex-col items-center justify-center h-full w-full gap-[var(--spacing-lg)]">
          <img
            src="/EarthHero/PreferenceTest.gif"
            alt="EarthHero preference test survey"
            className="w-full max-w-full h-auto object-contain"
          />
          <IntroToEH />
        </div>
      </div>

      {/* this div with margins ends here*/}
     <ResearchDeck />
    </div>
  )
  }

  // Tablet (769px - 1024px)
  if (isTablet) {
    return (
      <div className="flex flex-col items-center w-full mx-auto">

        {/* div with margins starts here*/}
        <div className="flex flex-col items-center w-full p-[var(--spacing-2xl)] pb-[var(--spacing-4xl)] gap-[var(--spacing-4xl)] mx-auto">
          <div className="flex flex-col items-center justify-center h-full w-full gap-[var(--spacing-2xl)]">
            <img
              src="/EarthHero/PreferenceTest.gif"
              alt="EarthHero preference test survey"
              className="w-full max-w-full h-auto object-contain"
            />
            <IntroToEH />
          </div>
        </div>

        {/* this div with margins ends here*/}
        <ResearchDeck />
      </div>
    )
  }

  // Desktop 1440px (1025px - 1440px)
  if (isDesktop1440px) {
    return (  
      <div className="flex flex-col items-center w-full mx-auto">

        {/* div with margins starts here*/}
        <div className="flex flex-col items-center w-full p-[var(--spacing-3xl)] pb-[var(--spacing-4xl)] gap-[var(--spacing-4xl)] mx-auto">
<div className="flex flex-col items-center justify-center h-full w-full gap-[var(--spacing-3xl)]">
          <img
            src="/EarthHero/PreferenceTest.gif"
            alt="EarthHero preference test survey"
            className="w-full max-w-full h-auto object-contain"
          />
          <IntroToEH />
        
        </div>
      </div>

      {/* this div with margins ends here*/}
      <ResearchDeck />
    </div>
  )
  }

  // Large Desktop (>1440px)  
  return (
    <div className="flex flex-col items-center w-full mx-auto">

      {/* div with margins starts here*/}

      <div className="flex flex-col items-center max-w-[1600px] p-[var(--spacing-3xl)] pb-[var(--spacing-4xl)] gap-[var(--spacing-4xl)] mx-auto">
        <div className="flex flex-col items-center justify-center h-full w-full gap-[var(--spacing-3xl)]">
          <img
            src="/EarthHero/PreferenceTest.gif"
            alt="EarthHero preference test survey"
            className="w-full max-w-full h-auto object-contain"
          />
          <IntroToEH />
        </div>
      </div>
      {/* this div with margins ends here*/}
      <ResearchDeck />
    </div>
  )
}
