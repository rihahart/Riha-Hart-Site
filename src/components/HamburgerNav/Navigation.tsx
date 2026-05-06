"use client"

import { useRouter, usePathname } from "next/navigation"
import { useRef, useEffect, useLayoutEffect, useState } from "react"
import useMobileDetection from "@/_utilities/useMobileDetection"
import LogoAnimation from "@/components/LogoAnimation"
import { HamburgerButton, MenuButton, SocialButton } from "@/components/Buttons"

const Navigation = () => {
  const router = useRouter()
  const { isMobile, isTablet, isDesktop1440px } = useMobileDetection()
  const [mounted, setMounted]         = useState(false)
  const [isScrolled, setIsScrolled]   = useState(false)
  const [fanActive, setFanActive]     = useState(false)
  const [hideOnScroll, setHideOnScroll] = useState(false)
  const [hideOnZoom, setHideOnZoom]   = useState(false)
  const [logoKey, setLogoKey]         = useState(0)
  const [logoVisible, setLogoVisible] = useState(() => typeof window !== "undefined" ? window.location.pathname !== "/" : true)
  const lastScrollY = useRef(0)
  const navRef      = useRef<HTMLElement>(null)
  const pathname    = usePathname()

  const replayLogo = () => setLogoKey(k => k + 1)

  // Replay on mount, every 1 minute, on route change, and when intro ends
  useEffect(() => { setMounted(true) }, [])

  useEffect(() => {
    replayLogo()
    const interval = setInterval(replayLogo, 60 * 1000)
    const onIntroComplete = () => {
      setLogoVisible(true)
      setTimeout(replayLogo, 50)
    }
    window.addEventListener("intro-complete", onIntroComplete)
    return () => {
      clearInterval(interval)
      window.removeEventListener("intro-complete", onIntroComplete)
    }
  }, [])

  useEffect(() => {
    replayLogo()
    setHideOnZoom(false)
  }, [pathname])

  // Set --nav-h from the nav's explicit CSS height (no image-load dependency)
  useLayoutEffect(() => {
    if (!mounted) return
    const setNavHeight = () => {
      if (!navRef.current) return
      document.documentElement.style.setProperty("--nav-h", `${navRef.current.offsetHeight}px`)
    }
    setNavHeight()
    window.addEventListener("resize", setNavHeight)
    return () => window.removeEventListener("resize", setNavHeight)
  }, [isMobile, isTablet, isDesktop1440px, mounted])

  // Track scroll for shadow + hide/show
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
    const handler = (e: Event) => setFanActive((e as CustomEvent).detail.active)
    window.addEventListener("fan-section", handler)
    return () => window.removeEventListener("fan-section", handler)
  }, [])

  useLayoutEffect(() => {
    if (pathname === "/") setHideOnZoom(true)
    else setHideOnZoom(false)
  }, [pathname])

  // Hide nav on homepage scroll zoom
  useEffect(() => {
    const handler = (e: Event) => setHideOnZoom((e as CustomEvent).detail.hide)
    window.addEventListener("nav-hide", handler)
    return () => window.removeEventListener("nav-hide", handler)
  }, [])

  const isHomepage = pathname === "/" || pathname === "/Work" || pathname === "/me"
  const isLightNav = pathname === "/everest-federal-credit-union" || pathname === "/earthhero" || pathname === "/iklass" || pathname === "/jh-mural-project"
  const hideClass = hideOnZoom ? "duration-75" : "duration-300"
  const shouldHide = fanActive || (hideOnScroll && pathname !== "/Work") || hideOnZoom
  const navClass   = `w-full fixed top-0 left-0 z-50 transition-transform ${hideClass} ease-in-out ${isScrolled && pathname !== "/Work" ? "shadow-md" : ""} ${shouldHide ? "-translate-y-full" : "translate-y-0"}`
  const navStyle   = { backgroundColor: isLightNav ? "var(--color-primary-inverse)" : "transparent" }

  // Colors flip based on nav background
  const logoColors = isHomepage
    ? { textColor: "#FDF7E6", limbColor: "#FDF7E6", heartColor: "#F16762" }
    : { textColor: "#1a1a1a", limbColor: "#1a1a1a", heartColor: "#F16762" }

  const desktopNavLinks = (
    <div className="flex items-center gap-[var(--spacing-xs)]">
      <MenuButton text="Home" onClick={() => router.push("/")} isActive={pathname === "/"} className="menu-button--desktop" />
      <MenuButton text="Work" onClick={() => router.push("/Work")} isActive={pathname === "/Work"} className="menu-button--desktop" />
      <MenuButton text="Me" onClick={() => router.push("/me")} isActive={pathname === "/me"} className="menu-button--desktop" />
    </div>
  )

  const desktopSocial = (
    <div className="flex items-center justify-end gap-[var(--spacing-xs)]">
      <SocialButton icon="linkedin" onClick={() => window.open("https://www.linkedin.com/in/riha-hart/", "_blank")} />
      <SocialButton icon="instagram" onClick={() => window.open("https://www.instagram.com/riha_hart/", "_blank")} />
      <SocialButton icon="gmail" onClick={() => window.open("mailto:rihahart@gmail.com")} />
    </div>
  )

  const logo = (width: string) => (
    <div
      className={`transition-opacity duration-300 ${(isScrolled && pathname === "/") || (pathname === "/" && !logoVisible) ? "opacity-0 pointer-events-none" : "opacity-100 cursor-pointer"}`}
      onClick={() => pathname !== "/" && router.push("/")}
    >
      <div style={{ width, display: "block" }}>
        {isLightNav
          ? <img src="/Photos/Homepage/LogoOneCount.gif" alt="Riha Hart logo" width={800} height={375} style={{ width: "100%", height: "auto", display: "block", aspectRatio: "800/375" }} />
          : <LogoAnimation key={logoKey} fps={24} staticFrame={isHomepage} heartGlow={isHomepage} {...logoColors} />
        }
      </div>
    </div>
  )

  // Mobile (or pre-mount default)
  if (!mounted || isMobile) {
    return (
      <nav ref={navRef} className={navClass} style={navStyle}>
        <div className="flex items-center justify-between py-[var(--spacing-lg)] px-[var(--spacing-lg)]">
          {logo("88px")}
          <HamburgerButton className={!isLightNav ? "[filter:brightness(0)_invert(1)]" : ""} />
        </div>
      </nav>
    )
  }

  // Tablet
  if (isTablet) {
    return (
      <nav ref={navRef} className={navClass} style={navStyle}>
        <div className="flex items-center justify-between py-[var(--spacing-m)] px-[var(--spacing-3xl)]">
          <HamburgerButton className={!isLightNav ? "[filter:brightness(0)_invert(1)]" : ""} />
          {logo("112px")}
        </div>
      </nav>
    )
  }

  // Desktop 1440
  if (isDesktop1440px) {
    return (
      <nav ref={navRef} className={navClass} style={navStyle}>
        <div className="grid grid-cols-3 items-center py-[var(--spacing-m)] px-[var(--spacing-3xl)]">
          {logo("128px")}
          <div />
          <div className="nav-pill flex items-center gap-[var(--spacing-2xl)] border border-[rgba(253,247,230,0.2)] rounded-[var(--radius-pill)] px-[var(--spacing-lg)] py-[var(--spacing-xs)] w-fit ml-auto self-center">{desktopNavLinks}{desktopSocial}</div>
        </div>
      </nav>
    )
  }

  // Large Desktop
  return (
    <nav ref={navRef} className={navClass} style={navStyle}>
      <div className="grid grid-cols-3 w-full max-w-[1600px] mx-auto items-center p-[var(--spacing-m)] px-[var(--spacing-3xl)]">
        {logo("144px")}
        <div />
        <div className="nav-pill flex items-center gap-[var(--spacing-2xl)] border border-[rgba(253,247,230,0.2)] rounded-[var(--radius-pill)] px-[var(--spacing-lg)] py-[var(--spacing-xs)] w-fit ml-auto self-center">{desktopNavLinks}{desktopSocial}</div>
      </div>
    </nav>
  )
}

export default Navigation
