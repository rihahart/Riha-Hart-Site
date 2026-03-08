"use client"

import React, { useRef, useState, useEffect } from "react"
import useMobileDetection from "@/_utilities/useMobileDetection"

export default function DesignSolutions() {
  const { isMobile, isTablet, isDesktop1440px } = useMobileDetection()
  const containerRef = useRef<HTMLDivElement>(null)
  const [isInView, setIsInView] = useState(false)
  const [activeImage, setActiveImage] = useState<"card" | "scannable" | "simple" | null>(null)

  const handleImageClick = (id: "card" | "scannable" | "simple") => {
    setActiveImage((prev) => (prev === id ? null : id))
  }

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

  const animateClass = isInView
    ? "translate-y-0 opacity-100"
    : "translate-y-12 opacity-0"
  const transitionClass = "transition-all duration-700 ease-out"

  if (isMobile) {
    return (
      <div ref={containerRef} className="w-full flex px-[var(--spacing-m)] py-[var(--spacing-lg)] items-center justify-center">
      <div className={`flex flex-col w-full max-w-sm items-center justify-center gap-[var(--spacing-xl)] ${animateClass} ${transitionClass}`}>
        <div className="flex flex-col items-center justify-center gap-[var(--spacing-xl)]">
        <img
          src="/iklass/KeyInsights/Scannable.gif"
          alt="Scannable insight"
          className=" w-full max-w-full h-full object-cover -rotate-[1deg] shadow-[0_6.65px_6.65px_0_rgba(0,0,0,0.25)] rounded-[4px] transition-transform duration-300 ease-out cursor-pointer hover:scale-[1.05]"
        />
        <img
          src="/iklass/KeyInsights/SimpleLanguage.gif"
          alt="Simple language insight"
          className="w-full max-w-[175px] h-auto object-cover border-4 border-[var(--color-primary-inverse)] -rotate-[-1deg] shadow-[0_6.65px_6.65px_0_rgba(0,0,0,0.25)] rounded-[4px] transition-transform duration-300 ease-out cursor-pointer hover:scale-[1.05]"
        />
        
        </div>
        <img
          src="/iklass/KeyInsights/Card.png"
          alt="Key insight card"
          className="w-full max-w-full h-auto object-cover border-4 border-[var(--color-primary-inverse)] -rotate-[1.5deg] shadow-[0_6.65px_6.65px_0_rgba(0,0,0,0.25)] rounded-[4px] transition-transform duration-300 ease-out cursor-pointer hover:scale-[1.05]"
        />
      
      </div>
    </div>
    )
  }

  if (isTablet) {
    return (
      <div ref={containerRef} className="w-full flex px-[var(--spacing-m)] py-[var(--spacing-lg)] items-center justify-center">
      <div className={`flex flex-col w-full max-w-sm items-center justify-center gap-[var(--spacing-4xl)] ${animateClass} ${transitionClass}`}>
        <div className="flex w-full items-center justify-center gap-[var(--spacing-6xl)]">
        <img
          src="/iklass/KeyInsights/Scannable.gif"
          alt="Scannable insight"
          className=" w-full max-w-full h-full object-cover -rotate-[1deg] shadow-[0_6.65px_6.65px_0_rgba(0,0,0,0.25)] rounded-[4px] transition-transform duration-300 ease-out cursor-pointer hover:scale-[1.05]"
        />
        <img
          src="/iklass/KeyInsights/SimpleLanguage.gif"
          alt="Simple language insight"
          className="w-full max-w-[250px] h-auto object-cover border-4 border-[var(--color-primary-inverse)] -rotate-[-1deg] shadow-[0_6.65px_6.65px_0_rgba(0,0,0,0.25)] rounded-[4px] transition-transform duration-300 ease-out cursor-pointer hover:scale-[1.05]"
        />
        
        </div>
        <img
          src="/iklass/KeyInsights/Card.png"
          alt="Key insight card"
          className="w-full max-w-full h-auto object-cover border-4 border-[var(--color-primary-inverse)] -rotate-[1.5deg] shadow-[0_6.65px_6.65px_0_rgba(0,0,0,0.25)] rounded-[4px] transition-transform duration-300 ease-out cursor-pointer hover:scale-[1.05]"
        />
      
      </div>
    </div>
    )
  }

  if (isDesktop1440px) {
    return (
      <div ref={containerRef} className="w-full flex p-[var(--spacing-xl)]   mx-auto items-center justify-center">
      <div className={`flex w-full items-stretch justify-center items-center gap-[var(--spacing-2xl)] ${animateClass} ${transitionClass}`}>
      <img
          src="/iklass/KeyInsights/SimpleLanguage.gif"
          alt="Simple language insight"
          className="flex-1 min-w-0 w-0 max-w-[200px] h-full object-cover translate-y-2 border-4 border-[var(--color-primary-inverse)] -rotate-[.3deg] shadow-[0_6.65px_6.65px_0_rgba(0,0,0,0.25)] rounded-[4px] transition-transform duration-300 ease-out hover:scale-[1.05]"
        />
        <img
          src="/iklass/KeyInsights/Card.png"
          alt="Key insight card"
          className="flex-[1.4] min-w-0 w-0 max-w-[320px] h-auto object-cover border-4 border-[var(--color-primary-inverse)] -rotate-[.1deg] shadow-[0_6.65px_6.65px_0_rgba(0,0,0,0.25)] rounded-[4px] transition-transform duration-300 ease-out hover:scale-[1.05]"
        />
      
      
        <img
          src="/iklass/KeyInsights/Scannable.gif"
          alt="Scannable insight"
          className="flex-[2.3] min-w-0 w-0 max-w-[500px] h-full object-cover translate-y-1 transition-transform duration-300 -rotate-[-.2deg] shadow-[0_6.65px_6.65px_0_rgba(0,0,0,0.25)] rounded-[4px] ease-out hover:scale-[1.05]"
        />
      </div>
    </div>
    )
  }

  return (
    <div ref={containerRef} className="w-full flex p-[var(--spacing-xl)]   mx-auto items-center justify-center">
      <div className={`flex w-full items-stretch justify-center items-center gap-[var(--spacing-9xl)] ${animateClass} ${transitionClass}`}>
      <img
          src="/iklass/KeyInsights/SimpleLanguage.gif"
          alt="Simple language insight"
          className="flex-1 min-w-0 w-0 max-w-[300px] h-full object-cover translate-y-2 border-4 border-[var(--color-primary-inverse)] -rotate-[.3deg] shadow-[0_6.65px_6.65px_0_rgba(0,0,0,0.25)] rounded-[4px] transition-transform duration-300 ease-out hover:scale-[1.05]"
        />
        <img
          src="/iklass/KeyInsights/Card.png"
          alt="Key insight card"
          className="flex-[1.4] min-w-0 w-0 max-w-[420px] h-auto object-cover border-4 border-[var(--color-primary-inverse)] -rotate-[.1deg] shadow-[0_6.65px_6.65px_0_rgba(0,0,0,0.25)] rounded-[4px] transition-transform duration-300 ease-out hover:scale-[1.05]"
        />
      
      
        <img
          src="/iklass/KeyInsights/Scannable.gif"
          alt="Scannable insight"
          className="flex-[2.3] min-w-0 w-0 max-w-[700px] h-full object-cover translate-y-1 transition-transform duration-300 -rotate-[-.2deg] shadow-[0_6.65px_6.65px_0_rgba(0,0,0,0.25)] rounded-[4px] ease-out hover:scale-[1.05]"
        />
      </div>
    </div>
  )
}
