"use client"
import { useEffect, useState, useRef } from 'react'
import { useRouter, usePathname } from 'next/navigation'
import useMobileDetection from '@/_utilities/useMobileDetection'
import { MenuButton, Button, ExitButton } from '@/components/Buttons'
import JumpingAnimation from './JumpingAnimation'
import LogoAnimation from '@/components/LogoAnimation'
import { useMenu } from '@/contexts/MenuContext'

export default function Menu() {
    const { isMenuOpen, closeMenu } = useMenu()
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
    const pathname = usePathname()
    const { isMobile, isTablet, isDesktop1440px } = useMobileDetection()
    const [isAnimatingOut, setIsAnimatingOut] = useState(false)
    const previousPathnameRef = useRef(pathname)
    const menuOpenPathnameRef = useRef<string | null>(null)

    // Prevent body scroll while menu is open (without affecting layout)
    useEffect(() => {
        if (!isMenuOpen) return

        const originalOverflow = document.body.style.overflow
        document.body.style.overflow = 'hidden'

        return () => {
            document.body.style.overflow = originalOverflow || ''
        }
    }, [isMenuOpen])

    // Close menu on escape key
    useEffect(() => {
        if (!isMenuOpen) return

        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                setIsAnimatingOut(true)
                setTimeout(() => {
                    closeMenu()
                    setIsAnimatingOut(false)
                }, isMobile ? 640 : 1000)
            }
        }

        document.addEventListener('keydown', handleEscape)
        return () => {
            document.removeEventListener('keydown', handleEscape)
        }
    }, [isMenuOpen, isMobile, closeMenu])

    // Track pathname when menu opens
    useEffect(() => {
        if (isMenuOpen) {
            // Store the pathname when menu opens
            menuOpenPathnameRef.current = pathname
            previousPathnameRef.current = pathname
        } else {
            // Reset when menu closes
            menuOpenPathnameRef.current = null
        }
    }, [isMenuOpen])

    // Close menu when route changes (after navigation completes)
    // Only close if pathname changed AFTER menu was opened (not on initial open)
    useEffect(() => {
        // Only close if:
        // 1. Menu is open
        // 2. We have a stored pathname from when menu opened
        // 3. Current pathname is different from when menu opened (navigation happened)
        if (
            isMenuOpen &&
            menuOpenPathnameRef.current !== null &&
            pathname !== menuOpenPathnameRef.current
        ) {
            previousPathnameRef.current = pathname
            setIsAnimatingOut(true)
            setTimeout(() => {
                closeMenu()
                setIsAnimatingOut(false)
            }, isMobile ? 640 : 1000)
        }
    }, [pathname, isMenuOpen, isMobile, closeMenu])

    // Reset animation state when menu closes
    useEffect(() => {
        if (!isMenuOpen) {
            setIsAnimatingOut(false)
        }
    }, [isMenuOpen])

    const handleClose = () => {
        setIsAnimatingOut(true)
        setTimeout(() => {
            closeMenu()
            setIsAnimatingOut(false)
        }, isMobile ? 640 : 1000)
    }

    const handleGetToKnowMe = () => {
        // If already on bio page, just close the menu
        if (pathname === '/me') {
            handleClose()
            return
        }
        // Start navigation immediately, menu stays open during navigation
        router.push('/me')
    }

    const handleProjects = () => {
        if (pathname === '/Work') {
            handleClose()
            return
        }
        router.push('/Work')
    }

    const handleLogoClick = () => {
        if (pathname === '/') {
            handleClose()
            return
        }
        router.push('/')
    }

    // Don't render if menu is not open
    if (!isMenuOpen) return null

    // Mobile (≤768px)
    if (isMobile) {
        return (
            <div className={`fixed inset-0 z-[9999] overflow-y-auto ${isAnimatingOut ? 'animate-slideOutMenuMobileRight' : 'animate-slideInMenuMobileRight'}`} style={{ background: "radial-gradient(ellipse 100% 70% at 50% 100%, rgba(120,0,20,0.6) 0%, transparent 90%), linear-gradient(180deg, #0a0a0a 0%, #1a0007 60%, #2d0010 100%)" }}>
                <div><div className='flex items-center justify-between py-[var(--spacing-xl)] px-[var(--spacing-xl)]'>
                    <div onClick={handleLogoClick} className="cursor-pointer" style={{ width: "88px" }}>
                        <LogoAnimation fps={24} heartGlow />
                    </div>
                    <ExitButton onClick={handleClose} size="small" aria-label="Close Menu" />
                </div></div>
                <div className="flex items-start justify-center h-[calc(100vh-120px)] ">
                    <div className="flex flex-col items-start px-[var(--spacing-lg)] pt-[var(--spacing-lg)] pb-[var(--spacing-8xl)] gap-[var(--spacing-md)] w-full">
                        <div className="flex flex-col items-center gap-[var(--spacing-xl)] w-full">
                            <MenuButton
                                text="Home"
                                onClick={handleLogoClick}
                                inverted={true}
                                isActive={pathname === '/'}
                            />
                            <MenuButton
                                text="Get to know me"
                                onClick={handleGetToKnowMe}
                                inverted={true}
                                isActive={pathname === '/me'}
                            />
                            <MenuButton
                                text="Projects"
                                onClick={handleProjects}
                                inverted={true}
                                isActive={pathname === '/Work'}
                            />
                        </div>
                        <div className="relative w-full">
                            <JumpingAnimation className="h-full max-w-[320px] px-[var(--spacing-lg)]" />
                            <div className="absolute bottom-[-30%] left-0 w-full z-10 flex items-start gap-[var(--spacing-xl)] px-[var(--spacing-lg)]">
                                <Button text="Email" onClick={handleEmailClick} variant="primary" />
                                <Button text="LinkedIn" onClick={handleLinkedInClick} variant="primary" />
                                <Button text="Instagram" onClick={handleInstagramClick} variant="primary" />
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
            <div className={`fixed inset-0 z-[9999] overflow-y-auto ${isAnimatingOut ? 'animate-slideOutMenuRight' : 'animate-slideInMenuRight'}`} style={{ background: "radial-gradient(ellipse 100% 70% at 50% 100%, rgba(120,0,20,0.6) 0%, transparent 90%), linear-gradient(180deg, #0a0a0a 0%, #1a0007 60%, #2d0010 100%)" }}>
                <div className="max-w-[900px] mx-auto">
                    <div><div className='flex items-center justify-between py-[var(--spacing-2xl)] px-[var(--spacing-6xl)]'>
                        <div onClick={handleLogoClick} className="cursor-pointer" style={{ width: "112px" }}>
                            <LogoAnimation fps={24} heartGlow />
                        </div>
                        <ExitButton onClick={handleClose} size="small" aria-label="Close Menu" />
                    </div></div>
                    <div className="flex items-start justify-center py-[var(--spacing-2xl)] px-[var(--spacing-6xl)] h-[calc(100vh-140px)]">
                        <div className="flex flex-col items-start px-[var(--spacing-lg)] pb-[var(--spacing-10xl)] gap-[var(--spacing-md)] w-full">
                            <div className="flex flex-col items-center gap-[var(--spacing-3xl)] w-full">
                                <MenuButton
                                    text="Home"
                                    onClick={handleLogoClick}
                                    inverted={true}
                                    isActive={pathname === '/'}
                                />
                                <MenuButton
                                    text="Get to know me"
                                    onClick={handleGetToKnowMe}
                                    inverted={true}
                                    isActive={pathname === '/me'}
                                />
                                <MenuButton
                                    text="Projects"
                                    onClick={handleProjects}
                                    inverted={true}
                                    isActive={pathname === '/Work'}
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

}
