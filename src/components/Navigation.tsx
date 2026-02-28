"use client"

import { useRouter } from "next/navigation"
import { useRef, useEffect, useLayoutEffect, useState } from "react"
import useMobileDetection from "@/_utilities/useMobileDetection"
import { useMenu } from "@/contexts/MenuContext"

const Navigation = () => {
  const router = useRouter()
  const { isMobile, isTablet, isDesktop1440px } = useMobileDetection()
  const [isScrolled, setIsScrolled] = useState(false)
  const { openMenu } = useMenu()

  const logoRef = useRef<HTMLImageElement>(null)
  const navRef = useRef<HTMLElement>(null)

  const handleMenuClick = () => openMenu()
  const handleLogoClick = () => router.push("/")

  const logoSrc = "/Photos/Homepage/LogoOneCount.gif"

  // Force GIF reload on mount and every 3 minutes so animation restarts
  useEffect(() => {
    const reloadLogo = () => {
      if (logoRef.current) {
        const img = logoRef.current
        img.src = ""
        img.src = logoSrc
      }
    }
    reloadLogo()
    const interval = setInterval(reloadLogo, 3 * 60 * 1000) // 3 minutes
    return () => clearInterval(interval)
  }, [logoSrc])

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

  // Track scroll for shadow
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // IMPORTANT: fixed classes must be on EVERY return branch
  const navClass = `w-full fixed top-0 left-0 z-50 bg-[var(--color-primary-inverse)] ${isScrolled ? "shadow-md" : ""}`

  // Mobile
  if (isMobile) {
    return (
      <nav ref={navRef} className={navClass}>
        <div className="flex items-center justify-between py-[var(--spacing-lg)] px-[var(--spacing-lg)]">
          <button onClick={handleLogoClick} className="cursor-pointer" aria-label="Home">
            <img ref={logoRef} src={logoSrc} alt="Riha Hart Logo" style={{ height: "70px", width: "auto", objectFit: "contain" }} loading="eager" />
          </button>
          <button onClick={handleMenuClick} className="cursor-pointer" aria-label="Menu" style={{ transform: "translateY(10px)" }}>
            <img src="/Icons/Hamburger/HamburgerLarge.svg" alt="Menu" style={{ height: "12px", width: "auto" }} />
          </button>
        </div>
      </nav>
    )
  }

  // Tablet
  if (isTablet) {
    return (
      <nav ref={navRef} className={navClass}>
        <div className="flex items-center justify-between py-[var(--spacing-2xl)] px-[var(--spacing-2xl)]">
          <button onClick={handleLogoClick} className="cursor-pointer" aria-label="Home">
            <img ref={logoRef} src={logoSrc} alt="Riha Hart Logo" style={{ height: "80px", width: "auto", objectFit: "contain" }} loading="eager" />
          </button>
          <button onClick={handleMenuClick} className="cursor-pointer" aria-label="Menu" style={{ transform: "translateY(20px)" }}>
            <img src="/Icons/Hamburger/HamburgerLarge.svg" alt="Menu" style={{ height: "15px", width: "auto" }} />
          </button>
        </div>
      </nav>
    )
  }

  // Desktop 1440
  if (isDesktop1440px) {
    return (
      <nav ref={navRef} className={navClass}>
        <div className="flex items-center justify-between py-[var(--spacing-2xl)] px-[var(--spacing-3xl)] ">
          <div className="flex items-center w-full justify-center">
            <button onClick={handleLogoClick} className="cursor-pointer" aria-label="Home">
              <img ref={logoRef} src={logoSrc} alt="Riha Hart Logo" style={{ height: "100px", width: "auto", objectFit: "contain" }} loading="eager" />
            </button>
          </div>
          <button onClick={handleMenuClick} className="cursor-pointer" aria-label="Menu" style={{ transform: "translateY(20px)" }}>
            <img src="/Icons/Hamburger/HamburgerLarge.svg" alt="Menu" style={{ height: "18px", width: "auto" }} />
          </button>
        </div>
      </nav>
    )
  }

  // Large Desktop
  return (
    <nav ref={navRef} className={navClass}>
      <div className="flex w-full max-w-[1600px] mx-auto items-center justify-between py-[var(--spacing-3xl)] px-[var(--spacing-4xl)]">
        <div className="flex items-center w-full justify-center">
          <button onClick={handleLogoClick} className="cursor-pointer" aria-label="Home">
            <img ref={logoRef} src={logoSrc} alt="Riha Hart Logo" style={{ height: "120px", width: "auto", objectFit: "contain" }} loading="eager" />
          </button>
        </div>
        <button onClick={handleMenuClick} className="cursor-pointer" aria-label="Menu" style={{ transform: "translateY(20px)" }}>
          <img src="/Icons/Hamburger/HamburgerLarge.svg" alt="Menu" style={{ height: "20px", width: "auto" }} />
        </button>
      </div>
    </nav>
  )
}

export default Navigation

