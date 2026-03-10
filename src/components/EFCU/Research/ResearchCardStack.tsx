"use client"

import React, { useState, useRef, useEffect } from "react"
import GroundLevelResearch from "./GroundLevelResearch"
import InternalOperationsResearch from "./InternalOperationsResearch"
import ResearchPhotos from "./ResearchPhotos"
import ResearchGif from "./ResearchGif"
import useMobileDetection from "@/_utilities/useMobileDetection"

export default function ResearchCardStack() {
  const { isMobile } = useMobileDetection()
  const total = isMobile ? 4 : 3
  const [currentIndex, setCurrentIndex] = useState(0)
  const [sliding, setSliding] = useState(false)
  const [slideDirection, setSlideDirection] = useState<"left" | "right">("left")
  const frontRef = useRef<HTMLDivElement>(null)
  const [wrapperHeight, setWrapperHeight] = useState<number>(0)

  useEffect(() => {
    if (!frontRef.current) return
    const observer = new ResizeObserver(() => {
      if (frontRef.current) setWrapperHeight(frontRef.current.offsetHeight)
    })
    observer.observe(frontRef.current)
    return () => observer.disconnect()
  }, [currentIndex])

  const handleNavigate = (direction: "prev" | "next") => {
    if (sliding) return
    const nextIndex = direction === "next"
      ? (currentIndex + 1) % total
      : (currentIndex - 1 + total) % total
    setSlideDirection(direction === "next" ? "left" : "right")
    setSliding(true)
    setTimeout(() => {
      setCurrentIndex(nextIndex)
      setSliding(false)
    }, 280)
  }

  const cardProps = {
    onNavigate: handleNavigate,
    currentIndex: currentIndex + 1,
    total,
  }

  const cards = [
    <GroundLevelResearch key="ground" {...cardProps} />,
    <InternalOperationsResearch key="internal" {...cardProps} />,
    <ResearchPhotos key="photos" {...cardProps} />,
    ...(isMobile ? [<ResearchGif key="gif" {...cardProps} />] : []),
  ]

  const underIndex = slideDirection === "left"
    ? (currentIndex + 1) % total
    : (currentIndex - 1 + total) % total

  return (
    <div
      className="relative w-full"
      style={{
        paddingRight: "1.5%",
        paddingBottom: "1.5%",
      }}
    >
      <div
        className="relative w-full"
        style={{ height: wrapperHeight || "auto" }}
      >
        {/* Back card */}
        <div
          style={{
            position: "absolute",
            top: "1.5%",
            left: "1.5%",
            width: "100%",
            height: "100%",
            zIndex: 1,
            filter: "brightness(0.96) drop-shadow(0 2px 4px rgba(0,0,0,0.08))",
          }}
        >
          {cards[underIndex]}
        </div>

        {/* Front card */}
        <div
          ref={frontRef}
          style={{
            position: "relative",
            top: 0,
            left: 0,
            width: "100%",
            zIndex: 2,
            // ease-in for exit — starts slow, snaps away fast
            transform: sliding
              ? slideDirection === "left"
                ? "translateX(-108%)"
                : "translateX(108%)"
              : "translateX(0%)",
            transition: sliding
              ? "transform 280ms cubic-bezier(0.4, 0, 1, 1)"
              : "transform 0ms",
            pointerEvents: sliding ? "none" : "auto",
            // Shadow pops on hover feel — always present, strong lift
            filter: "drop-shadow(0 10px 28px rgba(0,0,0,0.22))",
            willChange: "transform",
          }}
        >
          {cards[currentIndex]}
        </div>
      </div>
    </div>
  )
}