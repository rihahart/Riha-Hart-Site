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
      <div className={`fixed top-0 left-0 w-full h-full bg-white z-[201] ${
        isAnimatingOut ? 'animate-slideOutMenuMobile' : 'animate-slideInMenuMobile'
      }`} style={{ fontFamily: 'var(--font-forma)' }}>
        {/* Navigation Bar */}
        <nav className="w-full fixed top-0 left-0 z-[202] opacity-100" style={{ backgroundColor: 'rgba(255, 255, 255, 0)' }}>
          <div className="flex gap-[var(--spacing-s)] items-end py-[var(--spacing-m)] px-[var(--spacing-m)]">
            <div style={{ width: '100px', height: 'auto', transform: 'translateZ(0)', willChange: 'transform' }}>
              <video
                ref={logoVideoRef}
                src="/Photos/Homepage/Logo.mp4"
                muted
                playsInline
                autoPlay
                loop
                className="w-full h-auto"
                style={{ objectFit: 'contain', imageRendering: 'auto', transform: 'translateZ(0)' }}
              />
            </div>
            <button
              onClick={handleClose}
              className="cursor-pointer text-black hover:opacity-70 transition-opacity"
              aria-label="Close menu"
              style={{ fontFamily: 'var(--font-coyote)', fontSize: '34px', padding: 0, lineHeight: .9 }}
            >
              EXIT<span style={{ fontWeight: 'bold' }}>.</span>
            </button>
          </div>
        </nav>
        <div className="h-full flex flex-col pt-24">
          <div className="flex flex-col p-[var(--spacing-2xl)]">
            {/* Menu Content */}
            <nav className="flex flex-col gap-[var(--spacing-lg)]">
              <p className="text-black text-lg">
                I'm a design and tech lead at Everest Federal Credit Union Bank. I am a co-founder and creative director at JH Mural Project. I love challenges and enjoy solving problems.
              </p>
            </nav>
          </div>
        </div>
      </div>
    )
  }

  // Tablet (769px - 1024px)
  if (isTablet) {
    return (
      <div className={`fixed top-0 left-0 w-full h-full bg-white z-[201] ${
        isAnimatingOut ? 'animate-slideOutMenu' : 'animate-slideInMenu'
      }`} style={{ fontFamily: 'var(--font-forma)' }}>
        {/* Navigation Bar */}
        <nav className="w-full py-6 px-6 fixed top-0 left-0 z-[202] opacity-100" style={{ backgroundColor: 'rgba(255, 255, 255, 0)' }}>
          <div className="flex gap-[var(--spacing-m)] items-end">
            <div style={{ width: '128px', height: 'auto', transform: 'translateZ(0)', willChange: 'transform' }}>
              <video
                ref={logoVideoRef}
                src="/Photos/Homepage/Logo.mp4"
                muted
                playsInline
                autoPlay
                loop
                className="w-full h-auto"
                style={{ objectFit: 'contain', imageRendering: 'auto', transform: 'translateZ(0)' }}
              />
            </div>
            <button
              onClick={handleClose}
              className="cursor-pointer text-black hover:opacity-70 transition-opacity"
              aria-label="Close menu"
              style={{ fontFamily: 'var(--font-coyote)', fontSize: '42px', padding: 0, lineHeight: .9 }}
            >
              EXIT<span style={{ fontWeight: 'bold' }}>.</span>
            </button>
          </div>
        </nav>
        <div className="h-full flex flex-col pt-28">
          <div className="flex flex-col p-[var(--spacing-3xl)]">
            {/* Menu Content */}
            <nav className="flex flex-col gap-[var(--spacing-xl)]">
              <p className="text-black text-xl">
                I'm a design and tech lead at Everest Federal Credit Union Bank. I am a co-founder and creative director at JH Mural Project. I love challenges and enjoy solving problems.
              </p>
            </nav>
          </div>
        </div>
      </div>
    )
  }

  // Desktop 1440px (1025px - 1440px)
  if (isDesktop1440px) {
    return (
      <div className={`fixed top-0 left-0 w-full h-full bg-white z-[201] ${
        isAnimatingOut ? 'animate-slideOutMenu' : 'animate-slideInMenu'
      }`} style={{ fontFamily: 'var(--font-forma)' }}>
        {/* Navigation Bar */}
        <nav className="w-full fixed top-0 left-0 z-[202] opacity-100" style={{ backgroundColor: 'rgba(255, 255, 255, 0)' }}>
          <div className="w-full mx-auto flex gap-[var(--spacing-lg)] items-end py-[var(--spacing-lg)] px-[var(--spacing-xl)]">
            <div style={{ width: '140px', height: 'auto', transform: 'translateZ(0)', willChange: 'transform' }}>
              <video
                ref={logoVideoRef}
                src="/Photos/Homepage/Logo.mp4"
                muted
                playsInline
                autoPlay
                loop
                className="w-full h-auto"
                style={{ objectFit: 'contain', imageRendering: 'auto', transform: 'translateZ(0)' }}
              />
            </div>
            <button
              onClick={handleClose}
              className="cursor-pointer text-black hover:opacity-70 transition-opacity"
              aria-label="Close menu"
              style={{ fontFamily: 'var(--font-coyote)', fontSize: '48px', padding: 0, lineHeight: .9 }}
            >
              EXIT<span style={{ fontWeight: 'bold' }}>.</span>
            </button>
          </div>
        </nav>
        <div className="h-full flex flex-col pt-28">
          <div className="flex flex-col p-[var(--spacing-3xl)]">
            {/* Menu Content */}
            <nav className="flex flex-col gap-[var(--spacing-xl)]">
              <p className="text-black text-xl">
                I'm a design and tech lead at Everest Federal Credit Union Bank. I am a co-founder and creative director at JH Mural Project. I love challenges and enjoy solving problems.
              </p>
            </nav>
          </div>
        </div>
      </div>
    )
  }

  // Large Desktop (>1440px)
  return (
    <div className={`fixed top-0 left-0 w-full h-full bg-white z-[201] ${
      isAnimatingOut ? 'animate-slideOutMenu' : 'animate-slideInMenu'
    }`} style={{ fontFamily: 'var(--font-forma)' }}>
      {/* Navigation Bar */}
      <nav className="w-full fixed top-0 left-0 z-[202] opacity-100" style={{ backgroundColor: 'rgba(255, 255, 255, 0)' }}>
        <div className="flex gap-[var(--spacing-lg)] items-end py-[var(--spacing-lg)] px-[var(--spacing-2xl)]">
          <div style={{ width: '175px', height: 'auto', transform: 'translateZ(0)', willChange: 'transform' }}>
            <video
              ref={logoVideoRef}
              src="/Photos/Homepage/Logo.mp4"
              muted
              playsInline
              autoPlay
              loop
              className="w-full h-auto"
              style={{ objectFit: 'contain', opacity: 1, imageRendering: 'auto', transform: 'translateZ(0)' }}
            />
          </div>
          <button
            onClick={handleClose}
            className="cursor-pointer text-black hover:opacity-70 transition-opacity"
            aria-label="Close menu"
            style={{ fontFamily: 'var(--font-coyote)', fontSize: '60px', padding: 0, lineHeight: .9 }}
          >
            EXIT<span style={{ fontWeight: 'bold' }}>.</span>
          </button>
        </div>
      </nav>
      <div className="h-full flex flex-col pt-32">
        <div className="flex flex-col p-[var(--spacing-4xl)]">
          {/* Menu Content */}
          <nav className="flex flex-col gap-[var(--spacing-2xl)]">
            <p className="text-black text-2xl">
              I'm a design and tech lead at Everest Federal Credit Union Bank. I am a co-founder and creative director at JH Mural Project. I love challenges and enjoy solving problems.
            </p>
          </nav>
        </div>
      </div>
    </div>
  )
}

