"use client"
import React, { useEffect, useState, useRef } from 'react'
import Image from 'next/image'
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
        {/* Logo Video in Corner */}
        <div className="absolute top-4 right-4 w-20 h-auto z-10">
          <video
            ref={logoVideoRef}
            src="/Photos/Homepage/Logo.mp4"
            muted
            playsInline
            autoPlay
            loop
            className="w-full h-auto"
            style={{ objectFit: 'contain' }}
          />
        </div>
        <div className="h-full flex flex-col">
          <div className="flex flex-col p-[var(--spacing-2xl)]">
            {/* Close Button */}
            <div className="flex justify-end mb-[var(--spacing-xl)]">
              <button
                onClick={handleClose}
                className="cursor-pointer hover:opacity-70 transition-opacity p-2 -m-2 "
                aria-label="Close menu"
              >
                <Image
                  src="/Icons/Exit/ExitXSmall.svg"
                  alt="Close menu"
                  width={16}
                  height={16}
                />
              </button>
            </div>

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
        {/* Logo Video in Corner */}
        <div className="absolute top-6 right-6 w-24 h-auto z-10">
          <video
            ref={logoVideoRef}
            src="/Photos/Homepage/Logo.mp4"
            muted
            playsInline
            autoPlay
            loop
            className="w-full h-auto"
            style={{ objectFit: 'contain' }}
          />
        </div>
        <div className="h-full flex flex-col">
          <div className="flex flex-col p-[var(--spacing-3xl)]">
            {/* Close Button */}
            <div className="flex justify-end mb-[var(--spacing-2xl)]">
              <button
                onClick={handleClose}
                className="cursor-pointer hover:opacity-70 transition-opacity p-3 -m-3 "
                aria-label="Close menu"
              >
                <Image
                  src="/Icons/Exit/ExitSmall.svg"
                  alt="Close menu"
                  width={20}
                  height={20}
                />
              </button>
            </div>

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
        {/* Logo Video in Corner */}
        <div className="absolute top-8 right-8 w-32 h-auto z-10">
          <video
            ref={logoVideoRef}
            src="/Photos/Homepage/Logo.mp4"
            muted
            playsInline
            autoPlay
            loop
            className="w-full h-auto"
            style={{ objectFit: 'contain' }}
          />
        </div>
        <div className="h-full flex flex-col">
          <div className="flex flex-col p-[var(--spacing-3xl)]">
            {/* Close Button */}
            <div className="flex justify-end mb-[var(--spacing-2xl)]">
              <button
                onClick={handleClose}
                className="cursor-pointer hover:opacity-70 transition-opacity p-4 -m-4 "
                aria-label="Close menu"
              >
                <Image
                  src="/Icons/Exit/ExitMedium.svg"
                  alt="Close menu"
                  width={24}
                  height={24}
                />
              </button>
            </div>

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
      {/* Logo Video in Corner */}
      <div className="absolute top-8 right-8 w-40 h-auto z-10">
        <video
          ref={logoVideoRef}
          src="/Photos/Homepage/Logo.mp4"
          muted
          playsInline
          autoPlay
          loop
          className="w-full h-auto"
          style={{ objectFit: 'contain' }}
        />
      </div>
      <div className="h-full flex flex-col">
        <div className="flex flex-col p-[var(--spacing-4xl)]">
          {/* Close Button */}
          <div className="flex justify-end mb-[var(--spacing-6xl)]">
            <button
              onClick={handleClose}
              className="cursor-pointer hover:opacity-70 transition-opacity p-4 -m-4 "
              aria-label="Close menu"
            >
              <Image
                src="/Icons/Exit/ExitLarge.svg"
                alt="Close menu"
                width={30}
                height={40}
              />
            </button>
          </div>

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

