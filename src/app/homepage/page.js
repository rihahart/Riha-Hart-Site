"use client"

import { useEffect, useRef, useState } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import gsap from "gsap"
import useMobileDetection from "@/_utilities/useMobileDetection"
import { useMenu } from "@/contexts/MenuContext"

export default function HomePage() {
  const pinRef = useRef(null)
  const vinylRef = useRef(null)
  const textRef = useRef(null)
  const heartsRef = useRef(null)
  const scrollRef = useRef(null)
  const vinylTlRef = useRef(null)
  const vinylWrapRef = useRef(null)
  const transitioning = useRef(false)
  const triggerRef = useRef(null)
  const router = useRouter()
  const { isMobile, isTablet, isDesktop1440px } = useMobileDetection()
  const { isMenuOpen } = useMenu()
  const animKey = useRef(0)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    router.prefetch("/Work")
    document.body.style.overflow = "hidden"
    window.dispatchEvent(new CustomEvent("nav-hide", { detail: { hide: true } }))
    return () => {
      document.body.style.overflow = ""
    }
  }, [])

  useEffect(() => {
    if (!mounted) return
    if (!pinRef.current || !vinylRef.current) return

    gsap.set(pinRef.current, { transformOrigin: "50% 5%", rotation: -38 })
    gsap.set(vinylRef.current, { rotation: 0, transformOrigin: "50% 50%" })

    const tl = gsap.timeline({ paused: true })
    tl.to(pinRef.current, { rotation: 35, duration: 0.5, ease: "power2.inOut" })
    tl.to(
      vinylRef.current,
      { rotation: 360, duration: 2.2, ease: "power1.in" },
      "-=0.05"
    )
    tl.to(vinylRef.current, { rotation: "+=360", duration: 1.8, repeat: -1, ease: "none" })

    vinylTlRef.current = tl
  }, [mounted])

  useEffect(() => {
    if (!mounted) return
    if (!heartsRef.current) return

    const hearts = heartsRef.current.querySelectorAll("img")
    gsap.set(hearts, { opacity: 0, scale: 0.5 })

    const tl = gsap.timeline({ repeat: -1, repeatDelay: 0.5 })

    hearts.forEach((heart) => {
      tl.to(
        heart,
        { opacity: 1, scale: 1, duration: 0.45, ease: "back.out(2.5)" },
        "+=0.07"
      )
    })

    tl.to({}, { duration: 0 })

    return () => tl.kill()
  }, [mounted])

  useEffect(() => {
    if (!mounted) return
    if (isMenuOpen) return
    if (!textRef.current) return

    const chars = Array.from(textRef.current.querySelectorAll(".hp-char"))
    let ticker
    let onWheel = null, onTouchStart = null, onTouchEnd = null

    // Reset everything for replay
    transitioning.current = false
    if (vinylTlRef.current) vinylTlRef.current.pause()
    if (pinRef.current) gsap.set(pinRef.current, { transformOrigin: "50% 5%", rotation: -38, x: 0, y: 0, opacity: 1 })
    if (vinylRef.current) gsap.set(vinylRef.current, { rotation: 0, transformOrigin: "50% 50%" })
    if (vinylWrapRef.current) gsap.set(vinylWrapRef.current, { x: 0, y: 0, rotation: 0, opacity: 1 })
    gsap.set(scrollRef.current, { y: 40, opacity: 0 })

    gsap.fromTo(
      chars,
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.5,
        ease: "power3.out",
        delay: 0.2,
        stagger: 0.012,
        onComplete() {
          vinylTlRef.current?.play()
          window.dispatchEvent(new CustomEvent("nav-hide", { detail: { hide: false } }))
          window.dispatchEvent(new CustomEvent("intro-complete"))
          gsap.to(scrollRef.current, { y: 0, opacity: 1, duration: 0.25, ease: "power3.out" })

          const start = gsap.ticker.time
          const el = textRef.current

          ticker = gsap.ticker.add(() => {
            const t = gsap.ticker.time - start
            gsap.set(el, {
              transformPerspective: 1200,
              rotationX: Math.sin(t * 2) * 1,
              rotationY: Math.sin(t * 3) * 0.5,
              z: Math.sin(t * 1) * 18,
            })
          })

          const trigger = () => {
            if (transitioning.current) return
            triggerRef.current = null
            transitioning.current = true

            if (ticker) gsap.ticker.remove(ticker)
            vinylTlRef.current?.kill()

            const drop = document.createElement("div")
            drop.style.cssText = `
              position: fixed;
              inset: 0;
              z-index: 9999;
              pointer-events: none;
              background: linear-gradient(180deg, #0a0a0a 0%, #7C1C52 60%, #CC01A0 100%);
              box-shadow: 0 20px 60px rgba(0,0,0,0.9);
              will-change: transform, opacity;
            `
            document.body.appendChild(drop)
            gsap.set(drop, { yPercent: -110 })

            const tl = gsap.timeline()

            tl.to(drop, {
              yPercent: 0,
              duration: 1.0,
              ease: "power2.in",
            }, 0)

            tl.to(chars, {
              y: () => 180 + Math.random() * 240,
              x: () => (Math.random() - 0.5) * 220,
              rotation: () => (Math.random() - 0.5) * 55,
              opacity: 0,
              duration: 0.42,
              ease: "power4.in",
              stagger: { each: 0.003, from: "random" },
            }, 0.4)

            if (vinylWrapRef.current) {
              tl.to(vinylWrapRef.current, {
                y: window.innerHeight * 1.2,
                x: (Math.random() - 0.5) * 200,
                rotation: 720,
                opacity: 0,
                duration: 0.58,
                ease: "power3.in",
                transformOrigin: "50% 50%",
              }, 0.5)
            }

            if (pinRef.current) {
              tl.to(pinRef.current, {
                y: window.innerHeight,
                x: 80,
                rotation: 120,
                opacity: 0,
                duration: 0.5,
                ease: "power2.in",
              }, 0.5)
            }

            if (scrollRef.current) {
              tl.to(scrollRef.current, {
                y: 70,
                opacity: 0,
                duration: 0.28,
                ease: "power2.in",
              }, 0.55)
            }

            gsap.delayedCall(1, () => {
              document.body.style.overflow = ""
              document.documentElement.style.overflow = ""
              sessionStorage.setItem("fromHomepage", "1")
              window.__navPushTime = Date.now()
              router.push("/Work")
              setTimeout(() => drop.remove(), 800)
            })
          }

          triggerRef.current = trigger

          const onWheel = (e) => {
            if (e.deltaY > 0) trigger()
          }

          let touchStartY = 0

          const onTouchStart = (e) => {
            touchStartY = e.touches[0].clientY
          }

          const onTouchEnd = (e) => {
            if (touchStartY - e.changedTouches[0].clientY > 30) trigger()
          }

          window.addEventListener("wheel", onWheel)
          window.addEventListener("touchstart", onTouchStart)
          window.addEventListener("touchend", onTouchEnd)

          return () => {
            window.removeEventListener("wheel", onWheel)
            window.removeEventListener("touchstart", onTouchStart)
            window.removeEventListener("touchend", onTouchEnd)
          }
        },
      }
    )

    return () => {
      if (ticker) gsap.ticker.remove(ticker)
    }
  }, [router, isMenuOpen, mounted])

