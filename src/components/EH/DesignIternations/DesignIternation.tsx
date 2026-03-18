"use client"

import { useState } from "react"
import useMobileDetection from "@/_utilities/useMobileDetection"
import { designIterationSlides } from "@/data/EH/DesignIterations"

const HEADING = "Design Iterations: Make Impact Visible"
const DESCRIPTION =
  "Actions didn't translate to EarthPoints, EarthPoints were unclear, and Emission Targets felt abstract, which we believed contributed to low user motivation. Our data showed conversion remained at 40–45%. We explored multiple visual systems to make the impact more visible through changes to how metrics are presented on the homepage."

export default function DesignIteration() {
  const { isMobile, isTablet, isDesktop1440px } = useMobileDetection()
  const [selectedIndex, setSelectedIndex] = useState(0)

  const slide = designIterationSlides[selectedIndex]

  const imageHeight = isMobile
    ? "435px"
    : isTablet
    ? "450px"
    : isDesktop1440px
    ? "475px"
    : "500px"

  const slidePadding = isMobile ? "var(--spacing-m)" : "var(--spacing-2xl)"

  const TitleBlock = () => (
    <div className="flex flex-col w-full gap-[var(--spacing-xs)]">
      <h2 className="h2 text-[var(--color-primary)]">{HEADING}</h2>
      <p className="body font-normal text-[var(--color-primary)]">{DESCRIPTION}</p>
    </div>
  )

  const SlideContent = () => (
    <div
      className="flex flex-col items-center justify-center w-full gap-[var(--spacing-2xl)]"
      style={{
        backgroundColor: "#1E9263",
        padding: slidePadding,
      }}
    >
      {/* Text container */}
      <div
        className="flex flex-col gap-[var(--spacing-xs)] items-start w-full"
        style={{ alignSelf: "stretch" }}
      >
        <h2 className="h2 text-[var(--color-secondary-inverse)]">{slide.heading}</h2>
        <p className="body font-normal text-[var(--color-secondary-inverse)]">{slide.body}</p>
      </div>

      {/* Image container */}
      <div
        className={`flex gap-[var(--spacing-2xl)] w-full items-center justify-center ${
          isMobile || isTablet ? "flex-col" : "flex-row"
        }`}
      >
        {slide.images.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`${slide.heading} — image ${i + 1}`}
            style={{ width: "auto", height: imageHeight }}
            className="object-contain"
          />
        ))}
      </div>
    </div>
  )

  const Thumbnails = ({ cols }: { cols: string }) => (
    <div className={`grid ${cols} gap-[var(--spacing-xs)] w-full`}>
      {designIterationSlides.map((s, i) => {
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
              className="w-full flex items-center justify-center focus:outline-none transition-transform duration-200 ease-out hover:scale-[1.02] shadow-[0_2.46px_2.46px_0_rgba(255,255,255,0.2)]"
              style={{
                backgroundColor: "#1E9263",
                padding: "var(--spacing-m)",
                minHeight: "80px",
              }}
            >
              <p className="body font-semibold text-[var(--color-secondary-inverse)] text-center pointer-events-none">{s.heading}</p>
            </button>
          </div>
        )
      })}
    </div>
  )

  const SidebarThumbnails = ({ width = "160px" }: { width?: string }) => (
    <div className="flex flex-col justify-end shrink-0" style={{ width }}>
      {designIterationSlides.map((s, i) => {
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
              className="w-full flex items-center justify-center focus:outline-none transition-transform duration-200 ease-out hover:scale-[1.02] shadow-[0_2.46px_2.46px_0_rgba(255,255,255,0.2)]"
              style={{
                backgroundColor: "#1E9263",
                padding: "var(--spacing-m)",
                minHeight: "80px",
              }}
            >
              <p className="body font-semibold text-[var(--color-secondary-inverse)] text-center pointer-events-none">{s.heading}</p>
            </button>
          </div>
        )
      })}
    </div>
  )

  if (isMobile) {
    return (
      <div className="flex flex-col items-center w-full mx-auto">
        <div className="flex flex-col w-full py-[var(--spacing-lg)] pb-[var(--spacing-xl)] gap-[var(--spacing-2xl)] mx-auto">
          <TitleBlock />
          <SlideContent />
          <Thumbnails cols="grid-cols-3" />
        </div>
      </div>
    )
  }

  if (isTablet) {
    return (
      <div className="flex flex-col items-center w-full mx-auto">
        <div className="flex flex-col w-full px-[var(--spacing-2xl)] pb-[var(--spacing-3xl)] gap-[var(--spacing-2xl)] mx-auto">
          <TitleBlock />
          <SlideContent />
          <Thumbnails cols="grid-cols-3" />
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
            <SlideContent />
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="flex flex-col items-center w-full mx-auto">
      <div className="flex flex-col max-w-[1600px] w-full p-[var(--spacing-3xl)] gap-[var(--spacing-2xl)] mx-auto">
        <TitleBlock />
        <div className="flex flex-row w-full gap-[var(--spacing-lg)] items-stretch">
          <SidebarThumbnails width="180px" />
          <SlideContent />
        </div>
      </div>
    </div>
  )
}
