"use client"
import { useRouter } from 'next/navigation'
import { useRef, useEffect } from 'react'
import useMobileDetection from '@/_utilities/useMobileDetection'

const Navigation = () => {
  const router = useRouter()
  const { isMobile, isTablet, isDesktop1440px } = useMobileDetection()
  const logoRef = useRef<HTMLImageElement>(null)

  const handleMenuClick = () => {
    router.push('/menu')
  }

  // Force GIF to reload on mount (page refresh)
  useEffect(() => {
    if (logoRef.current) {
      const img = logoRef.current
      const src = img.src
      // Force reload by temporarily removing and re-adding src
      img.src = ''
      img.src = src
    }
  }, [])

  // Mobile (≤768px)
  if (isMobile) {
    return (
      <nav className="fixed w-full top-0 left-0 right-0 z-[100]">
        <div className='flex items-center justify-between py-[var(--spacing-m)] px-[var(--spacing-lg)] bg-[var(--white)]'>

          <img
            ref={logoRef}
            src="/Photos/Homepage/LogoOneCount.gif"
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
            aria-label="Menu"
            style={{ transform: 'translateY(10px)' }}
          >
            <img
              src="/Icons/Hamburger/HamburgerLarge.svg"
              alt="Menu"
              style={{ height: '12px', width: 'auto' }}
            />
          </button>
        </div>
      </nav>
    )
  }

  // Tablet (769px - 1024px)
  if (isTablet) {
    return (
      <nav className="w-full fixed top-0 left-0 right-0 z-[100]">
        <div className='flex items-center justify-between py-[var(--spacing-lg)] bg-[var(--white)]' style={{ paddingLeft: 'clamp(4rem, 6rem, 10rem)', paddingRight: 'clamp(4rem, 6rem, 10rem)' }}>
          <img
            ref={logoRef}
            src="/Photos/Homepage/LogoOneCount.gif"
            alt="Riha Hart Logo"
            style={{
              height: '80px',
              width: 'auto',
              objectFit: 'contain'
            }}
            loading="eager"
          />
          <button
            onClick={handleMenuClick}
            className="cursor-pointer"
            aria-label="Menu"
            style={{ transform: 'translateY(20px)' }}
          >
            <img
              src="/Icons/Hamburger/HamburgerLarge.svg"
              alt="Menu"
              style={{ height: '15px', width: 'auto' }}
            />
          </button>
        </div>
      </nav>
    )
  }

  // Desktop 1440px (1025px - 1440px)
  if (isDesktop1440px) {
    return (
      <nav className="w-full fixed top-0 left-0 right-0 z-[100]">
        <div className='flex items-center justify-between py-[var(--spacing-xl)] px-[var(--spacing-8xl)] bg-[var(--white)]'>
          <div className='flex items-center w-full justify-center'>
            <img
              ref={logoRef}
              src="/Photos/Homepage/LogoOneCount.gif"
              alt="Riha Hart Logo"
              style={{
                height: '100px',
                width: 'auto',
                objectFit: 'contain'
              }}
              loading="eager"
            />
          </div>
          <button
            onClick={handleMenuClick}
            className="cursor-pointer"
            aria-label="Menu"
            style={{ transform: 'translateY(20px)' }}
          >
            <img
              src="/Icons/Hamburger/HamburgerLarge.svg"
              alt="Menu"
              style={{ height: '18px', width: 'auto' }}
            />
          </button>
        </div>
      </nav>
    )
  }

  // Large Desktop (>1440px)
  return (
    <nav className="w-full fixed top-0 left-0 right-0 z-[100]">
      <div className='flex items-center justify-between py-[var(--spacing-xl)] px-[var(--spacing-12xl)] bg-[var(--white)]'>
        <div className='flex items-center w-full justify-center'>
          <img
            ref={logoRef}
            src="/Photos/Homepage/LogoOneCount.gif"
            alt="Riha Hart Logo"
            style={{
              height: '120px',
              width: 'auto',
              objectFit: 'contain'
            }}
            loading="eager"
          />
        </div>
        <button
          onClick={handleMenuClick}
          className="cursor-pointer"
          aria-label="Menu"
          style={{ transform: 'translateY(20px)' }}
        >
          <img
            src="/Icons/Hamburger/HamburgerLarge.svg"
            alt="Menu"
            style={{ height: '20px', width: 'auto' }}
          />
        </button>
      </div>
    </nav>
  )
}

export default Navigation
