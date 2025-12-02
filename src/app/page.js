"use client"

import React, { useEffect, useState, useRef } from "react"
import useMobileDetection from "@/_utilities/useMobileDetection"
import { useVideo } from "@/contexts/VideoContext"

export default function Home() {
  const { isMobile, isTablet, isDesktop1440px } = useMobileDetection()
  const { showVideo, setIsHomepageVideoPaused } = useVideo()
  const [navHeight, setNavHeight] = useState(0)
  const videoRef = useRef(null)

  useEffect(() => {
    const updateNavHeight = () => {
      const nav = document.querySelector('nav')
      if (nav) {
        // Use getBoundingClientRect to get the exact bottom position
        const navRect = nav.getBoundingClientRect()
        setNavHeight(navRect.bottom)
      }
    }

    // Use requestAnimationFrame to ensure accurate measurement after render
    const measureNav = () => {
      requestAnimationFrame(() => {
        updateNavHeight()
      })
    }

    // Initial measurement
    measureNav()

    // Update on resize
    window.addEventListener('resize', measureNav)
    
    // Also check after a short delay to ensure nav is fully rendered
    const timeout = setTimeout(measureNav, 100)
    
    // Use MutationObserver to detect when nav content changes
    const nav = document.querySelector('nav')
    if (nav) {
      const observer = new MutationObserver(measureNav)
      observer.observe(nav, { 
        childList: true, 
        subtree: true, 
        attributes: true,
        attributeFilter: ['class', 'style']
      })

      return () => {
        window.removeEventListener('resize', measureNav)
        clearTimeout(timeout)
        observer.disconnect()
      }
    }

    return () => {
      window.removeEventListener('resize', measureNav)
      clearTimeout(timeout)
    }
  }, [isMobile, isTablet, isDesktop1440px])

  // Play homepage video only after LoadingState is completed
  useEffect(() => {
    if (!showVideo && videoRef.current) {
      const video = videoRef.current
      
      // Set mobile-specific attributes for better mobile playback
      video.muted = true
      video.playsInline = true
      video.preload = "auto"
      video.setAttribute("webkit-playsinline", "true")
      video.setAttribute("x5-playsinline", "true")
      video.setAttribute("x5-video-player-type", "h5")
      video.setAttribute("playsinline", "true")
      
      const updatePausedState = () => {
        setIsHomepageVideoPaused(video.paused)
      }
      
      let hasStartedPlaying = false
      let playAttempts = 0
      const maxPlayAttempts = 5
      
      const attemptPlay = async () => {
        if (hasStartedPlaying) return
        
        playAttempts++
        console.log(`Homepage video play attempt ${playAttempts}/${maxPlayAttempts}`)

        try {
          // Check if video format is supported
          if (video.error && video.error.code === video.error.MEDIA_ERR_SRC_NOT_SUPPORTED) {
            console.error("Video format not supported by browser")
            setIsHomepageVideoPaused(false) // Show navigation anyway
            return
          }

          // Try to play immediately, even if video isn't fully loaded
          await video.play()
          hasStartedPlaying = true
          updatePausedState()
          console.log("Homepage video playing successfully")
          // Double-check that video is actually playing
          if (video.paused) {
            console.warn("Video.play() succeeded but video is still paused, attempting to resume")
            await video.play()
            updatePausedState()
          }
        } catch (err) {
          console.log("Play attempt failed:", err instanceof Error ? err.name : "Unknown", err instanceof Error ? err.message : String(err))
          
          // If video isn't ready yet, retry more aggressively
          if (video.readyState < 2 && playAttempts < maxPlayAttempts) {
            // Retry immediately with requestAnimationFrame
            requestAnimationFrame(() => attemptPlay())
          } else if (playAttempts < maxPlayAttempts) {
            // Use requestAnimationFrame for retry
            requestAnimationFrame(() => {
              requestAnimationFrame(() => attemptPlay())
            })
          } else if (!hasStartedPlaying) {
            console.log("All play attempts failed, showing navigation anyway")
            // If all attempts failed, show navigation anyway so homepage is visible
            setIsHomepageVideoPaused(false)
          }
        }
      }
      
      // Handle playing event - ensure video is not paused
      const handlePlaying = () => {
        hasStartedPlaying = true
        updatePausedState()
        // Ensure video is not paused
        if (video.paused) {
          console.log("Video was paused, resuming playback")
          video.play().catch(err => {
            console.error("Failed to resume video playback:", err)
          })
        }
      }
      
      // Try to play immediately
      attemptPlay()
      
      // Also try when video is ready
      if (video.readyState >= 2) {
        attemptPlay()
      } else {
        const handleCanPlay = () => {
          if (!hasStartedPlaying) {
            attemptPlay()
          }
        }
        const handleLoadedData = () => {
          if (!hasStartedPlaying && video.readyState >= 2) {
            attemptPlay()
          }
        }
        const handleCanPlayThrough = () => {
          if (!hasStartedPlaying) {
            attemptPlay()
          }
        }
        video.addEventListener('canplay', handleCanPlay, { once: true })
        video.addEventListener('loadeddata', handleLoadedData, { once: true })
        video.addEventListener('canplaythrough', handleCanPlayThrough, { once: true })
      }
      
      // Listen for playing event
      video.addEventListener('playing', handlePlaying)
      
      // Update state on pause/play events
      video.addEventListener('pause', updatePausedState)
      
      // Check periodically if video gets paused
      const checkVideoPlaying = () => {
        updatePausedState()
        if (video && !video.paused && hasStartedPlaying && !video.ended) {
          // Video is playing, all good
          return
        }
        if (video && video.paused && hasStartedPlaying && !video.ended && video.readyState >= 2) {
          console.log("Video was paused unexpectedly, attempting to resume")
          video.play().catch(err => {
            console.error("Failed to resume paused video:", err)
          })
        }
      }
      
      const playingCheckInterval = setInterval(checkVideoPlaying, 500)
      
      // Initial state
      updatePausedState()
      
      return () => {
        clearInterval(playingCheckInterval)
        video.removeEventListener('playing', handlePlaying)
        video.removeEventListener('pause', updatePausedState)
      }
    } else if (showVideo && videoRef.current) {
      // If LoadingState is still showing, ensure homepage video is paused
      const video = videoRef.current
      if (!video.paused) {
        video.pause()
      }
      setIsHomepageVideoPaused(true)
    }
  }, [showVideo, setIsHomepageVideoPaused])

  // Mobile (≤768px)
  if (isMobile) {
    return (
      <div 
        className="fixed left-0 right-0 z-0 w-full m-0 p-0"
        style={{ 
          top: `${navHeight}px`,
          bottom: 0,
          margin: 0,
          padding: 0
        }}
      >
        <video
          ref={videoRef}
          src="/Photos/Homepage/PhotoWebsiteVideoMobile.mp4"
          muted
          playsInline
          className="w-full h-full object-contain"
          style={{ 
            width: '100%',
            height: '100%',
            objectFit: 'contain'
          }}
        />
      </div>
    )
  }

  // Tablet (769px - 1024px)
  if (isTablet) {
    return (
      <div 
        className="fixed left-0 right-0 bottom-0 z-0 w-full h-full m-0 p-0"
        style={{ 
          top: `${navHeight}px`,
          height: navHeight > 0 ? `calc(100vh - ${navHeight}px)` : '100vh',
          margin: 0,
          padding: 0
        }}
      >
        <video
          ref={videoRef}
          src="/Photos/Homepage/PhotoWebsiteVideoScreen.mp4"
          muted
          playsInline
          className="w-full h-full object-contain"
          style={{ height: '100%' }}
        />
      </div>
    )
  }

  // Desktop 1440px (1025px - 1440px)
  if (isDesktop1440px) {
    return (
      <div 
        className="fixed left-0 right-0 bottom-0 z-0 w-full h-full m-0 p-0"
        style={{ 
          top: `${navHeight}px`,
          height: navHeight > 0 ? `calc(100vh - ${navHeight}px)` : '100vh',
          margin: 0,
          padding: 0
        }}
      >
        <video
          ref={videoRef}
          src="/Photos/Homepage/PhotoWebsiteVideoScreen.mp4"
          muted
          playsInline
          className="w-full h-full object-contain"
          style={{ height: '100%' }}
        />
      </div>
    )
  }

  // Large Desktop (>1440px)
  return (
    <div 
      className="fixed left-0 right-0 bottom-0 z-0 w-full h-full"
      style={{ 
        top: `${navHeight}px`,
        height: navHeight > 0 ? `calc(100vh - ${navHeight}px)` : '100vh'
      }}
    >
      <video
        ref={videoRef}
        src="/Photos/Homepage/PhotoWebsiteVideoScreen.mp4"
        muted
        playsInline
        className="w-full h-full object-contain animate-fadeInHomepage"
        style={{ height: '100%' }}
      />
    </div>
  )
}

