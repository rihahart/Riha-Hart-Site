"use client"
import React, { useEffect, useState, useRef } from 'react'
import { useRouter } from 'next/navigation'
import useMobileDetection from '@/_utilities/useMobileDetection'

export default function MenuPage() {
  const router = useRouter()
  const { isMobile, isTablet, isDesktop1440px } = useMobileDetection()
  const [isAnimatingOut, setIsAnimatingOut] = useState(false)
  const logoVideoRef = useRef(null)

  // Close menu on escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        setIsAnimatingOut(true)
        // Wait for animation to complete before navigating
        setTimeout(() => {
          router.back()
        }, isMobile ? 640 : 1000)
      }
    }

    document.addEventListener('keydown', handleEscape)
    // Prevent body scroll when menu is open
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'unset'
    }
  }, [router, isMobile])

  const handleClose = () => {
    setIsAnimatingOut(true)
    // Wait for animation to complete before navigating
    setTimeout(() => {
      router.back()
    }, isMobile ? 640 : 1000)
  }

  // Mobile (≤768px)
  if (isMobile) {
    return (
      <div className={`fixed top-0 left-0 w-full h-full bg-white z-[201] menu-container ${
        isAnimatingOut ? 'animate-slideOutMenuMobile' : 'animate-slideInMenuMobile'
      }`}>
        {/* Navigation Bar */}
        <nav className="w-full fixed top-0 left-0 z-[202] opacity-100 menu-nav">
          <div className="flex gap-[var(--spacing-s)] items-end py-[var(--spacing-m)] px-[var(--spacing-2xl)]">
            <div className="logo-container-mobile">
              <video
                ref={logoVideoRef}
                src="/Photos/Homepage/Logo.mp4"
                muted
                playsInline
                autoPlay
                loop
                className="w-full h-auto logo-video"
              />
            </div>
            <button
              onClick={handleClose}
              className="cursor-pointer text-black hover:opacity-70 transition-opacity exit-button-mobile"
              aria-label="Close menu"
            >
              EXIT<span className="exit-period">.</span>
            </button>
          </div>
        </nav>
        <div className="h-full flex flex-col pt-18">
          <div className="flex flex-col p-[var(--spacing-2xl)]">
            {/* Menu Content */}
            <div className="flex flex-col gap-[var(--spacing-lg)]">
              <p className="text-black text-[20px] leading-[42px] menu-text">
                I'm a design and tech lead at <a href="https://www.everestfcu.org/" target="_blank" rel="noopener noreferrer">EVEREST FEDERAL CREDIT UNION BANK</a>. I am a co-founder and creative director at <a href="https://jhmuralproject.com" target="_blank" rel="noopener noreferrer">JH MURAL PROJECT</a>. I love challenges and enjoy solving problems.
              </p>
              <div className="flex flex-row gap-[var(--spacing-xl)] py-[var(--spacing-xl)] self-start">
                <a
                  href="https://linkedin.com/in/rihahart"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cursor-pointer text-black hover:opacity-70 transition-opacity exit-button-mobile"
                >
                  LINKEDIN<span className="exit-period">.</span>
                </a>
                <a
                  href="https://www.instagram.com/riha.hart"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cursor-pointer text-black hover:opacity-70 transition-opacity exit-button-mobile"
                >
                  INSTAGRAM<span className="exit-period">.</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  // Tablet (769px - 1024px)
  if (isTablet) {
    return (
      <div className={`fixed top-0 left-0 w-full h-full bg-white z-[201] menu-container ${
        isAnimatingOut ? 'animate-slideOutMenu' : 'animate-slideInMenu'
      }`}>
        {/* Navigation Bar */}
        <nav className="w-full py-6 fixed top-0 left-0 z-[202] opacity-100 menu-nav">
          <div className="flex gap-[var(--spacing-m)] items-end px-[var(--spacing-3xl)]">
            <div className="logo-container-tablet">
              <video
                ref={logoVideoRef}
                src="/Photos/Homepage/Logo.mp4"
                muted
                playsInline
                autoPlay
                loop
                className="w-full h-auto logo-video"
              />
            </div>
            <button
              onClick={handleClose}
              className="cursor-pointer text-black hover:opacity-70 transition-opacity exit-button-tablet"
              aria-label="Close menu"
            >
              EXIT<span className="exit-period">.</span>
            </button>
          </div>
        </nav>
        <div className="h-full flex flex-col pt-24">
          <div className="flex flex-col p-[var(--spacing-3xl)]">
            {/* Menu Content */}
            <div className="flex flex-col gap-[var(--spacing-xl)]">
              <p className="text-black text-[24px] leading-[52px] menu-text">
                I'm a design and tech lead at <a href="https://www.everestfcu.org/" target="_blank" rel="noopener noreferrer">EVEREST FEDERAL CREDIT UNION BANK</a>. I am a co-founder and creative director at <a href="https://jhmuralproject.com" target="_blank" rel="noopener noreferrer">JH MURAL PROJECT</a>. I love challenges and enjoy solving problems.
              </p>
              <div className="flex flex-row gap-[var(--spacing-2xl)] py-[var(--spacing-2xl)] self-start">
                <a
                  href="https://linkedin.com/in/rihahart"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cursor-pointer text-black hover:opacity-70 transition-opacity exit-button-tablet"
                >
                  LINKEDIN<span className="exit-period">.</span>
                </a>
                <a
                  href="https://www.instagram.com/riha.hart"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cursor-pointer text-black hover:opacity-70 transition-opacity exit-button-tablet"
                >
                  INSTAGRAM<span className="exit-period">.</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  // Desktop 1440px (1025px - 1440px)
  if (isDesktop1440px) {
    return (
      <div className={`fixed top-0 left-0 w-full h-full bg-white z-[201] menu-container ${
        isAnimatingOut ? 'animate-slideOutMenu' : 'animate-slideInMenu'
      }`}>
        {/* Navigation Bar */}
        <nav className="w-full fixed top-0 left-0 z-[202] opacity-100 menu-nav">
          <div className="w-full mx-auto flex gap-[var(--spacing-lg)] items-end py-[var(--spacing-lg)] px-[var(--spacing-3xl)]">
            <div className="logo-container-desktop">
              <video
                ref={logoVideoRef}
                src="/Photos/Homepage/Logo.mp4"
                muted
                playsInline
                autoPlay
                loop
                className="w-full h-auto logo-video"
              />
            </div>
            <button
              onClick={handleClose}
              className="cursor-pointer text-black hover:opacity-70 transition-opacity exit-button-desktop"
              aria-label="Close menu"
            >
              EXIT<span className="exit-period">.</span>
            </button>
          </div>
        </nav>
        <div className="h-full flex flex-col pt-24">
          <div className="flex flex-col p-[var(--spacing-3xl)]">
            {/* Menu Content */}
            <div className="flex flex-col gap-[var(--spacing-xl)]">
              <p className="text-black text-[26px] leading-[62px] menu-text">
                I'm a design and tech lead at <a href="https://www.everestfcu.org/" target="_blank" rel="noopener noreferrer">EVEREST FEDERAL CREDIT UNION BANK</a>. I am a co-founder and creative director at <a href="https://jhmuralproject.com" target="_blank" rel="noopener noreferrer">JH MURAL PROJECT</a>. I love challenges and enjoy solving problems.
              </p>
              <div className="flex flex-row gap-[var(--spacing-2xl)] py-[var(--spacing-2xl)] self-start">
                <a
                  href="https://linkedin.com/in/rihahart"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cursor-pointer text-black hover:opacity-70 transition-opacity exit-button-desktop"
                >
                  LINKEDIN<span className="exit-period">.</span>
                </a>
                <a
                  href="https://www.instagram.com/riha.hart"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cursor-pointer text-black hover:opacity-70 transition-opacity exit-button-desktop"
                >
                  INSTAGRAM<span className="exit-period">.</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  // Large Desktop (>1440px)
  return (
    <div className={`fixed top-0 left-0 w-full h-full bg-white z-[201] menu-container ${
      isAnimatingOut ? 'animate-slideOutMenu' : 'animate-slideInMenu'
    }`}>
      {/* Navigation Bar */}
      <nav className="w-full fixed top-0 left-0 z-[202] opacity-100 menu-nav">
        <div className="flex gap-[var(--spacing-lg)] items-end py-[var(--spacing-lg)] px-[var(--spacing-4xl)]">
          <div className="logo-container-large">
            <video
              ref={logoVideoRef}
              src="/Photos/Homepage/Logo.mp4"
              muted
              playsInline
              autoPlay
              loop
              className="w-full h-auto logo-video-large"
            />
          </div>
          <button
            onClick={handleClose}
            className="cursor-pointer text-black hover:opacity-70 transition-opacity exit-button-large"
            aria-label="Close menu"
          >
            EXIT<span className="exit-period">.</span>
          </button>
        </div>
      </nav>
      <div className="h-full flex flex-col pt-28">
        <div className="flex flex-col p-[var(--spacing-4xl)]">
          {/* Menu Content */}
          <div className="flex flex-col gap-[var(--spacing-2xl)]">
            <p className="text-black text-[28px] leading-[72px] menu-text">
              I'm a design and tech lead at <a href="https://www.everestfcu.org/" target="_blank" rel="noopener noreferrer">EVEREST FEDERAL CREDIT UNION BANK</a>. I am a co-founder and creative director at <a href="https://jhmuralproject.com" target="_blank" rel="noopener noreferrer">JH MURAL PROJECT</a>. I love challenges and enjoy solving problems.
            </p>
            <div className="flex flex-row gap-[var(--spacing-4xl)] py-[var(--spacing-2xl)] self-start">
              <a
                href="https://linkedin.com/in/rihahart"
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer text-black hover:opacity-70 transition-opacity exit-button-large"
              >
                LINKEDIN<span className="exit-period">.</span>
              </a>
              <a
                href="https://www.instagram.com/riha.hart"
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer text-black hover:opacity-70 transition-opacity exit-button-large"
              >
                INSTAGRAM<span className="exit-period">.</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

