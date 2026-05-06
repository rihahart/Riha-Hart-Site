"use client"

import { useState, useEffect, useRef } from "react"
import { useRouter } from "next/navigation"
import gsap from "gsap"
import useMobileDetection from "@/_utilities/useMobileDetection"
import { NavButton } from "@/components/Buttons"

let _fromHP = false
let _activeTicker = null

const CASE_STUDIES = [
  { title: "Everest FCU", tag: "Design and Tech Lead", href: "/everest-federal-credit-union", video: "/EFCU/Everest%20FCU.mp4" },
  { title: "Earth Hero", tag: "Junior Researcher", href: "/earthhero", video: "/EarthHero/PreferenceTestFinal.mp4", contain: true },
  { title: "iKlass", tag: "Designer", href: "/iklass", img: "/iklass/SummerLarge.gif" },
  { title: "JH Mural Project", tag: "Founder and Creative Director", href: "/jh-mural-project", img: "/Jhmural/JHMuralProject.jpg" },
]

const N = CASE_STUDIES.length
const FILM = Array.from({ length: 100 }, () => CASE_STUDIES).flat()
const PERFS = Array.from({ length: 100 })
const COLORS = [
  '#FFA1C0','#FF77A8','#F94F8F','#EA0F6C','#CC0156',
  '#F4BFD2','#EE72AA','#E22982',
  '#F993C4','#F46BAF','#ED2793','#D60370',
  '#FFA1CC','#FC71BB','#F43FA5','#CE007C',
  '#F9AFD4','#F484C4','#ED50AF','#E0219F',
  '#F3BAD9','#EDA1D4','#E880CA','#CC01A0','#B7018E','#A30580',
  '#EEC4DD','#E29ED6','#D36BC7','#AF23A5','#A12D96',
  '#E6C4D6','#D3A5C9','#9B4F97',
  '#E0CEE0','#C7AADB','#9663C5',
  '#BAB0D3','#9E92C6','#8977BB',
]

