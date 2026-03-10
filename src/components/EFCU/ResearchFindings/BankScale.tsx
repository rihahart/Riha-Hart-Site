"use client"

import React from "react"
import useMobileDetection from "@/_utilities/useMobileDetection"
import WeakOnlineApp from "./WeakOnlineApp"
import Bottleneck from "./Bottleneck"
import LowTrust from "./LowTrust"


const baseStyle: React.CSSProperties = {
  backgroundColor: "#FFC700",
  borderLeftColor: "var(--blue-300)",
  borderLeftStyle: "solid"
}

export default function BankScale() {
  const { isMobile, isTablet, isDesktop1440px } = useMobileDetection()

  if (isMobile) {
    return (
      <div className="w-full flex flex-col gap-[var(--spacing-4xl)]">
        <div className="flex flex-col gap-[var(--spacing-s)]">
          <section className="w-full flex flex-row gap-[var(--spacing-s)] items-start">
            <img
              src="/researchDataPhotos/Lightbulb.png"
              alt=""
              className="w-auto h-[90px] object-contain flex-shrink-0"
              aria-hidden
            />
            <h2 className="h2 text-[var(--color-primary)] uppercase">
              The bank was not built to scale digitally.
            </h2>
          </section>
          <p className="body text-[var(--color-primary)]">
            Research revealed a systemic misalignment between the bank's growth ambitions and its digital infrastructure. The organization was operating with tools and processes that could not support scale.
          </p>
        </div>
        <WeakOnlineApp />
        <Bottleneck />
        <LowTrust />
      </div>
    )
  }

  if (isTablet) {
    return (
      <div className="w-full flex flex-col gap-[var(--spacing-3xl)]">
        <div className="flex flex-col gap-[var(--spacing-s)]">
          <section className="w-full flex flex-row gap-[var(--spacing-s)] items-center">
            <img
              src="/researchDataPhotos/Lightbulb.png"
              alt=""
              className="w-auto h-[100px] object-contain flex-shrink-0"
              aria-hidden
            />
            <h2 className="h2 text-[var(--color-primary)] uppercase">
              The bank was not built to scale digitally.
            </h2>
          </section>
          <p className="body text-[var(--color-primary)]">
            Research revealed a systemic misalignment between the bank's growth ambitions and its digital infrastructure. The organization was operating with tools and processes that could not support scale.
          </p>
        </div>
        <WeakOnlineApp />
        <Bottleneck />
        <LowTrust />
      </div>
    )
  }

  if (isDesktop1440px) {
    return (
    
        <section className="w-full flex flex-row gap-[var(--spacing-s)] items-start">
          <img
            src="/researchDataPhotos/Lightbulb.png"
            alt=""
            className="w-auto h-[125px] object-contain flex-shrink-0"
            aria-hidden
          />
            <div
        className="w-full flex flex-col gap-[var(--spacing-3xl)]">
          <div className="flex flex-col gap-[var(--spacing-s)] flex-1 min-w-0">
            <h2 className="h2 text-[var(--color-primary)] uppercase">
              The bank was not built to scale digitally.
            </h2>
            <p className="body text-[var(--color-primary)]">
              Research revealed a systemic misalignment between the bank's growth ambitions and its digital infrastructure. The organization was operating with tools and processes that could not support scale.
            </p>
          </div>
          <WeakOnlineApp />
        <Bottleneck />
        <LowTrust />
        </div>
        </section>
       
       
    )
  }

  return (
  
      <section className="w-full flex flex-row gap-[var(--spacing-s)] items-start">
        <img
          src="/researchDataPhotos/Lightbulb.png"
          alt=""
          className="w-auto h-[150px] object-contain flex-shrink-0"
          aria-hidden
        />
        <div className="flex flex-col gap-[var(--spacing-3xl)]">
        <div className="flex flex-col gap-[var(--spacing-s)] flex-1 min-w-0">
          <h2 className="h2 text-[var(--color-primary)] uppercase">
            The bank was not built to scale digitally.
          </h2>
          <p className="body text-[var(--color-primary)]">
            Research revealed a systemic misalignment between the bank's growth ambitions and its digital infrastructure. The organization was operating with tools and processes that could not support scale.
          </p>
        </div>
        <WeakOnlineApp />
        <Bottleneck />
        <LowTrust />
        </div>
      </section>
  )
}
