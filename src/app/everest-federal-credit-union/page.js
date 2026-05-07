"use client"

import React, { useRef, useEffect } from "react"
import useMobileDetection from "@/_utilities/useMobileDetection"
import useVideoReplay from "@/_utilities/useVideoReplay"
import IntroToEFCU from "@/components/EFCU/IntroImpact/IntroToEFCU"
import ImpactBox from "@/components/EFCU/IntroImpact/ImpactBox"
import ResearchCardStack from "@/components/EFCU/Research/ResearchCardStack"
import ResearchFindingsDeck from "@/components/EFCU/ResearchFindings/ResearchFindingsDeck"
import TrustandCommunity from "@/components/EFCU/TrustandCommunity/TrustandCommunity"
import WebsiteAudit from "@/components/EFCU/Audit/WebsiteAudit"
import NewNav from "@/components/EFCU/Audit/NewNav"
import Revealed  from "@/components/EFCU/Audit/Revealed"
import ScalableApp from "@/components/EFCU/Application/scalableApp"
import ClarifyingMembership from "@/components/EFCU/Application/clarifyingMembership"
import NewExperience from "@/components/EFCU/Application/newExperience"


export default function EverestFederalCreditUnion() {
  const { isMobile, isTablet, isDesktop1440px } = useMobileDetection()
  const everestVideoRef = useRef(null)
  const brandingVideoRef = useRef(null)

  useEffect(() => { window.dispatchEvent(new CustomEvent("case-study-ready")) }, [])

  useEffect(() => {
    const bg = "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\"), radial-gradient(ellipse 100% 70% at 50% 100%, rgba(28,68,131,0.8) 0%, transparent 90%), linear-gradient(180deg, #0a0a0a 0%, #1C4483 15%, #1C4483 80%, #3B558E 100%)"
    document.body.style.background = bg
    document.body.style.backgroundBlendMode = "overlay, normal, normal"
    document.body.style.backgroundSize = "200px 200px, 100% 100%, 100% 100%"
    return () => {
      document.body.style.background = ""
      document.body.style.backgroundBlendMode = ""
      document.body.style.backgroundSize = ""
    }
  }, [])

  useVideoReplay(everestVideoRef)
  useVideoReplay(brandingVideoRef)

  // Mobile (≤768px)
  if (isMobile) {
    return (
      <div className="flex flex-col items-center w-full mx-auto min-h-screen">
      <div className="flex flex-col items-center w-full p-[var(--spacing-lg)] pb-[var(--spacing-4xl)] gap-[var(--spacing-4xl)] mx-auto">
        <div className="flex flex-col items-center justify-center h-full w-full gap-[var(--spacing-lg)]">
          <video
            src="/EFCU/Everest FCU.mp4"
            ref={everestVideoRef}
            autoPlay
            muted
            playsInline
            loop
            className="w-full h-full object-contain lineshadow"
          />
          <IntroToEFCU />
        </div>
        <ImpactBox />
        <ResearchCardStack />
        <ResearchFindingsDeck />
        <WebsiteAudit />
        <Revealed />
          <NewNav />

        {/* this div closes the second div ends here*/}
        </div>

        {/* Branding Video Section new div starts here*/}
        <div className="flex flex-col items-center w-full bg-[#1c4483] p-[var(--spacing-lg)]  mx-auto">
        <video
              src="/EFCU/BrandingVideo.mp4"
              ref={brandingVideoRef}
              className="w-full h-auto object-cover"
              muted
              playsInline
              autoPlay
              loop
              aria-label="Branding video"
            />
        </div>

        {/* div back to normal here*/}
        <div className="flex flex-col items-center w-full px-[var(--spacing-lg)] pt-[var(--spacing-3xl)] pb-[var(--spacing-6xl)] gap-[var(--spacing-4xl)] mx-auto">
          <TrustandCommunity />
          <ScalableApp />
          <ClarifyingMembership />
        </div>

        {/* this div closes the first div ends here*/}
        <NewExperience />
      </div>
    )
  }

  // Tablet (769px - 1024px)
  if (isTablet) {
    return (
      <div className="flex flex-col items-center w-full mx-auto min-h-screen">
      <div className="flex flex-col items-center w-full px-[var(--spacing-3xl)] pt-[var(--spacing-m)] pb-[var(--spacing-6xl)] gap-[var(--spacing-6xl)] mx-auto">
        <div className="flex flex-col items-center justify-center h-full w-full gap-[var(--spacing-3xl)]">
          <video
            src="/EFCU/Everest FCU.mp4"
            ref={everestVideoRef}
            autoPlay
            muted
            playsInline
            loop
            className="w-full h-full object-contain"
          />
          <IntroToEFCU />
        </div>
        <ImpactBox />
        <ResearchCardStack />
        <ResearchFindingsDeck />
        <WebsiteAudit />
        <Revealed />
         <NewNav />

        {/* this div closes the second div ends here*/}
        </div>



 {/* Branding Video Section new div starts here*/}
 <div className="flex flex-col items-center w-full bg-[#1c4483] p-[var(--spacing-3xl)] mx-auto">
        <video
              src="/EFCU/BrandingVideo.mp4"
              ref={brandingVideoRef}
              className="w-full h-auto object-cover "
              muted
              playsInline
              autoPlay
              loop
              aria-label="Branding video"
            />

</div>

{/* div back to normal here*/}

<div className="flex flex-col items-center w-full px-[var(--spacing-3xl)] pt-[var(--spacing-3xl)] pb-[var(--spacing-8xl)] gap-[var(--spacing-6xl)] mx-auto">
<TrustandCommunity />
<ScalableApp />
<ClarifyingMembership />
</div>

{/* this div closes the first div ends here*/}
<NewExperience />
</div>
    )
  }



  // Desktop 1440px (1025px - 1440px)
  if (isDesktop1440px) {
    return (

  <div className="flex flex-col items-center w-full mx-auto min-h-screen">

    {/* div starts here*/}
      <div className="flex flex-col items-center w-full px-[var(--spacing-3xl)] pt-[var(--spacing-m)] pb-[var(--spacing-6xl)] gap-[var(--spacing-6xl)] mx-auto">
        <div className="flex flex-col items-center justify-center h-full w-full gap-[var(--spacing-3xl)]">
          <video
            src="/EFCU/Everest FCU.mp4"
            ref={everestVideoRef}
            autoPlay
            muted
            playsInline
            loop
            className="w-full h-full object-contain lineshadow"
          />
          <IntroToEFCU />
        </div>  
        <ImpactBox />
        <ResearchCardStack />
        <ResearchFindingsDeck />
        <WebsiteAudit />
        <Revealed />
          <NewNav />


    </div>


    {/* div ends here*/}

    {/* Branding Video Section new div starts here*/}

  <div className="flex flex-col items-center w-full bg-[#1c4483] mx-auto">

 <div className="flex flex-col items-center w-full p-[var(--spacing-3xl)] gap-[var(--spacing-6xl)] mx-auto">
      <div className="flex flex-col items-center justify-center h-full w-full gap-[var(--spacing-3xl)]">
      <video
         src="/EFCU/BrandingVideo.mp4"
         className="w-full h-auto object-cover"
         muted
         playsInline
         autoPlay
         loop
         aria-label="Branding video"
/>

</div>
</div>
</div>


{/* div back to normal here*/}
<div className="flex flex-col items-center w-full px-[var(--spacing-3xl)] pt-[var(--spacing-3xl)] pb-[var(--spacing-8xl)] gap-[var(--spacing-6xl)] mx-auto">
  <TrustandCommunity />
  <ScalableApp />
  <ClarifyingMembership />
  </div>

<NewExperience />

</div>

    )
  }

  // Large Desktop (>1440px)
  return (
    <div className="flex flex-col items-center w-full mx-auto">
    <div className="max-w-[1600px] flex flex-col items-center mx-auto px-[var(--spacing-3xl)] pt-[var(--spacing-m)] pb-[var(--spacing-8xl)] gap-[var(--spacing-8xl)]">
      <div className="flex flex-col items-center justify-center h-full w-full gap-[var(--spacing-3xl)]">
        <video
          src="/EFCU/Everest FCU.mp4"
          ref={everestVideoRef}
          autoPlay
          muted
          playsInline
          loop
          className="w-full h-full object-contain"
          style={{ border: "2px solid var(--accent-glow)", boxShadow: "0 0 24px rgba(253,247,230,0.2), 0 0 48px rgba(253,247,230,0.1)" }}
        />
         <IntroToEFCU />
      </div>
     
      <ImpactBox />
      <ResearchCardStack />
      <ResearchFindingsDeck />
      <WebsiteAudit />
      <Revealed />
      <NewNav />

</div>

      {/* Branding Video Section new div starts here*/}

<div className="flex flex-col items-center w-full bg-[#1c4483] mx-auto">
      <div className="max-w-[1600px] flex flex-col items-center mx-auto">
      <div className="flex flex-col items-center justify-center p-[var(--spacing-3xl)] h-full w-full gap-[var(--spacing-3xl)] ">
            <video
            src="/EFCU/BrandingVideo.mp4"
            className="w-full h-auto object-cover"
            muted
            playsInline
            autoPlay
            loop
            aria-label="Branding video"
          />
          </div>
          </div>
          </div>

       {/* div back to normal here*/}
       <div className="max-w-[1600px] flex flex-col items-center mx-auto px-[var(--spacing-3xl)] pt-[var(--spacing-3xl)] pb-[var(--spacing-3xl)] gap-[var(--spacing-8xl)]">
        <TrustandCommunity />
        <ScalableApp />
        <ClarifyingMembership />
        </div>
        <NewExperience />
        </div>
     
  )
}


