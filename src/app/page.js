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
      
      const updatePausedState = () => {
        setIsHomepageVideoPaused(video.paused)
      }
      
      const playVideo = async () => {
        if (video.paused) {
          try {
            await video.play()
            updatePausedState()
            console.log("Homepage video started playing")
          } catch (err) {
            console.error("Failed to play homepage video:", err)
            updatePausedState()
          }
        }
      }
      
      // Try to play when video is ready
      if (video.readyState >= 2) {
        playVideo()
      } else {
        const handleCanPlay = () => {
          playVideo()
        }
        video.addEventListener('canplay', handleCanPlay, { once: true })
      }
      
      // Update state on pause/play events
      video.addEventListener('pause', updatePausedState)
      video.addEventListener('playing', updatePausedState)
      
      // Initial state
      updatePausedState()
      
      return () => {
        video.removeEventListener('pause', updatePausedState)
        video.removeEventListener('playing', updatePausedState)
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
        className="fixed left-0 right-0 bottom-0 z-0 w-full m-0 p-0"
        style={{ 
          top: `${navHeight}px`,
          height: navHeight > 0 ? `calc(100vh - ${navHeight}px)` : '100vh',
          margin: 0,
          padding: 0
        }}
      >
        <video
          ref={videoRef}
          src="/Photos/Homepage/PhotoWebsiteVideoMobile.mp4"
          muted
          playsInline
          className="w-full h-full object-contain animate-fadeInHomepage"
        />
      </div>
    )
  }

  // Tablet (769px - 1024px)
  if (isTablet) {
    return (
      <div 
        className="fixed left-0 right-0 bottom-0 z-0 w-full m-0 p-0"
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
          className="w-full h-full object-contain animate-fadeInHomepage"
        />
      </div>
    )
  }

  // Desktop 1440px (1025px - 1440px)
  if (isDesktop1440px) {
    return (
      <div 
        className="fixed left-0 right-0 bottom-0 z-0 w-full m-0 p-0"
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
          className="w-full h-full object-contain animate-fadeInHomepage"
        />
      </div>
    )
  }

  // Large Desktop (>1440px)
  return (
    <div 
      className="fixed left-0 right-0 bottom-0 z-0 w-full"
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
        className="w-full h-full object-cover animate-fadeInHomepage"
      />
    </div>
  )
}

