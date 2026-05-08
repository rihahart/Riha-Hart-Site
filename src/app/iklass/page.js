"use client"

import React, { useEffect } from "react"
import useMobileDetection from "@/_utilities/useMobileDetection"
import IntroToIKlass from "@/components/iklass/IntroImpact/IntroToIKlass"
import ResearchContainer from "@/components/iklass/ResearchContainer"
import ResearchApproach from "@/components/iklass/ResearchApproach/ResearchApproach"
import KeyInsight from "@/components/iklass/KeyInsights/KeyInsight"
import DesignSolutions from "@/components/iklass/KeyInsights/DesignSolutions"
import NavandScan from "@/components/iklass/KeyInsights/NavandScan/NavandScan"
import IklassEnd from "@/components/iklass/iklassEnd/IklassEnd"

export default function iklass() {
  const { isMobile, isTablet, isDesktop1440px } = useMobileDetection()
  useEffect(() => { window.dispatchEvent(new CustomEvent("case-study-ready")) }, [])

  useEffect(() => {
    const bg = "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\"), radial-gradient(ellipse 100% 70% at 50% 100%, rgba(233, 233, 233, 0.8) 0%, transparent 90%), linear-gradient(180deg, #0a0a0a 0%, #3eb8fa 45%, #05a7ff 100%)"
    document.body.style.background = bg
    document.body.style.backgroundBlendMode = "overlay, normal, normal"
    document.body.style.backgroundSize = "200px 200px, 100% 100%, 100% 100%"
    return () => {
      document.body.style.background = ""
      document.body.style.backgroundBlendMode = ""
      document.body.style.backgroundSize = ""
    }
  }, [])

  // Mobile (≤768px)
  if (isMobile) {
  return (
    <div className="flex flex-col items-center w-full mx-auto">

      {/* div with margins starts here*/}
      <div className="flex flex-col items-center w-full p-[var(--spacing-lg)] pb-[var(--spacing-4xl)] gap-[var(--spacing-4xl)] mx-auto">
        <div className="flex flex-col items-center justify-center h-full w-full gap-[var(--spacing-lg)]">
          <img
            src="/iklass/SummerLarge.gif"
            alt="iKlass Summer"
            className="w-full max-w-full h-auto object-contain"
          />
          <IntroToIKlass />
        </div>
        <ResearchContainer />
        <ResearchApproach />
        <KeyInsight />
      </div>

        {/* this div with margins ends here*/}

      <div className="w-full flex flex-col items-center justify-center bg-[#B4E1F9]">
        <div className="w-full flex flex-col items-center justify-center gap-[var(--spacing-4xl)] p-[var(--spacing-lg)] mx-auto">
          <DesignSolutions />
        </div>
      </div>
    

      {/* div with margins starts here*/}
      <div className="flex flex-col items-center w-full p-[var(--spacing-lg)] pb-[var(--spacing-4xl)] gap-[var(--spacing-4xl)] mx-auto">
        <NavandScan />
        <img
          src="/iklass/SiteMap/SiteMapMobile.png"
          alt="The new navigation map for iKlass"
          className="w-full max-w-full h-auto object-contain"
        />
        <IklassEnd />
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
              src="/iklass/SummerLarge.gif"
              alt="iKlass Summer"
              className="w-full max-w-full h-auto object-contain"
            />
            <IntroToIKlass />
          </div>
          <ResearchContainer />
          <ResearchApproach />
          <KeyInsight />
        </div>
         {/* this div with margins ends here*/}

        <div className="w-full flex flex-col items-center justify-center bg-[#B4E1F9]">
          <div className="w-full flex flex-col items-center justify-center gap-[var(--spacing-4xl)] p-[var(--spacing-2xl)] mx-auto">
            <DesignSolutions />
          </div>
        </div>
        {/* this div with margins ends here*/}

        {/* div with margins starts here*/}
        <div className="flex flex-col items-center w-full p-[var(--spacing-2xl)] pb-[var(--spacing-4xl)] gap-[var(--spacing-4xl)] mx-auto">
          <NavandScan />
          <img
            src="/iklass/SiteMap/SiteMapMobile.png"
            alt="The new navigation map for iKlass"
            className="w-full max-w-full h-auto object-contain"
          />
          <IklassEnd />
        </div>
        {/* this div with margins ends here*/}
      </div>
    )
  }

  // Desktop 1440px (1025px - 1440px)
  if (isDesktop1440px) {
    return (  

      <div className="flex flex-col items-center w-full mx-auto">
      <div className="flex flex-col items-center w-full max-w-[1440px] mx-auto px-[var(--spacing-3xl)] pt-[var(--spacing-m)] pb-[var(--spacing-6xl)]">

        {/* div with margins starts here*/}
        <div className="flex flex-col items-center w-full max-w-full gap-[var(--spacing-4xl)]">
          <div className="flex flex-col items-center justify-center h-full w-full gap-[var(--spacing-3xl)]">
            <img
              src="/iklass/SummerLarge.gif"
              alt="iKlass Summer"
              className="w-full max-w-full h-auto object-contain"
            />
            <IntroToIKlass />
          </div>
          <ResearchContainer />
          <ResearchApproach />
          <KeyInsight />
        </div>
    
      </div>
        {/* this div with margins ends here*/}
      <div className="w-full flex flex-col items-center justify-center bg-[#B4E1F9]">
          <div className="w-full max-w-[1440px] flex flex-col items-center justify-center gap-[var(--spacing-4xl)] py-[var(--spacing-3xl)] px-[var(--spacing-3xl)] mx-auto">
            <DesignSolutions />
          </div>
        </div>
        {/* this div with margins ends here*/}

        {/* div with margins starts here*/}
        <div className="flex flex-col items-center w-full p-[var(--spacing-3xl)] pb-[var(--spacing-6xl)] gap-[var(--spacing-4xl)] mx-auto">
          <NavandScan />
          <img
            src="/iklass/SiteMap/SiteMapDesktop.png"
            alt="The new navigation map for iKlass"
            className="w-full max-w-full h-auto object-contain"
          />
          <IklassEnd />
        </div>
        {/* this div with margins ends here*/}
      </div>
    )
  }

  // Large Desktop (>1440px)  
  return (
    <div className="flex flex-col items-center w-full mx-auto">

      {/* div with margins starts here*/}

      <div className="flex flex-col items-center max-w-[1600px] px-[var(--spacing-3xl)] pt-[var(--spacing-m)] pb-[var(--spacing-4xl)] gap-[var(--spacing-4xl)] mx-auto">
        <div className="flex flex-col items-center justify-center h-full w-full gap-[var(--spacing-3xl)]">
          <img
            src="/iklass/SummerLarge.gif"
            alt="iKlass Summer"
            className="w-full max-w-full h-auto object-contain"
          />
          <IntroToIKlass />
        </div>
        <ResearchContainer />
        <ResearchApproach />
        <KeyInsight />
      </div>
         {/* this div with margins ends here*/}

      <div className="w-full flex flex-col items-center justify-center bg-[#B4E1F9]">
        <div className="w-full flex flex-col items-center justify-center gap-[var(--spacing-4xl)] p-[var(--spacing-3xl)] mx-auto">
          <DesignSolutions />
        </div>
      </div>

      {/* div with margins starts here*/}
      <div className="flex flex-col items-center w-full p-[var(--spacing-3xl)] pb-[var(--spacing-6xl)] gap-[var(--spacing-4xl)] mx-auto">
        <NavandScan />
        <img
          src="/iklass/SiteMap/SiteMapDesktop.png"
          alt="The new navigation map for iKlass"
          className="w-full max-w-full h-auto object-contain"
        />
        <IklassEnd />
      </div>
      {/* this div with margins ends here*/}
    </div>
  )
}