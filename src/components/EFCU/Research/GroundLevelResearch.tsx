"use client"

import React, { useRef, useEffect } from "react"
import useMobileDetection from "@/_utilities/useMobileDetection"
import { groundLevelResearch } from "@/data/EFCU/Research/groundLevelResearch"

function ScrollTriggerVideo({
  src,
  poster,
  className
}: {
  src: string
  poster?: string | null
  className?: string
}) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const hasPlayedRef = useRef(false)

  useEffect(() => {
    const video = videoRef.current
    const container = containerRef.current
    if (!video || !container) return

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries
        if (!entry.isIntersecting || hasPlayedRef.current) return
        hasPlayedRef.current = true
        video.play().catch(() => {})
      },
      { threshold: 0.25, rootMargin: "0px" }
    )
    observer.observe(container)

    const REPLAY_INTERVAL_MS = 15_000 // replay every 15 sec
    const replayTimer = setInterval(() => {
      if (!videoRef.current) return
      videoRef.current.currentTime = 0
      videoRef.current.play().catch(() => {})
    }, REPLAY_INTERVAL_MS)

    return () => {
      observer.disconnect()
      clearInterval(replayTimer)
    }
  }, [])

  return (
    <div ref={containerRef} className={className}>
      <video
        ref={videoRef}
        src={src}
        muted
        playsInline
        preload="auto"
        className="w-full h-auto flex-shrink-0"
        poster={poster ?? undefined}
        onEnded={(e) => e.currentTarget.pause()}
      />
    </div>
  )
}

const videoClassName = {
  mobile: "w-full max-w-[full] h-auto flex-shrink-0",
  tablet: "w-full max-w-[full] h-auto flex-shrink-0",
  desktop1440: "w-full max-w-[600px] h-auto flex-shrink-0",
  large: "w-full max-w-[700px] h-auto flex-shrink-0"
} as const

export default function GroundLevelResearch() {
  const { isMobile, isTablet, isDesktop1440px } = useMobileDetection()
  const section = groundLevelResearch

  if (isMobile) {
    return (
      <section className="w-full flex flex-col gap-[var(--spacing-xl)] items-start">
        <div className="flex flex-col gap-[var(--spacing-s)]">
          <h2
            className="h3 text-[var(--blue-500)] uppercase"
          
          >
            {section.heading}
          </h2>
          <p className="body text-[var(--color-primary)]">{section.intro}</p>
        </div>
        <div className="w-full flex flex-col gap-[var(--spacing-xl)] items-start">
          <ul className="flex flex-col gap-[var(--spacing-m)] list-none pl-0 flex-1 min-w-0">
            {section.bullets.map((item, i) => (
              <li
                key={i}
                className="body text-[var(--color-primary)] uppercase flex items-center gap-[var(--spacing-lg)]"
              >
                <span className="Icon--ArrowRight--S Icon--blue-500" aria-hidden />
                {item}
              </li>
            ))}
          </ul>
          <ScrollTriggerVideo
            src={section.media.src}
            poster={section.media.poster}
            className={videoClassName.mobile}
          />
        </div>
      </section>
    )
  }

  if (isTablet) {
    return (
      <section className="w-full flex flex-col gap-[var(--spacing-xl)] items-start">
        <div className="flex flex-col gap-[var(--spacing-s)]">
          <h2
            className="h3 text-[var(--blue-500)] uppercase"
          >
            {section.heading}
          </h2>
          <p className="body text-[var(--color-primary)]">{section.intro}</p>
        </div>
        <div className="w-full flex flex-col gap-[var(--spacing-xl)] px-[var(--spacing-s)] items-start">
          <ul className="flex flex-col gap-[var(--spacing-m)] list-none pl-0 flex-1 min-w-0">
            {section.bullets.map((item, i) => (
              <li
                key={i}
                className="body text-[var(--color-primary)]  uppercase flex items-center gap-[var(--spacing-m)]"
              >
                <span className="Icon--ArrowRight--S Icon--blue-500" aria-hidden />
                {item}
              </li>
            ))}
          </ul>
          <ScrollTriggerVideo
            src={section.media.src}
            poster={section.media.poster}
            className={videoClassName.tablet}
          />
        </div>
      </section>
    )
  }

  if (isDesktop1440px) {
    return (
      <section className="w -full flex flex-col gap-[var(--spacing-m)] items-start">
        <div className="flex flex-col gap-[var(--spacing-s)]">
          <h2
            className="h3 text-[var(--blue-500)] uppercase"
          >
            {section.heading}
          </h2>
          <p className="body text-[var(--color-primary)]">{section.intro}</p>
        </div>
        <div className="flex flex-row justify-between items-center w-full">
          <ul className="flex flex-col gap-[var(--spacing-m)] list-none px-[var(--spacing-s)]">
            {section.bullets.map((item, i) => (
              <li
                key={i}
                className="body text-[var(--color-primary)] uppercase flex items-center gap-[var(--spacing-s)]"
              >
                <span className="Icon--ArrowRight--M Icon--blue-500" aria-hidden />
                {item}
              </li>
            ))}
          </ul>
          <ScrollTriggerVideo
            src={section.media.src}
            poster={section.media.poster}
            className={videoClassName.desktop1440}
          />
        </div>
      </section>
    )
  }

  return (
    <section className="w-full flex flex-col gap-[var(--spacing-m)] items-start">
      <div className="flex flex-col gap-[var(--spacing-s)]">
        <h2
          className="h3 text-[var(--blue-500)] uppercase "
      
        >
          {section.heading}
        </h2>
        <p className="body text-[var(--color-primary)]">{section.intro}</p>
      </div>
      <div className="flex flex-row justify-between items-center w-full ">
        <ul className="flex flex-col gap-[var(--spacing-m)] px-[var(--spacing-s)] list-none ">
          {section.bullets.map((item, i) => (
            <li
              key={i}
              className="body text-[var(--color-primary)] uppercase flex items-center gap-[var(--spacing-s)]"
            >
              <span className="Icon--ArrowRight--M Icon--blue-500" aria-hidden />
              {item}
            </li>
          ))}
        </ul>
        <ScrollTriggerVideo
          src={section.media.src}
          poster={section.media.poster}
          className={videoClassName.large}
        />
      </div>
    </section>
  )
}
