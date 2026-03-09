"use client"

import React from "react"
import { useRouter } from "next/navigation"
import useMobileDetection from "@/_utilities/useMobileDetection"
import Button from "@/components/Button"

interface CaseStudy {
  title: string
  route: string
  buttonText?: string
}

const caseStudies: CaseStudy[] = [
  {
    title: "Everest Federal Credit Union: Design and Tech Lead",
    route: "/everest-federal-credit-union"
  },
  {
    title: "iKlass: Product Design Lead",
    route: "/iklass"
  },
  {
    title: "EarthHero: Product Design",
    route: "/earthhero"
  },
  {
    title: "JH Mural Project: Founder and Creative Director",
    route: "/jh-mural-project",
    buttonText: "Coming soon"
  }
]

export default function HomeNav() {
  const router = useRouter()
  const { isMobile, isTablet, isDesktop1440px } = useMobileDetection()

  // Mobile (≤768px)
  if (isMobile) {
    return (
      <div className="flex flex-col gap-[var(--spacing-xl)] self-stretch">
        {caseStudies.map((study, index) => (
          <div
            key={index}
            className="flex flex-col items-center self-stretch gap-[var(--spacing-m)] p-[var(--spacing-m)] border-b border-b-[var(--color-secondary)]"
          >
            <div className="body">
              {study.title}
            </div>
            <Button
              text={study.buttonText || "View case study"}
              onClick={() => router.push(study.route)}
              variant="link"
              size="small"
            />
          </div>
        ))}
      </div>
    )
  }

  // Tablet (769px - 1024px)
  if (isTablet) {
    return (
      <div className="flex flex-col gap-[var(--spacing-m)] py-[var(--spacing-8xl)] self-stretch">
        {caseStudies.map((study, index) => (
          <div
            key={index}
            className="flex flex-row items-center justify-between self-stretch p-[var(--spacing-xs)] border-b-2 border-b-[var(--color-secondary)]"
          >
            <div className="body">
              {study.title}
            </div>
            <Button
              text={study.buttonText || "View case study"}
              onClick={() => router.push(study.route)}
              variant="link"
              size="small"
            />
          </div>
        ))}
      </div>
    )
  }

  // Desktop 1440px (1025px - 1440px)
  if (isDesktop1440px) {
    return (
      <div className="flex flex-col gap-[var(--spacing-m)] py-[var(--spacing-8xl)] self-stretch">
        {caseStudies.map((study, index) => (
          <div
            key={index}
            className="flex flex-row items-center justify-between self-stretch p-[var(--spacing-xs)] border-b-2 border-b-[var(--color-secondary)]"
          >
            <div className="body">
              {study.title}
            </div>
            <Button
              text={study.buttonText || "View case study"}
              onClick={() => router.push(study.route)}
              variant="link"
              size="small"
            />
          </div>
        ))}
      </div>
    )
  }

  // Large Desktop (>1440px)
  return (
    <div className="flex flex-col gap-[var(--spacing-m)] py-[var(--spacing-12xl)] self-stretch">
      {caseStudies.map((study, index) => (
        <div
          key={index}
          className="flex flex-row items-center justify-between self-stretch p-[var(--spacing-xs)] border-b-2 border-b-[var(--color-secondary)]"
        >
          <div className="body">
            {study.title}
          </div>
          <Button
            text={study.buttonText || "View case study"}
            onClick={() => router.push(study.route)}
            variant="link"
            size="small"
          />
        </div>
      ))}
    </div>
  )
}
