"use client"

import React, { useEffect, useRef, useState } from "react"
import gsap from "gsap"
import useMobileDetection from "@/_utilities/useMobileDetection"
import { bioData } from "@/data/bioData"
import RihaPhotos from "@/components/Me/RihaPhotos"
import JumpingAnimation from "@/components/HamburgerNav/JumpingAnimation"
import { Button } from "@/components/Buttons"

const handleEmailClick = () => {
  window.location.href = "mailto:riha.hart@gmail.com"
}

const handleLinkedInClick = () => {
  window.open("https://www.linkedin.com/in/riha-hart/", "_blank")
}

const handleInstagramClick = () => {
  window.open("https://www.instagram.com/riha_hart/", "_blank")
}

const darkBg = "radial-gradient(ellipse 100% 70% at 50% 100%, rgba(120,0,20,0.6) 0%, transparent 90%), linear-gradient(180deg, #0a0a0a 0%, #1a0007 60%, #2d0010 100%)"
const noiseBg = `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E"), ${darkBg}`

const glowStyle = {
  textShadow: `
    0 0 12px rgba(253,247,230,0.55),
    0 0 28px rgba(253,247,230,0.25),
    0 0 60px rgba(220,40,40,0.35),
    0 0 90px rgba(180,0,30,0.25)
  `
}

function renderChars(text) {
  const words = text.split(" ")
  return words.map((word, wi) => (
    <span key={wi} style={{ display: "inline-block", whiteSpace: "nowrap" }}>
      {word.split("").map((ch, ci) => (
        <span key={ci} className="me-char" style={{ display: "inline-block" }}>{ch}</span>
      ))}
      {wi < words.length - 1 && (
        <span className="me-char" style={{ display: "inline-block" }}>&nbsp;</span>
      )}
    </span>
  ))
}

