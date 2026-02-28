"use client"

import React from "react"
import useMobileDetection from "@/_utilities/useMobileDetection"
import { internalOperationsResearch } from "@/data/EFCU/Research/internalOperationsResearch"

export default function InternalOperationsResearch() {
  const { isMobile, isTablet, isDesktop1440px } = useMobileDetection()
  const section = internalOperationsResearch

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
                  width={14}
                  height={14}
                  className="flex-shrink-0"
                  aria-hidden
                />
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
                className="body text-[var(--color-primary)] uppercase flex items-center gap-[var(--spacing-lg)]"
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
      <section className="w-full flex flex-col gap-[var(--spacing-4xl)] items-start">
        <div className="flex flex-col gap-[var(--spacing-xl)]">
          <h2
            className="h3 text-[var(--blue-500)] uppercase"
          >
            {section.heading}
          </h2>
          <p className="body text-[var(--color-primary)]">{section.intro}</p>
        </div>
        <div className="flex flex-row gap-[var(--spacing-2xl)] items-center ">
          <div className="flex flex-col gap-[var(--spacing-6xl)] px-[var(--spacing-2xl)] w-[50%] ">
            <ul className="flex flex-col gap-[var(--spacing-xl)] list-none">
              {section.bullets.map((item, i) => (
                <li
                  key={i}
                  className="body text-[var(--color-primary)] uppercase flex items-center gap-[var(--spacing-xl)]"
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
    <section className="w-full flex flex-col gap-[var(--spacing-6xl)] items-start">
      <div className="flex flex-col gap-[var(--spacing-xl)]">
        <h2
          className="h3 text-[var(--blue-500)] uppercase"
        >
          {section.heading}
        </h2>
        <p className="body text-[var(--color-primary)]">{section.intro}</p>
      </div>
      <div className="flex flex-row justify-between items-center w-full">
        <div className="flex flex-col gap-[var(--spacing-2xl)] flex-1 min-w-0">
          <ul className="flex flex-col gap-[var(--spacing-2xl)] list-none">
            {section.bullets.map((item, i) => (
              <li
                key={i}
                className="body text-[var(--color-primary)] font-bold uppercase flex items-center gap-[var(--spacing-xl)]"
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
