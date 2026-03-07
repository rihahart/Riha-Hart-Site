"use client"

import React from "react"
import useMobileDetection from "@/_utilities/useMobileDetection"
import { trust } from "@/data/EFCU/TrustandCommunity/Trust"
import { community } from "@/data/EFCU/TrustandCommunity/Community"
import BuildingCommunity from "./BuildingCommunity"

const communityParagraphs = community.description.split("\n\n")

export default function TrustandCommunity() {
  const { isMobile, isTablet, isDesktop1440px } = useMobileDetection()

  if (isMobile) {
    return (
      <div className="w-full flex flex-col gap-[var(--spacing-6xl)] items-start">
        <div className="flex flex-col gap-[var(--spacing-3xl)]">
        <div className="flex flex-col gap-[var(--spacing-s)]">
          <h3 className="h3 text-[var(--color-primary)]">{trust.title}</h3>
          <p className="body text-[var(--color-primary)]">{trust.description}</p>
        </div>
        <div className="w-full flex items-center justify-center">
          <video
            src="/EFCU/Branding/Before and After.mp4"
            autoPlay
            muted
            playsInline
            loop
            className="w-full max-w-full h-auto object-contain"
            onLoadedMetadata={(e) => { e.currentTarget.playbackRate = 0.75 }}
          />
        </div>
        </div>
        <div className="flex flex-col gap-[var(--spacing-xl)]">
        <div className="flex flex-col gap-[var(--spacing-s)]">
          <h3 className="h3 text-[var(--color-primary)]">{community.title}</h3>
          {communityParagraphs.map((para, i) => (
            <p key={i} className="body text-[var(--color-primary)]">
              {para}
            </p>
          ))}
        </div>
        <BuildingCommunity />
        </div>
      </div>
    )
  }

  if (isTablet) {
    return (
      <div className="w-full flex flex-col gap-[var(--spacing-8xl)] items-start">

        {/* Trust */}
        <div className="flex flex-col items-center gap-[var(--spacing-6xl)] w-full">
        <div className="flex flex-col gap-[var(--spacing-s)]">
          <h3 className="h3 text-[var(--color-primary)]">{trust.title}</h3>
          <p className="body text-[var(--color-primary)]">{trust.description}</p>
        </div>
      
          <video
            src="/EFCU/Branding/Before and After.mp4"
            autoPlay
            muted
            playsInline
            loop
            className="w-full h-full object-contain"
            onLoadedMetadata={(e) => { e.currentTarget.playbackRate = 0.75 }}
          />
        </div>

        {/* Community */}
        <div className="flex flex-col gap-[var(--spacing-2xl)]">
        <div className="flex flex-col gap-[var(--spacing-s)]">
          <h3 className="h3 text-[var(--color-primary)]">{community.title}</h3>
          {communityParagraphs.map((para, i) => (
            <p key={i} className="body text-[var(--color-primary)]">
              {para}
            </p>
          ))}
        </div>
        <div className="w-full">
          <BuildingCommunity />
        </div>
        </div>
      </div>
    )
  }

  if (isDesktop1440px) {
    return (
      <div className="w-full flex flex-col gap-[var(--spacing-8xl)] py-[var(--spacing-3xl)] items-start">

      {/* Trust */}
      <div className="flex items-center justify-between w-full">
      <div className="flex flex-col p-[var(--spacing-lg)] gap-[var(--spacing-s)] flex-[0_0_40%] justify-center">
          <h3 className="h3 text-[var(--color-primary)]">{trust.title}</h3>
          <p className="body text-[var(--color-primary)]">{trust.description}</p>
        </div>
        <div className="flex-[0_0_45%] min-w-0">
          <video
            src="/EFCU/Branding/Before and After.mp4"
            autoPlay
            muted
            playsInline
            loop
            className="w-full h-full object-contain"
            onLoadedMetadata={(e) => { e.currentTarget.playbackRate = 0.75 }}
          />
        </div>
      </div>

      {/* Community */}
    <div className="flex items-center justify-between w-full">
      <div className="flex flex-col p-[var(--spacing-lg)] gap-[var(--spacing-s)] flex-[0_0_40%] justify-center">
        <h3 className="h3 text-[var(--color-primary)]">{community.title}</h3>
        <div className="flex flex-col gap-[var(--spacing-xs)]">
          {communityParagraphs.map((para, i) => (
            <p key={i} className="body text-[var(--color-primary)]">
              {para}
            </p>
          ))}
        </div>
      </div>
      <div className="flex-[0_0_45%] min-w-0">
        <BuildingCommunity />
      </div>
      </div>
    </div>
  )
}


  return (
    <div className="w-full flex flex-col gap-[var(--spacing-8xl)] py-[var(--spacing-3xl)] items-start">

      {/* Trust */}
      <div className="flex items-center justify-between w-full">
      <div className="flex flex-col p-[var(--spacing-lg)]  gap-[var(--spacing-s)] flex-[0_0_40%] justify-center">
          <h3 className="h3 text-[var(--color-primary)]">{trust.title}</h3>
          <p className="body text-[var(--color-primary)]">{trust.description}</p>
        </div>
        <div className="flex-[0_0_45%] min-w-0">
          <video
            src="/EFCU/Branding/Before and After.mp4"
            autoPlay
            muted
            playsInline
            loop
            className="w-full h-full object-contain"
            onLoadedMetadata={(e) => { e.currentTarget.playbackRate = 0.75 }}
          />
        </div>
      </div>

      {/* Community */}
    <div className="flex items-center justify-between w-full">
      <div className="flex flex-col p-[var(--spacing-lg)] gap-[var(--spacing-s)] flex-[0_0_40%] justify-center">
        <h3 className="h3 text-[var(--color-primary)]">{community.title}</h3>
        <div className="flex flex-col gap-[var(--spacing-xs)]">
          {communityParagraphs.map((para, i) => (
            <p key={i} className="body text-[var(--color-primary)]">
              {para}
            </p>
          ))}
        </div>
      </div>
      <div className="flex-[0_0_45%] min-w-0">
        <BuildingCommunity />
      </div>
      </div>
    </div>
  )
}
