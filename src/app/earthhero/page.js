"use client"

import React from "react"
import useMobileDetection from "@/_utilities/useMobileDetection"
import IntroToEH from "@/components/EH/IntroImpact/IntroToEH"
import ResearchDeck from "@/components/EH/ResearchDeck/ResearchDeck"
import TheProblem from "@/components/EH/TheProblem/TheProblem"
import AboutEH from "@/components/EH/AboutEH/AboutEH"
import CoreMetrics from "@/components/EH/CoreMetrics/CoreMetrics"
import Divider from "@/components/EH/Divider/Divider"

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
          <Divider />
          <AboutEH />
        </div>
      </div>

      {/* this div with margins ends here*/}

      <div className="w-full flex flex-col items-center justify-center bg-[var(--neutral-300)]">
        <div className="w-full flex flex-col items-center justify-center gap-[var(--spacing-m)] p-[var(--spacing-lg)] mx-auto">
          <ResearchDeck />


        </div>
      </div>

      <div className="flex flex-col items-center w-full p-[var(--spacing-lg)] pb-[var(--spacing-4xl)] gap-[var(--spacing-4xl)] mx-auto">
         <CoreMetrics />
          <TheProblem />
       
        </div>
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
            <Divider />
            <AboutEH />
          </div>
        </div>

        {/* this div with margins ends here*/}

        <div className="w-full flex flex-col items-center justify-center bg-[var(--neutral-300)]">
          <div className="w-full flex flex-col items-center justify-center gap-[var(--spacing-4xl)] p-[var(--spacing-2xl)] mx-auto">
            <ResearchDeck />

          </div>
        </div>


        <div className="flex flex-col items-center w-full p-[var(--spacing-2xl)] pb-[var(--spacing-4xl)] gap-[var(--spacing-4xl)] mx-auto">
           <CoreMetrics />
            <TheProblem />
         
        </div>
      </div>
    )
  }

  // Desktop 1440px (1025px - 1440px)
  if (isDesktop1440px) {
    return (
      <div className="flex flex-col items-center w-full mx-auto">

        {/* div with margins starts here*/}
        <div className="flex flex-col items-center w-full  pb-[var(--spacing-4xl)] gap-[var(--spacing-4xl)] mx-auto">
<div className="flex flex-col items-center justify-center p-[var(--spacing-3xl)] h-full w-full gap-[var(--spacing-3xl)]">
          <img
            src="/EarthHero/PreferenceTest.gif"
            alt="EarthHero preference test survey"
            className="w-full max-w-full h-auto object-contain"
          />
          <IntroToEH />
          <Divider />
          <AboutEH />
        </div>
      </div>

      {/* this div with margins ends here*/}

      <div className="w-full flex flex-col items-center justify-center bg-[var(--neutral-300)]">
        <div className="w-full max-w-[1440px] flex flex-col items-center justify-center gap-[var(--spacing-4xl)] px-[var(--spacing-3xl)] mx-auto">
          <ResearchDeck />
        </div>

      </div>

      <div className="flex flex-col items-center w-full p-[var(--spacing-3xl)] pb-[var(--spacing-4xl)] gap-[var(--spacing-4xl)] mx-auto">
         <CoreMetrics />
             <TheProblem />
     
      </div>
    </div>
  )
  }

  // Large Desktop (>1440px)
  return (
    <div className="flex flex-col items-center w-full mx-auto">

      {/* div with margins starts here*/}

      <div className="flex flex-col items-center max-w-[1600px] p-[var(--spacing-3xl)]  pb-[var(--spacing-4xl)] gap-[var(--spacing-4xl)] mx-auto">
        <div className="flex flex-col items-center p-[var(--spacing-3xl)] justify-center h-full w-full gap-[var(--spacing-3xl)]">
          <img
            src="/EarthHero/PreferenceTest.gif"
            alt="EarthHero preference test survey"
            className="w-full max-w-full h-auto object-contain"
          />
          <IntroToEH />

        </div>
          <Divider />
          <AboutEH />
      </div>

      {/* this div with margins ends here*/}

      <div className="w-full flex flex-col items-center justify-center bg-[var(--neutral-300)]">
        <div className="w-full flex flex-col items-center justify-center px-[var(--spacing-3xl)] gap-[var(--spacing-4xl)]  mx-auto max-w-[1600px]">
          <ResearchDeck />


        </div>
      </div>
      <div className="flex flex-col items-center max-w-[1600px] p-[var(--spacing-3xl)] pb-[var(--spacing-4xl)] gap-[var(--spacing-4xl)] mx-auto">
         <CoreMetrics />
         <TheProblem />
     
      </div>
    </div>
  )
}
