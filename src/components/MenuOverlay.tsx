"use client"
import React, { useEffect, useRef } from 'react'
import Image from 'next/image'
import useMobileDetection from '@/_utilities/useMobileDetection'

interface MenuOverlayProps {
  isOpen: boolean
  onClose: () => void
}

const MenuOverlay: React.FC<MenuOverlayProps> = ({ isOpen, onClose }) => {
  const { isMobile, isTablet, isDesktop1440px } = useMobileDetection()
  const videoRefMobile = useRef<HTMLVideoElement>(null)
  const videoRefTablet = useRef<HTMLVideoElement>(null)
  const videoRefDesktop = useRef<HTMLVideoElement>(null)
  const videoRefLarge = useRef<HTMLVideoElement>(null)

  // Close menu on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
      // Prevent body scroll when menu is open
      document.body.style.overflow = 'hidden'
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'unset'
    }
  }, [isOpen, onClose])

  // Start video at 90% of animation (mobile: 800ms * 0.9 = 720ms, desktop: 1000ms * 0.9 = 900ms)
  useEffect(() => {
    if (!isOpen) {
      // Pause all videos when menu closes
      videoRefMobile.current?.pause()
      videoRefTablet.current?.pause()
      videoRefDesktop.current?.pause()
      videoRefLarge.current?.pause()
      return
    }

    const animationDuration = isMobile ? 800 : 1000
    const startTime = animationDuration * 0.9 // 90% of animation

    const timeout = setTimeout(() => {
      const video = isMobile 
        ? videoRefMobile.current 
        : isTablet 
        ? videoRefTablet.current 
        : isDesktop1440px 
        ? videoRefDesktop.current 
        : videoRefLarge.current

      if (video) {
        video.currentTime = 0
        video.play().catch(err => {
          console.error('Failed to play video:', err)
        })
      }
    }, startTime)

    return () => {
      clearTimeout(timeout)
    }
  }, [isOpen, isMobile, isTablet, isDesktop1440px])

  // Mobile (≤768px)
  if (isMobile) {
    return (
      <>
        {/* Menu Panel */}
        <div
          className={`fixed top-0 left-0 w-full h-full bg-[#0a0a0a] z-[201] ${
            isOpen ? 'animate-slideInMenuMobile' : 'animate-slideOutMenuMobile pointer-events-none'
          }`}
        >
          <div className="h-full flex flex-col">
            <div className="flex flex-col p-[var(--spacing-2xl)]">
              {/* Close Button */}
              <div className="flex justify-end mb-[var(--spacing-xl)]">
                <button
                  onClick={onClose}
                  className="cursor-pointer hover:opacity-70 transition-opacity p-2 -m-2 brightness-0 invert"
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
                <a
                  href="/"
                  onClick={onClose}
                  className="text-white text-lg hover:opacity-70 transition-opacity"
                >
                  Home
                </a>
              </nav>
            </div>

            {/* Video at Bottom */}
            <div className="mt-auto w-full">
              <video
                ref={videoRefMobile}
                src="/DolphinFinalShort.mp4"
                muted
                playsInline
                loop
                className="w-full h-auto object-contain"
                style={{ objectFit: 'contain' }}
              />
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
        {/* Menu Panel */}
        <div
          className={`fixed top-0 left-0 w-full h-full bg-[#0a0a0a] z-[201] ${
            isOpen ? 'animate-slideInMenu' : 'animate-slideOutMenu pointer-events-none'
          }`}
        >
          <div className="h-full flex flex-col">
            <div className="flex flex-col p-[var(--spacing-3xl)]">
              {/* Close Button */}
              <div className="flex justify-end mb-[var(--spacing-2xl)]">
                <button
                  onClick={onClose}
                  className="cursor-pointer hover:opacity-70 transition-opacity p-3 -m-3 brightness-0 invert"
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
                <a
                  href="/"
                  onClick={onClose}
                  className="text-white text-xl hover:opacity-70 transition-opacity"
                >
                  Home
                </a>
              </nav>
            </div>

            {/* Video at Bottom */}
            <div className="mt-auto w-full">
              <video
                ref={videoRefTablet}
                src="/DolphinFinalShort.mp4"
                muted
                playsInline
                loop
                className="w-full h-auto object-contain"
                style={{ objectFit: 'contain' }}
              />
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
        {/* Menu Panel */}
        <div
          className={`fixed top-0 left-0 w-full h-full bg-[#0a0a0a] z-[201] ${
            isOpen ? 'animate-slideInMenu' : 'animate-slideOutMenu pointer-events-none'
          }`}
        >
          <div className="h-full flex flex-col">
            <div className="flex flex-col p-[var(--spacing-3xl)]">
              {/* Close Button */}
              <div className="flex justify-end mb-[var(--spacing-2xl)]">
                <button
                  onClick={onClose}
                  className="cursor-pointer hover:opacity-70 transition-opacity p-4 -m-4 brightness-0 invert"
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
                <a
                  href="/"
                  onClick={onClose}
                  className="text-white text-xl hover:opacity-70 transition-opacity"
                >
                  Home
                </a>
              </nav>
            </div>

            {/* Video at Bottom */}
            <div className="mt-auto w-[45%] ml-auto">
              <video
                ref={videoRefDesktop}
                src="/DolphinFinalShort.mp4"
                muted
                playsInline
                loop
                className="w-full h-auto object-contain"
                style={{ objectFit: 'contain' }}
              />
            </div>
          </div>
        </div>
      </>
    )
  }

  // Large Desktop (>1440px)
  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-[200] transition-opacity duration-500 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      />
      
      {/* Menu Panel */}
      <div
        className={`fixed top-0 left-0 w-full h-full bg-[#0a0a0a] z-[201] ${
          isOpen ? 'animate-slideInMenu' : 'animate-slideOutMenu pointer-events-none'
        }`}
      >
        <div className="h-full flex flex-col">
          <div className="flex flex-col p-[var(--spacing-4xl)]">
            {/* Close Button */}
            <div className="flex justify-end mb-[var(--spacing-6xl)]">
              <button
                onClick={onClose}
                className="cursor-pointer hover:opacity-70 transition-opacity p-4 -m-4 brightness-0 invert"
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
              <a
                href="/"
                onClick={onClose}
                className="text-white text-2xl hover:opacity-70 transition-opacity"
              >
                Home
              </a>
            </nav>
          </div>

          {/* Video at Bottom */}
          <div className="mt-auto w-[35%] ml-auto">
            <video
              ref={videoRefLarge}
              src="/DolphinFinalShort.mp4"
              muted
              playsInline
              loop
              className="w-full h-auto object-contain"
              style={{ objectFit: 'contain' }}
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default MenuOverlay

