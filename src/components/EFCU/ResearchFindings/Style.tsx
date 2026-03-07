"use client"

import React from "react"
import useMobileDetection from "@/_utilities/useMobileDetection"

type Props = { children: React.ReactNode }

// Section layout per screen size – edit gap/layout here
const sectionClass = {
  mobile:
    "w-full flex flex-col gap-[var(--spacing-xl)] p-[var(--spacing-lg)] items-start bg-[#FBF7FF] shadow-md",
  tablet:
    "w-full flex flex-col gap-[var(--spacing-xl)] px-[var(--spacing-xl)] py-[var(--spacing-xl)] items-start bg-[#FBF7FF] shadow-md",
  desktop1440:
    "w-[full] mx-auto flex flex-col gap-[var(--spacing-s)] p-[var(--spacing-lg)]  items-start bg-[#FBF7FF] shadow-md",
  large:
    "w-[full] mx-auto flex flex-col gap-[var(--spacing-s)] p-[var(--spacing-lg)] items-start bg-[#FBF7FF] shadow-md"
} as const

export default function Style({ children }: Props) {
  const { isMobile, isTablet, isDesktop1440px } = useMobileDetection()

  const className =
    isMobile
      ? sectionClass.mobile
      : isTablet
        ? sectionClass.tablet
        : isDesktop1440px
          ? sectionClass.desktop1440
          : sectionClass.large

  return <section className={className}>{children}</section>
}
