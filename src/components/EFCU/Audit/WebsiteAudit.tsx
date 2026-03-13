"use client"

import React, { useState, useEffect } from "react"
import useMobileDetection from "@/_utilities/useMobileDetection"
import { websiteAudit } from "@/data/EFCU/Audit/websiteAudit"

const NAV_FRAMES = [
  "/EFCU/ClarifyingNavAnimation/Navigation/01FinalNavigation.png",
  "/EFCU/ClarifyingNavAnimation/Navigation/02FinalNavigation.png",
  "/EFCU/ClarifyingNavAnimation/Navigation/03FinalNavigation.png",
  "/EFCU/ClarifyingNavAnimation/Navigation/04FinalNavigation.png",
  "/EFCU/ClarifyingNavAnimation/Navigation/05FinalNavigation.png"
]

function NavigationFrameAnimation() {
  const [index, setIndex] = useState(0)
  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % NAV_FRAMES.length)
    }, 800)
    return () => clearInterval(id)
  }, [])
  return (
    <img
      src={NAV_FRAMES[index]}
      alt=""
      className="w-full h-full max-h-[350px] object-contain"
      aria-hidden
    />
  )
}

export default function WebsiteAudit() {
  const { isMobile, isTablet, isDesktop1440px } = useMobileDetection()
  const section = websiteAudit

  const heading = (
    <h3 className="h3 text-[var(--color-primary)]">
      {section.title}
    </h3>
  )

  if (isMobile) {
    return (
    <div className="w-full flex flex-col justify-between items-start gap-[var(--spacing-s)] py-[var(--spacing-2xl)]" >
        <div className="flex flex-col">
          {heading}
          <img
            src="/EFCU/ClarifyingNavAnimation/Arrow.png"
            alt="arrow pointing to nav animation"
            className="w-[50px] h-auto pl-[var(--spacing-s)] translate-x-[200px] rotate-[-80.16deg] scale-x-[-1] mt-[-15px] md:translate-x-0 md:scale-x-100"
          />
        </div>
        <div className="w-full flex flex-col  items-start">
          <div className="w-full flex justify-end z-10 ">
            <div className="w-full">
              <NavigationFrameAnimation />
            </div>
          </div>
          <div className="w-full flex justify-start mt-[-10px]">
            <video
              src="/EFCU/ClarifyingNavAnimation/HueristicEvaluation_small.mp4"
              className="w-full object-contain"
              muted
              playsInline
              autoPlay
              loop
              aria-label="Heuristic evaluation"
            />
          </div>
      
        </div>
      </div>
    )
  }

  if (isTablet) {
    return (
    <div className="w-full flex flex-col justify-between items-start gap-[var(--spacing-s)] p-[var(--spacing-2xl)] " >
        <div className="flex flex-col gap-[var(--spacing-s)]">
          {heading}
          <img
            src="/EFCU/ClarifyingNavAnimation/Arrow.png"
            alt="arrow pointing to nav animation"
            className="w-[75px] h-auto] "
          />
        </div>
        <div className="w-full flex flex-col  items-start">
          <div className="w-full flex justify-end z-10 mt-[-30px]">
            <div className="w-full max-w-[560px]">
              <NavigationFrameAnimation />
            </div>
          </div>
          <div className="w-full flex justify-start mt-[-10px]">
            <video
              src="/EFCU/ClarifyingNavAnimation/HueristicEvaluation_small.mp4"
              className="max-h-[300px] w-auto object-contain"
              muted
              playsInline
              autoPlay
              loop
              aria-label="Heuristic evaluation"
            />
          </div>
      
        </div>
      </div>
    )
  }

  if (isDesktop1440px) {
    return (
      <div className="w-full flex flex-col justify-between items-start gap-[var(--spacing-s)] p-[var(--spacing-8xl)] " >
        <div className="flex flex-col gap-[var(--spacing-s)] mb-[-30px]">
          {heading}
          <img
            src="/EFCU/ClarifyingNavAnimation/Arrow.png"
            alt="arrow pointing to nav animation"
            className="w-[150px] h-auto pl-[var(--spacing-xl)] scale-x-[-1] md:scale-x-100"
          />
        </div>
        <div className="w-full flex flex-col  items-start">
          <div className="w-full flex justify-end z-10 mt-[-60px]">
            <div className="w-full max-w-[560px]">
              <NavigationFrameAnimation />
            </div>
          </div>
          <div className="w-full flex justify-start mt-[-40px]">
            <video
              src="/EFCU/ClarifyingNavAnimation/HueristicEvaluation_small.mp4"
              className="max-h-[300px] w-auto object-contain"
              muted
              playsInline
              autoPlay
              loop
              aria-label="Heuristic evaluation"
            />
          </div>
      
        </div>
      </div>
    )
  }

  return (
    <div className="w-full flex flex-col justify-between items-start gap-[var(--spacing-s)] p-[var(--spacing-8xl)] " >
        <div className="flex flex-col gap-[var(--spacing-s)] mb-[-30px]">
          {heading}
          <img
            src="/EFCU/ClarifyingNavAnimation/Arrow.png"
            alt="arrow pointing to nav animation"
            className="w-[175px] h-auto pl-[var(--spacing-xl)] scale-x-[-1] md:scale-x-100"
          />
        </div>
        <div className="w-full flex flex-col  items-start">
          <div className="w-full flex justify-end z-10 mt-[-60px]">
            <div className="w-full max-w-[620px]">
              <NavigationFrameAnimation />
            </div>
          </div>
          <div className="w-full flex justify-start mt-[-50px]">
            <video
              src="/EFCU/ClarifyingNavAnimation/HueristicEvaluation.mp4"
              className="max-h-[400px] w-auto object-contain"
              muted
              playsInline
              autoPlay
              loop
              aria-label="Heuristic evaluation"
            />
          </div>
      
        </div>
      </div>
    )
}
