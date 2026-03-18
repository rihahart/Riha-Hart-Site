"use client"

import { useRef, useState, useEffect } from "react"
import useMobileDetection from "@/_utilities/useMobileDetection"
import { systemChangeData } from "@/data/EH/FinalResult/SystemChange"

const { heading, insight1, insight2 } = systemChangeData

const Card = () => (
  <div
    className="flex w-full h-full border border-[var(--neutral-300)] shadow-[0_6.65px_6.65px_0_rgba(0,0,0,0.25)] rounded-[4px]"
    style={{ overflow: "hidden" }}
  >
    {/* Left panel */}
    <div
      className="flex items-center justify-center p-[var(--spacing-xl)]"
      style={{ flex: "1", backgroundColor: "#2E8FB6" }}
    >
      <h3 className="h3 text-[var(--color-secondary-inverse)]">{heading}</h3>
    </div>

    {/* Divider */}
    <div style={{ width: "1px", backgroundColor: "var(--neutral-300)", flexShrink: 0 }} />

    {/* Right panel */}
    <div
      className="flex flex-col gap-[var(--spacing-xl)] p-[var(--spacing-xl)]"
      style={{ flex: "1.4" }}
    >
      <div className="flex flex-col gap-[var(--spacing-xs)]">
        <p className="body text-[var(--color-primary)]">
          <strong style={{ color: "#2E8FB6" }}>{insight1.title}</strong> {insight1.body}
        </p>
      </div>
      <div className="flex flex-col gap-[var(--spacing-xs)]">
        <p className="body text-[var(--color-primary)]">
          <strong style={{ color: "#2E8FB6" }}>{insight2.title}</strong> {insight2.body}
        </p>
      </div>
    </div>
  </div>
)

const MobileCard = () => (
  <div
    className="flex flex-col w-full border border-[var(--neutral-300)] shadow-[0_6.65px_6.65px_0_rgba(0,0,0,0.25)] rounded-[4px]"
    style={{ overflow: "hidden" }}
  >
    <div
      className="flex items-center justify-center p-[var(--spacing-xl)]"
      style={{ backgroundColor: "#2E8FB6" }}
    >
      <h3 className="h3 text-[var(--color-secondary-inverse)]">{heading}</h3>
    </div>
    <div style={{ height: "1px", backgroundColor: "var(--neutral-300)" }} />
    <div className="flex flex-col gap-[var(--spacing-xl)] p-[var(--spacing-xl)]">
      <p className="body text-[var(--color-primary)]">
        <strong style={{ color: "#2E8FB6" }}>{insight1.title}</strong> {insight1.body}
      </p>
      <p className="body text-[var(--color-primary)]">
        <strong style={{ color: "#2E8FB6" }}>{insight2.title}</strong> {insight2.body}
      </p>
    </div>
  </div>
)

export default function SystemChange() {
  const { isMobile, isTablet, isDesktop1440px } = useMobileDetection()
  const containerRef = useRef<HTMLDivElement>(null)
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    const el = containerRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries
        setIsInView(entry.isIntersecting)
      },
      { threshold: 0.15, rootMargin: "0px 0px -50px 0px" }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const animateClass = isInView ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
  const transitionClass = "transition-all duration-700 ease-out"

  if (isMobile) {
    return (
      <div ref={containerRef} className="w-full flex px-[var(--spacing-m)] py-[var(--spacing-lg)] items-center justify-center">
        <div className={`flex flex-col w-full items-center justify-center gap-[var(--spacing-xl)] ${animateClass} ${transitionClass}`}>
          <MobileCard />
        </div>
      </div>
    )
  }

  if (isTablet) {
    return (
      <div ref={containerRef} className="w-full flex px-[var(--spacing-m)] py-[var(--spacing-lg)] items-center justify-center">
        <div className={`flex flex-col w-full items-center justify-center gap-[var(--spacing-4xl)] ${animateClass} ${transitionClass}`}>
          <Card />
        </div>
      </div>
    )
  }

  if (isDesktop1440px) {
    return (
      <div ref={containerRef} className="w-full flex p-[var(--spacing-xl)] mx-auto items-center justify-center">
        <div className={`flex w-full items-stretch justify-center gap-[var(--spacing-2xl)] ${animateClass} ${transitionClass}`}>
          <Card />
        </div>
      </div>
    )
  }

  return (
    <div ref={containerRef} className="w-full flex p-[var(--spacing-xl)] mx-auto items-center justify-center">
      <div className={`flex w-full items-stretch justify-center gap-[var(--spacing-9xl)] ${animateClass} ${transitionClass}`}>
        <Card />
      </div>
    </div>
  )
}
