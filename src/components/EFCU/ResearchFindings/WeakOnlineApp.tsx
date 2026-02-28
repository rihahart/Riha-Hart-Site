"use client"

import React from "react"
import useMobileDetection from "@/_utilities/useMobileDetection"
import { weakOnlineApp } from "@/data/EFCU/ResearchFindings/weakOnlineApp"
import Style from "./Style"

export default function WeakOnlineApp() {
  const { isMobile, isTablet, isDesktop1440px } = useMobileDetection()
  const section = weakOnlineApp

  if (isMobile) {
    return (
      <Style>
        <div className="flex flex-col gap-[var(--spacing-m)]">
          <h2 className="h3 text-[var(--color-primary)]">
            {section.title}
          </h2>
          <p className="body text-[var(--color-primary)]">{section.description}</p>
        </div>
        <div className="w-full flex flex-col gap-[var(--spacing-xl)] items-start">
        <img
            src={section.image}
            alt=""
            className="max-w-[150px] h-auto object-contain flex-shrink-0 mx-auto"
          />
          <div className="flex flex-col gap-[var(--spacing-s)] flex-1 min-w-0">
            {section.stats.map((stat, i) =>
              i === 0 ? (
                <h4 key={i} className="h4 text-[var(--color-primary)]">
                  {stat}
                </h4>
              ) : (
                <p key={i} className="body text-[var(--color-primary)]">
                  {stat}
                </p>
              )
            )}
          </div>
        </div>
      
        
      </Style>
    )
  }

  if (isTablet) {
    return (
      <Style>
        <div className="flex flex-col gap-[var(--spacing-m)]">
          <h2 className="h3 text-[var(--color-primary)]">
            {section.title}
          </h2>
          <p className="body text-[var(--color-primary)]">{section.description}</p>
        </div>
        <div className="w-full flex flex-row gap-[var(--spacing-4xl)] px-[var(--spacing-4xl)] items-center">
          <div className="flex flex-col gap-[var(--spacing-xl)] flex-1 min-w-0">
            {section.stats.map((stat, i) =>
              i === 0 ? (
                <h4 key={i} className="h4 text-[var(--color-primary)]">
                  {stat}
                </h4>
              ) : (
                <p key={i} className="body text-[var(--color-primary)]">
                  {stat}
                </p>
              )
            )}
          </div>
          <img
            src={section.image}
            alt=""
            className="max-w-[225px] h-auto object-contain flex-shrink-0"
          />
        </div>
      </Style>
    )
  }

  if (isDesktop1440px) {
    return (
      <Style>
        <div className="flex flex-col gap-[var(--spacing-xl)]">
          <h2 className="h3 text-[var(--color-primary)]">
            {section.title}
          </h2>
          <p className="body text-[var(--color-primary)]">{section.description}</p>
        </div>
        <div className="flex flex-row gap-[var(--spacing-8xl)] items-center px-[var(--spacing-4xl)] w-full">
          <div className="flex flex-col gap-[var(--spacing-xl)] flex-1 min-w-0">
            {section.stats.map((stat, i) =>
              i === 0 ? (
                <h4 key={i} className="h4 text-[var(--color-primary)]">
                  {stat}
                </h4>
              ) : (
                <p key={i} className="body text-[var(--color-primary)]">
                  {stat}
                </p>
              )
            )}
          </div>
          <img
            src={section.image}
            alt=""
            className="max-w-[250px] h-auto object-contain flex-shrink-0"
          />
        </div>
      </Style>
    )
  }

  return (
    <Style>
      <div className="flex flex-col gap-[var(--spacing-xl)]">
        <h2 className="h3 text-[var(--color-primary)]">
          {section.title}
        </h2>
        <p className="body text-[var(--color-primary)]">{section.description}</p>
      </div>
      <div className="flex flex-row justify-between items-center w-full">
        <div className="flex flex-col gap-[var(--spacing-2xl)] flex-1 min-w-0">
          {section.stats.map((stat, i) =>
            i === 0 ? (
              <h4 key={i} className="h4 text-[var(--color-primary)]">
                {stat}
              </h4>
            ) : (
              <p key={i} className="body text-[var(--color-primary)]">
                {stat}
              </p>
            )
          )}
        </div>
        <img
          src={section.image}
          alt=""
          className="max-w-[300px] h-auto object-contain flex-shrink-0"
        />
      </div>
    </Style>
  )
}
