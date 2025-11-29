"use client"

import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import useMobileDetection from '@/_utilities/useMobileDetection'

export default function Home() {
  const { isMobile, isTablet, isDesktop1440px, isDesktop } = useMobileDetection()
  const [navHeight, setNavHeight] = useState(0)
  const [isLoading, setIsLoading] = useState(() => {
    // Check sessionStorage immediately during state initialization
    if (typeof window !== 'undefined') {
      const hasSeenVideo = sessionStorage.getItem('riha-hart-video-played')
      return !hasSeenVideo // If video has been played, don't show loading
    }
    return true // Default to showing video on first load
  })
  const [videoLoaded, setVideoLoaded] = useState(false)
  const [isFadingOut, setIsFadingOut] = useState(false)
  const spacerRef = useRef(null)
  const videoRef = useRef(null)

  // Handle video loading and playback
  useEffect(() => {
    if (!isLoading) return // Skip if already loaded
    
    const video = videoRef.current
    if (!video) return

    const handleLoadedData = () => {
      setVideoLoaded(true)
      video.play().catch((error) => {
        console.error('Video play error:', error)
        // If autoplay fails, skip loading screen
        setIsLoading(false)
      })
    }

    const handleCanPlayThrough = () => {
      if (!videoLoaded) {
        setVideoLoaded(true)
        video.play().catch((error) => {
          console.error('Video play error:', error)
          setIsLoading(false)
        })
      }
    }

    const handleEnded = () => {
      sessionStorage.setItem('riha-hart-video-played', 'true')
      // Start fade-out animation
      setIsFadingOut(true)
      // After fade-out completes, hide loading screen
      setTimeout(() => {
        setIsLoading(false)
        setIsFadingOut(false)
      }, 2000) // 2 seconds to match fade-out duration
    }

    const handleError = (e) => {
      console.error('Video error:', e)
      // If video fails to load, skip loading screen
      setIsLoading(false)
    }

    // Add multiple event listeners for better compatibility
    video.addEventListener('loadeddata', handleLoadedData)
    video.addEventListener('canplaythrough', handleCanPlayThrough)
    video.addEventListener('ended', handleEnded)
    video.addEventListener('error', handleError)

    // Fallback: if video doesn't load within 5 seconds, skip it
    const timeout = setTimeout(() => {
      if (isLoading) {
        console.warn('Video loading timeout, skipping...')
        setIsLoading(false)
      }
    }, 5000)

    // Try to load the video
    video.load()

    return () => {
      clearTimeout(timeout)
      video.removeEventListener('loadeddata', handleLoadedData)
      video.removeEventListener('canplaythrough', handleCanPlayThrough)
      video.removeEventListener('ended', handleEnded)
      video.removeEventListener('error', handleError)
    }
  }, [isLoading, videoLoaded])

  useEffect(() => {
    // Wait for nav to be fully rendered
    const updateSpacer = () => {
      const nav = document.querySelector('nav')
      if (nav && spacerRef.current) {
        const height = nav.offsetHeight
        setNavHeight(height)
        spacerRef.current.style.height = `${height}px`
        spacerRef.current.style.margin = '0'
        spacerRef.current.style.padding = '0'
      }
    }
    
    // Only update spacer after loading is complete
    if (!isLoading) {
      updateSpacer()
      const timer = setTimeout(updateSpacer, 100)
      return () => clearTimeout(timer)
    }
  }, [isMobile, isTablet, isDesktop1440px, isLoading])

  useEffect(() => {
    if (typeof window !== 'undefined' && !isLoading) {
      // Wait for image to load, then scroll to show the face (top of image)
      const timer = setTimeout(() => {
        const nav = document.querySelector('nav')
        const navHeight = nav ? nav.offsetHeight : 0
        
        // Different scroll amounts based on screen size
        let scrollAmount
        if (isDesktop) {
          // Large Desktop (>1440px): scroll to show bottom of image in viewport
          // Wait a bit for image to load, then calculate
          setTimeout(() => {
            const imageElement = document.querySelector('img[alt="Riha Hart"]')
            if (imageElement && imageElement.offsetHeight > 0) {
              const imageHeight = imageElement.offsetHeight
              const navHeight = nav ? nav.offsetHeight : 0
              // Scroll less to keep face visible: nav height + portion of image height
              scrollAmount = navHeight + (imageHeight * 0.4)
            } else {
              // Fallback: scroll 2.5x viewport height
              scrollAmount = window.innerHeight * 1
            }
            
            // Perform the scroll
            const startPosition = window.pageYOffset || window.scrollY
            const distance = scrollAmount - startPosition
            const duration = 700
            let startTime = null

            function easeOut(t) {
              return 1 - Math.pow(1 - t, 3)
            }

            function animation(currentTime) {
              if (startTime === null) startTime = currentTime
              const timeElapsed = currentTime - startTime
              const progress = Math.min(timeElapsed / duration, 1)
              const easedProgress = easeOut(progress)
              
              window.scrollTo(0, startPosition + distance * easedProgress)
              
              if (progress < 1) {
                requestAnimationFrame(animation)
              }
            }

            requestAnimationFrame(animation)
          }, 100)
          return
        } else if (isDesktop1440px) {
          // Desktop 1440px: scroll 30% of viewport
          scrollAmount = window.innerHeight * 0.3
        } else {
          // Other sizes: nav height + 10% of viewport
          scrollAmount = navHeight + (window.innerHeight * 0.1)
        }
        
        // Custom smooth scroll with ease-out easing and longer duration
        const startPosition = window.pageYOffset || window.scrollY
        const distance = scrollAmount - startPosition
        const duration = 500 // 2 seconds for slower, smoother scroll
        let startTime = null

        function easeOut(t) {
          // Smooth ease-out easing function (cubic ease-out)
          return 1 - Math.pow(1 - t, 3)
        }

        function animation(currentTime) {
          if (startTime === null) startTime = currentTime
          const timeElapsed = currentTime - startTime
          const progress = Math.min(timeElapsed / duration, 1)
          const easedProgress = easeOut(progress)
          
          window.scrollTo(0, startPosition + distance * easedProgress)
          
          if (progress < 1) {
            requestAnimationFrame(animation)
          }
        }

        requestAnimationFrame(animation)
      }, 500)
      return () => clearTimeout(timer)
    }
  }, [isDesktop, isDesktop1440px, isLoading])

  // Loading screen with video
  if (isLoading) {
    return (
      <div 
        className={`fixed inset-0 z-[100] bg-white flex items-center justify-center ${
          isFadingOut ? 'animate-fadeOutVideo' : ''
        }`}
      >
        {isFadingOut && (
          <div className="fixed inset-0 z-[99] bg-[var(--green)] animate-fadeOutGreen" />
        )}
        <video
          ref={videoRef}
          src="/Photos/LogoVideo.mp4?v=2"
          className="w-full h-full object-contain"
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
        <div ref={spacerRef} />
        <div className="fixed inset-0 z-[98] bg-[var(--green)] animate-fadeOutGreen" />
        <div className="w-full flex justify-center items-center px-[var(--spacing-lg)] pb-[var(--spacing-lg)] animate-fadeIn bg-white">
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
        <div ref={spacerRef} />
        <div className="fixed inset-0 z-[98] bg-[var(--green)] animate-fadeOutGreen" />
        <div className="w-full flex justify-center items-center px-[var(--spacing-5xl)] pb-[var(--spacing-5xl)] pt-[var(--spacing-lg)] animate-fadeIn bg-white">
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
        <div ref={spacerRef} />
        <div className="fixed inset-0 z-[98] bg-[var(--green)] animate-fadeOutGreen" />
        <div className="w-full flex justify-center items-center px-[var(--spacing-5xl)] pb-[var(--spacing-5xl)] pt-[var(--spacing-lg)] animate-fadeIn bg-white">
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
      <div ref={spacerRef} />
      <div className="fixed inset-0 z-[98] bg-[var(--green)] animate-fadeOutGreen" />
      <div className="w-full flex justify-center items-center mx-auto pt-[var(--spacing-2xl)] pb-[var(--spacing-12xl)] px-[var(--spacing-12xl)] animate-fadeIn bg-white">
          <Image 
            src="/Photos/RihaHartWebsitePhoto.jpg" 
            alt="Riha Hart" 
            width={1000}
            height={1000}
            className="w-full h-auto  object-cover object-top rounded-[var(--radius-m)]"
          />
      </div>
    </>
  )
}