export default function Bio() {
  const { isMobile, isTablet, isDesktop1440px } = useMobileDetection()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const isNoise = !isMobile && !isTablet
    document.body.style.background = isNoise ? noiseBg : darkBg
    document.body.style.backgroundBlendMode = isNoise ? "overlay, normal, normal" : ""
    document.body.style.backgroundSize = isNoise ? "200px 200px, 100% 100%, 100% 100%" : ""
    return () => {
      document.body.style.background = ""
      document.body.style.backgroundBlendMode = ""
      document.body.style.backgroundSize = ""
    }
  }, [isMobile, isTablet])

  useEffect(() => {
    if (!mounted) return
    const headingChars = Array.from(document.querySelectorAll("h2 .me-char"))
    const paras = Array.from(document.querySelectorAll(".me-para"))
    if (!headingChars.length && !paras.length) return

    const tl = gsap.timeline({ delay: 0.05 })

    if (headingChars.length) {
      tl.fromTo(
        headingChars,
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, ease: "power3.out", stagger: 0.012 }
      )
    }

    if (paras.length) {
      tl.fromTo(
        paras,
        { y: 0, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.04, ease: "power2.out" },
      )
    }

    return () => tl.kill()
  }, [mounted, isMobile, isTablet, isDesktop1440px])

  // Mobile (≤768px) — also default before mount to avoid SSR flash
  if (!mounted || isMobile) {
    return (
      <>
        <style>{`.me-char { opacity: 0; } .me-para { opacity: 0; }`}</style>
        <div className="w-full flex flex-col items-center px-[var(--spacing-lg)] pt-[var(--spacing-lg)] pb-[var(--spacing-8xl)] gap-[var(--spacing-xl)]" style={{ minHeight: "100vh" }}>
          <div className="w-full flex flex-col items-center justify-center gap-[var(--spacing-2xl)]">
            <RihaPhotos className="w-full" />
            <div className="flex flex-col items-start justify-center gap-[var(--spacing-lg)]">
              <h2 className="h1 text-[var(--color-primary-inverse)]" style={glowStyle}>
                {renderChars(bioData.heading)}
              </h2>
              {bioData.paragraphs.map((paragraph, index) => (
                <p key={index} className="me-para body text-[var(--color-primary-inverse)]" style={glowStyle}>
                  {paragraph}
                </p>
              ))}
            </div>
             <div className="flex items-start w-full mt-[var(--spacing-xl)] gap-[var(--spacing-xl)] ">
                <Button text="Email" onClick={handleEmailClick} variant="primary" />
                <Button text="LinkedIn" onClick={handleLinkedInClick} variant="primary" />
                <Button text="Instagram" onClick={handleInstagramClick} variant="primary" />
              </div>
          </div>
        </div>
      </>
    )
  }

  // Tablet (769px - 1024px)
  if (isTablet) {
    return (
      <>
        <style>{`.me-char { opacity: 0; } .me-para { opacity: 0; }`}</style>
        <div className="flex flex-col items-center px-[var(--spacing-2xl)] pt-[var(--spacing-2xl)] pb-[var(--spacing-10xl)] gap-[var(--spacing-4xl)] w-full mx-auto" style={{ minHeight: "100vh" }}>
          <div className="w-full flex flex-col items-center justify-center gap-[var(--spacing-4xl)]">
            <RihaPhotos className="w-full" />
            <div className="flex flex-col items-start justify-center gap-[var(--spacing-xl)]">
              <h2 className="h1 text-[var(--color-primary-inverse)]" style={glowStyle}>
                {renderChars(bioData.heading)}
              </h2>
              {bioData.paragraphs.map((paragraph, index) => (
                <p key={index} className="me-para body text-[var(--color-primary-inverse)]" style={glowStyle}>
                  {paragraph}
                </p>
              ))}
              <div className="flex items-start w-full mt-[var(--spacing-xl)] gap-[var(--spacing-xl)] ">
                <Button text="Email" onClick={handleEmailClick} variant="primary" />
                <Button text="LinkedIn" onClick={handleLinkedInClick} variant="primary" />
                <Button text="Instagram" onClick={handleInstagramClick} variant="primary" />
              </div>

            </div>
          </div>
        </div>
      </>
    )
  }

  // Desktop 1440px (1025px - 1440px)
  if (isDesktop1440px) {
    return (
      <>
        <style>{`.me-char { opacity: 0; } .me-para { opacity: 0; }`}</style>
        <div className="flex flex-col items-center pt-[var(--spacing-3xl)] w-full max-w-[1600px] mx-auto">
          <div className="w-full flex items-center justify-center px-[var(--spacing-xl)] gap-[var(--spacing-xl)]">
            <RihaPhotos className="w-[50%]" />
            <div className="w-[50%] flex flex-col items-start justify-center gap-[var(--spacing-lg)]">
              <h2 className="h1 text-[var(--color-primary-inverse)]" style={glowStyle}>
                {renderChars(bioData.heading)}
              </h2>
              {bioData.paragraphs.map((paragraph, index) => (
                <p key={index} className="me-para body text-[var(--color-primary-inverse)]" style={glowStyle}>
                  {paragraph}
                </p>
              ))}
               <div className="flex items-start mt-[var(--spacing-xl)] gap-[var(--spacing-lg)] ">
                <Button text="Email" onClick={handleEmailClick} variant="primary" />
                <Button text="LinkedIn" onClick={handleLinkedInClick} variant="primary" />
                <Button text="Instagram" onClick={handleInstagramClick} variant="primary" />
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }

  // Large Desktop (>1440px)
  return (
    <>
      <style>{`.me-char { opacity: 0; } .me-para { opacity: 0; }`}</style>
      <div className="flex flex-col items-center pt-[var(--spacing-3xl)] w-full max-w-[1600px] mx-auto">
        <div className="w-full flex items-center justify-center gap-[var(--spacing-xl)]">
          <RihaPhotos className="w-[50%]" />
          <div className="w-[50%] flex flex-col items-start justify-center gap-[var(--spacing-lg)]">
            <h2 className="h1 text-[var(--color-primary-inverse)]" style={glowStyle}>
              {renderChars(bioData.heading)}
            </h2>
            {bioData.paragraphs.map((paragraph, index) => (
              <p key={index} className="me-para body text-[var(--color-primary-inverse)]" style={glowStyle}>
                {paragraph}
              </p>
            ))}
        
              <div className="flex items-start mt-[var(--spacing-xl)] gap-[var(--spacing-lg)] ">
                <Button text="Email" onClick={handleEmailClick} variant="primary" />
                <Button text="LinkedIn" onClick={handleLinkedInClick} variant="primary" />
                <Button text="Instagram" onClick={handleInstagramClick} variant="primary" />
              </div>
          </div>
        </div>
      </div>
    </>
  )
}
