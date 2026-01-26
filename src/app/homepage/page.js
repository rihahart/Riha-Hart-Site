"use client"

import React from "react"
import useMobileDetection from "@/_utilities/useMobileDetection"
import GetToKnowMe from "@/components/GetToKnowMe"

export default function Homepage() {
  const { isMobile, isTablet, isDesktop1440px } = useMobileDetection()

  // Mobile (≤768px)
  if (isMobile) {
    return (
      <div className="flex flex-col items-center px-[var(--spacing-lg)] py-[var(--spacing-m)]">
        <div className="flex justify-center w-full max-w-[600px]">
          <video
            src="/Photos/Homepage/PhotoWebsiteVideoMobile.mp4"
            autoPlay
            muted
            playsInline
            loop
            width="600"
            height="1140"
            className="w-full h-auto object-contain"
          />
        </div>
        <GetToKnowMe />
      </div>
    )
  }

  // Tablet (769px - 1024px)
  if (isTablet) {
    return (
      <div className="flex flex-col items-center px-[var(--spacing-2xl)] py-[var(--spacing-xl)]">
        <div className="flex justify-center w-full max-w-[700px]">
          <video
            src="/Photos/Homepage/PhotoWebsiteVideoMobile.mp4"
            autoPlay
            muted
            playsInline
            loop
            width="700"
            height="1260"
            className="w-full h-auto object-contain"
          />
        </div>
        <GetToKnowMe />
      </div>
    )
  }

  // Desktop 1440px (1025px - 1440px)
  if (isDesktop1440px) {
    return (
      <div className="flex flex-col items-center px-[var(--spacing-4xl)] py-[var(--spacing-2xl)]">
        <div className="flex justify-center w-full max-w-[1000px]">
          <video
            src="/Photos/Homepage/PhotoWebsiteVideoScreen.mp4"
            autoPlay
            muted
            playsInline
            loop
            width="1050"
            height="590"
            className="w-full h-auto object-contain"
          />
        </div>
        <GetToKnowMe />
      </div>
    )
  }

  // Large Desktop (>1440px)
  return (
    <div className="flex flex-col items-center px-[var(--spacing-6xl)] py-[var(--spacing-xl)]">
      <div className="flex justify-center w-fit">
        <video
          src="/Photos/Homepage/PhotoWebsiteVideoScreen.mp4"
          autoPlay
          muted
          playsInline
          loop
          width="1920"
          height="1080"
          className="max-w-[1920px] h-auto object-contain"
        />
      </div>
      <GetToKnowMe />
    </div>
  )
}
