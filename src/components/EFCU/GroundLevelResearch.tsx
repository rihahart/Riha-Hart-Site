"use client"

import React from "react"
import useMobileDetection from "@/_utilities/useMobileDetection"
import { groundLevelResearch } from "@/data/EFCU/groundLevelResearch"

export default function GroundLevelResearch() {
  const { isMobile, isTablet, isDesktop1440px } = useMobileDetection()
  const section = groundLevelResearch

  if (isMobile) {
    return (
      <section className="w-full flex flex-col gap-[var(--spacing-2xl)] items-start">
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
                  width={18}
                  height={18}
                  className="flex-shrink-0"
                  aria-hidden
                />
                {item}
              </li>
            ))}
          </ul>
          <video
            src={section.media.src}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className="w-full max-w-[full] h-auto flex-shrink-0"
            poster={section.media.poster ?? undefined}
          />
        </div>
      </section>
    )
  }

  if (isTablet) {
    return (
      <section className="w-full flex flex-col gap-[var(--spacing-2xl)] items-start">
        <div className="flex flex-col gap-[var(--spacing-m)]">
          <h2
            className="h3 text-[var(--blue-500)] uppercase"
          >
            {section.heading}
          </h2>
          <p className="body text-[var(--color-primary)]">{section.intro}</p>
        </div>
        <div className="w-full flex flex-col gap-[var(--spacing-2xl)] items-start">
          <ul className="flex flex-col gap-[var(--spacing-s)] list-none pl-0 flex-1 min-w-0">
            {section.bullets.map((item, i) => (
              <li
                key={i}
                className="body text-[var(--color-primary)]  uppercase flex items-center gap-[var(--spacing-lg)]"
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
          <video
            src={section.media.src}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className="w-full max-w-[full] h-auto flex-shrink-0"
            poster={section.media.poster ?? undefined}
          />
        </div>
      </section>
    )
  }

  if (isDesktop1440px) {
    return (
      <section className="w-full flex flex-col gap-[var(--spacing-4xl)] items-start">
        <div className="flex flex-col gap-[var(--spacing-xl)]">
          <h2
            className="h3 text-[var(--blue-500)] uppercase"
          >
            {section.heading}
          </h2>
          <p className="body text-[var(--color-primary)]">{section.intro}</p>
        </div>
        <div className="flex flex-row justify-between items-center w-full">
          <ul className="flex flex-col gap-[var(--spacing-2xl)] list-none">
            {section.bullets.map((item, i) => (
              <li
                key={i}
                className="h4 text-[var(--color-primary)] uppercase flex items-center gap-[var(--spacing-xl)]"
              >
                <img
                  src="/Icons/IconsBlue.svg"
                  alt=""
                  width={31}
                  height={20}
                  className="flex-shrink-0"
                  aria-hidden
                />
                {item}
              </li>
            ))}
          </ul>
          <video
            src={section.media.src}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className="w-full max-w-[600px] h-auto flex-shrink-0"
            poster={section.media.poster ?? undefined}
          />
        </div>
      </section>
    )
  }

  return (
    <section className="w-full flex flex-col gap-[var(--spacing-6xl)] items-start">
      <div className="flex flex-col gap-[var(--spacing-xl)]">
        <h2
          className="h3 text-[var(--blue-500)] uppercase "
      
        >
          {section.heading}
        </h2>
        <p className="body text-[var(--color-primary)]">{section.intro}</p>
      </div>
      <div className="flex flex-row justify-between items-center w-full ">
        <ul className="flex flex-col gap-[var(--spacing-2xl)] list-none ">
          {section.bullets.map((item, i) => (
            <li
              key={i}
              className="h4 text-[var(--color-primary)] font-bold uppercase flex items-center gap-[var(--spacing-xl)]"
            >
              <img
                src="/Icons/IconsBlue.svg"
                alt=""
                width={31}
                height={20}
                className="flex-shrink-0"
                aria-hidden
              />
              {item}
            </li>
          ))}
        </ul>
        <video
          src={section.media.src}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="w-full max-w-[700px] h-auto flex-shrink-0"
          poster={section.media.poster ?? undefined}
        />
      </div>
    </section>
  )
}
