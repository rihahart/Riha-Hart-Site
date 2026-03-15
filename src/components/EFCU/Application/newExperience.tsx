"use client"

import React, { useLayoutEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import useMobileDetection from "@/_utilities/useMobileDetection"

gsap.registerPlugin(ScrollTrigger)

const Img1 = "/EFCU/NewApplicationExperience/Desktop1.png"
const Img2 = "/EFCU/NewApplicationExperience/Mobile1.png"
const Img3 = "/EFCU/NewApplicationExperience/Desktop2.png"
const Img4 = "/EFCU/NewApplicationExperience/Mobile3.png"
const Img5 = "/EFCU/NewApplicationExperience/Desktop3.png"
const Img6 = "/EFCU/NewApplicationExperience/Mobile4.png"

const imgs = [Img1, Img2, Img3, Img4, Img5, Img6]

const alts = [
  "Prefills Screen",
  "Verification Screen",
  "Your info Screen",
  "Your info 2 Screen",
  "Your ss info",
  "Add a Beneficiary Screen",
  "Payment Screen",
]

const rotations = [
  "rotate-[0.2deg]",
  "rotate-[0.1deg]",
  "rotate-[-.2deg]",
  "rotate-[.4deg]",
  "rotate-[-.1deg]",
  "rotate-[.2deg]",
  
]

const heading = (
  <h1 className="h2 text-[var(--color-secondary-inverse)] text-center uppercase">
    A New Application Experience{" "}
    <span className="whitespace-nowrap"><span className="h1 text-[var(--color-brand)]">( 4 x )</span>{" "}Faster</span>
  </h1>
)

const body = (
  <p className="body text-[var(--color-secondary-inverse)] text-center max-w-[900px]">
    Pre-fills, member verification, and smaller step-based screens shortened
    the application process. Membership forms now take under 5 minutes to
    complete, down from nearly 20 minutes.
  </p>
)

type GalleryTrackProps = {
  trackRef: React.RefObject<HTMLDivElement>
  wrapperClassName: string
  trackClassName: string
  getItemWidth: (i: number) => string
  getTranslateY?: (i: number) => number
}

function GalleryTrack({
  trackRef,
  wrapperClassName,
  trackClassName,
  getItemWidth,
  getTranslateY,
}: GalleryTrackProps) {
  return (
    <div className={wrapperClassName}>
      <div ref={trackRef} className={trackClassName}>
        {imgs.map((src, i) => (
          <div
            key={src}
            className={`flex-shrink-0 h-fit ${getItemWidth(i)}`}
            style={getTranslateY ? { transform: `translateY(${getTranslateY(i)}px)` } : undefined}
          >
            <img
              src={src}
              alt={alts[i]}
              className={`block w-full h-auto object-contain shadow-lg ${rotations[i]}`}
            />
          </div>
        ))}
        <div className="flex-shrink-0 w-[var(--spacing-xl)]" aria-hidden="true" />
      </div>
    </div>
  )
}

export default function NewExperience() {
  const { isMobile, isTablet, isDesktop1440px } = useMobileDetection()

  const sectionRef = useRef<HTMLDivElement>(null)
  const pinRef = useRef<HTMLDivElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    const section = sectionRef.current
    const pin = pinRef.current
    const track = trackRef.current

    if (!section || !pin || !track) return

    const ctx = gsap.context(() => {
      const wrapperWidth = () => track.parentElement?.clientWidth ?? pin.clientWidth
      const getMaxX = () => Math.max(0, track.scrollWidth - wrapperWidth())

      const getStartX = () => 0
      const getEndX = () => -getMaxX()
      const getTravelDistance = () => Math.abs(getEndX() - getStartX())

      gsap.set(track, { x: getStartX() })

      gsap.to(track, {
        x: getEndX,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: () => `+=${getTravelDistance()}`,
          scrub: true,
          pin: section,
          pinSpacing: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          onToggle: (self: ScrollTrigger) => {
            window.dispatchEvent(
              new CustomEvent("fan-section", {
                detail: { active: self.isActive },
              })
            )
          },
        },
      })
    }, section)

    ScrollTrigger.refresh()

    const images = Array.from(track.querySelectorAll<HTMLImageElement>("img"))
    const unloaded = images.filter((img) => !img.complete || img.naturalWidth === 0)

    if (unloaded.length > 0) {
      let done = 0
      unloaded.forEach((img) => {
        img.addEventListener(
          "load",
          () => {
            done++
            if (done === unloaded.length) ScrollTrigger.refresh()
          },
          { once: true }
        )
      })
    }

    return () => {
      ctx.revert()
      window.dispatchEvent(
        new CustomEvent("fan-section", { detail: { active: false } })
      )
    }
  }, [isMobile, isTablet, isDesktop1440px])

  if (isMobile) {
    return (
      <section ref={sectionRef} className="w-full bg-[#3B558E]">
        <div
          ref={pinRef}
          className="w-full h-screen flex flex-col gap-[var(--spacing-xs)] px-[var(--spacing-s)] py-[var(--spacing-2xl)]"
        >
          <div className="w-full flex flex-col items-center gap-[var(--spacing-s)]">
            {heading}
            {body}
          </div>

          <GalleryTrack
            trackRef={trackRef}
            wrapperClassName="w-full flex-1 flex items-center"
            trackClassName="flex h-fit items-center gap-[var(--spacing-xl)] will-change-transform"
            getItemWidth={(i) => {
                if (i === 0) return "w-[300px] translate-y-[10px]"
            if (i === 1 ) return "w-[150px] translate-y-[-10px]"
            if (i === 2) return "w-[350px] translate-y-[20px]"
            if (i === 3) return "w-[120px] translate-y-[-5px]"
            if (i === 4) return "w-[320px] translate-y-[5px]"
            if (i === 5) return "w-[180px] translate-y-[10px]"
              return "w-[460px]"
            }}
          />
        </div>
      </section>
    )
  }

  if (isTablet) {
    return (
      <section ref={sectionRef} className="w-full bg-[#3B558E] overflow-x-clip">
        <div
          ref={pinRef}
          className="w-full h-screen overflow-hidden flex flex-col gap-[var(--spacing-s)] px-[var(--spacing-xl)] py-[var(--spacing-3xl)]"
        >
          <div className="w-full flex flex-col items-center gap-[var(--spacing-s)]">
            {heading}
            {body}
          </div>

          <GalleryTrack
            trackRef={trackRef}
            wrapperClassName="w-full flex-1 flex items-center"
            trackClassName="flex h-fit items-center gap-[var(--spacing-2xl)] pl-[var(--spacing-m)] will-change-transform"
            getItemWidth={(i) => {
               if (i === 0) return "w-[400px] translate-y-[10px]"
            if (i === 1 ) return "w-[200px] translate-y-[-10px]"
            if (i === 2) return "w-[550px] translate-y-[20px]"
            if (i === 3) return "w-[180px] translate-y-[-5px]"
            if (i === 4) return "w-[370px] translate-y-[5px]"
            if (i === 5) return "w-[200px] translate-y-[10px]"
              return "w-[460px]"
            }}
          />
        </div>
      </section>
    )
  }

  if (isDesktop1440px) {
    return (
      <section ref={sectionRef} className="w-full bg-[#3B558E]">
        <div
          ref={pinRef}
          className="w-full h-screen flex flex-col gap-[var(--spacing-3xl)] px-[var(--spacing-xl)] py-[var(--spacing-4xl)]"
        >
          <div className="w-full flex flex-col items-center gap-[var(--spacing-s)]">
            {heading}
            {body}
          </div>

          <GalleryTrack
            trackRef={trackRef}
            wrapperClassName="w-full flex-1 flex items-center"
            trackClassName="flex h-fit items-center gap-[var(--spacing-2xl)] will-change-transform"
            getItemWidth={(i) => {
              if (i === 0) return "w-[400px] translate-y-[10px]"
            if (i === 1 ) return "w-[200px] translate-y-[-10px]"
            if (i === 2) return "w-[550px] translate-y-[20px]"
            if (i === 3) return "w-[180px] translate-y-[-5px]"
            if (i === 4) return "w-[370px] translate-y-[5px]"
            if (i === 5) return "w-[200px] translate-y-[10px]"
              return "w-[460px]"
            }}
          />
        </div>
      </section>
    )
  }

  return (
    <section ref={sectionRef} className="w-full bg-[#3B558E]">
      <div
        ref={pinRef}
        className="w-full h-screen flex flex-col gap-[var(--spacing-3xl)] px-[var(--spacing-xl)] py-[var(--spacing-5xl)]"
      >
        <div className="w-full flex flex-col items-center gap-[var(--spacing-s)]">
          {heading}
          {body}
        </div>

        <GalleryTrack
          trackRef={trackRef}
          wrapperClassName="w-full flex-1 flex items-center"
          trackClassName="flex h-fit items-center gap-[var(--spacing-3xl)] will-change-transform"
          getItemWidth={(i) => {
            if (i === 0) return "w-[450px] translate-y-[20px]"
            if (i === 1 ) return "w-[250px] translate-y-[-20px]"
            if (i === 2) return "w-[650px] translate-y-[40px]"
            if (i === 3) return "w-[240px] translate-y-[-10px]"
            if (i === 4) return "w-[460px] translate-y-[5px]"
            if (i === 5) return "w-[240px] translate-y-[10px]"
            return "w-[550px]"
          }}
        />
      </div>
    </section>
  )
}