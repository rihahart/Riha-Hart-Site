"use client"

import React from "react"
import useMobileDetection from "@/_utilities/useMobileDetection"
import WeakOnlineApp from "./WeakOnlineApp"
import Bottleneck from "./Bottleneck"
import LowTrust from "./LowTrust"


const baseStyle: React.CSSProperties = {
  backgroundColor: "#F6F6F8",
  borderLeftColor: "var(--blue-300)",
  borderLeftStyle: "solid"
}

export default function BankScale() {
  const { isMobile, isTablet, isDesktop1440px } = useMobileDetection()

  if (isMobile) {
    return (
      <div
        className="w-full flex flex-col px-[var(--spacing-lg)] py-[var(--spacing-2xl)] gap-[var(--spacing-4xl)]"
  
      >
        <section className="w-full flex flex-row gap-[var(--spacing-m)] items-start">
          <img
            src="/researchDataPhotos/Lightbulb.png"
            alt=""
            className="w-auto h-[90px] object-contain flex-shrink-0"
            aria-hidden
          />
          <div className="flex flex-col gap-[var(--spacing-s)] flex-1 min-w-0">
            <h2 className="h2 text-[var(--color-primary)] uppercase">
              The bank was not built to scale digitally.
            </h2>
            <p className="body text-[var(--color-primary)]">
              Research revealed a systemic misalignment between the bank's growth ambitions and its digital infrastructure. The organization was operating with tools and processes that could not support scale.
            </p>
          </div>
        </section>
        <WeakOnlineApp />
        <Bottleneck />
        <LowTrust />
      </div>
    )
  }

  if (isTablet) {
    return (
      <div
        className="w-full flex flex-col px-[var(--spacing-xl)] py-[var(--spacing-xl)] gap-[var(--spacing-2xl)]"
    
      >
        <section className="w-full flex flex-row gap-[var(--spacing-lg)] items-start">
          <img
            src="/researchDataPhotos/Lightbulb.png"
            alt=""
            className="w-auto h-[100px] object-contain flex-shrink-0"
            aria-hidden
          />
          <div className="flex flex-col gap-[var(--spacing-s)] flex-1 min-w-0">
            <h2 className="h2 text-[var(--color-primary)] uppercase ">
              The bank was not built to scale digitally.
            </h2>
            <p className="body text-[var(--color-primary)]">
              Research revealed a systemic misalignment between the bank's growth ambitions and its digital infrastructure. The organization was operating with tools and processes that could not support scale.
            </p>
          </div>
        </section>
        <WeakOnlineApp />
        <Bottleneck />
        <LowTrust />
      </div>
    )
  }

  if (isDesktop1440px) {
    return (
      <div
        className="w-full flex flex-col px-[var(--spacing-xl)] py-[var(--spacing-2xl)] gap-[var(--spacing-4xl)]"
     
      >
        <section className="w-full flex flex-row gap-[var(--spacing-lg)] items-start">
          <img
            src="/researchDataPhotos/Lightbulb.png"
            alt=""
            className="w-auto h-[125px] object-contain flex-shrink-0"
            aria-hidden
          />
          <div className="flex flex-col gap-[var(--spacing-s)] flex-1 min-w-0">
            <h2 className="h2 text-[var(--color-primary)] uppercase">
              The bank was not built to scale digitally.
            </h2>
            <p className="body text-[var(--color-primary)]">
              Research revealed a systemic misalignment between the bank's growth ambitions and its digital infrastructure. The organization was operating with tools and processes that could not support scale.
            </p>
          </div>
        </section>
        <WeakOnlineApp />
        <Bottleneck />
        <LowTrust />
      </div>
    )
  }

  return (
    <div
      className="w-full flex flex-col px-[var(--spacing-xl)] py-[var(--spacing-4xl)] gap-[var(--spacing-4xl)]"

    >
      <section className="w-full flex flex-row gap-[var(--spacing-xl)] items-start">
        <img
          src="/researchDataPhotos/Lightbulb.png"
          alt=""
          className="w-auto h-[150px] object-contain flex-shrink-0"
          aria-hidden
        />
        <div className="flex flex-col gap-[var(--spacing-lg)] flex-1 min-w-0">
          <h2 className="h2 text-[var(--color-primary)] uppercase">
            The bank was not built to scale digitally.
          </h2>
          <p className="body text-[var(--color-primary)]">
            Research revealed a systemic misalignment between the bank's growth ambitions and its digital infrastructure. The organization was operating with tools and processes that could not support scale.
          </p>
        </div>
      </section>
      <WeakOnlineApp />
      <Bottleneck />
      <LowTrust />
    </div>
  )
}
