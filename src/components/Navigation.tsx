"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import useMobileDetection from '@/_utilities/useMobileDetection'
import { useVideo } from '@/contexts/VideoContext'

const Navigation = () => {
  const { isMobile, isTablet, isDesktop1440px } = useMobileDetection()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { showVideo } = useVideo()
  
  // Hide navigation only if loading video is showing
  const shouldHideNav = showVideo

  // Mobile Navigation (≤768px)
  if (isMobile) {
    return (
      <nav className={`w-full fixed top-0 left-0 z-50 transition-opacity duration-300 ${shouldHideNav ? 'opacity-0 pointer-events-none' : 'opacity-100'}`} style={{ backgroundColor: 'var(--darkblack)' }}>
        <div className="flex justify-between items-center py-[var(--spacing-m)] px-[var(--spacing-m)]">
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="cursor-pointer translate-y-[8px] brightness-0 invert opacity-80"
          >
            <Image 
              src="/Icons/Hamburger/HamburgerXSmall.svg" 
              alt="Menu" 
              width={34}
              height={32}
            />
          </button>
          
          <div className="opacity-80">
            <Image 
              src="/Icons/Logo/RihaHartLogo.svg" 
              alt="Riha Hart Logo" 
              width={120}
              height={43}
              priority
            />
          </div>
        </div>
      </nav>
    )
  }

  // Tablet Navigation (769px - 1024px)
  if (isTablet) {
    return (
      <nav className={`w-full py-6 px-6 fixed top-0 left-0 z-50 transition-opacity duration-300 ${shouldHideNav ? 'opacity-0 pointer-events-none' : 'opacity-100'}`} style={{ backgroundColor: 'var(--darkblack)' }}>
        <div className="flex justify-between items-center">
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="cursor-pointer brightness-0 invert opacity-80"
          >
            <Image 
              src="/Icons/Hamburger/HamburgerSmall.svg" 
              alt="Menu" 
              width={28}
              height={28}
            />
          </button>
          
          <div className="opacity-80">
            <Image 
              src="/Icons/Logo/RihaHartLogo.svg" 
              alt="Riha Hart Logo" 
              width={150}
              height={54}
              priority
            />
          </div>
        </div>
      </nav>
    )
  }

  // Desktop 1440px (1025px - 1440px)
  if (isDesktop1440px) {
    return (
      <nav className={`w-full fixed top-0 left-0 z-50 transition-opacity duration-300 ${shouldHideNav ? 'opacity-0 pointer-events-none' : 'opacity-100'}`} style={{ backgroundColor: 'var(--darkblack)' }}>
        <div className="w-full mx-auto flex justify-between items-center py-[var(--spacing-xl)] px-[var(--spacing-5xl)]">
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="cursor-pointer translate-y-[12px] brightness-0 invert opacity-80"
          >
            <Image 
              src="/Icons/Hamburger/HamburgerMedium.svg" 
              alt="Menu" 
              width={64}
              height={32}
            />
          </button>
          
          <div className="opacity-80">
            <Image 
              src="/Icons/Logo/RihaHartLogo.svg" 
              alt="Riha Hart Logo" 
              width={220}
              height={80}
              priority
            />
          </div>
        </div>
      </nav>
    )
  }

  // Large Desktop (>1440px)
  return (
    <nav className={`w-full fixed top-0 left-0 z-50 transition-opacity duration-300 ${shouldHideNav ? 'opacity-0 pointer-events-none' : 'opacity-100'}`} style={{ backgroundColor: 'var(--darkblack)' }}>
      <div className="flex justify-between py-[var(--spacing-2xl)] px-[var(--spacing-12xl)]">
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="cursor-pointer translate-y-[16px] brightness-0 invert opacity-80"
        >
          <Image 
            src="/Icons/Hamburger/HamburgerLarge.svg" 
            alt="Menu" 
            width={140}
            height={40}
          />
        </button>
        
        <div className="opacity-80">
          <Image 
            src="/Icons/Logo/RihaHartLogo.svg" 
            alt="Riha Hart Logo" 
            width={300}
            height={109}
            priority
          />
        </div>
      </div>
    </nav>
  )
}

export default Navigation

