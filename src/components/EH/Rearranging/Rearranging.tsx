"use client"

import React from "react"
import Image from "next/image"
import useMobileDetection from "@/_utilities/useMobileDetection"
import { rearranging } from "@/data/EH/Rearranging"

export default function Rearranging() {
  const { isMobile, isTablet, isDesktop1440px } = useMobileDetection()

  if (isMobile) {
    return (
      <div className="w-full flex flex-col items-stretch p-[var(--spacing-s)] border border-[#FED05F] shadow-[0_2.46px_2.46px_0_rgba(255,255,255,0.2)] bg-[var(--neutral-1000)]">
        <div className="w-full mb-[var(--spacing-lg)]">
          <p className="body text-[var(--color-secondary-inverse)]">
            {rearranging.solvingText}
          </p>
        </div>
        
        <div className="flex flex-row items-center justify-between w-full">
          <div className="flex-1">
            <h3 className="h2 text-[var(--color-secondary-inverse)] max-w-[400px] font-bold">
              {rearranging.insteadText}
            </h3>
          </div>
          
          <div className="relative w-[120px] h-[240px] flex-shrink-0">
            <Image
              src={rearranging.lightbulbImage}
              alt={rearranging.lightbulbAlt}
              fill
              className="object-contain"
            />
          </div>
        </div>
      </div>
    )
  }

  if (isTablet) {
    return (
      <div className="w-full flex flex-col items-stretch p-[var(--spacing-s)] border border-[#FED05F] shadow-[0_2.46px_2.46px_0_rgba(255,255,255,0.2)] bg-[var(--neutral-1000)]">
        <div className="w-full mb-[var(--spacing-lg)]">
          <p className="body text-[var(--color-secondary-inverse)]">
            {rearranging.solvingText}
          </p>
        </div>
        
        <div className="flex flex-row items-center justify-between w-full">
          <div className="flex-1">
            <h3 className="h2 text-[var(--color-secondary-inverse)] max-w-[600px] font-bold">
              {rearranging.insteadText}
            </h3>
          </div>
          
          <div className="relative w-[180px] h-[270px] flex-shrink-0">
            <Image
              src={rearranging.lightbulbImage}
              alt={rearranging.lightbulbAlt}
              fill
              className="object-contain"
            />
          </div>
        </div>
      </div>
    )
  }

  if (isDesktop1440px) {
    return (
      <div className="w-full flex flex-col justify-center items-center gap-[var(--spacing-s,24px)] p-[var(--spacing-xl)] border border-[#FED05F] shadow-[0_2.46px_2.46px_0_rgba(255,255,255,0.2)] bg-[var(--neutral-1000)]">
        <div className="flex flex-row items-center justify-between w-full">
          <div className="flex flex-col items-center max-w-[800px] gap-[var(--spacing-2xl)] justify-center flex-1 self-stretch">
            <p className="body text-[var(--color-secondary-inverse)]">
              {rearranging.solvingText}
            </p>
            
            <h3 className="h3 text-[var(--color-secondary-inverse)] ">
              {rearranging.insteadText}
            </h3>
          </div>
          
          <div className="relative w-[275px] h-[325px] flex-shrink-0">
            <Image
              src={rearranging.lightbulbImage}
              alt={rearranging.lightbulbAlt}
              fill
              className="object-contain"
            />
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="w-full flex flex-col justify-center items-center gap-[var(--spacing-s,24px)] p-[var(--spacing-xl)] border border-[#FED05F] shadow-[0_2.46px_2.46px_0_rgba(255,255,255,0.2)]">
      <div className="flex flex-row items-start justify-between w-full">
        <div className="flex flex-col items-start gap-[var(--spacing-lg)] justify-center max-w-[900px] flex-1 self-stretch">
          <p className="body text-[var(--color-secondary-inverse)]">
            {rearranging.solvingText}
          </p>
          
          <h3 className="h3 text-[var(--color-secondary-inverse)] ">
            {rearranging.insteadText}
          </h3>
        </div>
        
        <div className="relative w-[200px] h-[400px] flex-shrink-0">
          <Image
            src={rearranging.lightbulbImage}
            alt={rearranging.lightbulbAlt}
            fill
            className="object-contain"
          />
        </div>
      </div>
    </div>
  )
}
