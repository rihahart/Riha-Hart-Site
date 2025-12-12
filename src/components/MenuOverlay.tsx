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

  // Start video at 20% of animation and pause when menu closes
  useEffect(() => {
    // Store reverse playback animation frame IDs for cleanup
    const reverseAnimationIds: { [key: string]: number | null } = {}

    // Pause and reset all videos when menu closes
    const pauseAndReset = (video: HTMLVideoElement | null, videoKey: string) => {
      if (video) {
        video.pause()
        video.currentTime = 0
        // Cancel any reverse playback
        if (reverseAnimationIds[videoKey]) {
          cancelAnimationFrame(reverseAnimationIds[videoKey]!)
          reverseAnimationIds[videoKey] = null
        }
      }
    }

    // Play video backward smoothly
    const playBackward = (video: HTMLVideoElement, videoKey: string) => {
      if (reverseAnimationIds[videoKey]) {
        return // Already playing backward
      }

      // Store the end time (when video finished playing forward)
      const endTime = video.currentTime || video.duration
      const duration = endTime
      let lastUpdateTime = performance.now()
      const targetFPS = 60 // Target 60 FPS for smooth playback
      const frameTime = 1000 / targetFPS // ~16.67ms per frame

      const reversePlay = () => {
        if (!video) {
          reverseAnimationIds[videoKey] = null
          return
        }

        const now = performance.now()
        const deltaTime = (now - lastUpdateTime) / 1000 // Time since last frame in seconds
        
        // Get current video time
        let currentTime = video.currentTime
        
        // Calculate new time (move backward)
        const newTime = Math.max(0, currentTime - deltaTime)
        
        if (newTime > 0) {
          video.currentTime = newTime
          lastUpdateTime = now
          // Continue immediately
          reverseAnimationIds[videoKey] = requestAnimationFrame(reversePlay)
        } else {
          // Reached the beginning
          video.currentTime = 0
          reverseAnimationIds[videoKey] = null
        }
      }

      // Start reverse playback immediately
      lastUpdateTime = performance.now()
      reverseAnimationIds[videoKey] = requestAnimationFrame(reversePlay)
    }

    // Handle video ended event - play backward after video finishes
    const handleVideoEnded = (e: Event) => {
      const video = e.target as HTMLVideoElement
      if (video) {
        const videoKey = video === videoRefMobile.current ? 'mobile' :
                        video === videoRefTablet.current ? 'tablet' :
                        video === videoRefDesktop.current ? 'desktop' : 'large'
        playBackward(video, videoKey)
      }
    }

    // Get all video refs
    const videos = [
      videoRefMobile.current,
      videoRefTablet.current,
      videoRefDesktop.current,
      videoRefLarge.current
    ]

    // Add ended event listeners to all videos
    videos.forEach(video => {
      if (video) {
        video.addEventListener('ended', handleVideoEnded)
      }
    })

    if (!isOpen) {
      pauseAndReset(videoRefMobile.current, 'mobile')
      pauseAndReset(videoRefTablet.current, 'tablet')
      pauseAndReset(videoRefDesktop.current, 'desktop')
      pauseAndReset(videoRefLarge.current, 'large')
      return () => {
        videos.forEach(video => {
          if (video) {
            video.removeEventListener('ended', handleVideoEnded)
          }
        })
        // Cancel all reverse animations
        Object.values(reverseAnimationIds).forEach(id => {
          if (id) cancelAnimationFrame(id)
        })
      }
    }

    const animationDuration = isMobile ? 640 : 1000
    const startTime = animationDuration * 0.2 // 20% of animation

    const timeout = setTimeout(() => {
      const video = isMobile 
        ? videoRefMobile.current 
        : isTablet 
        ? videoRefTablet.current 
        : isDesktop1440px 
        ? videoRefDesktop.current 
        : videoRefLarge.current

      if (video && isOpen) {
        video.currentTime = 0
        video.play().catch(err => {
          console.error('Failed to play video:', err)
        })
      }
    }, startTime)

    return () => {
      clearTimeout(timeout)
      // Also pause when component unmounts or isOpen changes
      if (!isOpen) {
        pauseAndReset(videoRefMobile.current, 'mobile')
        pauseAndReset(videoRefTablet.current, 'tablet')
        pauseAndReset(videoRefDesktop.current, 'desktop')
        pauseAndReset(videoRefLarge.current, 'large')
      }
      // Clean up event listeners
      videos.forEach(video => {
        if (video) {
          video.removeEventListener('ended', handleVideoEnded)
        }
      })
      // Cancel all reverse animations
      Object.values(reverseAnimationIds).forEach(id => {
        if (id) cancelAnimationFrame(id)
      })
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