export default function ProjectPage() {
  const [filmIdx, setFilmIdx] = useState(50 * N)
  const [mounted, setMounted] = useState(false)
  const [windowWidth, setWindowWidth] = useState(375)
  const { isMobile, isTablet, isDesktop1440px } = useMobileDetection()
  const router = useRouter()
  const trackRef       = useRef(null)
  const labelRef       = useRef(null)
  const h2Ref          = useRef(null)
  const pRef           = useRef(null)
  const navRef         = useRef(null)
  const tickerRef      = useRef(null)
  const mountedRef     = useRef(false)
  const activeFrameRef = useRef(null)
  const navTransRef    = useRef(false)

  useEffect(() => { setWindowWidth(window.innerWidth); setMounted(true) }, [])

  useEffect(() => {
    window.scrollTo(0, 0)
    document.documentElement.style.overflow = 'hidden'
    return () => {
      document.documentElement.style.overflow = ''
      if (_activeTicker) { gsap.ticker.remove(_activeTicker); _activeTicker = null }
    }
  }, [])

  useEffect(() => {
    if (window.innerWidth <= 1024) {
      const blockScroll = (e) => {
        if (!e.target.closest('.proj-root-desktop, .proj-root-mobile')) return
        e.preventDefault()
      }
      document.addEventListener('touchmove', blockScroll, { passive: false })
      return () => {
        document.removeEventListener('touchmove', blockScroll)
      }
    }
  }, [])

  useEffect(() => {
    let locked = false
    let idleTimer
    const onWheel = (e) => {
      const delta = Math.abs(e.deltaY) + Math.abs(e.deltaX)
      if (delta > 4) {
        clearTimeout(idleTimer)
        idleTimer = setTimeout(() => { locked = false }, 500)
      }
      if (locked) return
      locked = true
      if (e.deltaX > 0 || e.deltaY > 0) setFilmIdx(i => i + 1)
      else setFilmIdx(i => i - 1)
    }
    let touchStartX = 0
    let touchStartY = 0
    const onTouchStart = (e) => {
      touchStartX = e.touches[0].clientX
      touchStartY = e.touches[0].clientY
    }
    const onTouchEnd = (e) => {
      const dx = touchStartX - e.changedTouches[0].clientX
      const dy = touchStartY - e.changedTouches[0].clientY
      if (window.innerWidth <= 1024) {
        if (Math.abs(dy) > 40) dy > 0 ? setFilmIdx(i => i + 1) : setFilmIdx(i => i - 1)
      } else {
        if (Math.abs(dx) > 40) dx > 0 ? setFilmIdx(i => i + 1) : setFilmIdx(i => i - 1)
      }
    }
    window.addEventListener("wheel", onWheel, { passive: true })
    window.addEventListener("touchstart", onTouchStart)
    window.addEventListener("touchend", onTouchEnd)
    return () => {
      window.removeEventListener("wheel", onWheel)
      window.removeEventListener("touchstart", onTouchStart)
      window.removeEventListener("touchend", onTouchEnd)
      clearTimeout(idleTimer)
    }
  }, [])

  useEffect(() => {
    if (!mounted) return
    if (!trackRef.current || !h2Ref.current || !pRef.current || !navRef.current) return

    const words = Array.from(h2Ref.current.querySelectorAll(".proj-word"))

    gsap.set(trackRef.current, { opacity: 0, scale: 0.2, z: -600, y: -60, rotationY: -25, transformPerspective: 800, transformOrigin: "50% 50%" })
    gsap.set(labelRef.current, { opacity: 1 })
    gsap.set(words, { opacity: 0, scale: 0.2, z: -600, y: -60, rotationY: -25, transformPerspective: 800, transformOrigin: "50% 50%" })
    gsap.set(pRef.current,     { opacity: 0, scale: 0.2, z: -600, y: -60, rotationY: -25, transformPerspective: 800, transformOrigin: "50% 50%" })
    gsap.set(navRef.current,   { y: -30, opacity: 0 })

    function runEntrance() {
      const tl = gsap.timeline({ onComplete: () => { mountedRef.current = true } })
      tl.to(trackRef.current, { opacity: 1, scale: 1, z: 0, y: 0, rotationY: 0, duration: 0.55, ease: "back.out(2.2)" }, 0)
      tl.to(words, {
        opacity: 1, scale: 1, z: 0, y: 0, rotationY: 0, duration: 0.55, ease: "back.out(2.2)", stagger: 0.06,
        onComplete() {
          if (_activeTicker) gsap.ticker.remove(_activeTicker)
          const start = gsap.ticker.time
          function bobble() {
            const t = gsap.ticker.time - start
            words.forEach((w, i) => gsap.set(w, { y: Math.sin(t * 2 + i * 0.8) * 3 }))
          }
          gsap.ticker.add(bobble)
          tickerRef.current = bobble
          _activeTicker = bobble
        }
      }, 0)
      tl.to(pRef.current,   { opacity: 1, scale: 1, z: 0, y: 0, rotationY: 0, duration: 0.55, ease: "back.out(2.2)" }, 0)
      tl.to(navRef.current, { y: 0, opacity: 1, duration: 0.55, ease: "back.out(2.2)" }, 0)
    }

    const flag = sessionStorage.getItem("fromHomepage")
    if (flag) { sessionStorage.removeItem("fromHomepage"); _fromHP = true }

    if (_fromHP) {
      const pushTime = window.__navPushTime || Date.now()
      const delay = Math.max(0, (pushTime + 800) - Date.now())
      const timer = setTimeout(() => { _fromHP = false; window.__navPushTime = 0; runEntrance() }, delay)
      return () => { clearTimeout(timer); _fromHP = false }
    } else {
      runEntrance()
    }
  }, [mounted])

  useEffect(() => {
    if (!mountedRef.current) return
    if (!h2Ref.current || !pRef.current) return

    if (tickerRef.current) gsap.ticker.remove(tickerRef.current)

    const words = Array.from(h2Ref.current.querySelectorAll(".proj-word"))
    gsap.set(words,        { opacity: 0, scale: 0.2, z: -600, y: -60, rotationY: -25, transformPerspective: 800, transformOrigin: "50% 50%" })
    gsap.set(pRef.current, { opacity: 0, scale: 0.2, z: -600, y: -60, rotationY: -25, transformPerspective: 800, transformOrigin: "50% 50%" })

    gsap.to(words, {
      opacity: 1, scale: 1, z: 0, y: 0, rotationY: 0, duration: 0.2, ease: "back.out(2.2)", stagger: 0.06,
      onComplete() {
        if (_activeTicker) gsap.ticker.remove(_activeTicker)
        const start = gsap.ticker.time
        function bobble() {
          const t = gsap.ticker.time - start
          words.forEach((w, i) => gsap.set(w, { y: Math.sin(t * 2 + i * 0.8) * 3 }))
        }
        gsap.ticker.add(bobble)
        tickerRef.current = bobble
        _activeTicker = bobble
      }
    })
    gsap.to(pRef.current, { opacity: 1, scale: 1, z: 0, y: 0, rotationY: 0, duration: 0.2, ease: "back.out(2.2)" })
  }, [filmIdx])

  if (!mounted) return (
    <div style={{
      flex: 1,
      background: 'linear-gradient(180deg, #0a0a0a 0%, #7C1C52 60%, #CC01A0 100%)',
    }} />
  )

  const prev = () => setFilmIdx(i => i - 1)
  const next = () => setFilmIdx(i => i + 1)
  const activeCS = CASE_STUDIES[filmIdx % N]

  function handleNavigate(href, frameEl) {
    if (navTransRef.current) return
    navTransRef.current = true

    const frame = frameEl || activeFrameRef.current
    if (!frame) { router.push(href); return }

    const media = frame.querySelector(".frame-media")
    const rect  = media.getBoundingClientRect()
    const scaleX = (window.innerWidth  + 200) / rect.width
    const scaleY = (window.innerHeight + 200) / rect.height
    const scale  = Math.max(scaleX, scaleY)

    const clone = document.createElement("div")
    clone.style.cssText = `
      position: fixed;
      left: ${rect.left}px;
      top: ${rect.top}px;
      width: ${rect.width}px;
      height: ${rect.height}px;
      overflow: hidden;
      z-index: 9999;
      pointer-events: none;
      will-change: transform;
      ${activeCS.contain ? "background:#fff;" : ""}
    `

    if (activeCS.video) {
      const vid = document.createElement("video")
      vid.src = activeCS.video
      vid.muted = true
      vid.loop = true
      vid.playsInline = true
      vid.style.cssText = `width:100%;height:100%;object-fit:${activeCS.contain ? "contain" : "cover"};display:block;`
      const orig = media.querySelector("video")
      if (orig) vid.currentTime = orig.currentTime
      clone.appendChild(vid)
      vid.play().catch(() => {})
    } else {
      const img = document.createElement("img")
      img.src = activeCS.img
      img.style.cssText = `width:100%;height:100%;object-fit:${activeCS.contain ? "contain" : "cover"};display:block;`
      clone.appendChild(img)
    }

    document.body.appendChild(clone)

    gsap.to([labelRef.current, navRef.current], { opacity: 0, duration: 0.25, ease: "power2.in" })
    gsap.to(clone, {
      scale,
      duration: 0.65,
      ease: "power2.in",
      onComplete: () => {
        router.push(href)
        navTransRef.current = false
        const onReady = () => {
          window.removeEventListener("case-study-ready", onReady)
          clearTimeout(fallback)
          clone.remove()
        }
        const fallback = setTimeout(onReady, 1200)
        window.addEventListener("case-study-ready", onReady)
      }
    })
  }

  // Breakpoint-specific values
  const isVertical = isMobile || isTablet
  const xStep   = 220
  const yStep   = isMobile ? 206 : 360
  const frameW  = isMobile ? windowWidth - 32 : isTablet ? windowWidth - 48 : isDesktop1440px ? 650 : 792
  const frameH  = isMobile ? 240 : isTablet ? 370 : isDesktop1440px ? 445 : 540

  const btnSize = isMobile ? "40px" : "52px"

  const perfStyle = (j) => ({
    background: COLORS[j % COLORS.length],
    animationDelay: `${((j * 0.31 + j * j * 0.017) % 2.4).toFixed(2)}s`,
  })

  const frames = FILM.map((cs, i) => {
    const offset = i - filmIdx
    if (Math.abs(offset) > 2) return null
    const absOffset = Math.abs(offset)
    const scale = absOffset === 0 ? 1 : absOffset === 1 ? 0.72 : 0.52
    const opacity = absOffset === 0 ? 1 : absOffset === 1 ? 0.42 : 0.2
    const blur = absOffset === 0 ? 0 : 4
    const transform = isVertical
      ? `translate(-50%, calc(-50% + ${offset * yStep}px)) scale(${scale})`
      : `translate(calc(-50% + ${offset * xStep}px), -50%) scale(${scale}) rotateY(${offset * -12}deg)`

    return (
      <div
        key={i}
        className="project-frame"
        ref={el => { if (offset === 0) activeFrameRef.current = el }}
        onClick={e => handleNavigate(cs.href, e.currentTarget)}
        style={{
          width: frameW,
          height: frameH,
          transform,
          opacity,
          filter: `blur(${blur}px)`,
          zIndex: absOffset === 0 ? 3 : absOffset === 1 ? 2 : 1,
        }}
      >
        <div className="perf-corner" />
        <div className="perf-row">{PERFS.map((_, j) => <div key={j} className="reel-perf" style={perfStyle(j)} />)}</div>
        <div className="perf-corner" />

        <div className="perf-col">{PERFS.map((_, j) => <div key={j} className="reel-perf" style={perfStyle(j)} />)}</div>
        <div className="frame-media" style={cs.contain ? { background: '#fff' } : undefined}>
          {cs.video ? (
            <video
              src={cs.video}
              autoPlay
              muted
              loop
              playsInline
              ref={el => { if (el) el.play().catch(() => {}) }}
              style={cs.contain ? { objectFit: 'contain', objectPosition: 'center' } : undefined}
            />
          ) : (
            <img src={cs.img} alt={cs.title} style={cs.contain ? { objectFit: 'contain', objectPosition: 'center' } : undefined} />
          )}
        </div>
        <div className="perf-col">{PERFS.map((_, j) => <div key={j} className="reel-perf" style={perfStyle(j)} />)}</div>

        <div className="perf-corner" />
        <div className="perf-row">{PERFS.map((_, j) => <div key={j} className="reel-perf" style={perfStyle(j)} />)}</div>
        <div className="perf-corner" />
      </div>
    )
  })

  // Mobile (≤768px)
  if (isMobile) {
    return (
      <>
  <style suppressHydrationWarning>{pageCSS}</style>

  <div className="proj-root-mobile">
    <div className="reel-label" ref={labelRef} style={{ opacity: 0 }}>
      <h1 ref={h2Ref}>
        {activeCS.title.split(" ").map((word, wi, arr) => (
          <span
            key={wi}
            className="proj-word"
            style={{ display: "inline-block" }}
          >
            {word}
            {wi < arr.length - 1 ? " " : ""}
          </span>
        ))}
      </h1>

      <p
        ref={pRef}
        style={{ opacity: 0 }}
        onClick={() => handleNavigate(activeCS.href)}
      >
        {activeCS.tag}&nbsp;&nbsp;•&nbsp;&nbsp;View Work&nbsp;
        <img
          src="/Icons/RightArrow/RightArrowLarge.svg"
          className="view-work-arrow"
          alt=""
        />
      </p>
    </div>

    <div className="reel-outer-mobile">
      <div className="frames-track" ref={trackRef} style={{ opacity: 0 }}>
        {frames}
      </div>
    </div>

    <div className="reel-nav" ref={navRef} style={{ opacity: 0 }}>
      <NavButton onClick={prev} direction="up" alt="Previous" />
      <NavButton onClick={next} direction="down" alt="Next" />
    </div>
  </div>
</>
    )
  }

  // Tablet (769px–1024px)
  if (isTablet) {
    return (
      <>
        <style suppressHydrationWarning>{`${pageCSS}
          .reel-outer-mobile { height: ${frameH}px; }
          .nav-arrow { width: 20px; height: auto; }
          @keyframes swipeHintFade { 0%,60% { opacity:1; } 100% { opacity:0; } }
          .swipe-hint { animation: swipeHintFade 3s ease forwards 1.2s; opacity:0; font-size:13px; letter-spacing:1.5px; text-transform:uppercase; color:rgba(253,247,230,0.45); text-align:center; pointer-events:none; }
        `}</style>
        <div className="proj-root-mobile">
          <div className="reel-label" ref={labelRef} style={{ opacity: 0 }}>
            <h1 ref={h2Ref}>
              {activeCS.title.split(" ").map((word, wi, arr) => (
                <span key={wi} className="proj-word" style={{ display: "inline-block" }}>
                  {word}{wi < arr.length - 1 ? " " : ""}
                </span>
              ))}
            </h1>
            <p ref={pRef} style={{ opacity: 0 }} onClick={() => handleNavigate(activeCS.href)}>
              {activeCS.tag}&nbsp;&nbsp;•&nbsp;&nbsp;View Work &nbsp;<img src="/Icons/RightArrow/RightArrowLarge.svg" className="view-work-arrow" alt="" />
            </p>
          </div>
          <div className="reel-outer-mobile">
            <div className="frames-track" ref={trackRef} style={{ opacity: 0 }}>{frames}</div>
          </div>
          <div className="reel-nav" ref={navRef} style={{ opacity: 0 }}>
            <NavButton onClick={prev} direction="up" alt="Previous" />
            <NavButton onClick={next} direction="down" alt="Next" />
          </div>
        </div>
      </>
    )
  }

  // Desktop 1440px (1025px–1440px)
  if (isDesktop1440px) {
    return (
      <>
        <style suppressHydrationWarning>{`${pageCSS}
          .reel-outer-desktop { height: ${frameH}px; }
          .nav-arrow { width: 22px; height: auto; }
        `}</style>
        <div className="proj-root-desktop">
          <div className="reel-label" ref={labelRef} style={{ opacity: 0 }}>
            <h1 ref={h2Ref}>
              {activeCS.title.split(" ").map((word, wi, arr) => (
                <span key={wi} className="proj-word" style={{ display: "inline-block" }}>
                  {word}{wi < arr.length - 1 ? " " : ""}
                </span>
              ))}
            </h1>
            <p ref={pRef} style={{ opacity: 0 }} onClick={() => handleNavigate(activeCS.href)}>
              {activeCS.tag}&nbsp;&nbsp;•&nbsp;&nbsp;View Work &nbsp;<img src="/Icons/RightArrow/RightArrowLarge.svg" className="view-work-arrow" alt="" />
            </p>
          </div>
          <div className="reel-outer-desktop">
            <div className="frames-track" ref={trackRef} style={{ opacity: 0 }}>{frames}</div>
          </div>
          <div className="reel-nav" ref={navRef} style={{ opacity: 0 }}>
            <NavButton onClick={prev} direction="left" alt="Previous" />
            <NavButton onClick={next} alt="Next" />
          </div>
        </div>
      </>
    )
  }

  // Large Desktop (>1440px)
  return (
    <>
      <style suppressHydrationWarning>{pageCSS}</style>
      <div className="proj-root-desktop">
        <div className="reel-label" ref={labelRef} style={{ opacity: 0 }}>
          <h1 ref={h2Ref}>
            {activeCS.title.split(" ").map((word, wi, arr) => (
              <span key={wi} className="proj-word" style={{ display: "inline-block" }}>
                {word}{wi < arr.length - 1 ? " " : ""}
              </span>
            ))}
          </h1>
          <p ref={pRef} style={{ opacity: 0 }} onClick={() => handleNavigate(activeCS.href)}>
            {activeCS.tag}&nbsp;&nbsp;•&nbsp;&nbsp;View Work &nbsp;<img src="/Icons/RightArrow/RightArrowLarge.svg" className="view-work-arrow" alt="" />
          </p>
        </div>
        <div className="reel-outer-desktop">
          <div className="frames-track" ref={trackRef} style={{ opacity: 0 }}>{frames}</div>
        </div>
        <div className="reel-nav" ref={navRef} style={{ opacity: 0 }}>
          <NavButton onClick={prev} direction="left" alt="Previous" />
          <NavButton onClick={next} alt="Next" />
        </div>
      </div>
    </>
  )
}

