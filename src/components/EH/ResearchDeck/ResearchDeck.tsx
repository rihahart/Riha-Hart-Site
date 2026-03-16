"use client"

import React, { useState } from "react"
import useMobileDetection from "@/_utilities/useMobileDetection"
import { researchDeckSlides } from "@/data/EH/ResearchDeck"

const OVERLAY_HEADING = "Understanding Homepage Engagement Issues"
const OVERLAY_BODY =
  "To understand why users were leaving the homepage and not engaging with the app, we synthesized prior research findings to identify recurring issues across the experience, including how key information (Actions Achieved, EarthPoint, Emission Target) on the homepage was understood."

export default function ResearchDeck() {
  const { isMobile, isTablet, isDesktop1440px } = useMobileDetection()
  const [selectedIndex, setSelectedIndex] = useState(0)

  const selectedSrc = researchDeckSlides[selectedIndex]

  const Thumbnails = ({ cols }: { cols: string }) => (
    <div className={`grid ${cols} gap-[var(--spacing-xs)] w-full`}>
      {researchDeckSlides.map((slide, i) => {
        const isActive = i === selectedIndex
        return (
          <div
            key={i}
            style={{
              border: isActive ? "2px solid var(--color-primary)" : "2px solid transparent",
              padding: "var(--spacing-xs)",
            }}
          >
            <button
              type="button"
              onClick={() => setSelectedIndex(i)}
              className="w-full block focus:outline-none transition-transform duration-200 ease-out hover:scale-[1.15] shadow-[0_2.46px_2.46px_0_rgba(255,255,255,0.2)]"
              style={{
                background: "linear-gradient(135deg, #2A42C4 0%, #1F34AE 45%, #192B96 100%)",
                padding: "var(--spacing-s)",
              }}
            >
              <img
                src={slide}
                alt={`Slide ${i + 1}`}
                className="w-full aspect-[4/3] object-cover block pointer-events-none"
              />
            </button>
          </div>
        )
      })}
    </div>
  )

  const SidebarThumbnails = ({ width = "120px" }: { width?: string }) => (
    <div className="flex flex-col justify-end  shrink-0" style={{ width }}>
      {researchDeckSlides.map((slide, i) => {
        const isActive = i === selectedIndex
        return (
          <div
            key={i}
            style={{
              border: isActive ? "2px solid var(--color-primary)" : "2px solid transparent",
              padding: "var(--spacing-xs)",
            }}
          >
            <button
              type="button"
              onClick={() => setSelectedIndex(i)}
              className="w-full block focus:outline-none transition-transform duration-200 ease-out hover:scale-[1.15] shadow-[0_2.46px_2.46px_0_rgba(255,255,255,0.2)]"
              style={{
                background: "linear-gradient(135deg, #2A42C4 0%, #1F34AE 45%, #192B96 100%)",
                padding: "var(--spacing-xs)",
              }}
            >
              <img
                src={slide}
                alt={`Slide ${i + 1}`}
                className="w-full aspect-[4/3] object-cover block pointer-events-none"
              />
            </button>
          </div>
        )
      })}
    </div>
  )

  const MainImage = ({ large }: { large?: boolean }) => (
    <div
      className={`relative overflow-hidden flex items-center justify-center shadow-[0_2.46px_2.46px_0_rgba(255,255,255,0.2)] ${large ? "flex-[1.1]" : "flex-1"}`}
      style={{
        padding: "var(--spacing-3xl)",
        background: "linear-gradient(135deg, #2A42C4 0%, #1F34AE 45%, #192B96 100%)",
      }}
    >
      {selectedSrc && (
        <img
          src={selectedSrc}
          alt={`Research slide ${selectedIndex + 1}`}
          className="w-full h-auto object-contain"
        />
      )}
    </div>
  )

  const TitleBlock = () => (
    <div className="flex flex-col w-full gap-[var(--spacing-xs)]">
      <h2 className="h2 text-[var(--color-primary)]">{OVERLAY_HEADING}</h2>
      <p className="body font-normal text-[var(--color-primary)]">{OVERLAY_BODY}</p>
    </div>
  )

  if (isMobile) {
    return (
      <div className="flex flex-col items-center  w-full mx-auto">
        <div className="flex flex-col w-full py-[var(--spacing-lg)] pb-[var(--spacing-xl)] gap-[var(--spacing-2xl)] mx-auto">
          <TitleBlock />
          <MainImage />
          <Thumbnails cols="grid-cols-4" />
        </div>
      </div>
    )
  }

  if (isTablet) {
    return (
      <div className="flex flex-col items-center w-full mx-auto">
        <div className="flex flex-col w-full px-[var(--spacing-2xl)] pb-[var(--spacing-3xl)] gap-[var(--spacing-2xl)] mx-auto">
          <TitleBlock />
          <MainImage />
          <Thumbnails cols="grid-cols-6" />
        </div>
      </div>
    )
  }

  if (isDesktop1440px) {
    return (
      <div className="flex flex-col items-center w-full mx-auto">
        <div className="flex flex-col w-full p-[var(--spacing-2xl)] gap-[var(--spacing-2xl)] mx-auto">
          <TitleBlock />
          <div className="flex flex-row w-full gap-[var(--spacing-lg)] items-stretch">
            <SidebarThumbnails />
            <MainImage large />
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="flex flex-col items-center w-full mx-auto">
      <div className="flex flex-col max-w-[1600px] w-full p-[var(--spacing-3xl)]  gap-[var(--spacing-3xl)] mx-auto">
        <TitleBlock />
        <div className="flex flex-row w-full gap-[var(--spacing-lg)] items-stretch">
          <SidebarThumbnails width="180px" />
          <MainImage large />
        </div>
      </div>
    </div>
  )
}