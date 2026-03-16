"use client"

import React from "react"
import Image from "next/image"
import useMobileDetection from "@/_utilities/useMobileDetection"
import { coreMetrics } from "@/data/EH/coreMetrics"

const swingStyle = {
  transformOrigin: "top center",
  animation: "swing 3s ease-in-out infinite",
} as const

export default function CoreMetrics() {
  const { isMobile, isTablet, isDesktop1440px } = useMobileDetection()

  if (isMobile) {
    return (
      <div className="w-full flex flex-col items-stretch px-[var(--spacing-lg)] pb-[var(--spacing-m)] border border-[#FED05F] shadow-[0_2.46px_2.46px_0_rgba(255,255,255,0.2)] bg-[var(--neutral-1000)]">
        <style>{`@keyframes swing { 0%,100%{transform:rotate(-15deg)} 50%{transform:rotate(15deg)} }`}</style>
        <div className="relative w-[100px] h-[180px] flex-shrink-0 self-end -mt-[20px] z-10">
          <Image
            src={coreMetrics.lightbulbImage}
            alt={coreMetrics.lightbulbAlt}
            fill
            className="object-contain"
            style={swingStyle}
          />
        </div>
        <div className="flex-1">
          <h3 className="h2 text-[var(--color-tertiary-inverse)] -mt-[30px]">
            {coreMetrics.insteadText}
          </h3>
        </div>
      </div>
    )
  }

  if (isTablet) {
    return (
      <div className="w-full flex flex-col items-stretch px-[var(--spacing-m)] pb-[var(--spacing-m)] border border-[#FED05F] shadow-[0_2.46px_2.46px_0_rgba(255,255,255,0.2)] bg-[var(--neutral-1000)]">
        <style>{`@keyframes swing { 0%,100%{transform:rotate(-15deg)} 50%{transform:rotate(15deg)} }`}</style>
        <div className="relative w-[100px] h-[180px] flex-shrink-0 self-end -mt-[20px] z-10">
          <Image
            src={coreMetrics.lightbulbImage}
            alt={coreMetrics.lightbulbAlt}
            fill
            className="object-contain"
            style={swingStyle}
          />
        </div>
        <div className="flex-1">
          <h3 className="h2 text-[var(--color-tertiary-inverse)] -mt-[45px]">
            {coreMetrics.insteadText}
          </h3>
        </div>
      </div>
    )
  }

  if (isDesktop1440px) {
    return (
      <div className="w-full flex flex-col justify-center items-center gap-[var(--spacing-s,24px)] px-[var(--spacing-xl)] pb-[var(--spacing-m)] border border-[#FED05F] shadow-[0_2.46px_2.46px_0_rgba(255,255,255,0.2)] bg-[var(--neutral-1000)]">
        <style>{`@keyframes swing { 0%,100%{transform:rotate(-15deg)} 50%{transform:rotate(15deg)} }`}</style>
        <div className="flex flex-row items-center justify-between w-full">
          <div className="flex flex-col items-center max-w-[800px] gap-[var(--spacing-2xl)] justify-center flex-1 self-stretch">
            <h3 className="h3 text-[var(--color-secondary-inverse)]">
              {coreMetrics.insteadText}
            </h3>
          </div>
          <div className="relative w-[115px] h-[210px] flex-shrink-0">
            <Image
              src={coreMetrics.lightbulbImage}
              alt={coreMetrics.lightbulbAlt}
              fill
              className="object-contain"
              style={swingStyle}
            />
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="w-full flex flex-col justify-center items-center gap-[var(--spacing-s,24px)] px-[var(--spacing-xl)] pb-[var(--spacing-m)] border border-[#FED05F] shadow-[0_2.46px_2.46px_0_rgba(255,255,255,0.2)] bg-[var(--neutral-1000)]">
      <style>{`@keyframes swing { 0%,100%{transform:rotate(-15deg)} 50%{transform:rotate(15deg)} }`}</style>
      <div className="flex flex-row items-start justify-between w-full">
        <div className="flex flex-col items-start gap-[var(--spacing-lg)] justify-center max-w-[900px] flex-1 self-stretch">
          <h3 className="h3 text-[var(--color-secondary-inverse)]">
            {coreMetrics.insteadText}
          </h3>
        </div>
        <div className="relative w-[137px] h-[250px] flex-shrink-0">
          <Image
            src={coreMetrics.lightbulbImage}
            alt={coreMetrics.lightbulbAlt}
            fill
            className="object-contain"
            style={swingStyle}
          />
        </div>
      </div>
    </div>
  )
}
