"use client"

import React, { createContext, useContext, useState } from "react"

const VideoContext = createContext(undefined)

export function VideoProvider({ children }) {
  // Always show loading video on page load/refresh
  const [showVideo, setShowVideo] = useState(true)
  const [isHomepageVideoPaused, setIsHomepageVideoPaused] = useState(true)

  return (
    <VideoContext.Provider value={{ showVideo, setShowVideo, isHomepageVideoPaused, setIsHomepageVideoPaused }}>
      {children}
    </VideoContext.Provider>
  )
}

export function useVideo() {
  const context = useContext(VideoContext)
  if (context === undefined) {
    throw new Error("useVideo must be used within a VideoProvider")
  }
  return context
}