const text = (
    <p className="hp-text" ref={textRef} style={{ display: "inline" }}>
      {"Design-Driven Project Architect Who Makes Things Happen.".split(" ").map((word, wi) => (
        <span key={wi} style={{ display: "inline-block", whiteSpace: "nowrap" }}>
          {word.split("").map((ch, ci) => (
            <span key={ci} className="hp-char" style={{ display: "inline-block" }}>
              {ch}
            </span>
          ))}
          {wi < 6 && (
            <span className="hp-char" style={{ display: "inline-block" }}>
              &nbsp;
            </span>
          )}
        </span>
      ))}
    </p>
  )

   const heartStyle = {
    filter: `
       brightness(0) invert(1)
    drop-shadow(0 0 8px rgba(253,247,230,0.75))
    drop-shadow(0 0 18px rgba(253,247,230,0.3))
    drop-shadow(0 0 28px rgba(220,40,40,0.45))
    drop-shadow(0 0 50px rgba(180,0,30,0.35))
    `
  }

  const scrollHint = (
    <div
      className="hp-scroll"
      ref={(el) => {
        scrollRef.current = el
        heartsRef.current = el
      }}
      onClick={() => triggerRef.current?.()}
      style={{ opacity: 0,
               display: "flex",
               alignItems: "center",
               gap: "var(--spacing-md)",
               color: "#FDF7E6",
               textShadow: " 0 0 20px rgba(253,247,230,0.6), 0 0 60px rgba(200,40,60,0.3)",
               letterSpacing: "0.3px",
               cursor: "pointer" }}
    >
      <span className="h4">Scroll to see my work</span>
      <Image src="/Icons/Heart/HeartLarge.svg" alt="" width={38} height={30} style={{ ...heartStyle, height: "clamp(18px, 2.2vw, 30px)", width: "auto" }} />
      <Image src="/Icons/Heart/HeartLarge.svg" alt="" width={38} height={30} style={{ ...heartStyle, height: "clamp(18px, 2.2vw, 30px)", width: "auto" }} />
      <Image src="/Icons/Heart/HeartLarge.svg" alt="" width={38} height={30} style={{ ...heartStyle, height: "clamp(18px, 2.2vw, 30px)", width: "auto" }} />
    </div>
  )

  const vinyl = (size) => (
    <div className="hp-vinyl-wrap" ref={vinylWrapRef} style={{ position: "relative", width: size, aspectRatio: "1", flexShrink: 0 }}>
      <div ref={vinylRef} style={{ width: "100%", height: "100%", filter: "drop-shadow(0 0 12px rgba(200,20,20,0.4)) drop-shadow(0 0 32px rgba(140,0,20,0.25))" }}>
        <Image
          src="/getToKnowMe/Vinyl/Vinyl.png"
          alt="Vinyl record"
          width={520}
          height={520}
          style={{ display: "block", width: "100%", height: "auto" }}
        />
      </div>
      <div
        ref={pinRef}
        style={{ position: "absolute", top: "18%", right: "7%", width: "6%", filter: "drop-shadow(0 0 4px rgba(220,40,40,0.35))", transform: "rotate(-38deg)", transformOrigin: "50% 5%" }}
      >
        <Image
          src="/getToKnowMe/Vinyl/Pin.svg"
          alt="Stylus"
          width={44}
          height={150}
          style={{ display: "block", width: "100%", height: "auto" }}
        />
      </div>
    </div>
  )

  const textStyle = {
    fontFamily: '"sofia-pro-comp", sans-serif',
  fontWeight: 600,
  lineHeight: 1.35,
  color: "#FDF7E6",
  textShadow: `
    0 0 12px rgba(253,247,230,0.55),
    0 0 28px rgba(253,247,230,0.25),
    0 0 60px rgba(220,40,40,0.35),
    0 0 90px rgba(180,0,30,0.25)
  `,
  }



  const mobileBg = { position: "fixed", inset: 0, boxSizing: "border-box", background: "radial-gradient(ellipse 100% 70% at 50% 100%, rgba(120,0,20,0.6) 0%, transparent 90%), linear-gradient(180deg, #0a0a0a 0%, #1a0007 60%, #2d0010 100%)", backgroundSize: "100% 100%, 100% 100%", overflowY: "auto" }

  // Mobile (≤768px) — also default before mount to match SSR
  if (!mounted || isMobile) {
    return (
      <>
        <style>{`.hp-char { opacity: 0; }`}</style>
        <div style={{ ...mobileBg, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "flex-start", gap: "var(--spacing-xl)", padding: "calc(var(--nav-h, 80px) + var(--spacing-xl)) var(--spacing-lg) var(--spacing-xl)" }}>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "var(--spacing-xl)", width: "100%" }}>
            <p className="hp-text" ref={textRef} style={{ ...textStyle, fontSize: "clamp(40px, 10vw, 64px)", display: "inline", textAlign: "left" }}>
              {"Design-Driven Project Architect Who Makes Things Happen.".split(" ").map((word, wi) => (
                <span key={wi} style={{ display: "inline-block", whiteSpace: "nowrap" }}>
                  {word.split("").map((ch, ci) => (
                    <span key={ci} className="hp-char" style={{ display: "inline-block" }}>{ch}</span>
                  ))}
                  {wi < 6 && <span className="hp-char" style={{ display: "inline-block" }}>&nbsp;</span>}
                </span>
              ))}
            </p>
            {scrollHint}
          </div>
           {vinyl("clamp(200px, 70vw, 360px)")}
        </div>
      </>
    )
  }

  // Tablet (769px–1024px)
  if (isTablet) {
    return (
      <>
        <style>{`.hp-char { opacity: 0; }`}</style>
        <div style={{ position: "fixed", inset: 0, boxSizing: "border-box", background: "radial-gradient(ellipse 100% 70% at 50% 100%, rgba(120,0,20,0.6) 0%, transparent 90%), linear-gradient(180deg, #0a0a0a 0%, #1a0007 60%, #2d0010 100%)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "flex-start", padding: "calc(var(--nav-h, 80px) + var(--spacing-2xl)) var(--spacing-2xl) var(--spacing-2xl)", overflowY: "auto" }}>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "var(--spacing-2xl)", width: "100%" }}>
            <p className="hp-text" ref={textRef} style={{ ...textStyle, fontSize: "clamp(46px, 8vw, 80px)", display: "inline", textAlign: "center" }}>
              {"Design-Driven Project Architect Who Makes Things Happen.".split(" ").map((word, wi) => (
                <span key={wi} style={{ display: "inline-block", whiteSpace: "nowrap" }}>
                  {word.split("").map((ch, ci) => (
                    <span key={ci} className="hp-char" style={{ display: "inline-block" }}>{ch}</span>
                  ))}
                  {wi < 6 && <span className="hp-char" style={{ display: "inline-block" }}>&nbsp;</span>}
                </span>
              ))}
            </p>
            {scrollHint}
            {vinyl("clamp(220px, 55vw, 480px)")}
          </div>
        </div>
      </>
    )
  }

  // Desktop 1440px (1025px–1440px)
  if (isDesktop1440px) {
    return (
      <>
        <style>{`.hp-char { opacity: 0; }`}</style>
        <div style={{ position: "fixed", inset: 0, boxSizing: "border-box", background: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\"), radial-gradient(ellipse 100% 70% at 50% 100%, rgba(120,0,20,0.6) 0%, transparent 90%), linear-gradient(180deg, #0a0a0a 0%, #1a0007 60%, #2d0010 100%)", backgroundBlendMode: "overlay, normal, normal", backgroundSize: "200px 200px, 100% 100%, 100% 100%", display: "flex", alignItems: "center", justifyContent: "center", padding: "var(--nav-h, 80px) var(--spacing-3xl) var(--spacing-2xl)" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "var(--spacing-3xl)", width: "100%", maxWidth: "1440px" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "var(--spacing-2xl)", flex: "1 1 0", minWidth: 0 }}>
              <p className="hp-text" ref={textRef} style={{ ...textStyle, fontSize: "clamp(46px, 6vw, 110px)", display: "inline" }}>
                {"Design-Driven Project Architect Who Makes Things Happen.".split(" ").map((word, wi) => (
                  <span key={wi} style={{ display: "inline-block", whiteSpace: "nowrap" }}>
                    {word.split("").map((ch, ci) => (
                      <span key={ci} className="hp-char" style={{ display: "inline-block" }}>{ch}</span>
                    ))}
                    {wi < 6 && <span className="hp-char" style={{ display: "inline-block" }}>&nbsp;</span>}
                  </span>
                ))}
              </p>
              {scrollHint}
            </div>
            {vinyl("clamp(280px, 38vw, 580px)")}
          </div>
        </div>
      </>
    )
  }

  // Large Desktop (>1440px)
  return (
    <>
      <style>{`.hp-char { opacity: 0; }`}</style>
      <div style={{ position: "fixed", inset: 0, boxSizing: "border-box", background: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\"), radial-gradient(ellipse 100% 70% at 50% 100%, rgba(120,0,20,0.6) 0%, transparent 90%), linear-gradient(180deg, #0a0a0a 0%, #1a0007 60%, #2d0010 100%)", backgroundBlendMode: "overlay, normal, normal", backgroundSize: "200px 200px, 100% 100%, 100% 100%", display: "flex", alignItems: "center", justifyContent: "center", padding: "var(--nav-h, 80px) var(--spacing-6xl) var(--spacing-2xl)" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 0, width: "100%", maxWidth: "1600px" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "var(--spacing-2xl)", flex: "1 1 0", minWidth: 0 }}>
            <p className="hp-text" ref={textRef} style={{ ...textStyle, fontSize: "clamp(46px, 7vw, 130px)", display: "inline" }}>
              {"Design-Driven Project Architect Who Makes Things Happen.".split(" ").map((word, wi) => (
                <span key={wi} style={{ display: "inline-block", whiteSpace: "nowrap" }}>
                  {word.split("").map((ch, ci) => (
                    <span key={ci} className="hp-char" style={{ display: "inline-block" }}>{ch}</span>
                  ))}
                  {wi < 6 && <span className="hp-char" style={{ display: "inline-block" }}>&nbsp;</span>}
                </span>
              ))}
            </p>
            {scrollHint}
          </div>
          {vinyl("clamp(200px, 40vw, 680px)")}
        </div>
      </div>
    </>
  )
}
