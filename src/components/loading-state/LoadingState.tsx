"use client"

import React, { useState, useEffect, useRef } from "react"
import useMobileDetection from "@/_utilities/useMobileDetection"
import { useVideo } from "@/contexts/VideoContext"

export default function LoadingState() {
  const { isMobile, isTablet } = useMobileDetection()
  const { showVideo, setShowVideo } = useVideo() as { showVideo: boolean; setShowVideo: (value: boolean) => void }
  const [isFadingOut, setIsFadingOut] = useState(false)
  const videoRef = useRef<HTMLVideoElement | null>(null)

  const isSmallScreen = isMobile || isTablet
  const videoSource = isSmallScreen
    ? "/Photos/LogoMobile.mp4"
    : "/Photos/LogoVideo.mp4"

  // Handle video playback for both mobile and desktop
  useEffect(() => {
    // Always return a cleanup function to ensure event listeners are removed
    const video = videoRef.current
    
    // Store handler references for cleanup
    let handleEnded: (() => void) | null = null
    let handleError: ((e: Event) => void) | null = null
    let handleLoadedMetadata: (() => void) | null = null
    let handleCanPlay: (() => void) | null = null
    let handleCanPlayThrough: (() => void) | null = null
    let handleLoadedData: (() => void) | null = null
    let handleLoadStart: (() => void) | null = null
    let handlePlaying: (() => void) | null = null
    let handleAnimationEnd: (() => void) | null = null

    // Cleanup function that always runs
    // This ensures all event listeners are properly cleaned up
    const cleanup = () => {
      // Remove event listeners if video element exists and handlers were set
      // We check handleEnded as a proxy for whether handlers were initialized
      if (video && handleEnded) {
        try {
          video.removeEventListener("ended", handleEnded)
          if (handleError) video.removeEventListener("error", handleError)
          if (handleLoadedMetadata) video.removeEventListener("loadedmetadata", handleLoadedMetadata)
          if (handleCanPlay) video.removeEventListener("canplay", handleCanPlay)
          if (handleCanPlayThrough) video.removeEventListener("canplaythrough", handleCanPlayThrough)
          if (handleLoadedData) video.removeEventListener("loadeddata", handleLoadedData)
          if (handleLoadStart) video.removeEventListener("loadstart", handleLoadStart)
          if (handlePlaying) video.removeEventListener("playing", handlePlaying)
        } catch (err) {
          // Silently handle case where element was removed from DOM
          console.warn("Error removing video event listeners:", err)
        }
      }
      
      // Remove animation end listener from the container
      const container = video?.parentElement
      if (container && handleAnimationEnd) {
        container.removeEventListener("animationend", handleAnimationEnd)
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

    const attemptPlay = async () => {
      if (hasStartedPlaying || hasFinished) return
      
      playAttempts++
      console.log(`Play attempt ${playAttempts}/${maxPlayAttempts}`)

      try {
        // Ensure video is ready
        if (video.readyState < 2) {
          console.log("Video not ready yet, readyState:", video.readyState)
          if (playAttempts < maxPlayAttempts) {
            // Use requestAnimationFrame for next attempt instead of setTimeout
            requestAnimationFrame(() => {
              requestAnimationFrame(() => attemptPlay())
            })
          }
          return
        }

        // Check if video format is supported
        if (video.error && video.error.code === video.error.MEDIA_ERR_SRC_NOT_SUPPORTED) {
          console.error("Video format not supported by browser")
          showHomepageOnError()
          return
        }

        await video.play()
        hasStartedPlaying = true
        console.log("Video playing successfully")
      } catch (err) {
        console.log("Play attempt failed:", err instanceof Error ? err.name : "Unknown", err instanceof Error ? err.message : String(err))
        
        if (playAttempts < maxPlayAttempts && !hasFinished) {
          // Use requestAnimationFrame for retry instead of setTimeout
          requestAnimationFrame(() => {
            requestAnimationFrame(() => attemptPlay())
          })
        } else if (!hasStartedPlaying) {
          console.log("All play attempts failed, hiding video overlay and showing homepage")
          // If all attempts failed, hide the video and show homepage immediately
          showHomepageOnError()
        }
      }
    }

    const finishVideo = () => {
      if (hasFinished) return
      
      hasFinished = true
      setIsFadingOut(true)
      
      // Listen for animation end event instead of using timeout
      const container = video.parentElement
      if (container) {
        handleAnimationEnd = () => {
          setShowVideo(false)
        }
        container.addEventListener("animationend", handleAnimationEnd)
      } else {
        // Fallback: if no container, hide immediately
        setShowVideo(false)
      }
    }

    const showHomepageOnError = () => {
      if (hasFinished) return
      
      hasFinished = true
      // Immediately show homepage without fade animation
      setShowVideo(false)
    }

    handleEnded = () => {
      console.log("Video ended")
      finishVideo()
    }

    handleError = (e: Event) => {
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
      
      // On error, immediately show homepage without fade
      showHomepageOnError()
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

    // Initial play attempt - use requestAnimationFrame instead of setTimeout
    requestAnimationFrame(() => {
      if (!hasStartedPlaying && video.readyState >= 2) {
        attemptPlay()
      }
    })

    // Always return cleanup function
    return cleanup
  }, [showVideo, isSmallScreen, videoSource, isMobile, setShowVideo])

  // Only render video overlay if showVideo is true
  if (!showVideo) {
    return null
  }

  return (
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
  )
}

