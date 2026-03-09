"use client"

import React, { useState } from "react"
import useMobileDetection from "@/_utilities/useMobileDetection"
import { researchDeckSlides } from "@/data/EH/ResearchDeck"

const OVERLAY_HEADING = "Research Synthesis"
const OVERLAY_BODY =
  "I consolidated prior research findings into a structured overview to identify recurring themes across the experience."

export default function ResearchDeck() {
  const { isMobile, isTablet, isDesktop1440px } = useMobileDetection()
  const [selectedIndex, setSelectedIndex] = useState(0)

  const selectedSrc = researchDeckSlides[selectedIndex]

  const Thumbnails = ({ cols }: { cols: string }) => (
    <div className={`grid ${cols} gap-[var(--spacing-lg)] w-full`}>
      {researchDeckSlides.map((slide, i) => {
        const isActive = i === selectedIndex
        return (
          <div
            key={i}
            style={{
              border: isActive ? "2px solid var(--color-secondary-inverse)" : "2px solid transparent",
              padding: "var(--spacing-xs)",
            }}
          >
            <button
              type="button"
              onClick={() => setSelectedIndex(i)}
              className="w-full block focus:outline-none transition-transform duration-200 ease-out hover:scale-[1.15] shadow-[0_2.46px_2.46px_0_rgba(255,255,255,0.2)]"
              style={{
                background: "radial-gradient(ellipse at 60% 40%, #9B2010 0%, #6B1208 60%, #4A0D06 100%)",
                backgroundColor: "#7D1A0A",
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

  const SidebarThumbnails = () => (
    <div className="flex flex-col justify-end gap-[var(--spacing-lg)] w-[80px] shrink-0">
      {researchDeckSlides.map((slide, i) => {
        const isActive = i === selectedIndex
        return (
          <div
            key={i}
            style={{
              border: isActive ? "2px solid var(--color-secondary-inverse)" : "2px solid transparent",
              padding: "var(--spacing-xs)",
            }}
          >
            <button
              type="button"
              onClick={() => setSelectedIndex(i)}
              className="w-full block focus:outline-none transition-transform duration-200 ease-out hover:scale-[1.15] shadow-[0_2.46px_2.46px_0_rgba(255,255,255,0.2)]"
              style={{
                background: "radial-gradient(ellipse at 60% 40%, #9B2010 0%, #6B1208 60%, #4A0D06 100%)",
                backgroundColor: "#7D1A0A",
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
        background: "radial-gradient(ellipse at 60% 40%, #9B2010 0%, #6B1208 60%, #4A0D06 100%)",
        backgroundColor: "#7D1A0A",
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
      <h2 className="h2 text-[var(--color-secondary-inverse)]">{OVERLAY_HEADING}</h2>
      <p className="body font-normal text-[var(--color-secondary-inverse)] ">{OVERLAY_BODY}</p>
    </div>
  )

  if (isMobile) {
    return (
      <div className="flex flex-col items-center w-full mx-auto">
        <div className="flex flex-col w-full py-[var(--spacing-lg)] pb-[var(--spacing-4xl)] gap-[var(--spacing-lg)] mx-auto">
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
        <div className="flex flex-col w-full p-[var(--spacing-2xl)] pb-[var(--spacing-4xl)] gap-[var(--spacing-lg)] mx-auto">
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
        <div className="flex flex-col w-full p-[var(--spacing-3xl)] pb-[var(--spacing-4xl)] gap-[var(--spacing-lg)] mx-auto">
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
      <div className="flex flex-col max-w-[1600px] w-full p-[var(--spacing-3xl)] pb-[var(--spacing-4xl)] gap-[var(--spacing-lg)] mx-auto">
        <TitleBlock />
        <div className="flex flex-row w-full gap-[var(--spacing-lg)] items-stretch">
          <SidebarThumbnails />
          <MainImage large />
        </div>
      </div>
    </div>
  )
}