"use client"
import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import useMobileDetection from '@/_utilities/useMobileDetection'

const Navigation = () => {
  const router = useRouter()
  const { isMobile, isTablet, isDesktop1440px } = useMobileDetection()

  const handleMenuClick = () => {
    router.push('/menu')
  }

  // Mobile Navigation (≤768px)
  if (isMobile) {
    return (
      <>
        <nav className="w-full fixed top-0 left-0 z-[100] opacity-100" style={{ backgroundColor: 'rgba(12, 12, 12, 0)' }}>
          <div className="flex gap-[var(--spacing-m)] items-end py-[var(--spacing-m)] px-[var(--spacing-m)]">
           
            
            <div>
              <Image 
                src="/Icons/Logo/RihaHartLogo.svg" 
                alt="Riha Hart Logo" 
                width={100}
                height={43}
                priority
              />
            </div>
            <button 
              onClick={handleMenuClick}
              className="cursor-pointer text-white hover:opacity-70 transition-opacity px-4 py-2"
              aria-label="About me"
              style={{ fontFamily: 'var(--font-coyote)', fontSize: '34px', padding: 0, lineHeight: .7 }}
            >
              ABOUT ME<span style={{ fontWeight: 'bold' }}>.</span>
            </button>
          </div>
        </nav>
      </>
    )
  }

  // Tablet Navigation (769px - 1024px)
  if (isTablet) {
    return (
      <>
        <nav className="w-full py-6 px-6 fixed top-0 left-0 z-[100] opacity-100" style={{ backgroundColor: 'rgba(12, 12, 12, 0)' }}>
          <div className="flex gap-[var(--spacing-lg)] items-end">
          
            
            <div>
              <Image 
                src="/Icons/Logo/RihaHartLogo.svg" 
                alt="Riha Hart Logo" 
                width={128}
                height={54}
                priority
              />
            </div>
            <button 
              onClick={handleMenuClick}
              className="cursor-pointer text-white hover:opacity-70 transition-opacity px-4 py-2"
              aria-label="About me"
              style={{ fontFamily: 'var(--font-coyote)', fontSize: '42px', padding: 0, lineHeight: .7 }}
            >
              ABOUT ME<span style={{ fontWeight: 'bold' }}>.</span>
            </button>
          </div>
        </nav>
      </>
    )
  }

  // Desktop 1440px (1025px - 1440px)
  if (isDesktop1440px) {
    return (
      <>
        <nav className="w-full fixed top-0 left-0 z-[100] opacity-100" style={{ backgroundColor: 'rgba(12, 12, 12, 0)' }}>
          <div className="w-full mx-auto flex gap-[var(--spacing-lg)] items-end py-[var(--spacing-lg)] px-[var(--spacing-xl)]">
        
            <div>
              <Image 
                src="/Icons/Logo/RihaHartLogo.svg" 
                alt="Riha Hart Logo" 
                width={140}
                height={100}
                priority
              />
            </div>
            <button 
              onClick={handleMenuClick}
              className="cursor-pointer text-white hover:opacity-70 transition-opacity px-4 py-2"
              aria-label="About me"
              style={{ fontFamily: 'var(--font-coyote)', fontSize: '48px', padding: 0, lineHeight: .7  }}
            >
              ABOUT ME<span style={{ fontWeight: 'bold' }}>.</span>
            </button>
          </div>
        </nav>
      </>
    )
  }

  // Large Desktop (>1440px)
  return (
    <>
      <nav className="w-full fixed top-0 left-0 z-[100] opacity-100" style={{ backgroundColor: 'rgba(12, 12, 12, 0)' }}>
        <div className="flex gap-[var(--spacing-xl)] items-end py-[var(--spacing-lg)] px-[var(--spacing-2xl)]">
          <div>
            <Image 
              src="/Icons/Logo/RihaHartLogo.svg" 
              alt="Riha Hart Logo" 
              width={175}
              height={109}
              priority
            />
          </div>
          <button 
            onClick={handleMenuClick}
            className="cursor-pointer text-white hover:opacity-70 transition-opacity"
            aria-label="About me"
            style={{ fontFamily: 'var(--font-coyote)', fontSize: '60px', padding: 0, lineHeight: .7 }}
          >
            ABOUT ME.
          </button>
        </div>
      </nav>
    </>
  )
}

export default Navigation

