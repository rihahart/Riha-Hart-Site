"use client"

import React, { createContext, useContext, useState, useEffect } from "react"

const VideoContext = createContext(undefined)

export function VideoProvider({ children }) {
  const [isHomepageVideoPaused, setIsHomepageVideoPaused] = useState(true)

  return (
    <VideoContext.Provider value={{ isHomepageVideoPaused, setIsHomepageVideoPaused }}>
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