const pageCSS = `
  .proj-root-desktop,
  .proj-root-mobile {
    box-sizing: border-box;
    background: linear-gradient(180deg, #0a0a0a 0%, #7C1C52 60%, #CC01A0 100%);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: var(--spacing-m);
  }

 

  .proj-root-mobile {
    position: fixed;
    top: var(--nav-h);
    left: 0;
    right: 0;
    bottom: 0;
    padding: var(--spacing-lg);
    border-radius: 0;
    justify-content: center;
  }

    .reel-outer-mobile {
    width: 100%;
    height: 70%;
    overflow-x: clip;
    overflow-y: clip;
    mask-image: linear-gradient(to bottom, transparent 0%, black 18%, black 82%, transparent 100%);
    -webkit-mask-image: linear-gradient(to bottom, transparent 0%, black 18%, black 82%, transparent 100%);
  
  }


  .proj-root-desktop {
    flex: 1;
    padding: var(--spacing-lg);
    border-radius: 12px;
  }

  .reel-outer-desktop {
    width: 100%;
    max-width: 1600px;
    position: relative;
    z-index: 5;
    height: 540px;
    overflow-x: clip;
    overflow-y: visible;
  }


  .frames-track {
    position: absolute;
    inset: 0;
    pointer-events: none;
  }

  .project-frame {
    position: absolute;
    left: 50%;
    top: 50%;
    background: transparent;
    cursor: pointer;
    pointer-events: auto;
    display: grid;
    grid-template-columns: 28px 1fr 28px;
    grid-template-rows: 28px 1fr 28px;
    transition:
      transform 900ms cubic-bezier(0.22, 1, 0.36, 1),
      opacity 900ms cubic-bezier(0.22, 1, 0.36, 1),
      filter 900ms cubic-bezier(0.22, 1, 0.36, 1);
  }

  .perf-corner {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .perf-row {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 0 4px;
    overflow: hidden;
  }

  .perf-col {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    padding: 2px 0;
    overflow: hidden;
  }

  @keyframes perf-container-shimmer {
    0%   { opacity: 0.25; }
    40%  { opacity: 0.55; }
    70%  { opacity: 0.2;  }
    100% { opacity: 0.25; }
  }

  @keyframes perf-shimmer {
    0%   { opacity: 0.2; filter: brightness(0.6); }
    8%   { opacity: 1;   filter: brightness(2.2); }
    16%  { opacity: 0.15; filter: brightness(0.5); }
    28%  { opacity: 0.9; filter: brightness(1.9); }
    36%  { opacity: 0.2; filter: brightness(0.6); }
    50%  { opacity: 1;   filter: brightness(2.5); }
    60%  { opacity: 0.1; filter: brightness(0.4); }
    72%  { opacity: 0.85; filter: brightness(1.8); }
    84%  { opacity: 0.2; filter: brightness(0.6); }
    100% { opacity: 0.2; filter: brightness(0.6); }
  }

  .reel-perf {
    outline: 0.5px solid #8C004C;
    outline-offset: 1px;
    flex-shrink: 0;
    animation: perf-shimmer 2.4s linear infinite;
  }

  .proj-root-desktop .reel-perf {
    width: 12px;
    height: 12px;
  }

  .frame-media {
    overflow: hidden;
    background: #000;
  }

  .frame-media img,
  .frame-media video {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  .reel-nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    max-width: 1600px;
    box-sizing: border-box;
  }

  .proj-root-desktop .reel-nav {
    padding: 0 var(--spacing-3xl);
  }

  .proj-root-mobile .reel-label {
    flex-shrink: 0;
    width: 100%;
    padding: 0 16px;
    box-sizing: border-box;
    position: static;
  }

.proj-root-mobile .nav-arrow {
    width: 16px;
    height: 16px;
    filter: brightness(0) invert(1) drop-shadow(0 0 0.5px var(--accent-glow));
  }

  .proj-root-mobile .reel-nav {
    flex-shrink: 0;
    position: static;
    padding: var(--spacing-md) 16px;
    padding-bottom: max(var(--spacing-xl), env(safe-area-inset-bottom));
    z-index: 20;
  }

  .proj-root-mobile .reel-perf { width: 6px; height: 6px; }
`
