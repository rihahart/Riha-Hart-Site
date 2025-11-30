"use client"

import React, { useState, useEffect, useRef } from "react"
import Image from "next/image"
import useMobileDetection from "@/_utilities/useMobileDetection"
import { useVideo } from "@/contexts/VideoContext"

export default function Home() {
  const { isMobile, isTablet, isDesktop1440px } = useMobileDetection()
  const { showVideo, setShowVideo } = useVideo()
  const [isFadingOut, setIsFadingOut] = useState(false)
  const videoRef = useRef(null)

  const isSmallScreen = isMobile || isTablet
  const videoSource = isSmallScreen
    ? "/Photos/LogoMobile.mp4"
    : "/Photos/LogoVideo.mp4"

  // Handle video playback for both mobile and desktop
  useEffect(() => {
    // Always return a cleanup function to ensure event listeners are removed
    const video = videoRef.current
    let timeoutId = null
    let initialPlayTimeout = null
    // Track all retry timeouts from attemptPlay
    const retryTimeouts = new Set()
    
    // Store handler references for cleanup
    let handleEnded = null
    let handleError = null
    let handleLoadedMetadata = null
    let handleCanPlay = null
    let handleCanPlayThrough = null
    let handleLoadedData = null
    let handleLoadStart = null
    let handlePlaying = null

    // Cleanup function that always runs
    // This ensures all timeouts and event listeners are properly cleaned up
    const cleanup = () => {
      // Clear all timeouts
      if (timeoutId) {
        clearTimeout(timeoutId)
        timeoutId = null
      }
      if (initialPlayTimeout) {
        clearTimeout(initialPlayTimeout)
        initialPlayTimeout = null
      }
      
      // Clear all retry timeouts from attemptPlay
      retryTimeouts.forEach(timeout => clearTimeout(timeout))
      retryTimeouts.clear()
      
      // Remove event listeners if video element exists and handlers were set
      // We check handleEnded as a proxy for whether handlers were initialized
      if (video && handleEnded) {
        try {
          video.removeEventListener("ended", handleEnded)
          video.removeEventListener("error", handleError)
          video.removeEventListener("loadedmetadata", handleLoadedMetadata)
          video.removeEventListener("canplay", handleCanPlay)
          video.removeEventListener("canplaythrough", handleCanPlayThrough)
          video.removeEventListener("loadeddata", handleLoadedData)
          video.removeEventListener("loadstart", handleLoadStart)
          video.removeEventListener("playing", handlePlaying)
        } catch (err) {
          // Silently handle case where element was removed from DOM
          console.warn("Error removing video event listeners:", err)
        }
      }
    }

    // Early return if showVideo is false, but cleanup will still run on next render
    if (!showVideo) {
      return cleanup
    }

    if (!video) {
      console.log("Video ref not available yet")
      return cleanup
    }

    console.log("Setting up video, source:", videoSource, "isMobile:", isMobile)

    let hasFinished = false
    let hasStartedPlaying = false
    let playAttempts = 0
    const maxPlayAttempts = 5
    const startTime = Date.now()

    const attemptPlay = async () => {
      if (hasStartedPlaying || hasFinished) return
      
      playAttempts++
      console.log(`Play attempt ${playAttempts}/${maxPlayAttempts}`)

      try {
        // Ensure video is ready
        if (video.readyState < 2) {
          console.log("Video not ready yet, readyState:", video.readyState)
          if (playAttempts < maxPlayAttempts) {
            const retryTimeout = setTimeout(() => attemptPlay(), 200)
            retryTimeouts.add(retryTimeout)
          }
          return
        }

        // Check if video format is supported
        if (video.error && video.error.code === video.error.MEDIA_ERR_SRC_NOT_SUPPORTED) {
          console.error("Video format not supported by browser")
          finishVideo()
          return
        }

        await video.play()
        hasStartedPlaying = true
        console.log("Video playing successfully")
      } catch (err) {
        console.log("Play attempt failed:", err.name, err.message)
        
        if (playAttempts < maxPlayAttempts && !hasFinished) {
          // Retry after a delay - track this timeout
          const retryTimeout = setTimeout(() => attemptPlay(), 300)
          retryTimeouts.add(retryTimeout)
        } else if (!hasStartedPlaying) {
          console.log("All play attempts failed, but video will still be visible")
          // Don't immediately finish - let timeout handle it
        }
      }
    }

    const finishVideo = () => {
      if (hasFinished) return
      
      hasFinished = true
      setIsFadingOut(true)
      const finishTimeout = setTimeout(() => {
        setShowVideo(false)
      }, 300)
      retryTimeouts.add(finishTimeout)
    }

    // Hard timeout so we never block the page
    timeoutId = setTimeout(() => {
      console.log("Video timeout reached, hiding overlay")
      finishVideo()
    }, 6000)

    handleEnded = () => {
      console.log("Video ended")
      finishVideo()
    }

    handleError = (e) => {
      const error = video.error
      if (error) {
        console.error("Video error code:", error.code, "message:", error.message)
        switch (error.code) {
          case error.MEDIA_ERR_ABORTED:
            console.error("Video loading aborted")
            break
          case error.MEDIA_ERR_NETWORK:
            console.error("Network error loading video")
            break
          case error.MEDIA_ERR_DECODE:
            console.error("Video decode error - codec issue")
            break
          case error.MEDIA_ERR_SRC_NOT_SUPPORTED:
            console.error("Video format not supported - file may need to be re-encoded")
            console.error("Recommended: MP4 with H.264 video codec and AAC audio codec")
            break
        }
      } else {
        console.error("Video error event fired but no error details")
      }
      
      finishVideo()
    }

    handleLoadedMetadata = () => {
      console.log("Video metadata loaded, duration:", video.duration, "videoWidth:", video.videoWidth, "videoHeight:", video.videoHeight)
      video.currentTime = 0
    }

    handleCanPlay = () => {
      console.log("Video can play, readyState:", video.readyState)
      if (!hasStartedPlaying) {
        attemptPlay()
      }
    }

    handleCanPlayThrough = () => {
      console.log("Video can play through")
      if (!hasStartedPlaying) {
        attemptPlay()
      }
    }

    handleLoadedData = () => {
      console.log("Video data loaded, readyState:", video.readyState)
      if (!hasStartedPlaying && video.readyState >= 2) {
        attemptPlay()
      }
    }

    handleLoadStart = () => {
      console.log("Video load started")
    }

    handlePlaying = () => {
      hasStartedPlaying = true
      console.log("Video is now playing")
    }

    // Set video properties for mobile autoplay BEFORE setting src
    video.muted = true
    video.playsInline = true
    video.preload = "auto"
    video.setAttribute("webkit-playsinline", "true")
    video.setAttribute("x5-playsinline", "true")
    video.setAttribute("x5-video-player-type", "h5")
    video.setAttribute("playsinline", "true")

    // Clear any existing sources and set new one with type
    video.src = ""
    video.removeAttribute("src")
    
    // Create a source element approach or set src with type checking
    if (video.canPlayType && video.canPlayType('video/mp4; codecs="avc1.42E01E, mp4a.40.2"')) {
      console.log("Browser supports H.264/AAC MP4")
    } else {
      console.warn("Browser may not support standard MP4 format")
    }

    // Set video source
    video.src = videoSource

    // Add event listeners
    video.addEventListener("ended", handleEnded)
    video.addEventListener("error", handleError)
    video.addEventListener("loadedmetadata", handleLoadedMetadata)
    video.addEventListener("canplay", handleCanPlay)
    video.addEventListener("canplaythrough", handleCanPlayThrough)
    video.addEventListener("loadeddata", handleLoadedData)
    video.addEventListener("loadstart", handleLoadStart)
    video.addEventListener("playing", handlePlaying)

    // Load the video
    video.load()

    // Initial play attempt after video is ready
    initialPlayTimeout = setTimeout(() => {
      if (!hasStartedPlaying) {
        attemptPlay()
      }
    }, 300)

    // Always return cleanup function
    return cleanup
  }, [showVideo, isSmallScreen, videoSource, isMobile])

  const imageProps = {
    src: "/Photos/RihaHartWebsitePhoto.jpg",
    alt: "Riha Hart",
    className: "w-full h-full object-cover animate-fadeInHomepage",
  }

  return (
    <div className="fixed inset-0 z-0">
      {/* Main image (always visible) */}
      <Image
        {...imageProps}
        fill
        sizes="100vw"
        priority
      />

      {/* Video overlay (only while showVideo is true) */}
      {showVideo && (
        <div
          className={`fixed inset-0 z-[9999] ${
            isFadingOut ? "animate-fadeOutVideo" : ""
          }`}
        >
          <video
            ref={videoRef}
            className="absolute inset-0 w-full h-full object-cover"
            muted
            playsInline
            autoPlay
            preload="auto"
            webkit-playsinline="true"
            x5-playsinline="true"
            x5-video-player-type="h5"
          >
            <source src={videoSource} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      )}
    </div>
  )
}

