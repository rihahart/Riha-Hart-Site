"use client"

import React from "react"
import useMobileDetection from "@/_utilities/useMobileDetection"
import GetToKnowMe from "@/components/GetToKnowMe"

export default function Home() {
  const { isMobile, isTablet, isDesktop1440px } = useMobileDetection()

  // Mobile (≤768px)
  if (isMobile) {
    return (
      <div className="flex flex-col items-center px-[var(--spacing-lg)] pt-[var(--spacing-lg)] pb-[var(--spacing-8xl)] gap-[var(--spacing-xl)] w-full">
        <div className="flex flex-col items-center gap-[var(--spacing-xl)] w-full">
          <div className="flex justify-center w-full ">
            <video
              src="/Photos/Homepage/PhotoWebsiteVideoMobile.mp4"
              autoPlay
              muted
              playsInline
              loop
              width="600"
              height="600"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
        <GetToKnowMe />
      </div>
    )
  }

  // Tablet (769px - 1024px)
  if (isTablet) {
    return (
      <div className="flex flex-col items-center px-[var(--spacing-2xl)] pt-[var(--spacing-2xl)] pb-[var(--spacing-10xl)] gap-[var(--spacing-4xl)] w-full  mx-auto">
        <div className="flex flex-col items-center gap-[var(--spacing-4xl)] w-full mx-auto">
          <div className="flex justify-center w-full">
            <video
              src="/Photos/Homepage/PhotoWebsiteVideoMobile.mp4"
              autoPlay
              muted
              playsInli
              loop
              width="1000"
              height="1260"
              className="w-full h-auto object-contain"
            />
          </div>
          <GetToKnowMe />
        </div>
      </div>
    )
  }

  // Desktop 1440px (1025px - 1440px)
  if (isDesktop1440px) {
    return (
      <div className="flex flex-col items-center px-[var(--spacing-2xl)] gap-[var(--spacing-4xl)] pt-[var(--spacing-2xl)] pb-[var(--spacing-10xl)] w-full">
        <div className="flex flex-col items-center gap-[var(--spacing-4xl)] w-full  mx-auto">
          <div className="flex justify-center w-full ">
            <video
              src="/Photos/Homepage/PhotoWebsiteVideoScreen.mp4"
              autoPlay
              muted
              playsInline
              loop
              width="1920"
              height="1080"
              className="w-full h-auto object-contain"
            />
          </div>
          <GetToKnowMe />
        </div>
      </div>

    )
  }

  // Large Desktop (>1440px)
  return (
    <div className="flex flex-col items-center px-[var(--spacing-3xl)] gap-[var(--spacing-5xl)] pt-[var(--spacing-2xl)] pb-[var(--spacing-12xl)] w-full max-w-[1600px]  mx-auto">
      <div className="flex flex-col items-center gap-[var(--spacing-5xl)] w-full mx-auto">
        <div className="flex justify-center w-full">
          <video
            src="/Photos/Homepage/PhotoWebsiteVideoScreen.mp4"
            autoPlay
            muted
            playsInline
            loop
            className="w-full h-auto object-contain"
          />
        </div>
        <GetToKnowMe />
      </div>
    </div>
  )
}

