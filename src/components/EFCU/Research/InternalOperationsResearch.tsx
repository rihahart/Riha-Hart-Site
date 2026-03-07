"use client"

import React from "react"
import useMobileDetection from "@/_utilities/useMobileDetection"
import { internalOperationsResearch } from "@/data/EFCU/Research/internalOperationsResearch"

export default function InternalOperationsResearch() {
  const { isMobile, isTablet, isDesktop1440px } = useMobileDetection()
  const section = internalOperationsResearch

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
          {section.note && (
            <p className="body text-[var(--color-primary)]">{section.note}</p>
          )}
          <img
            src="/EFCU/EmployeeActivities.png"
            alt={section.media.alt ?? ""}
            className="w-full max-w-[full] h-auto object-contain flex-shrink-0"
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
        <div className="w-full flex flex-col gap-[var(--spacing-xl)] items-start">
          <ul className="flex flex-col gap-[var(--spacing-m)] list-none pl-0 flex-1 min-w-0">
            {section.bullets.map((item, i) => (
              <li
                key={i}
                className="body text-[var(--color-primary)] uppercase flex items-center gap-[var(--spacing-m)]"
              >
                <span className="Icon--ArrowRight--S Icon--blue-500" aria-hidden />
                {item}
              </li>
            ))}
          </ul>
          {section.note && (
            <p className="body text-[var(--color-primary)]">{section.note}</p>
          )}
          <img
            src="/EFCU/EmployeeActivities.png"
            alt={section.media.alt ?? ""}
            className="w-full max-w-[full] h-auto object-contain flex-shrink-0"
          />
        </div>
      </section>
    )
  }

  if (isDesktop1440px) {
    return (
      <section className="w-full flex flex-col gap-[var(--spacing-m)] items-start">
        <div className="flex flex-col gap-[var(--spacing-s)]">
          <h2
            className="h3 text-[var(--blue-500)] uppercase"
          >
            {section.heading}
          </h2>
          <p className="body text-[var(--color-primary)]">{section.intro}</p>
        </div>
        <div className="flex flex-row gap-[var(--spacing-m)] items-center">
          <div className="flex flex-col gap-[var(--spacing-3xl)] px-[var(--spacing-s)] w-[50%]">
            <ul className="flex flex-col gap-[var(--spacing-m)]">
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
            {section.note && (
              <p className="body text-[var(--color-primary)]">{section.note}</p>
            )}
          </div>
          <img
            src="/EFCU/EmployeeActivities.png"
            alt={section.media.alt ?? ""}
            className="w-[50%] max-w-[450px] h-auto object-contain flex-shrink-0"
          />
        </div>
      </section>
    )
  }

  return (
    <section className="w-full flex flex-col gap-[var(--spacing-m)] items-start">
      <div className="flex flex-col gap-[var(--spacing-s)]">
        <h2
          className="h3 text-[var(--blue-500)] uppercase"
        >
          {section.heading}
        </h2>
        <p className="body text-[var(--color-primary)]">{section.intro}</p>
      </div>
      <div className="flex flex-row justify-between items-center w-full">
        <div className="flex flex-col gap-[var(--spacing-3xl)] px-[var(--spacing-s)] w-[50%]">
          <ul className="flex flex-col gap-[var(--spacing-m)] px-[var(--spacing-s)] list-none">
            {section.bullets.map((item, i) => (
              <li
                key={i}
                className="body text-[var(--color-primary)] font-bold uppercase flex items-center gap-[var(--spacing-s)]"
              >
<span className="Icon--ArrowRight--M Icon--blue-500" aria-hidden />
              {item}
            </li>
          ))}
        </ul>
        {section.note && (
            <p className="body text-[var(--color-primary)]">{section.note}</p>
          )}
        </div>
        <img
          src="/EFCU/EmployeeActivities.png"
          alt={section.media.alt ?? ""}
          className="w-full max-w-[550px] h-auto object-contain flex-shrink-0"
        />
      </div>
    </section>
  )
}
