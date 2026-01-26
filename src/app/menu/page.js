"use client"
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import useMobileDetection from '@/_utilities/useMobileDetection'

export default function MenuPage() {
  const router = useRouter()
  const { isMobile, isTablet, isDesktop1440px } = useMobileDetection()
  const [isAnimatingOut, setIsAnimatingOut] = useState(false)

  // Close menu on escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        setIsAnimatingOut(true)
        setTimeout(() => {
          router.back()
        }, isMobile ? 640 : 1000)
      }
    }

    document.addEventListener('keydown', handleEscape)
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'unset'
    }
  }, [router, isMobile])

  const handleClose = () => {
    setIsAnimatingOut(true)
    setTimeout(() => {
      router.back()
    }, isMobile ? 640 : 1000)
  }

  const handleMenuClick = () => {
    handleClose()
  }

  // Mobile (≤768px)
  if (isMobile) {
    return (
      <div className={`fixed top-0 left-0 w-full h-full bg-[var(--darkblack)] z-[201] ${isAnimatingOut ? 'animate-slideOutMenuMobile' : 'animate-slideInMenuMobile'
        }`}>
        <div><div className='flex items-center justify-between py-[var(--spacing-xl)] px-[var(--spacing-xl)]'>
          <img
            src="/Icons/Logo/RihaHartLogo.svg"
            alt="Riha Hart Logo"
            style={{
              height: '40px',
              width: 'auto',
              objectFit: 'contain'
            }}
            loading="eager"
          />
          <button
            onClick={handleMenuClick}
            className="cursor-pointer"
            aria-label="Close Menu"
            style={{ transform: 'translateY(10px)' }}
          >
            <img
              src="/Icons/Exit/Exit.svg"
              alt="Close Menu"
              style={{ height: '18px', width: 'auto' }}
            />
          </button>
        </div></div>
        <div className="flex items-center justify-center h-[calc(100vh-120px)]">
          <p className="text-[var(--white)] text-2xl">Coming Soon</p>
        </div>
      </div>
    )
  }

  // Tablet (769px - 1024px)
  if (isTablet) {
    return (
      <div className={`fixed top-0 left-0 w-full h-full bg-[var(--darkblack)] z-[201] ${isAnimatingOut ? 'animate-slideOutMenu' : 'animate-slideInMenu'
        }`}>
        <div><div className='flex items-center justify-between py-[var(--spacing-2xl)] px-[var(--spacing-6xl)]'>
          <img
            src="/Icons/Logo/RihaHartLogo.svg"
            alt="Riha Hart Logo"
            style={{
              height: '50px',
              width: 'auto',
              objectFit: 'contain'
            }}
            loading="eager"
          />
          <button
            onClick={handleMenuClick}
            className="cursor-pointer"
            aria-label="Close Menu"
            style={{ transform: 'translateY(20px)' }}
          >
            <img
              src="/Icons/Exit/Exit.svg"
              alt="Close Menu"
              style={{ height: '20px', width: 'auto' }}
            />
          </button>
        </div></div>
        <div className="flex items-center justify-center h-[calc(100vh-140px)]">
          <p className="text-[var(--white)] text-3xl">Coming Soon</p>
        </div>
      </div>
    )
  }

  // Desktop 1440px (1025px - 1440px)
  if (isDesktop1440px) {
    return (
      <div className={`fixed top-0 left-0 w-full h-full bg-[var(--darkblack)] z-[201] ${isAnimatingOut ? 'animate-slideOutMenu' : 'animate-slideInMenu'
        }`}>
        <div><div className='flex items-center justify-between py-[var(--spacing-4xl)] px-[var(--spacing-8xl)]'>
          <img
            src="/Icons/Logo/RihaHartLogo.svg"
            alt="Riha Hart Logo"
            style={{
              height: '60px',
              width: 'auto',
              objectFit: 'contain'
            }}
            loading="eager"
          />
          <button
            onClick={handleMenuClick}
            className="cursor-pointer"
            aria-label="Close Menu"
            style={{ transform: 'translateY(20px)' }}
          >
            <img
              src="/Icons/Exit/Exit.svg"
              alt="Close Menu"
              style={{ height: '24px', width: 'auto' }}
            />
          </button>
        </div></div>
        <div className="flex items-center justify-center h-[calc(100vh-160px)]">
          <p className="text-[var(--white)] text-4xl">Coming Soon</p>
        </div>
      </div>
    )
  }

  // Large Desktop (>1440px)
  return (
    <div className={`fixed top-0 left-0 w-full h-full bg-[var(--darkblack)] z-[201] ${isAnimatingOut ? 'animate-slideOutMenu' : 'animate-slideInMenu'
      }`}>
      <div> <div className='flex items-center justify-between py-[var(--spacing-6xl)] px-[var(--spacing-12xl)]'>
        <img
          src="/Icons/Logo/RihaHartLogo.svg"
          alt="Riha Hart Logo"
          style={{
            height: '70px',
            width: 'auto',
            objectFit: 'contain'
          }}
          loading="eager"
        />
        <button
          onClick={handleMenuClick}
          className="cursor-pointer"
          aria-label="Close Menu"
          style={{ transform: 'translateY(20px)' }}
        >
          <img
            src="/Icons/Exit/Exit.svg"
            alt="Close Menu"
            style={{ height: '34px', width: 'auto' }}
          />
        </button>
      </div></div>
      <div className="flex items-center justify-center h-[calc(100vh-180px)]">
        <p className="text-[var(--white)] text-5xl">Coming Soon</p>
      </div>
    </div>
  )
}
