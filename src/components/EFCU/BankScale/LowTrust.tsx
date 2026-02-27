"use client"

import React from "react"
import useMobileDetection from "@/_utilities/useMobileDetection"
import { lowTrust } from "@/data/EFCU/researchData/lowTrust"
import Style from "./Style"

export default function LowTrust() {
  const { isMobile, isTablet, isDesktop1440px } = useMobileDetection()
  const section = lowTrust

  if (isMobile) {
    return (
      <Style>
        <div className="flex flex-col gap-[var(--spacing-m)]">
          <h2 className="h3 text-[var(--color-primary)]">
            {section.title}
          </h2>
          <p className="body text-[var(--color-primary)]">{section.intro}</p>
  
          <img
            src={section.image}
            alt=""
            className="max-w-[200px] h-auto object-contain flex-shrink-0 mx-auto"
          />
      
          <p className="body text-[var(--color-primary)]">
            {section.subheading}
          </p>
        </div>
       
      </Style>
    )
  }

  if (isTablet) {
    return (
      <Style>
        <div className="flex flex-col gap-[var(--spacing-m)]">
          <h2 className="h3 text-[var(--color-primary)]">
            {section.title}
          </h2>
          <p className="body text-[var(--color-primary)]">{section.intro}</p>
         
        </div>
        <div className="w-full flex flex-row gap-[var(--spacing-2xl)] px-[var(--spacing-4xl)] items-center">
        <p className="body text-[var(--color-primary)]">
            {section.subheading}
          </p>
          <img
            src={section.image}
            alt=""
            className="max-w-[275px] h-auto object-contain flex-shrink-0"
          />
        </div>
      </Style>
    )
  }

  if (isDesktop1440px) {
    return (
      <Style>
          <div className="flex flex-col gap-[var(--spacing-xl)] flex-1 min-w-0">
            <h2 className="h3 text-[var(--color-primary)]">
              {section.title}
            </h2>
            <p className="body text-[var(--color-primary)]">{section.intro}</p>
            </div>
            <div className="flex flex-row gap-[var(--spacing-8xl)] items-center px-[var(--spacing-4xl)] w-full">
              <p className="body text-[var(--color-primary)]">
                {section.subheading}
              </p>
              <img
                src={section.image}
                alt=""
                className="max-w-[325px] h-auto object-contain flex-shrink-0"
              />
            </div>
      </Style>
    )
  }

  return (
    <Style>
     
        <div className="flex flex-col gap-[var(--spacing-xl)] flex-1 min-w-0">
          <h2 className="h3 text-[var(--color-primary)]">
            {section.title}
          </h2>
          <p className="body text-[var(--color-primary)]">{section.intro}</p>
        </div>
        <div className="flex flex-row gap-[var(--spacing-12xl)] items-center px-[var(--spacing-6xl)] w-full">
          <p className="body text-[var(--color-primary)]">
            {section.subheading}
          </p>
        <img
          src={section.image}
          alt=""
          className="max-w-[375px] h-auto object-contain flex-shrink-0"
        />
        </div>
    </Style>
  )
}
