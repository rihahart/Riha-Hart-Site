"use client"

import React, { useRef } from "react"
import useMobileDetection from "@/_utilities/useMobileDetection"
import IntroToEFCU from "@/components/EFCU/IntroImpact/IntroToEFCU"
import ImpactBox from "@/components/EFCU/IntroImpact/ImpactBox"
import ResearchCardStack from "@/components/EFCU/Research/ResearchCardStack"
import ResearchFindingsDeck from "@/components/EFCU/ResearchFindings/ResearchFindingsDeck"
import TrustandCommunity from "@/components/EFCU/TrustandCommunity/TrustandCommunity"
import WebsiteAudit from "@/components/EFCU/Audit/WebsiteAudit"
import NewNav from "@/components/EFCU/Audit/NewNav"
import Revealed  from "@/components/EFCU/Audit/Revealed"


export default function EverestFederalCreditUnion() {
  const { isMobile, isTablet, isDesktop1440px } = useMobileDetection()
  const everestVideoRef = useRef(null)

  // Mobile (≤768px)
  if (isMobile) {
    return (
      <div className="flex flex-col items-center w-full mx-auto">
      <div className="flex flex-col items-center w-full p-[var(--spacing-lg)] pb-[var(--spacing-4xl)] gap-[var(--spacing-4xl)] mx-auto">
        <div className="flex flex-col items-center justify-center h-full w-full gap-[var(--spacing-lg)]">
          <video
            src="/EFCU/Everest FCU.mp4"
            autoPlay
            muted 
            playsInline
            loop
            className="w-full h-full object-contain "
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
        </div>

        {/* this div closes the first div ends here*/}
      </div>
    )
  }

  // Tablet (769px - 1024px)
  if (isTablet) {
    return (
      <div className="flex flex-col items-center w-full mx-auto">
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
              className="w-full h-auto object-cover"
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
</div>



{/* this div closes the first div ends here*/}
</div>
    )
  }

  // Desktop 1440px (1025px - 1440px)
  if (isDesktop1440px) {
    return (

  <div className="flex flex-col items-center w-full mx-auto">

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
  </div>

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
      <div className="flex flex-col items-center justify-center p-[var(--spacing-3xl)] h-full w-full gap-[var(--spacing-3xl)]">
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
        </div>
        </div>
     
  )
}


