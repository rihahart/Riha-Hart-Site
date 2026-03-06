"use client"

import React from "react"
import Image from "next/image"
import useWindowWidth from "@/_utilities/useWindowWidth"

/**
 * Responsive dimensions by photo name. Breakpoints match GetToKnowMe / Re-educationAnimation:
 * mobile ≤768, tablet 769–1024, desktop 1025–1440, 1440+
 */

const DIMENSIONS = {
  DesignAndType: {
    mobile: { width: 200, height: 136 },
    "1024": { width: 320, height: 210 },
    "1400": { width: 350, height: 230 },
    "1600": { width: 400, height: 270 },
  },
  Manet: {
    mobile: { width: 120, height: 105 },
    "1024": { width: 150, height: 120 },
    "1400": { width: 200, height: 170 },
    "1600": { width: 240, height: 210 },
  },
  Amrita: {
    mobile: { width: 220, height: 179 },
    "1024": { width: 325, height: 260 },
    "1400": { width: 370, height: 300 },
    "1600": { width: 445, height: 360 },
  },
  VanGogh: {
    mobile: { width: 128, height: 158 },
    "1024": { width: 160, height: 200 },
    "1400": { width: 180, height: 230 },
    "1600": { width: 225, height: 281 },
  },
} as const

type PhotoName = keyof typeof DIMENSIONS

function usePhotoDimensions(photoName: PhotoName): { width: number; height: number } {
  const windowWidth = useWindowWidth()
  const dims = DIMENSIONS[photoName]

  if (windowWidth >= 1440) return dims["1600"]   // 1440px and up
  if (windowWidth >= 1025) return dims["1400"]   // 1025px – 1440px
  if (windowWidth >= 769) return dims["1024"]    // tablet 769–1024
  return dims.mobile                              // mobile
}

interface ResponsivePhotoProps {
  src: string
  alt: string
  className?: string
}

export function DesignAndType({ src, alt, className = "" }: ResponsivePhotoProps) {
  const { width, height } = usePhotoDimensions("DesignAndType")
  // Plain img for DesignandTypeLarge.png (very large file) so it loads reliably
  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      decoding="async"
      className={`object-contain object-center ${className}`.trim()}
      style={{ width, height: "auto", maxWidth: width }}
    />
  )
}

export function Manet({ src, alt, className = "" }: ResponsivePhotoProps) {
  const { width, height } = usePhotoDimensions("Manet")
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      unoptimized
      className={`object-contain object-center ${className}`.trim()}
      style={{ width, height: "auto", maxWidth: width }}
    />
  )
}

export function Amrita({ src, alt, className = "" }: ResponsivePhotoProps) {
  const { width, height } = usePhotoDimensions("Amrita")
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      unoptimized
      className={`object-contain object-center ${className}`.trim()}
      style={{ width, height: "auto", maxWidth: width }}
    />
  )
}

export function VanGogh({ src, alt, className = "" }: ResponsivePhotoProps) {
  const { width, height } = usePhotoDimensions("VanGogh")
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      unoptimized
      className={`object-contain object-center ${className}`.trim()}
      style={{ width, height: "auto", maxWidth: width }}
    />
  )
}
