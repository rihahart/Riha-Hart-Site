"use client"

import { useRouter, usePathname } from "next/navigation"
import { useRef, useEffect, useLayoutEffect, useState } from "react"
import useMobileDetection from "@/_utilities/useMobileDetection"
import { useMenu } from "@/contexts/MenuContext"
import HamburgerButton from "./HamburgerButton"

const Navigation = () => {
  const router = useRouter()
  const { isMobile, isTablet, isDesktop1440px } = useMobileDetection()
  const [isScrolled, setIsScrolled] = useState(false)
  const [fanActive, setFanActive] = useState(false)
  const [hideOnScroll, setHideOnScroll] = useState(false)
  const lastScrollY = useRef(0)
  const { openMenu } = useMenu()

  const logoRef = useRef<HTMLImageElement>(null)
  const navRef = useRef<HTMLElement>(null)
  const pathname = usePathname()

  const handleMenuClick = () => openMenu()
  const handleLogoClick = () => router.push("/")

  const logoSrc = "/Photos/Homepage/LogoOneCount.gif"

  const reloadLogo = () => {
    if (logoRef.current) {
      const img = logoRef.current
      img.src = ""
      img.src = logoSrc
    }
  }

  // Replay on mount, every 1 minute, and on route change
  useEffect(() => {
    reloadLogo()
    const interval = setInterval(reloadLogo, 60 * 1000) // 1 minute
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    reloadLogo()
  }, [pathname])

  // Set --nav-h to nav height (for fixed header offset)
  useLayoutEffect(() => {
    const setNavHeight = () => {
      if (!navRef.current) return
      const h = navRef.current.offsetHeight
      document.documentElement.style.setProperty("--nav-h", `${h}px`)
    }

    setNavHeight()
    window.addEventListener("resize", setNavHeight)
    return () => window.removeEventListener("resize", setNavHeight)
  }, [isMobile, isTablet, isDesktop1440px])

  // Track scroll for shadow + hide/show on non-homepage
  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY
      setIsScrolled(currentY > 0)
      setHideOnScroll(currentY > lastScrollY.current && currentY > 80)
      lastScrollY.current = currentY
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [pathname])

  // Hide nav when card fan section is active
  useEffect(() => {
    const handler = (e: Event) => {
      setFanActive((e as CustomEvent).detail.active)
    }
    window.addEventListener("fan-section", handler)
    return () => window.removeEventListener("fan-section", handler)
  }, [])

  // IMPORTANT: fixed classes must be on EVERY return branch
  const navClass = `w-full fixed top-0 left-0 z-50 bg-[var(--color-primary-inverse)] transition-transform duration-300 ease-in-out ${isScrolled ? "shadow-md" : ""} ${fanActive || hideOnScroll ? "-translate-y-full" : "translate-y-0"}`

  // Mobile
  if (isMobile) {
    return (
      <nav ref={navRef} className={navClass}>
        <div className="flex items-center justify-between py-[var(--spacing-lg)] px-[var(--spacing-lg)]">
          <button onClick={handleLogoClick} className="cursor-pointer" aria-label="Home">
            <img ref={logoRef} src={logoSrc} alt="Riha Hart Logo" style={{ height: "70px", width: "auto", objectFit: "contain" }} loading="eager" />
          </button>
          <div className="nav-hamburger-wrap flex items-center justify-center">
            <HamburgerButton onClick={handleMenuClick} size="small" />
          </div>
        </div>
      </nav>
    )
  }

  // Tablet
  if (isTablet) {
    return (
      <nav ref={navRef} className={navClass}>
        <div className="flex items-center justify-between py-[var(--spacing-m)] px-[var(--spacing-3xl)]">
          <button onClick={handleLogoClick} className="cursor-pointer" aria-label="Home">
            <img ref={logoRef} src={logoSrc} alt="Riha Hart Logo" style={{ height: "80px", width: "auto", objectFit: "contain" }} loading="eager" />
          </button>
          <div className="nav-hamburger-wrap flex items-center justify-center">
            <HamburgerButton onClick={handleMenuClick} size="small" />
          </div>
        </div>
      </nav>
    )
  }

  // Desktop 1440
  if (isDesktop1440px) {
    return (
      <nav ref={navRef} className={navClass}>
        <div className="flex items-center justify-between py-[var(--spacing-m)] px-[var(--spacing-3xl)] ">
          <div className="flex items-center w-full justify-center">
            <button onClick={handleLogoClick} className="cursor-pointer" aria-label="Home">
              <img ref={logoRef} src={logoSrc} alt="Riha Hart Logo" style={{ height: "100px", width: "auto", objectFit: "contain" }} loading="eager" />
            </button>
          </div>
          <div className="nav-hamburger-wrap flex items-center justify-center">
            <HamburgerButton onClick={handleMenuClick} size="large" />
          </div>
        </div>
      </nav>
    )
  }

  // Large Desktop
  return (
    <nav ref={navRef} className={navClass}>
      <div className="flex w-full max-w-[1600px] mx-auto items-center justify-between py-[var(--spacing-m)] px-[var(--spacing-3xl)]">
        <div className="flex items-center w-full justify-center">
          <button onClick={handleLogoClick} className="cursor-pointer" aria-label="Home">
            <img ref={logoRef} src={logoSrc} alt="Riha Hart Logo" style={{ height: "120px", width: "auto", objectFit: "contain" }} loading="eager" />
          </button>
        </div>
        <div className="nav-hamburger-wrap flex items-center justify-center">
          <HamburgerButton onClick={handleMenuClick} size="large" />
        </div>
      </div>
    </nav>
  )
}

export default Navigation