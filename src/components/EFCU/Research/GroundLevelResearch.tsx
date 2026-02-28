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
    return () => observer.disconnect()
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
        <div className="flex flex-col gap-[var(--spacing-m)]">
          <h2
            className="h3 text-[var(--blue-500)] uppercase"
          
          >
            {section.heading}
          </h2>
          <p className="body text-[var(--color-primary)]">{section.intro}</p>
        </div>
        <div className="w-full flex flex-col gap-[var(--spacing-2xl)] items-start">
          <ul className="flex flex-col gap-[var(--spacing-lg)] list-none pl-0 flex-1 min-w-0">
            {section.bullets.map((item, i) => (
              <li
                key={i}
                className="body text-[var(--color-primary)] uppercase flex items-center gap-[var(--spacing-lg)]"
              >
                <img
                  src="/Icons/IconsBlue.svg"
                  alt=""
                  width={14}
                  height={14}
                  className="flex-shrink-0"
                  aria-hidden
                />
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
      <section className="w-full flex flex-col gap-[var(--spacing-3xl)] py-[var(--spacing-2xl)] items-start">
        <div className="flex flex-col gap-[var(--spacing-lg)]">
          <h2
            className="h3 text-[var(--blue-500)] uppercase"
          >
            {section.heading}
          </h2>
          <p className="body text-[var(--color-primary)]">{section.intro}</p>
        </div>
        <div className="w-full flex flex-col gap-[var(--spacing-3xl)] px-[var(--spacing-lg)] items-start">
          <ul className="flex flex-col gap-[var(--spacing-xl)] list-none pl-0 flex-1 min-w-0">
            {section.bullets.map((item, i) => (
              <li
                key={i}
                className="body text-[var(--color-primary)]  uppercase flex items-center gap-[var(--spacing-lg)]"
              >
                <img
                  src="/Icons/IconsBlue.svg"
                  alt=""
                  width={16}
                  height={16}
                  className="flex-shrink-0"
                  aria-hidden
                />
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
      <section className="w-full flex flex-col gap-[var(--spacing-5xl)] py-[var(--spacing-xl)] items-start">
        <div className="flex flex-col gap-[var(--spacing-lg)]">
          <h2
            className="h3 text-[var(--blue-500)] uppercase"
          >
            {section.heading}
          </h2>
          <p className="body text-[var(--color-primary)]">{section.intro}</p>
        </div>
        <div className="flex flex-row justify-between items-center  w-full">
          <ul className="flex flex-col gap-[var(--spacing-xl)] list-none px-[var(--spacing-lg)]">
            {section.bullets.map((item, i) => (
              <li
                key={i}
                className="body text-[var(--color-primary)] uppercase flex items-center px-[var(--spacing-xl)] gap-[var(--spacing-lg)]"
              >
                <img
                  src="/Icons/IconsBlue.svg"
                  alt=""
                  width={20}
                  height={20}
                  className="flex-shrink-0"
                  aria-hidden
                />
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
    <section className="w-full flex flex-col gap-[var(--spacing-6xl)] py-[var(--spacing-xl)] items-start">
      <div className="flex flex-col gap-[var(--spacing-xl)]">
        <h2
          className="h3 text-[var(--blue-500)] uppercase "
      
        >
          {section.heading}
        </h2>
        <p className="body text-[var(--color-primary)]">{section.intro}</p>
      </div>
      <div className="flex flex-row justify-between items-center w-full ">
        <ul className="flex flex-col gap-[var(--spacing-2xl)] px-[var(--spacing-2xl)] list-none ">
          {section.bullets.map((item, i) => (
            <li
              key={i}
              className="body text-[var(--color-primary)] uppercase flex items-center gap-[var(--spacing-xl)]"
            >
              <img
                src="/Icons/IconsBlue.svg"
                alt=""
                width={24}
                height={24}
                className="flex-shrink-0"
                aria-hidden
              />
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
