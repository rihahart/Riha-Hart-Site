"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import useMobileDetection from '@/_utilities/useMobileDetection'
import { useVideo } from '@/contexts/VideoContext'
import MenuOverlay from './MenuOverlay'

const Navigation = () => {
  const { isMobile, isTablet, isDesktop1440px } = useMobileDetection()
  const { showVideo } = useVideo()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  
  // Hide navigation only if loading video is showing
  const shouldHideNav = showVideo

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const handleMenuClose = () => {
    setIsMenuOpen(false)
  }

  // Mobile Navigation (≤768px)
  if (isMobile) {
    return (
      <>
        <nav className={`w-full fixed top-0 left-0 z-[100] transition-opacity duration-300 ${shouldHideNav ? 'opacity-0 pointer-events-none' : 'opacity-100'}`} style={{ backgroundColor: 'rgba(12, 12, 12, 0)' }}>
          <div className="flex gap-[var(--spacing-m)] items-center py-[var(--spacing-m)] px-[var(--spacing-m)]">
            <button 
              onClick={handleMenuToggle}
              className="cursor-pointer translate-y-[8px] brightness-0 invert p-2 -m-2"
              aria-label="Toggle menu"
            >
              <Image 
                src="/Icons/Hamburger/HamburgerXSmall.svg" 
                alt="Menu" 
                width={24}
                height={24}
              />
            </button>
            
            <div>
              <Image 
                src="/Icons/Logo/RihaHartLogo.svg" 
                alt="Riha Hart Logo" 
                width={100}
                height={43}
                priority
              />
            </div>
          </div>
        </nav>
        <MenuOverlay isOpen={isMenuOpen} onClose={handleMenuClose} />
      </>
    )
  }

  // Tablet Navigation (769px - 1024px)
  if (isTablet) {
    return (
      <>
        <nav className={`w-full py-6 px-6 fixed top-0 left-0 z-[100] transition-opacity duration-300 ${shouldHideNav ? 'opacity-0 pointer-events-none' : 'opacity-100'}`} style={{ backgroundColor: 'rgba(12, 12, 12, 0)' }}>
          <div className="flex gap-[var(--spacing-lg)] items-center">
            <button 
              onClick={handleMenuToggle}
              className="cursor-pointer translate-y-[6px] brightness-0 invert p-3 -m-3"
              aria-label="Toggle menu"
            >
              <Image 
                src="/Icons/Hamburger/HamburgerSmall.svg" 
                alt="Menu" 
                width={28}
                height={28}
              />
            </button>
            
            <div>
              <Image 
                src="/Icons/Logo/RihaHartLogo.svg" 
                alt="Riha Hart Logo" 
                width={128}
                height={54}
                priority
              />
            </div>
          </div>
        </nav>
        <MenuOverlay isOpen={isMenuOpen} onClose={handleMenuClose} />
      </>
    )
  }

  // Desktop 1440px (1025px - 1440px)
  if (isDesktop1440px) {
    return (
      <>
        <nav className={`w-full fixed top-0 left-0 z-[100] transition-opacity duration-300 ${shouldHideNav ? 'opacity-0 pointer-events-none' : 'opacity-100'}`} style={{ backgroundColor: 'rgba(12, 12, 12, 0)' }}>
          <div className="w-full mx-auto flex gap-[var(--spacing-xl)] items-center py-[var(--spacing-lg)] px-[var(--spacing-xl)]">
            <button 
              onClick={handleMenuToggle}
              className="cursor-pointer translate-y-[8px] brightness-0 invert p-4 -m-4"
              aria-label="Toggle menu"
            >
              <Image 
                src="/Icons/Hamburger/HamburgerMedium.svg" 
                alt="Menu" 
                width={42}
                height={42}
              />
            </button>
            
            <div>
              <Image 
                src="/Icons/Logo/RihaHartLogo.svg" 
                alt="Riha Hart Logo" 
                width={140}
                height={100}
                priority
              />
            </div>
          </div>
        </nav>
        <MenuOverlay isOpen={isMenuOpen} onClose={handleMenuClose} />
      </>
    )
  }

  // Large Desktop (>1440px)
  return (
    <>
      <nav className={`w-full fixed top-0 left-0 z-[100] transition-opacity duration-300 ${shouldHideNav ? 'opacity-0 pointer-events-none' : 'opacity-100'}`} style={{ backgroundColor: 'rgba(12, 12, 12, 0)' }}>
        <div className="flex gap-[var(--spacing-2xl)] py-[var(--spacing-lg)] px-[var(--spacing-2xl)]">
          <button 
            onClick={handleMenuToggle}
            className="cursor-pointer translate-y-[12px] brightness-0 invert p-4 -m-4"
            aria-label="Toggle menu"
          >
            <Image 
              src="/Icons/Hamburger/HamburgerLarge.svg" 
              alt="Menu" 
              width={60}
              height={40}
            />
          </button>
          
          <div>
            <Image 
              src="/Icons/Logo/RihaHartLogo.svg" 
              alt="Riha Hart Logo" 
              width={175}
              height={109}
              priority
            />
          </div>
        </div>
      </nav>
      <MenuOverlay isOpen={isMenuOpen} onClose={handleMenuClose} />
    </>
  )
}

export default Navigation

