"use client"

import React from "react"
import useMobileDetection from "@/_utilities/useMobileDetection"
import IntroToEFCU from "@/components/EFCU/IntroImpact/IntroToEFCU"
import ImpactBox from "@/components/EFCU/IntroImpact/ImpactBox"
import GroundLevelResearch from "@/components/EFCU/Research/GroundLevelResearch"
import InternalOperationsResearch from "@/components/EFCU/Research/InternalOperationsResearch"
import BankScale from "@/components/EFCU/ResearchFindings/BankScale"
import ClarifyingMembership from "@/components/EFCU/MembershipLoans/ClarifyingMembership"
import LoanMap from "@/components/EFCU/MembershipLoans/LoanMap"


export default function EverestFederalCreditUnion() {
  const { isMobile, isTablet, isDesktop1440px } = useMobileDetection()

  // Mobile (≤768px)
  if (isMobile) {
    return (
      <div className="flex flex-col items-center w-full px-[var(--spacing-lg)] pt-[var(--spacing-lg)] pb-[var(--spacing-6xl)] gap-[var(--spacing-4xl)] mx-auto">
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
        <div
          className="w-full flex flex-col px-[var(--spacing-lg)] py-[var(--spacing-lg)] gap-[var(--spacing-3xl)]"
          style={{
            backgroundColor: "#F6F6F8",
            borderLeft: "4px solid var(--blue-300)"
          }}
        >
          <GroundLevelResearch />
          <InternalOperationsResearch />
        </div>
        <BankScale />
        <div
          className="w-full flex flex-col px-[var(--spacing-lg)] py-[var(--spacing-lg)] gap-[var(--spacing-3xl)]"
          style={{
            backgroundColor: "#F6F6F8",
            borderLeft: "4px solid var(--blue-300)"
          }}
        >
          <ClarifyingMembership />
        </div>
      </div>
    )
  }

  // Tablet (769px - 1024px)
  if (isTablet) {
    return (
      <div className="flex flex-col items-center w-full px-[var(--spacing-3xl)] pt-[var(--spacing-m)] pb-[var(--spacing-8xl)] gap-[var(--spacing-6xl)] mx-auto">
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
        <div
          className="w-full flex flex-col px-[var(--spacing-xl)] py-[var(--spacing-xl)] gap-[var(--spacing-3xl)]"
          style={{
            backgroundColor: "#F6F6F8",
            borderLeft: "6px solid var(--blue-300)"
          }}
        >
          <GroundLevelResearch />
          <InternalOperationsResearch />
        </div>
        <BankScale />
        <div
          className="w-full flex flex-col px-[var(--spacing-xl)] py-[var(--spacing-xl)] gap-[var(--spacing-3xl)]"
          style={{
            backgroundColor: "#F6F6F8",
            borderLeft: "6px solid var(--blue-300)"
          }}
        >
          <ClarifyingMembership />
        </div>
      </div>
    )
  }

  // Desktop 1440px (1025px - 1440px)
  if (isDesktop1440px) {
    return (
      <div className="flex flex-col items-center w-full px-[var(--spacing-3xl)] pt-[var(--spacing-m)] pb-[var(--spacing-8xl)] gap-[var(--spacing-6xl)] mx-auto">
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
        <div
          className="w-full flex flex-col px-[var(--spacing-xl)] py-[var(--spacing-xl)] gap-[var(--spacing-3xl)]"
          style={{
            backgroundColor: "#F6F6F8",
            borderLeft: "6px solid var(--blue-300)"
          }}
        >
          <GroundLevelResearch />
          <InternalOperationsResearch />
        </div>
        <BankScale />
        <div
          className="w-full flex flex-col px-[var(--spacing-xl)] py-[var(--spacing-xl)] gap-[var(--spacing-3xl)]"
          style={{
            backgroundColor: "#F6F6F8",
            borderLeft: "6px solid var(--blue-300)"
          }}
        >
          <ClarifyingMembership />
        </div>

      </div>
    )
  }

  // Large Desktop (>1440px)
  return (
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
      <div
        className="w-full flex flex-col px-[var(--spacing-xl)] py-[var(--spacing-xl)] gap-[var(--spacing-3xl)]"
        style={{
          backgroundColor: "#F6F6F8",
          borderLeft: "8px solid var(--blue-300)"
        }}
      >
        <GroundLevelResearch />
        <InternalOperationsResearch />
      </div>
      <BankScale />
      <div
        className="w-full flex flex-col px-[var(--spacing-xl)] py-[var(--spacing-xl)] gap-[var(--spacing-3xl)]"
        style={{
          backgroundColor: "#F6F6F8",
          borderLeft: "8px solid var(--blue-300)"
        }}
      >
        <ClarifyingMembership />
      </div>
    </div>
  )
}


