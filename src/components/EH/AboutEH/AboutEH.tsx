"use client"

import React from "react"
import Image from "next/image"
import useMobileDetection from "@/_utilities/useMobileDetection"
import { aboutEH } from "@/data/EH/aboutEH"


function Section({
  section,
  logoSize = 24,
  logoGap = "var(--spacing-xs)",
}: {
  section: typeof aboutEH.sections[0]
  logoSize?: number
  logoGap?: string
}) {
  return (
    <div className="flex flex-col gap-[var(--spacing-xs)] w-full">
      <div className="flex flex-row items-center" style={{ gap: logoGap }}>
        <Image
          src={section.logo}
          alt={section.title}
          width={logoSize}
          height={logoSize}
          className={`flex-shrink-0${section.logo.includes("EHPointLogo") ? " rotate-[-40deg]" : ""}`}
          style={{ width: logoSize, height: logoSize }}
        />
        <h3 className="h3"  style={{ color: section.color }  }>
          {section.title}
        </h3>
      </div>
      <div
        className="flex flex-col gap-[var(--spacing-xs)]"
        style={{ paddingLeft: `calc(${logoSize}px + ${logoGap})` }}
      >
        {section.points.map((point, i) => (
          <p key={i} className="body text-[var(--color-primary-inverse)]">
            {point}
          </p>
        ))}
      </div>
    </div>
  )
}

function SectionList({ logoSize, logoGap }: { logoSize?: number; logoGap?: string }) {
  return (
    <div className="flex flex-col gap-[var(--spacing-xl)] w-full">
      {aboutEH.sections.map((section, i) => (
        <Section key={i} section={section} logoSize={logoSize} logoGap={logoGap} />
      ))}
    </div>
  )
}

export default function AboutEH() {
  const { isMobile, isTablet, isDesktop1440px } = useMobileDetection()

  if (isMobile) {
    return (
      <div className="w-full flex flex-col gap-[var(--spacing-3xl)] items-center py-[var(--spacing-xl)]">
          <Image
          src="/EarthHero/EHScreens/iPhone.svg"
          alt="EarthHero app on iPhone"
          width={275}
          height={575}
          className="max-w-[275px] h-auto object-contain"
        />
        <h2 className="h2 text-[var(--color-primary-inverse)]">{aboutEH.heading}</h2>
      
        <SectionList logoSize={20} />
      </div>
    )
  }

  if (isTablet) {
    return (
      <div className="w-full flex flex-col gap-[var(--spacing-3xl)] p-[var(--spacing-xl)]">
         <div className="flex justify-center">
        <Image
          src="/EarthHero/EHScreens/iPhone.svg"
          alt="EarthHero app on iPhone"
          width={275}
          height={575}
          className="max-w-[275px] h-auto object-contain"
        />
        </div>
        <h2 className="h2 text-[var(--color-primary-inverse)]">{aboutEH.heading}</h2>
       
        <div className="px-[var(--spacing-3xl)] w-full">
          <SectionList logoSize={24} logoGap="var(--spacing-xl)" />
        </div>
      </div>
    )
  }

  if (isDesktop1440px) {
    return (
      <div className="w-full flex flex-row items-start justify-between p-[var(--spacing-xl)]">
        <div className="flex flex-col items-start gap-[var(--spacing-3xl)] w-[45%] min-w-0">
          <h2 className="h2 text-[var(--color-primary-inverse)]">{aboutEH.heading}</h2>
          <Image
            src="/EarthHero/EHScreens/iPhone.svg"
            alt="EarthHero app on iPhone"
            width={275}
            height={575}
            className="max-w-[275px] h-auto object-contain"
          />
        </div>
        <div className="flex flex-col items-end justify-end gap-[var(--spacing-xl)] w-[40%] min-w-0 py-[var(--spacing-m)]">
          <SectionList logoSize={32} />
        </div>
      </div>
    )
  }

  // Large Desktop
  return (
    <div className="w-full flex flex-row items-stretch justify-between  p-[var(--spacing-2xl)]">
      <div className="flex flex-col items-start gap-[var(--spacing-3xl)] w-[45%] min-w-0">
        <h2 className="h2 text-[var(--color-primary-inverse)]">{aboutEH.heading}</h2>
        <Image
          src="/EarthHero/EHScreens/iPhone.svg"
          alt="EarthHero app on iPhone"
          width={300}
          height={600}
          className="max-w-[300px] h-auto object-contain"
        />
      </div>
      <div className="flex flex-col items-end justify-end  gap-[var(--spacing-xl)] w-[40%] min-w-0 py-[var(--spacing-sm)]">
        <SectionList logoSize={40} />
      </div>
    </div>
  )
}
