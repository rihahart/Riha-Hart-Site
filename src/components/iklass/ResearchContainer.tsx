"use client"

import React, { useRef, useState, useEffect } from "react"
import useMobileDetection from "@/_utilities/useMobileDetection"

export default function ResearchContainer() {
  const { isMobile, isTablet, isDesktop1440px } = useMobileDetection()
  const containerRef = useRef<HTMLDivElement>(null)
  const [isInView, setIsInView] = useState(false)
  const [activeImage, setActiveImage] = useState<"user" | "chatbox" | "employees" | null>(null)

  const handleImageClick = (id: "user" | "chatbox" | "employees") => {
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
      <div
        ref={containerRef}
        className="w-full flex px-[var(--spacing-m)] py-[var(--spacing-lg)] items-center justify-center rounded-[8px] bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url(/iklass/Research/iklassBackground.png)" }}
      >
      <div className={`flex w-full flex-col items-center justify-center p-[var(--spacing-2xl)] gap-[var(--spacing-s)] ${animateClass} ${transitionClass}`}>
        <img
          src="/iklass/Research/UserResearch.png"
          alt=""
          role="button"
          tabIndex={0}
          onClick={() => handleImageClick("user")}
          onKeyDown={(e) => e.key === "Enter" && handleImageClick("user")}
          className={`w-full max-w-full h-auto object-cover border-4 border-[var(--color-primary-inverse)] -rotate-[-2deg] shadow-[0_6.65px_6.65px_0_rgba(0,0,0,0.25)] rounded-[4px] transition-transform duration-300 ease-out cursor-pointer hover:scale-[1.05] ${activeImage === "user" ? "scale-[1.05]" : ""}`}
          aria-hidden
        />
        <img
          src="/iklass/Research/chatbox.png"
          alt=""
          role="button"
          tabIndex={0}
          onClick={() => handleImageClick("chatbox")}
          onKeyDown={(e) => e.key === "Enter" && handleImageClick("chatbox")}
          className={`w-full max-w-full h-auto object-cover transition-transform duration-300 ease-out cursor-pointer hover:scale-[1.05] ${activeImage === "chatbox" ? "scale-[1.05]" : ""}`}
          aria-hidden
        />
        <div
          role="button"
          tabIndex={0}
          onClick={() => handleImageClick("employees")}
          onKeyDown={(e) => e.key === "Enter" && handleImageClick("employees")}
          className={`w-full aspect-[4/3] relative overflow-hidden -rotate-[4deg] border-4 border-[var(--color-primary-inverse)] shadow-[0_6.65px_6.65px_0_rgba(0,0,0,0.25)] rounded-[4px] transition-transform duration-300 ease-out cursor-pointer hover:scale-[1.05] ${activeImage === "employees" ? "scale-[1.05]" : ""}`}
        >
          <img
            src="/iklass/Research/EmployeesResearch.png"
            alt=""
            className="absolute inset-0 w-full h-full object-cover"
            aria-hidden
          />
        </div>
      </div>

    </div>
    )
  }

  if (isTablet) {
    return (
      <div
        ref={containerRef}
        className="w-full flex px-[var(--spacing-4xl)] py-[var(--spacing-2xl)] items-center justify-center rounded-[8px] bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url(/iklass/Research/iklassBackground.png)" }}
      >
      <div className={`flex w-full flex-col items-center justify-center p-[var(--spacing-2xl)] gap-[var(--spacing-s)] ${animateClass} ${transitionClass}`}>
        <img
          src="/iklass/Research/UserResearch.png"
          alt=""
          role="button"
          tabIndex={0}
          onClick={() => handleImageClick("user")}
          onKeyDown={(e) => e.key === "Enter" && handleImageClick("user")}
          className={`w-full max-w-full h-auto object-cover border-4 border-[var(--color-primary-inverse)] -rotate-[-2deg] shadow-[0_6.65px_6.65px_0_rgba(0,0,0,0.25)] rounded-[4px] transition-transform duration-300 ease-out cursor-pointer hover:scale-[1.05] ${activeImage === "user" ? "scale-[1.05]" : ""}`}
          aria-hidden
        />
        <img
          src="/iklass/Research/chatbox.png"
          alt=""
          role="button"
          tabIndex={0}
          onClick={() => handleImageClick("chatbox")}
          onKeyDown={(e) => e.key === "Enter" && handleImageClick("chatbox")}
          className={`w-full max-w-full h-auto object-cover transition-transform duration-300 ease-out cursor-pointer hover:scale-[1.05] ${activeImage === "chatbox" ? "scale-[1.05]" : ""}`}
          aria-hidden
        />
        <div
          role="button"
          tabIndex={0}
          onClick={() => handleImageClick("employees")}
          onKeyDown={(e) => e.key === "Enter" && handleImageClick("employees")}
          className={`w-full aspect-[4/3] relative overflow-hidden -rotate-[4deg] border-4 border-[var(--color-primary-inverse)] shadow-[0_6.65px_6.65px_0_rgba(0,0,0,0.25)] rounded-[4px] transition-transform duration-300 ease-out cursor-pointer hover:scale-[1.05] ${activeImage === "employees" ? "scale-[1.05]" : ""}`}
        >
          <img
            src="/iklass/Research/EmployeesResearch.png"
            alt=""
            className="absolute inset-0 w-full h-full object-cover"
            aria-hidden
          />
        </div>
      </div>

    </div>
    )
  }

  if (isDesktop1440px) {
    return (
      <div
        ref={containerRef}
        className="w-full flex px-[var(--spacing-m)] py-[var(--spacing-2xl)] items-center justify-center rounded-[6px] bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url(/iklass/Research/iklassBackground.png)" }}
      >
      <div className={`flex w-full items-stretch justify-between gap-[var(--spacing-s)] min-w-0 ${animateClass} ${transitionClass}`}>
        <img
          src="/iklass/Research/UserResearch.png"
          alt=""
          className="flex-1 min-w-0 w-0 h-auto object-cover border-4 border-[var(--color-primary-inverse)] -rotate-[-2deg] shadow-[0_6.65px_6.65px_0_rgba(0,0,0,0.25)] rounded-[4px] transition-transform duration-300 ease-out hover:scale-[1.05]"
          aria-hidden
        />
        <img
          src="/iklass/Research/chatbox.png"
          alt=""
          className="flex-1 min-w-0 w-0 h-auto object-cover transition-transform duration-300 ease-out hover:scale-[1.05]"
          aria-hidden
        />
        <img
          src="/iklass/Research/EmployeesResearch.png"
          alt=""
          className="flex-1 min-w-0 w-0 h-auto object-cover border-4 border-[var(--color-primary-inverse)] -rotate-[4deg] shadow-[0_6.65px_6.65px_0_rgba(0,0,0,0.25)] rounded-[4px] transition-transform duration-300 ease-out hover:scale-[1.05]"
          aria-hidden
        />
      </div>

    </div>
    )
  }

  return (
    <div
      ref={containerRef}
      className="w-full flex px-[var(--spacing-m)] py-[var(--spacing-2xl)] items-center justify-center rounded-[8px] bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url(/iklass/Research/iklassBackground.png)" }}
    >
      <div className={`flex w-full items-stretch justify-between gap-[var(--spacing-s)] min-w-0 ${animateClass} ${transitionClass}`}>
        <img
          src="/iklass/Research/UserResearch.png"
          alt=""
          className="flex-1 min-w-0 w-0 h-auto object-cover border-4 border-[var(--color-primary-inverse)] -rotate-[-2deg] shadow-[0_6.65px_6.65px_0_rgba(0,0,0,0.25)] rounded-[4px] transition-transform duration-300 ease-out hover:scale-[1.05]"
          aria-hidden
        />
        <img
          src="/iklass/Research/chatbox.png"
          alt=""
          className="flex-1 min-w-0 w-0 h-auto object-cover transition-transform duration-300 ease-out hover:scale-[1.05]"
          aria-hidden
        />
        <img
          src="/iklass/Research/EmployeesResearch.png"
          alt=""
          className="flex-1 min-w-0 w-0 h-auto object-cover border-4 border-[var(--color-primary-inverse)] -rotate-[4deg] shadow-[0_6.65px_6.65px_0_rgba(0,0,0,0.25)] rounded-[4px] transition-transform duration-300 ease-out hover:scale-[1.05]"
          aria-hidden
        />
      </div>

    </div>

  )
}
