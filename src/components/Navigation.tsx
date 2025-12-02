"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import useMobileDetection from '@/_utilities/useMobileDetection'
import { useVideo } from '@/contexts/VideoContext'

const Navigation = () => {
  const { isMobile, isTablet, isDesktop1440px } = useMobileDetection()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { showVideo } = useVideo()

  // Mobile Navigation (≤768px)
  if (isMobile) {
    return (
      <nav className={`w-full py-4 px-4 fixed top-0 left-0 z-50 transition-opacity duration-300 ${showVideo ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
        <div className="flex justify-between items-center py-[var(--spacing-lg)] px-[var(--spacing-lg)]">
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="cursor-pointer translate-y-[8px]"
          >
            <Image 
              src="/Icons/Hamburger/HamburgerXSmall.svg" 
              alt="Menu" 
              width={34}
              height={32}
            />
          </button>
          
          <Image 
            src="/Icons/Logo/LogoLarge.svg" 
            alt="Riha Hart Logo" 
            width={140}
            height={100}
            priority
          />
        </div>
      </nav>
    )
  }

  // Tablet Navigation (769px - 1024px)
  if (isTablet) {
    return (
      <nav className={`w-full py-6 px-6 fixed top-0 left-0 z-50 transition-opacity duration-300 ${showVideo ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
        <div className="flex justify-between items-center">
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="cursor-pointer"
          >
            <Image 
              src="/Icons/Hamburger/HamburgerSmall.svg" 
              alt="Menu" 
              width={28}
              height={28}
            />
          </button>
          
          <Image 
            src="/Icons/Logo/LogoSmall.svg" 
            alt="Riha Hart Logo" 
            width={120}
            height={150}
            priority
          />
        </div>
      </nav>
    )
  }

  // Desktop 1440px (1025px - 1440px)
  if (isDesktop1440px) {
    return (
      <nav className={`w-full fixed top-0 left-0 z-50 transition-opacity duration-300 ${showVideo ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
        <div className="w-full mx-auto flex justify-between items-center py-[var(--spacing-xl)] px-[var(--spacing-5xl)]">
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="cursor-pointer translate-y-[12px]"
          >
            <Image 
              src="/Icons/Hamburger/HamburgerMedium.svg" 
              alt="Menu" 
              width={64}
              height={32}
            />
          </button>
          
          <Image 
            src="/Icons/Logo/LogoMedium.svg" 
            alt="Riha Hart Logo" 
            width={200}
            height={200}
            priority
          />
        </div>
      </nav>
    )
  }

  // Large Desktop (>1440px)
  return (
    <nav className={`w-full fixed top-0 left-0 z-50 transition-opacity duration-300 ${showVideo ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
      <div className="flex justify-between py-[var(--spacing-2xl)] px-[var(--spacing-12xl)]">
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="cursor-pointer translate-y-[16px]"
        >
          <Image 
            src="/Icons/Hamburger/HamburgerLarge.svg" 
            alt="Menu" 
            width={140}
            height={40}
          />
        </button>
        
        <Image 
          src="/Icons/Logo/LogoLarge.svg" 
          alt="Riha Hart Logo" 
          width={280}
          height={240}
          priority
        />
      </div>
    </nav>
  )
}

export default Navigation

