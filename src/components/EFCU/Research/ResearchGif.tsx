"use client"

import React from "react"

interface Props {
  onNavigate: (direction: "prev" | "next") => void
  currentIndex: number
  total: number
}

export default function ResearchGif({ onNavigate, currentIndex, total }: Props) {
  return (
    <section 
      className="w-full flex flex-col gap-[var(--spacing-xl)] items-center px-[var(--spacing-lg)] py-[var(--spacing-lg)]"
      style={{
        backgroundColor: "#FDFFFE",
        borderLeft: "4px solid #1c4483",
        boxShadow: "0 4px 4px 0 rgba(0, 0, 0, 0.25)",
        height: "450px"
      }}
    >
      <div className="flex flex-row justify-between items-center self-stretch">
        <h3 className="h3 text-[#2E8FB6]">04</h3>
        <div className="flex items-center gap-[var(--spacing-s)]">
            <button
              onClick={() => onNavigate("prev")}
              className="w-[30px] h-[30px] rounded-full bg-[#2E8FB6] flex items-center justify-center"
              aria-label="Previous"
            >
              <span className="Icon--ChevronLeft--S text-white" style={{ color: "white" }} />
            </button>
            <span className="body text-[#2E8FB6]">{currentIndex} of {total}</span>
            <button
              onClick={() => onNavigate("next")}
              className="w-[30px] h-[30px] rounded-full bg-[#2E8FB6] flex items-center justify-center"
              aria-label="Next"
            >
              <span className="Icon--ChevronRight--S text-white" style={{ color: "white" }} />
            </button>
        </div>
      </div>
      <div className="w-full flex items-center justify-center">
        <img
          src="/EFCU/Crazy8S.gif"
          alt="Crazy 8s workshop"
          className="max-w-full h-auto object-contain flex-shrink-0"
          style={{ maxHeight: "calc(450px - 120px)" }}
        />
      </div>
    </section>
  )
}
