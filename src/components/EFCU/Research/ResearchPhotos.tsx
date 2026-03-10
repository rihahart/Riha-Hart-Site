"use client"

import React from "react"
import useMobileDetection from "@/_utilities/useMobileDetection"
import { groundLevelResearch } from "@/data/EFCU/Research/groundLevelResearch"

interface Props {
  onNavigate: (direction: "prev" | "next") => void
  currentIndex: number
  total: number
}

export default function ResearchPhotos({ onNavigate, currentIndex, total }: Props) {
  const { isMobile, isTablet, isDesktop1440px } = useMobileDetection()
  const section = groundLevelResearch

  if (isMobile) {
    return (
      <section 
        className="w-full flex flex-col gap-[var(--spacing-xl)] items-center px-[var(--spacing-lg)] py-[var(--spacing-lg)]"
        style={{
          backgroundColor: "#FDFFFE",
          borderLeft: "4px solid #1c4483",
          boxShadow: "0 4px 4px 0 rgba(0, 0, 0, 0.25)",
          height: "450px"
        }}
      >
        <div className="flex flex-row justify-between items-center self-stretch">
          <h3 className="h3 text-[#2E8FB6]">03</h3>
          <div className="flex items-center gap-[var(--spacing-s)]">
            <button
              onClick={() => onNavigate("prev")}
              className="w-[30px] h-[30px] rounded-full bg-[#2E8FB6] flex items-center justify-center"
              aria-label="Previous"
            >
              <span className="Icon--ChevronLeft--S text-white" style={{ color: "white" }} />
            </button>
            <span className="body text-[#2E8FB6]">{currentIndex} of {total}</span>
            <button
              onClick={() => onNavigate("next")}
              className="w-[30px] h-[30px] rounded-full bg-[#2E8FB6] flex items-center justify-center"
              aria-label="Next"
            >
              <span className="Icon--ChevronRight--S text-white" style={{ color: "white" }} />
            </button>
          </div>
        </div>
        <div className="w-full flex items-center justify-center">
          <video
            src={section.media.src}
            autoPlay
            muted
            playsInline
            loop
            className="max-w-full h-auto object-contain flex-shrink-0"
            style={{ maxHeight: "calc(450px - 120px)" }}
          />
        </div>
      </section>
    )
  }

  if (isTablet) {
    return (
      <section 
        className="w-full flex flex-col gap-[var(--spacing-xl)] items-center px-[var(--spacing-xl)] py-[var(--spacing-xl)]"
        style={{
          backgroundColor: "#FDFFFE",
          borderLeft: "6px solid #1c4483",
          boxShadow: "0 4px 4px 0 rgba(0, 0, 0, 0.25)",
          height: "500px"
        }}
      >
        <div className="flex flex-row justify-between items-center self-stretch">
          <h3 className="h3 text-[#2E8FB6]">03</h3>
          <div className="flex items-center gap-[var(--spacing-s)]">
            <button
              onClick={() => onNavigate("prev")}
              className="w-[30px] h-[30px] rounded-full bg-[#2E8FB6] flex items-center justify-center"
              aria-label="Previous"
            >
              <span className="Icon--ChevronLeft--S text-white" style={{ color: "white" }} />
            </button>
            <span className="body text-[#2E8FB6]">{currentIndex} of {total}</span>
            <button
              onClick={() => onNavigate("next")}
              className="w-[30px] h-[30px] rounded-full bg-[#2E8FB6] flex items-center justify-center"
              aria-label="Next"
            >
              <span className="Icon--ChevronRight--S text-white" style={{ color: "white" }} />
            </button>
          </div>
        </div>
        <div className="flex flex-row gap-[var(--spacing-m)] items-center justify-center w-full flex-1" style={{ maxHeight: "calc(500px - 120px)", overflow: "hidden" }}>
          <video
            src={section.media.src}
            autoPlay
            muted
            playsInline
            loop
            className="w-[48%] h-auto object-contain"
            style={{ maxHeight: "100%" }}
          />
          <img
            src="/EFCU/Crazy8S.gif"
            alt="Crazy 8s workshop"
            className="w-[48%] h-auto object-contain"
            style={{ maxHeight: "100%" }}
          />
        </div>
      </section>
    )
  }

  if (isDesktop1440px) {
    return (
      <section 
        className="w-full flex flex-col gap-[var(--spacing-m)] items-center px-[var(--spacing-xl)] py-[var(--spacing-xl)]"
        style={{
          backgroundColor: "#FDFFFE",
          borderLeft: "6px solid #1c4483",
          boxShadow: "0 4px 4px 0 rgba(0, 0, 0, 0.25)",
          height: "550px"
        }}
      >
        <div className="flex flex-row justify-between items-center self-stretch">
          <h3 className="h3 text-[#2E8FB6]">03</h3>
          <div className="flex items-center gap-[var(--spacing-s)]">
            <button
              onClick={() => onNavigate("prev")}
              className="w-[40px] h-[40px] rounded-full bg-[#2E8FB6] flex items-center justify-center"
              aria-label="Previous"
            >
              <span className="Icon--ChevronLeft--M text-white" style={{ color: "white" }} />
            </button>
            <span className="body text-[#2E8FB6]">{currentIndex} of {total}</span>
            <button
              onClick={() => onNavigate("next")}
              className="w-[40px] h-[40px] rounded-full bg-[#2E8FB6] flex items-center justify-center"
              aria-label="Next"
            >
              <span className="Icon--ChevronRight--M text-white" style={{ color: "white" }} />
            </button>
          </div>
        </div>
        <div className="flex flex-row gap-[var(--spacing-m)] items-center justify-center w-full flex-1" style={{ maxHeight: "calc(500px - 120px)", overflow: "hidden" }}>
          <video
            src={section.media.src}
            autoPlay
            muted
            playsInline
            loop
            className="w-[48%] h-auto object-contain"
            style={{ maxHeight: "100%" }}
          />
          <img
            src="/EFCU/Crazy8S.gif"
            alt="Crazy 8s workshop"
            className="w-[48%] h-auto object-contain"
            style={{ maxHeight: "100%" }}
          />
        </div>
      </section>
    )
  }

  return (
    <section 
      className="w-full flex flex-col gap-[var(--spacing-m)] items-center px-[var(--spacing-xl)] py-[var(--spacing-xl)]"
      style={{
        backgroundColor: "#FDFFFE",
        borderLeft: "8px solid #1c4483",
        boxShadow: "0 4px 4px 0 rgba(0, 0, 0, 0.25)",
        height: "650px"
      }}
    >
      <div className="flex flex-row justify-between items-center self-stretch">
        <h3 className="h3 text-[#2E8FB6]">03</h3>
        <div className="flex items-center gap-[var(--spacing-s)]">
          <button
            onClick={() => onNavigate("prev")}
            className="px-[var(--spacing-xs)] py-[var(--spacing-xs)] rounded-full bg-[#2E8FB6] flex items-center justify-center"
            aria-label="Previous"
          >
            <span className="Icon--ChevronLeft--M text-white" style={{ color: "white" }} />
          </button>
          <span className="body text-[#2E8FB6]">{currentIndex} of {total}</span>
          <button
            onClick={() => onNavigate("next")}
            className="px-[var(--spacing-xs)] py-[var(--spacing-xs)] rounded-full bg-[#2E8FB6] flex items-center justify-center"
            aria-label="Next"
          >
            <span className="Icon--ChevronRight--M text-white" style={{ color: "white" }} />
          </button>
        </div>
      </div>
      <div className="flex flex-row gap-[var(--spacing-m)] items-center justify-center w-full" style={{ maxHeight: "calc(650px - 120px)", overflow: "hidden" }}>
        <video
          src={section.media.src}
          autoPlay
          muted
          playsInline
          loop
          className="w-[48%] h-auto object-contain"
          style={{ maxHeight: "100%" }}
        />
        <img
          src="/EFCU/Crazy8S.gif"
          alt="Crazy 8s workshop"
          className="w-[48%] h-auto object-contain"
          style={{ maxHeight: "100%" }}
        />
      </div>
    </section>
  )
}
