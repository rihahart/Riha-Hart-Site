"use client"

import React, { useState } from "react"
import useMobileDetection from "@/_utilities/useMobileDetection"
import WeakOnlineApp from "./WeakOnlineApp"
import Bottleneck from "./Bottleneck"
import LowTrust from "./LowTrust"

const OVERLAY_HEADING = "The bank was not built to scale digitally."
const OVERLAY_BODY =
  "Research revealed a systemic misalignment between the bank's growth ambitions and its digital infrastructure. The organization was operating with tools and processes that could not support scale."

const thumbnailData = [
  { component: <WeakOnlineApp key="weak" />, image: "/EFCU/BankScale/ScrollAnimation.gif", alt: "Weak Online Application" },
  { component: <Bottleneck key="bottleneck" />, image: "/EFCU/BankScale/PaperBlowing/PaperBlowing_00014.png", alt: "Operational Bottlenecks" },
  { component: <LowTrust key="lowtrust" />, image: "/EFCU/BankScale/LowTrust/Frame 2.png", alt: "Low Trust and Brand Clarity" },
]

export default function ResearchFindingsDeck() {
  const { isMobile, isTablet, isDesktop1440px } = useMobileDetection()
  const [selectedIndex, setSelectedIndex] = useState(0)

  const selectedComponent = thumbnailData[selectedIndex].component

  const Thumbnails = ({ cols }: { cols: string }) => (
    <div className={`grid ${cols} gap-[var(--spacing-lg)] w-full`}>
      {thumbnailData.map((item, i) => {
        const isActive = i === selectedIndex
        return (
          <div
            key={i}
            style={{
              border: isActive ? "2px solid #1C4483" : "2px solid transparent",
              padding: "var(--spacing-xs)",
            }}
          >
            <button
              type="button"
              onClick={() => setSelectedIndex(i)}
              className="w-full block focus:outline-none transition-transform duration-200 ease-out hover:scale-[1.20]"
              style={{
                backgroundColor: "#FFC700",
                padding: "var(--spacing-m)",
                boxShadow: "0 4px 4px 0 rgba(0, 0, 0, 0.25)",
              }}
            >
              <img
                src={item.image}
                alt={item.alt}
                className="w-full aspect-square object-contain block pointer-events-none"
              />
            </button>
          </div>
        )
      })}
    </div>
  )

  const SidebarThumbnails = ({ width = "120px" }: { width?: string }) => (
    <div className="flex flex-col justify-start gap-[var(--spacing-lg)] shrink-0" style={{ width }}>
      {thumbnailData.map((item, i) => {
        const isActive = i === selectedIndex
        return (
          <div
            key={i}
            style={{
              border: isActive ? "2px solid #1C4483" : "2px solid transparent",
              padding: "var(--spacing-xs)",
            }}
          >
            <button
              type="button"
              onClick={() => setSelectedIndex(i)}
              className="w-full block focus:outline-none transition-transform duration-200 ease-out hover:scale-[1.20]"
              style={{
                backgroundColor: "#FFC700",
                padding: "var(--spacing-m)",
                boxShadow: "0 4px 4px 0 rgba(0, 0, 0, 0.25)",
              }}
            >
              <img
                src={item.image}
                alt={item.alt}
                className="w-full aspect-square object-contain block pointer-events-none"
              />
            </button>
          </div>
        )
      })}
    </div>
  )

  const MainContent = ({ large }: { large?: boolean }) => (
    <div className={`relative overflow-hidden flex items-center justify-center ${large ? "flex-[1.1]" : "flex-1"}`}>
      {selectedComponent}
    </div>
  )

  const TitleBlock = () => (
    <div className="flex flex-col w-full gap-[var(--spacing-s)]">
      <section className="w-full flex flex-row gap-[var(--spacing-s)] items-start">
        <img
          src="/researchDataPhotos/Lightbulb.png"
          alt=""
          className={`w-auto object-contain flex-shrink-0 ${isMobile ? "h-[90px]" : isTablet ? "h-[100px]" : isDesktop1440px ? "h-[125px]" : "h-[150px]"}`}
          aria-hidden
        />
        <div className="flex flex-col gap-[var(--spacing-s)]">
          <h2 className="h2 text-[var(--color-primary)] uppercase">
            {OVERLAY_HEADING}
          </h2>
          <p className="body text-[var(--color-primary)]">
            {OVERLAY_BODY}
          </p>
        </div>
      </section>
    </div>
  )

  if (isMobile) {
    return (
      <div className="flex flex-col items-center w-full mx-auto">
        <div className="flex flex-col w-full gap-[var(--spacing-4xl)] mx-auto">
          <TitleBlock />
          <MainContent />
          <Thumbnails cols="grid-cols-3" />
        </div>
      </div>
    )
  }

  if (isTablet) {
    return (
      <div className="flex flex-col items-center w-full mx-auto">
        <div className="flex flex-col w-full gap-[var(--spacing-3xl)] mx-auto">
          <TitleBlock />
          <MainContent />
          <Thumbnails cols="grid-cols-3" />
        </div>
      </div>
    )
  }

  if (isDesktop1440px) {
    return (
      <div className="flex flex-col items-center w-full mx-auto">
        <div className="flex flex-col w-full gap-[var(--spacing-3xl)] mx-auto">
          <TitleBlock />
          <div className="flex flex-row w-full gap-[var(--spacing-lg)] items-stretch">
            <SidebarThumbnails />
            <MainContent large />
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="flex flex-col items-center w-full mx-auto">
      <div className="flex flex-col w-full gap-[var(--spacing-3xl)] mx-auto">
        <TitleBlock />
        <div className="flex flex-row w-full gap-[var(--spacing-lg)] items-stretch">
          <SidebarThumbnails width="180px" />
          <MainContent large />
        </div>
      </div>
    </div>
  )
}
