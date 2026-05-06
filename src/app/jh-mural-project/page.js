"use client"

import React, { useEffect, useRef } from "react"
import { useRouter } from "next/navigation"
import gsap from "gsap"
import useMobileDetection from "@/_utilities/useMobileDetection"
import IntroToJHMural from "@/components/JHMural/IntroToJHMural"
import JHMuralTabs from "@/components/JHMural/JHMuralTabs"

export default function JHMuralProject() {
  const { isMobile, isTablet, isDesktop1440px } = useMobileDetection()
  const router = useRouter()
  const transitioning = useRef(false)

  useEffect(() => { window.dispatchEvent(new CustomEvent("case-study-ready")) }, [])

  useEffect(() => {
    router.prefetch("/everest-federal-credit-union")

    const trigger = () => {
      if (transitioning.current) return
      const atBottom = window.innerHeight + window.scrollY >= document.body.scrollHeight - 10
      if (!atBottom) return
      transitioning.current = true

      const overlay = document.createElement("div")
      overlay.style.cssText = `
        position: fixed;
        inset: 0;
        z-index: 9999;
        pointer-events: none;
        background: #0a0a0a;
        will-change: transform;
        border-radius: 50%;
      `
      document.body.appendChild(overlay)

      gsap.set(overlay, { scale: 0, rotation: 0, xPercent: -50, yPercent: -50, left: "50%", top: "50%", width: "100vmax", height: "100vmax", inset: "unset" })

      gsap.to(overlay, {
        scale: 3,
        rotation: 540,
        borderRadius: "0%",
        duration: 0.85,
        ease: "power2.inOut",
        onComplete: () => {
          router.push("/everest-federal-credit-union")
          overlay.remove()
        }
      })
    }

    const onWheel = (e) => { if (e.deltaY > 0) trigger() }

    let touchStartY = 0
    const onTouchStart = (e) => { touchStartY = e.touches[0].clientY }
    const onTouchEnd = (e) => { if (touchStartY - e.changedTouches[0].clientY > 30) trigger() }

    window.addEventListener("wheel", onWheel)
    window.addEventListener("touchstart", onTouchStart)
    window.addEventListener("touchend", onTouchEnd)
    return () => {
      window.removeEventListener("wheel", onWheel)
      window.removeEventListener("touchstart", onTouchStart)
      window.removeEventListener("touchend", onTouchEnd)
    }
  }, [router])  

  // Mobile (≤768px)
  if (isMobile) {
  return (
    <div className="flex flex-col items-center bg-[var(--color-primary-inverse)] w-full mx-auto">

      {/* div with margins starts here*/}
      <div className="flex flex-col items-center w-full p-[var(--spacing-lg)] pb-[var(--spacing-4xl)] gap-[var(--spacing-4xl)] mx-auto">
          <img
                   src="/Jhmural/JHMuralProject.jpg"
                   alt="Mural on 82nd Street"
                   className="w-full max-w-full h-auto object-contain"
                 />
             <IntroToJHMural />
         <JHMuralTabs />
      </div>

      {/* this div with margins ends here*/}
      
    </div>
  )
  }

  // Tablet (769px - 1024px)
  if (isTablet) {
    return (
      <div className="flex flex-col bg-[var(--color-primary-inverse)] items-center w-full mx-auto">

        {/* div with margins starts here*/}
        <div className="flex flex-col items-center w-full p-[var(--spacing-2xl)] pb-[var(--spacing-4xl)] gap-[var(--spacing-6xl)] mx-auto">
             <img
                        src="/Jhmural/JHMuralProject.jpg"
                        alt="Mural on 82nd Street"
                        className="w-full max-w-full h-auto object-contain"
                      />
           <IntroToJHMural />
            <JHMuralTabs />
       
        </div>

        {/* this div with margins ends here*/}
      </div>
    )
  }

  // Desktop 1440px (1025px - 1440px)
  if (isDesktop1440px) {
    return (  
      <div className="flex flex-col bg-[var(--color-primary-inverse)] items-center w-full mx-auto">

        {/* div with margins starts here*/}
        <div className="flex flex-col w-full p-[var(--spacing-3xl)] pb-[var(--spacing-4xl)] gap-[var(--spacing-8xl)] mx-auto">
            <img
                       src="/Jhmural/JHMuralProject.jpg"
                       alt="Mural on 82nd Street"
                       className="w-full max-w-full h-auto object-contain"
                     />
             <IntroToJHMural />
           <JHMuralTabs />
       
        </div>

        {/* this div with margins ends here*/}
      </div>
    )
  }

  // Large Desktop (>1440px)  
  return (
    <div className="flex flex-col bg-[var(--color-primary-inverse)] items-center w-full mx-auto">

      {/* div with margins starts here*/}

      <div className="flex flex-col items-center max-w-[1600px] p-[var(--spacing-3xl)] pb-[var(--spacing-4xl)] gap-[var(--spacing-8xl)] mx-auto">
          <img
                   src="/Jhmural/JHMuralProject.jpg"
                   alt="Mural on 82nd Street"
                   className="w-full max-w-full h-auto object-contain"
                 />
          <IntroToJHMural />
        <JHMuralTabs />
      </div>
      {/* this div with margins ends here*/}

    </div>
  )   
}