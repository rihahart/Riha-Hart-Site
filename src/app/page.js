"use client"

import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import useMobileDetection from '@/_utilities/useMobileDetection'

export default function Home() {
  const { isMobile, isTablet, isDesktop1440px, isDesktop } = useMobileDetection()
  const [isLoading, setIsLoading] = useState(true)
  const [videoLoaded, setVideoLoaded] = useState(false)
  const [isFadingOut, setIsFadingOut] = useState(false)
  const [greenBackgroundOpacity, setGreenBackgroundOpacity] = useState(0)
  const videoRef = useRef(null)

  // Handle video loading and playback
  useEffect(() => {
    if (!isLoading) return // Skip if already loaded
    
    const video = videoRef.current
    if (!video) return

    // Only reset video state on initial load, not when showGreenBackground changes
    if (video.currentTime === 0 || video.paused) {
      video.currentTime = 0
      video.loop = false
      video.muted = true
      video.playsInline = true
    }

    let hasStartedPlaying = false

    const handleCanPlay = () => {
      if (!hasStartedPlaying && video.paused) {
        hasStartedPlaying = true
        setVideoLoaded(true)
        video.play().catch((error) => {
          console.error('Video play error:', error)
          setIsLoading(false)
        })
      }
    }

    const handlePlaying = () => {
      // Video is actually playing
      setVideoLoaded(true)
    }

    const handleTimeUpdate = () => {
      // Fade green background from 0% at 2.5s to 100% at 3.5s
      if (video.currentTime >= 2.5 && video.currentTime <= 3.5) {
        const progress = (video.currentTime - 2.5) / (3.5 - 2.5) // 0 to 1
        setGreenBackgroundOpacity(progress)
      } else if (video.currentTime > 3.5) {
        setGreenBackgroundOpacity(1)
      } else {
        setGreenBackgroundOpacity(0)
      }
    }

    const handleEnded = () => {
      // Start fade-out animation immediately
      setIsFadingOut(true)
      // Show homepage immediately while fade-out happens
      setIsLoading(false)
    }

    const handleError = (e) => {
      console.error('Video error:', e)
      // If video fails to load, skip loading screen
      setIsLoading(false)
    }

    // Check if video is already ready to play
    if (video.readyState >= 3 && video.paused) { // HAVE_FUTURE_DATA or higher
      handleCanPlay()
    }

    // Add event listeners
    video.addEventListener('canplay', handleCanPlay)
    video.addEventListener('playing', handlePlaying)
    video.addEventListener('timeupdate', handleTimeUpdate)
    video.addEventListener('ended', handleEnded)
    video.addEventListener('error', handleError)

    // Only load if video hasn't started
    if (video.readyState === 0) {
      video.load()
    }

    return () => {
      video.removeEventListener('canplay', handleCanPlay)
      video.removeEventListener('playing', handlePlaying)
      video.removeEventListener('timeupdate', handleTimeUpdate)
      video.removeEventListener('ended', handleEnded)
      video.removeEventListener('error', handleError)
    }
  }, [isLoading])

  // Loading screen with video
  if (isLoading) {
    const videoSource = (isMobile || isTablet) ? '/Photos/Logo_Mobile.mp4' : '/Photos/LogoVideo.mp4?v=2'
    
    return (
      <div 
        className={`fixed inset-0 z-[100] bg-white ${
          isFadingOut ? 'animate-fadeOutVideo' : ''
        }`}
      >
        <div 
          className="fixed inset-0 z-0 relative"
          style={{ 
            opacity: 1,
            filter: 'blur(10px)'
          }}
        >
          <img 
            src="/Photos/RihaHartWebsitePhoto.jpg" 
            alt="Riha Hart" 
            className="w-full h-full object-cover"
          />
        </div>
        {isFadingOut && (
          <div className="fixed inset-0 z-[99] bg-[var(--green)] animate-fadeOutGreen" />
        )}
        <video
          ref={videoRef}
          src={videoSource}
          className="absolute inset-0 w-full h-full object-cover z-10"
          muted
          playsInline
          autoPlay
        />
      </div>
    )
  }

  // Main content
  if (isMobile) {
    return (
      <>
        <div className="w-full flex justify-center items-center px-[var(--spacing-lg)] pb-[var(--spacing-lg)] animate-fadeIn">
          <Image 
            src="/Photos/RihaHartWebsitePhoto.jpg" 
            alt="Riha Hart" 
            width={400}
            height={540}
            className="w-full h-auto object-cover object-top rounded-[var(--radius-xs)]"
          />
        </div>
      </>
    )
  } 
  
  if (isTablet) {
    return (
      <>
        <div className="w-full flex justify-center items-center px-[var(--spacing-5xl)] pb-[var(--spacing-5xl)] pt-[var(--spacing-lg)] animate-fadeIn">
          <Image 
            src="/Photos/RihaHartWebsitePhoto.jpg" 
            alt="Riha Hart" 
            width={600}
            height={810}
            className="w-full h-auto max-h-[810px] object-cover object-top"
          />
        </div>
      </>
    )
  } 
  
  if (isDesktop1440px) {
    return (
      <>
        <div className="w-full flex justify-center items-center px-[var(--spacing-5xl)] pb-[var(--spacing-5xl)] pt-[var(--spacing-lg)] animate-fadeIn">
          <Image 
            src="/Photos/RihaHartWebsitePhoto.jpg" 
            alt="Riha Hart" 
            width={800}
            height={1000}
            className="w-full h-auto max-h-[1000px] object-cover object-top rounded-[var(--radius-m)]"
          />
        </div>
      </>
    )
  } 
  
  return (
    <>
      <div className="w-full flex justify-center items-center mx-auto pt-[var(--spacing-2xl)] pb-[var(--spacing-12xl)] px-[var(--spacing-12xl)] animate-fadeIn">
        <Image 
          src="/Photos/RihaHartWebsitePhoto.jpg" 
          alt="Riha Hart" 
          width={1000}
          height={1000}
          className="w-full h-auto object-cover object-top rounded-[var(--radius-m)]"
        />
      </div>
    </>
  )
}

