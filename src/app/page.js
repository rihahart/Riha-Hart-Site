"use client"

import React from "react"
import useMobileDetection from "@/_utilities/useMobileDetection"

export default function Home() {
  const { isMobile, isTablet, isDesktop1440px } = useMobileDetection()

  // Mobile (≤768px)
  if (isMobile) {
    return (
      <div className="fixed inset-0 z-0 h-full w-full">
        <video
          src="/Photos/Homepage/PhotoWebsiteVideoMobile.mp4"
          autoPlay
          muted
          playsInline
          className="w-full h-full object-cover animate-fadeInHomepage"
        />
      </div>
    )
  }

  // Tablet (769px - 1024px)
  if (isTablet) {
    return (
      <div className="fixed inset-0 z-0 h-full w-full">
        <video
          src="/Photos/Homepage/PhotoWebsiteVideoMobile.mp4"
          autoPlay
          muted
          playsInline
          className="w-full h-full object-cover animate-fadeInHomepage"
        />
      </div>
    )
  }

  // Desktop 1440px (1025px - 1440px)
  if (isDesktop1440px) {
    return (
      <div className="fixed inset-0 z-0 h-full w-full">
        <video
          src="/Photos/Homepage/PhotoWebsiteVideoScreen.mp4"
          autoPlay
          muted
          playsInline
          className="w-full h-full object-cover animate-fadeInHomepage"
        />
      </div>
    )
  }

  // Large Desktop (>1440px)
  return (
    <div className="fixed inset-0 z-0 h-full w-full">
      <video
        src="/Photos/Homepage/PhotoWebsiteVideoScreen.mp4"
        autoPlay
        muted
        playsInline
        className="w-full h-full object-cover animate-fadeInHomepage"
      />
    </div>
  )
}

