"use client"

import React, { useEffect, useState } from "react"
import useMobileDetection from "@/_utilities/useMobileDetection"
import { lowTrust } from "@/data/EFCU/ResearchFindings/lowTrust"
import Style from "./Style"

export default function LowTrust() {
  const { isMobile, isTablet, isDesktop1440px } = useMobileDetection()
  const section = lowTrust
  const frames = [
    "/EFCU/BankScale/LowTrust/Frame 1.png",
    "/EFCU/BankScale/LowTrust/Frame 2.png",
  ]
  const [frameIndex, setFrameIndex] = useState(0)

  useEffect(() => {
    setFrameIndex(0)

    if (frames.length <= 1) return

    let cancelled = false
    const frameDurationMs = 700

    const timer = setTimeout(() => {
      if (!cancelled) {
        setFrameIndex(frames.length - 1)
      }
    }, frameDurationMs)

    return () => {
      cancelled = true
      clearTimeout(timer)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (isMobile) {
    return (
      <Style>
        <div className="flex flex-col gap-[var(--spacing-s)]">
          <h2 className="h3 text-[var(--color-primary)]">
            {section.title}
          </h2>
          <p className="body text-[var(--color-primary)]">{section.intro}</p>
          </div>
          <img
            src={frames[frameIndex]}
            alt=""
            className="max-w-[200px] h-auto object-contain flex-shrink-0 mx-auto"
          />
      
          <p className="body text-[var(--color-primary)]">
            {section.subheading}
          </p>
       
      </Style>
    )
  }

  if (isTablet) {
    return (
      <Style>
        <div className="flex flex-col gap-[var(--spacing-s)]">
          <h2 className="h3 text-[var(--color-primary)]">
            {section.title}
          </h2>
          <p className="body text-[var(--color-primary)]">{section.intro}</p>
         
        </div>
        <div className="w-full flex flex-row gap-[var(--spacing-4xl)] items-center">
        <p className="body text-[var(--color-primary)]">
            {section.subheading}
          </p>
          <img
            src={frames[frameIndex]}
            alt=""
            className="max-w-[225px] h-auto object-contain flex-shrink-0"
          />
        </div>
      </Style>
    )
  }

  if (isDesktop1440px) {
    return (
      <Style>
          <div className="flex flex-col gap-[var(--spacing-s)]">
            <h2 className="h3 text-[var(--color-primary)]">
              {section.title}
            </h2>
            <p className="body text-[var(--color-primary)]">{section.intro}</p>
            </div>
            <div className="flex flex-row gap-[var(--spacing-4xl)] items-center w-full">
              <p className="body text-[var(--color-primary)]">
                {section.subheading}
              </p>
              <img
                src={frames[frameIndex]}
                alt=""
                className="max-w-[300px] h-auto object-contain flex-shrink-0"
              />
            </div>
      </Style>
    )
  }

  return (
    <Style>
     
        <div className="flex flex-col gap-[var(--spacing-s)]">
          <h2 className="h3 text-[var(--color-primary)]">
            {section.title}
          </h2>
          <p className="body text-[var(--color-primary)]">{section.intro}</p>
        </div>
        <div className="flex flex-row gap-[var(--spacing-4xl)] items-center w-full">
          <p className="body text-[var(--color-primary)]">
            {section.subheading}
          </p>
        <img
          src={frames[frameIndex]}
          alt=""
          className="max-w-[375px] h-auto object-contain flex-shrink-0"
        />
        </div>
    </Style>
  )
}
