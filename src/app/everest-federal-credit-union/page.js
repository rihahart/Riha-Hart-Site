"use client"

import React from "react"
import useMobileDetection from "@/_utilities/useMobileDetection"
import IntroToEFCU from "@/components/EFCU/IntroToEFCU"
import ImpactBox from "@/components/EFCU/ImpactBox"
import GroundLevelResearch from "@/components/EFCU/GroundLevelResearch"
import InternalOperationsResearch from "@/components/EFCU/InternalOperationsResearch"

export default function EverestFederalCreditUnion() {
  const { isMobile, isTablet, isDesktop1440px } = useMobileDetection()

  // Mobile (≤768px)
  if (isMobile) {
    return (
      <div className="w-full flex flex-col items-center px-[var(--spacing-lg)] pt-[var(--spacing-lg)] pb-[var(--spacing-8xl)] gap-[var(--spacing-xl)]">
        <div className="flex justify-center h-full w-full">
          <video
            src="/EFCU/Everest FCU.mp4"
            autoPlay
            muted
            playsInline
            loop
            className="w-full h-full object-contain"
          />
        </div>
        <IntroToEFCU />
        <ImpactBox />
        <div
          className="w-full flex flex-col px-[var(--spacing-lg)] py-[var(--spacing-2xl)] gap-[var(--spacing-xl)]"
          style={{
            backgroundColor: "#F6F6F8",
            borderLeft: "4px solid var(--blue-300)"
          }}
        >
          <GroundLevelResearch />
          <InternalOperationsResearch />
        </div>
      </div>
    )
  }

  // Tablet (769px - 1024px)
  if (isTablet) {
    return (
      <div className="flex flex-col items-center px-[var(--spacing-2xl)] pt-[var(--spacing-2xl)] pb-[var(--spacing-10xl)] gap-[var(--spacing-4xl)] w-full mx-auto">
        <div className="flex justify-center h-full w-full">
          <video
            src="/EFCU/Everest FCU.mp4"
            autoPlay
            muted
            playsInline
            loop
            className="w-full h-full object-contain"
          />
        </div>
        <IntroToEFCU />
        <ImpactBox />
        <div
          className="w-full flex flex-col px-[var(--spacing-2xl)] py-[var(--spacing-3xl)] gap-[var(--spacing-2xl)]"
          style={{
            backgroundColor: "#F6F6F8",
            borderLeft: "4px solid var(--blue-300)"
          }}
        >
          <GroundLevelResearch />
          <InternalOperationsResearch />
        </div>
      </div>
    )
  }

  // Desktop 1440px (1025px - 1440px)
  if (isDesktop1440px) {
    return (
      <div className="flex flex-col items-center px-[var(--spacing-2xl)] gap-[var(--spacing-4xl)] pt-[var(--spacing-2xl)] pb-[var(--spacing-10xl)] w-full mx-auto">
        <div className="flex justify-center h-full w-full">
          <video
            src="/EFCU/Everest FCU.mp4"
            autoPlay
            muted
            playsInline
            loop
            className="w-full h-full object-contain"
          />
        </div>
        <IntroToEFCU />
        <ImpactBox />
        <div
          className="w-full flex flex-col px-[var(--spacing-2xl)] py-[var(--spacing-4xl)] gap-[var(--spacing-2xl)]"
          style={{
            backgroundColor: "#F6F6F8",
            borderLeft: "4px solid var(--blue-300)"
          }}
        >
          <GroundLevelResearch />
          <InternalOperationsResearch />
        </div>
      </div>
    )
  }

  // Large Desktop (>1440px)
  return (
    <div className="flex flex-col items-center px-[var(--spacing-3xl)] gap-[var(--spacing-5xl)] pt-[var(--spacing-2xl)] pb-[var(--spacing-12xl)] w-full max-w-[1600px] mx-auto">
      <div className="flex justify-center h-full w-full">
        <video
          src="/EFCU/Everest FCU.mp4"
          autoPlay
          muted
          playsInline
          loop
          className="w-full h-full object-contain"
        />
      </div>
      <IntroToEFCU />
      <ImpactBox />
      <div
        className="w-full flex flex-col px-[var(--spacing-3xl)] py-[var(--spacing-4xl)] gap-[var(--spacing-2xl)]"
        style={{
          backgroundColor: "#F6F6F8",
          borderLeft: "4px solid var(--blue-300)"
        }}
      >
        <GroundLevelResearch />
        <InternalOperationsResearch />
      </div>
    </div>
  )
}


