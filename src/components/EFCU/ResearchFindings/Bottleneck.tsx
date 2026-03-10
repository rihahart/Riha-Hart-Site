"use client"

import React from "react"
import useMobileDetection from "@/_utilities/useMobileDetection"
import { bottleneck } from "@/data/EFCU/ResearchFindings/bottleneck"
import Style from "./Style"

export default function Bottleneck() {
  const { isMobile, isTablet, isDesktop1440px } = useMobileDetection()
  const section = bottleneck

  if (isMobile) {
    return (
      <Style>
        <div className="flex flex-col gap-[var(--spacing-s)]">
          <h2 className="h3 text-[var(--color-primary)]">
            {section.title}
          </h2>
          <p className="body text-[var(--color-primary)]">{section.description}</p>
        </div>
        <div className="w-full flex flex-col gap-[var(--spacing-xl)] items-start">
        <img
            src={section.image}
            alt=""
            className="max-w-[200px] h-auto object-contain flex-shrink-0 mx-auto"
          />
          <ul className="flex flex-col gap-[var(--spacing-m)] list-none pl-0 flex-1 min-w-0">
            {section.bullets.map((item, i) => (
              <li
                key={i}
                className="body text-[var(--color-primary)] uppercase flex items-center gap-[var(--spacing-lg)]"
              >
                <span className="Icon--ArrowRight--S Icon--1c4483" aria-hidden />
                {item}
              </li>
            ))}
          </ul>
      
        </div>
      </Style>
    )
  }

  if (isTablet) {
    return (
      <Style>
        <div className="flex flex-col gap-[var(--spacing-s)]">
          <h2 className="h3 text-[var(--color-primary)]">
            {section.title}
          </h2>
          <p className="body text-[var(--color-primary)]">{section.description}</p>
        </div>
        <div className="w-full flex flex-row gap-[var(--spacing-2xl)] items-center">
          <div className="flex flex-col gap-[var(--spacing-xl)] flex-1 min-w-0">
          <ul className="flex flex-col gap-[var(--spacing-m)] list-none pl-0 flex-1 min-w-0">
            {section.bullets.map((item, i) => (
              <li
                key={i}
                className="body text-[var(--color-primary)] uppercase flex items-center gap-[var(--spacing-lg)]"
              >
                <span className="Icon--ArrowRight--S Icon--1c4483" aria-hidden />
                {item}
              </li>
            ))}
          </ul>
          </div>
          <img
            src={section.image}
            alt=""
            className="max-w-[275px] h-auto object-contain flex-shrink-0"
          />
        </div>
      </Style>
    )
  }

  if (isDesktop1440px) {
    return (
      <Style>
        <div className="flex flex-col gap-[var(--spacing-s)]">
          <h2 className="h3 text-[var(--color-primary)]">
            {section.title}
          </h2>
          <p className="body text-[var(--color-primary)]">{section.description}</p>
        </div>
        <div className="flex flex-row justify-between items-center w-full">
          <div className="flex flex-col gap-[var(--spacing-m)] min-w-0">
            <ul className="flex flex-col gap-[var(--spacing-m)] list-none">
              {section.bullets.map((item, i) => (
                <li
                  key={i}
                  className="body text-[var(--color-primary)] uppercase flex items-center gap-[var(--spacing-m)]"
                >
                  <span className="Icon--ArrowRight--M Icon--1c4483" aria-hidden />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <img
            src={section.image}
            alt=""
            className="max-w-[325px] h-auto object-contain flex-shrink-0"
          />
        </div>
      </Style>
    )
  }

  return (
    <Style>
      <div className="flex flex-col gap-[var(--spacing-s)]">
        <h2 className="h3 text-[var(--color-primary)]">
          {section.title}
        </h2>
        <p className="body text-[var(--color-primary)]">{section.description}</p>
      </div>
      <div className="flex flex-row justify-between items-center w-full">
        <div className="flex flex-col flex-1 min-w-0">
          <ul className="flex flex-col gap-[var(--spacing-s)] list-none">
            {section.bullets.map((item, i) => (
              <li
                key={i}
                className="body text-[var(--color-primary)] font-bold uppercase flex items-center gap-[var(--spacing-s)]"
              >
                <span className="Icon--ArrowRight--L Icon--1c4483" aria-hidden />
                {item}
              </li>
            ))}
          </ul>
        </div>
        <img
          src={section.image}
          alt=""
          className="max-w-[375px] h-auto object-contain flex-shrink-0"
        />
      </div>
    </Style>
  )
}
