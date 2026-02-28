"use client"
import { useEffect, useState, useRef } from 'react'
import { useRouter } from 'next/navigation'
import useMobileDetection from '@/_utilities/useMobileDetection'
import MenuButton from '@/components/MenuButton'
import Button from '@/components/Button'
import JumpingAnimation from '@/components/JumpingAnimation'

export default function MenuPage() {
  const handleEmailClick = () => {
    window.open('mailto:riha@rihahart.com', '_blank')
  }
  const handleLinkedInClick = () => {
    window.open('https://www.linkedin.com/in/riha-hart/', '_blank')
  }
  const handleInstagramClick = () => {
    window.open('https://www.instagram.com/riha_hart/', '_blank')
  }
  const router = useRouter()
  const { isMobile, isTablet, isDesktop1440px } = useMobileDetection()
  const [isAnimatingOut, setIsAnimatingOut] = useState(false)
  const scrollYRef = useRef(0)

  // Prevent body scroll while menu is open
  useEffect(() => {
    // Store current scroll position
    scrollYRef.current = window.scrollY

    // Simply prevent scrolling without changing body position
    // The menu overlay will cover the content
    const originalOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    return () => {
      // Restore overflow
      document.body.style.overflow = originalOverflow || ''
    }
  }, [])

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
    return () => {
      document.removeEventListener('keydown', handleEscape)
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

  const handleGetToKnowMe = () => {
    setIsAnimatingOut(true)
    setTimeout(() => {
      router.push('/bio')
    }, isMobile ? 640 : 1000)
  }

  const handleJHMuralProject = () => {
    setIsAnimatingOut(true)
    setTimeout(() => {
      router.push('/jh-mural-project')
    }, isMobile ? 640 : 1000)
  }

  const handleEverestFederal = () => {
    handleClose()
    // TODO: Add navigation when page is created
  }

  const handleOtherWork = () => {
    handleClose()
    // TODO: Add navigation when page is created
  }

  // Mobile (≤768px)
  if (isMobile) {
    return (
      <div className={`fixed inset-0 bg-[var(--darkblack)] z-[201] overflow-y-auto ${isAnimatingOut ? 'animate-slideOutMenuMobile' : 'animate-slideInMenuMobile'
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
        <div className="flex items-start justify-center h-[calc(100vh-120px)] ">
          <div className="flex flex-col items-start px-[var(--spacing-lg)] pt-[var(--spacing-lg)] pb-[var(--spacing-8xl)] gap-[var(--spacing-md)] w-full">
            <div className="flex flex-col items-center gap-[var(--spacing-xl)] w-full">
              <MenuButton
                text="Get to know me"
                onClick={handleGetToKnowMe}
                inverted={true}
              />
              <MenuButton
                text="JH Mural Project"
                onClick={handleJHMuralProject}
                inverted={true}
              />
              <MenuButton
                text="Everest Federal Credit Union"
                onClick={handleEverestFederal}
                inverted={true}
              />
              <MenuButton
                text="Other work"
                onClick={handleOtherWork}
                inverted={true}
              />
            </div>
            <div className="relative w-full">
              <JumpingAnimation className="h-full max-w-[320px] px-[var(--spacing-lg)]" />
              <div className="absolute bottom-[-30%] left-0 w-full z-10 flex items-start gap-[var(--spacing-xl)] px-[var(--spacing-lg)]">
                <Button text="Email" onClick={handleEmailClick} inverted={true} />
                <Button text="LinkedIn" onClick={handleLinkedInClick} inverted={true} />
                <Button text="Instagram" onClick={handleInstagramClick} inverted={true} />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  // Tablet (769px - 1024px)
  if (isTablet) {
    return (
      <div className={`fixed inset-0 bg-[var(--darkblack)] z-[201] overflow-y-auto ${isAnimatingOut ? 'animate-slideOutMenu' : 'animate-slideInMenu'
        }`}>
        <div className="max-w-[900px] mx-auto">
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
          <div className="flex items-start justify-center py-[var(--spacing-2xl)] px-[var(--spacing-6xl)] h-[calc(100vh-140px)]">
            <div className="flex flex-col items-start px-[var(--spacing-lg)] pb-[var(--spacing-10xl)] gap-[var(--spacing-md)] w-full">
              <div className="flex flex-col items-center gap-[var(--spacing-3xl)] w-full">
                <MenuButton
                  text="Get to know me"
                  onClick={handleGetToKnowMe}
                  inverted={true}
                />
                <MenuButton
                  text="JH Mural Project"
                  onClick={handleJHMuralProject}
                  inverted={true}
                />
                <MenuButton
                  text="Everest Federal Credit Union"
                  onClick={handleEverestFederal}
                  inverted={true}
                />
                <MenuButton
                  text="Other work"
                  onClick={handleOtherWork}
                  inverted={true}
                />
              </div>
              <div className="relative w-full">
                <JumpingAnimation className="h-full max-w-[400px] px-[var(--spacing-lg)]" />
                <div className="absolute bottom-[-30%] left-0 w-full z-10 flex items-start gap-[var(--spacing-xl)] px-[var(--spacing-lg)]">
                  <Button text="Email" onClick={handleEmailClick} inverted={true} />
                  <Button text="LinkedIn" onClick={handleLinkedInClick} inverted={true} />
                  <Button text="Instagram" onClick={handleInstagramClick} inverted={true} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  // Desktop 1440px (1025px - 1440px)
  if (isDesktop1440px) {
    return (
      <div className={`fixed inset-0 bg-[var(--darkblack)] z-[201] overflow-y-auto ${isAnimatingOut ? 'animate-slideOutMenu' : 'animate-slideInMenu'
        }`}>
        <div className="max-w-[1200px] mx-auto">
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
          <div className="flex items-start justify-center h-[calc(100vh-160px)]">
            <div className="flex flex-col items-start pt-[var(--spacing-2xl)] pb-[var(--spacing-12xl)] px-[var(--spacing-8xl)] w-full gap-[var(--spacing-sm)]">
              <div className="flex flex-col items-center gap-[var(--spacing-2xl)] w-full">
                <MenuButton
                  text="Get to know me"
                  onClick={handleGetToKnowMe}
                  inverted={true}
                />
                <MenuButton
                  text="JH Mural Project"
                  onClick={handleJHMuralProject}
                  inverted={true}
                />
                <MenuButton
                  text="Everest Federal Credit Union"
                  onClick={handleEverestFederal}
                  inverted={true}
                />
                <MenuButton
                  text="Other work"
                  onClick={handleOtherWork}
                  inverted={true}
                />
              </div>
              <div className="relative w-full">
                <JumpingAnimation className="h-full max-w-[400px] px-[var(--spacing-lg)]" />
                <div className="absolute bottom-[-20%] left-0 w-full z-10 flex items-start gap-[var(--spacing-xl)] px-[var(--spacing-lg)]">
                  <Button text="Email" onClick={handleEmailClick} inverted={true} />
                  <Button text="LinkedIn" onClick={handleLinkedInClick} inverted={true} />
                  <Button text="Instagram" onClick={handleInstagramClick} inverted={true} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  // Large Desktop (>1440px)
  return (
    <div className={`fixed inset-0 bg-[var(--darkblack)] z-[201] overflow-y-auto ${isAnimatingOut ? 'animate-slideOutMenu' : 'animate-slideInMenu'
      }`}>
      <div className="max-w-[1400px] mx-auto ">
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
        <div className="flex items-start justify-center  h-[calc(100vh-180px)]">
          <div className="flex flex-col items-start pt-[var(--spacing-2xl)] pb-[var(--spacing-12xl)] px-[var(--spacing-12xl)] w-full h-full gap-[var(--spacing-md)]">
            <div className="flex flex-col items-center gap-[var(--spacing-3xl)] w-full">
              <MenuButton
                text="Get to know me"
                onClick={handleGetToKnowMe}
                inverted={true}
              />
              <MenuButton
                text="JH Mural Project"
                onClick={handleJHMuralProject}
                inverted={true}
              />
              <MenuButton
                text="Everest Federal Credit Union"
                onClick={handleEverestFederal}
                inverted={true}
              />
              <MenuButton
                text="Other work"
                onClick={handleOtherWork}
                inverted={true}
              />
            </div>
            <div className="relative w-full">
              <JumpingAnimation className="h-full max-w-[450px] px-[var(--spacing-lg)]" />
              <div className="absolute bottom-[-20%] left-0 w-full z-10 flex items-start gap-[var(--spacing-xl)] px-[var(--spacing-lg)]">
                <Button text="Email" onClick={handleEmailClick} inverted={true} />
                <Button text="LinkedIn" onClick={handleLinkedInClick} inverted={true} />
                <Button text="Instagram" onClick={handleInstagramClick} inverted={true} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
