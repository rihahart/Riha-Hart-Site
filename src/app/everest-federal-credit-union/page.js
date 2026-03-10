"use client"

import React from "react"
import useMobileDetection from "@/_utilities/useMobileDetection"
import IntroToEFCU from "@/components/EFCU/IntroImpact/IntroToEFCU"
import ImpactBox from "@/components/EFCU/IntroImpact/ImpactBox"
import ResearchCardStack from "@/components/EFCU/Research/ResearchCardStack"
import BankScale from "@/components/EFCU/ResearchFindings/BankScale"
import ClarifyingMembership from "@/components/EFCU/MembershipLoans/ClarifyingMembership"
import LoanMembershipFindings from "@/components/EFCU/MembershipLoans/LoanMembershipFindings"
import TrustandCommunity from "@/components/EFCU/TrustandCommunity/TrustandCommunity"


export default function EverestFederalCreditUnion() {
  const { isMobile, isTablet, isDesktop1440px } = useMobileDetection()

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
        <BankScale />
        <div
          className="w-full flex flex-col px-[var(--spacing-lg)] py-[var(--spacing-lg)] gap-[var(--spacing-3xl)]"
          style={{
            backgroundColor: "#F6F6F8",
            borderLeft: "4px solid #1c4483"
          }}
        >
          <ClarifyingMembership />
          <LoanMembershipFindings />
          <div className="w-full flex items-center justify-center pb-[var(--spacing-6xl)]">
            <img src="/EFCU/ClarifyingNavAnimation/NewNav.svg" alt="" className="w-full max-w-full max-h-[400px] object-contain" aria-hidden />
          </div>
      
        
        
        </div>

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
        <BankScale />
        <div
          className="w-full flex flex-col px-[var(--spacing-xl)] py-[var(--spacing-xl)] gap-[var(--spacing-3xl)]"
          style={{
            backgroundColor: "#F6F6F8",
            borderLeft: "6px solid #1c4483"
          }}
        >
          <ClarifyingMembership />
          <LoanMembershipFindings />
          <div className="w-full flex items-center justify-center pb-[var(--spacing-6xl)]">
            <img src="/EFCU/ClarifyingNavAnimation/NewNav.svg" alt="" className="w-full max-w-full max-h-[400px] object-contain" aria-hidden />
          </div>
      
          
        </div>

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
        <BankScale />
        <div
          className="w-full flex flex-col px-[var(--spacing-xl)] py-[var(--spacing-xl)] gap-[var(--spacing-3xl)]"
          style={{
            backgroundColor: "#F6F6F8",
            borderLeft: "6px solid #1c4483"
          }}
        >
          <ClarifyingMembership />
          <LoanMembershipFindings />
          <img src="/EFCU/ClarifyingNavAnimation/NewNav.svg" alt="" className="w-full max-w-full max-h-[600px] object-contain" aria-hidden />
         
          </div>
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
      <BankScale />
      <div
        className="w-full flex flex-col px-[var(--spacing-xl)] py-[var(--spacing-xl)] gap-[var(--spacing-3xl)]"
        style={{
          backgroundColor: "#F6F6F8",
          borderLeft: "8px solid #1c4483"
        }}
      >
        <ClarifyingMembership />
        <LoanMembershipFindings />
        <div className="w-full flex items-center justify-center">
          <img src="/EFCU/ClarifyingNavAnimation/NewNav.svg" alt="" className="max-w-full max-h-[800px] object-contain" aria-hidden />
        </div>
        </div>
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


