"use client"
import { useEffect, useState, useRef } from 'react'
import { useRouter, usePathname } from 'next/navigation'
import useMobileDetection from '@/_utilities/useMobileDetection'
import MenuButton from '@/components/MenuButton'
import Button from '@/components/Button'
import JumpingAnimation from '@/components/JumpingAnimation'
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
        if (pathname === '/bio') {
            handleClose()
            return
        }
        // Start navigation immediately, menu stays open during navigation
        router.push('/bio')
    }

    const handleJHMuralProject = () => {
        // If already on jh-mural-project page, just close the menu
        if (pathname === '/jh-mural-project') {
            handleClose()
            return
        }
        // Start navigation immediately, menu stays open during navigation
        router.push('/jh-mural-project')
    }

    const handleEverestFederal = () => {
        // If already on everest-federal-credit-union page, just close the menu
        if (pathname === '/everest-federal-credit-union') {
            handleClose()
            return
        }
        // Start navigation immediately, menu stays open during navigation
        router.push('/everest-federal-credit-union')
    }

    const handleOtherWork = () => {
        handleClose()
        // TODO: Add navigation when page is created
    }

    const handleLogoClick = () => {
        // If already on homepage, just close the menu
        if (pathname === '/') {
            handleClose()
            return
        }
        // Start navigation immediately, menu stays open during navigation
        router.push('/')
    }

    // Don't render if menu is not open
    if (!isMenuOpen) return null

    // Mobile (≤768px)
    if (isMobile) {
        return (
            <div className={`fixed inset-0 bg-[var(--darkblack)] z-[9999] overflow-y-auto ${isAnimatingOut ? 'animate-slideOutMenuMobile' : 'animate-slideInMenuMobile'}`}>
                <div><div className='flex items-center justify-between py-[var(--spacing-xl)] px-[var(--spacing-xl)]'>
                    <button onClick={handleLogoClick} className="cursor-pointer" aria-label="Home">
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
                    </button>
                    <button
                        onClick={handleClose}
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
                                alternateText="See my bio"
                                onClick={handleGetToKnowMe}
                                inverted={true}
                                isActive={pathname === '/bio'}
                            />
                            <MenuButton
                                text="JH Mural Project"
                                alternateText="View project"
                                onClick={handleJHMuralProject}
                                inverted={true}
                                isActive={pathname === '/jh-mural-project'}
                            />
                            <MenuButton
                                text="Everest Federal Credit Union"
                                alternateText="View project"
                                onClick={handleEverestFederal}
                                inverted={true}
                                isActive={pathname === '/everest-federal-credit-union'}
                            />
                            <MenuButton
                                text="Other work"
                                alternateText="View my work"
                                onClick={handleOtherWork}
                                inverted={true}
                            />
                        </div>
                        <div className="relative w-full">
                            <JumpingAnimation className="h-full max-w-[320px] px-[var(--spacing-lg)]" />
                            <div className="absolute bottom-[-30%] left-0 w-full z-10 flex items-start gap-[var(--spacing-xl)] px-[var(--spacing-lg)]">
                                <Button text="Email" alternateText="Email me" onClick={handleEmailClick} inverted={true} />
                                <Button text="LinkedIn" alternateText="Add me" onClick={handleLinkedInClick} inverted={true} />
                                <Button text="Instagram" alternateText="Follow me" onClick={handleInstagramClick} inverted={true} />
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
            <div className={`fixed inset-0 bg-[var(--darkblack)] z-[9999] overflow-y-auto ${isAnimatingOut ? 'animate-slideOutMenu' : 'animate-slideInMenu'}`}>
                <div className="max-w-[900px] mx-auto">
                    <div><div className='flex items-center justify-between py-[var(--spacing-2xl)] px-[var(--spacing-6xl)]'>
                        <button onClick={handleLogoClick} className="cursor-pointer" aria-label="Home">
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
                        </button>
                        <button
                            onClick={handleClose}
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
                                    alternateText="See my bio"
                                    onClick={handleGetToKnowMe}
                                    inverted={true}
                                    isActive={pathname === '/bio'}
                                />
                                <MenuButton
                                    text="JH Mural Project"
                                    alternateText="View project"
                                    onClick={handleJHMuralProject}
                                    inverted={true}
                                    isActive={pathname === '/jh-mural-project'}
                                />
                                <MenuButton
                                    text="Everest Federal Credit Union"
                                    alternateText="View project"
                                    onClick={handleEverestFederal}
                                    inverted={true}
                                    isActive={pathname === '/everest-federal-credit-union'}
                                />
                                <MenuButton
                                    text="Other work"
                                    alternateText="View my work"
                                    onClick={handleOtherWork}
                                    inverted={true}
                                />
                            </div>
                            <div className="relative w-full">
                                <JumpingAnimation className="h-full max-w-[400px] px-[var(--spacing-lg)]" />
                                <div className="absolute bottom-[-30%] left-0 w-full z-10 flex items-start gap-[var(--spacing-xl)] px-[var(--spacing-lg)]">
                                    <Button text="Email" alternateText="Email me" onClick={handleEmailClick} inverted={true} />
                                    <Button text="LinkedIn" alternateText="Add me" onClick={handleLinkedInClick} inverted={true} />
                                    <Button text="Instagram" alternateText="Follow me" onClick={handleInstagramClick} inverted={true} />
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
            <div className={`fixed inset-0 bg-[var(--darkblack)] z-[9999] overflow-y-auto ${isAnimatingOut ? 'animate-slideOutMenu' : 'animate-slideInMenu'}`}>
                <div className="max-w-[1200px] mx-auto">
                    <div><div className='flex items-center justify-between py-[var(--spacing-4xl)] px-[var(--spacing-8xl)]'>
                        <button onClick={handleLogoClick} className="cursor-pointer" aria-label="Home">
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
                        </button>
                        <button
                            onClick={handleClose}
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
                                    alternateText="See my bio"
                                    onClick={handleGetToKnowMe}
                                    inverted={true}
                                    isActive={pathname === '/bio'}
                                />
                                <MenuButton
                                    text="JH Mural Project"
                                    alternateText="See my work"
                                    onClick={handleJHMuralProject}
                                    inverted={true}
                                    isActive={pathname === '/jh-mural-project'}
                                />
                                <MenuButton
                                    text="Everest Federal Credit Union"
                                    alternateText="See my work"
                                    onClick={handleEverestFederal}
                                    inverted={true}
                                    isActive={pathname === '/everest-federal-credit-union'}
                                />
                                <MenuButton
                                    text="Other work"
                                    alternateText="See my work"
                                    onClick={handleOtherWork}
                                    inverted={true}
                                />
                            </div>
                            <div className="relative w-full">
                                <JumpingAnimation className="h-full max-w-[400px] px-[var(--spacing-lg)]" />
                                <div className="absolute bottom-[-20%] left-0 w-full z-10 flex items-start gap-[var(--spacing-xl)] px-[var(--spacing-lg)]">
                                    <Button text="Email" alternateText="Email me" onClick={handleEmailClick} inverted={true} />
                                    <Button text="LinkedIn" alternateText="Add me" onClick={handleLinkedInClick} inverted={true} />
                                    <Button text="Instagram" alternateText="Follow me" onClick={handleInstagramClick} inverted={true} />
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
        <div className={`fixed inset-0 bg-[var(--darkblack)] z-[9999] overflow-y-auto ${isAnimatingOut ? 'animate-slideOutMenu' : 'animate-slideInMenu'}`}>
            <div className="max-w-[1400px] mx-auto ">
                <div> <div className='flex items-center justify-between py-[var(--spacing-6xl)] px-[var(--spacing-12xl)]'>
                    <button onClick={handleLogoClick} className="cursor-pointer" aria-label="Home">
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
                    </button>
                    <button
                        onClick={handleClose}
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
                                alternateText="See my bio"
                                onClick={handleGetToKnowMe}
                                inverted={true}
                                isActive={pathname === '/bio'}
                            />
                            <MenuButton
                                text="JH Mural Project"
                                alternateText="View project"
                                onClick={handleJHMuralProject}
                                inverted={true}
                                isActive={pathname === '/jh-mural-project'}
                            />
                            <MenuButton
                                text="Everest Federal Credit Union"
                                alternateText="View project"
                                onClick={handleEverestFederal}
                                inverted={true}
                                isActive={pathname === '/everest-federal-credit-union'}
                            />
                            <MenuButton
                                text="Other work"
                                alternateText="View work"
                                onClick={handleOtherWork}
                                inverted={true}
                            />
                        </div>
                        <div className="relative w-full">
                            <JumpingAnimation className="h-full max-w-[450px] px-[var(--spacing-lg)]" />
                            <div className="absolute bottom-[-20%] left-0 w-full z-10 flex items-start gap-[var(--spacing-xl)] px-[var(--spacing-lg)]">
                                <Button text="Email" alternateText="Email me" onClick={handleEmailClick} inverted={true} />
                                <Button text="LinkedIn" alternateText="Add me" onClick={handleLinkedInClick} inverted={true} />
                                <Button text="Instagram" alternateText="Follow me" onClick={handleInstagramClick} inverted={true} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

