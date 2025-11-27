"use client"

import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import useMobileDetection from '@/_utilities/useMobileDetection'

export default function Home() {
  const { isMobile, isTablet, isDesktop1440px, isDesktop } = useMobileDetection()
  const [navHeight, setNavHeight] = useState(0)
  const spacerRef = useRef(null)

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
    
    // Try immediately and after a short delay to ensure nav is rendered
    updateSpacer()
    const timer = setTimeout(updateSpacer, 100)
    
    return () => clearTimeout(timer)
  }, [isMobile, isTablet, isDesktop1440px])

  useEffect(() => {
    if (typeof window !== 'undefined') {
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
  }, [isDesktop, isDesktop1440px])

  if (isMobile) {
    return (
      <>
        <div ref={spacerRef} />
        <Image 
          src="/Photos/RihaHartWebsitePhoto.jpg" 
          alt="Riha Hart" 
          width={400}
          height={540}
          className="w-full h-auto max-h-[540px] object-cover object-top rounded-[var(--radius-m)]"
        />
      </>
    )
  } 
  
  if (isTablet) {
    return (
      <>
        <div ref={spacerRef} />
        <Image 
          src="/Photos/RihaHartWebsitePhoto.jpg" 
          alt="Riha Hart" 
          width={600}
          height={810}
          className="w-full h-auto max-h-[810px] object-cover object-top"
        />
      </>
    )
  } 
  
  if (isDesktop1440px) {
    return (
      <>
        <div ref={spacerRef} />
        <div className="w-full flex justify-center items-center px-[var(--spacing-5xl)] pb-[var(--spacing-5xl)] pt-[var(--spacing-lg)]">
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
      <div className="w-full flex justify-center items-center mx-auto pt-[var(--spacing-2xl)] pb-[var(--spacing-12xl)] px-[var(--spacing-12xl)]">
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

