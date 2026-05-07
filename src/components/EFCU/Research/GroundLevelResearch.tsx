"use client"


import useMobileDetection from "@/_utilities/useMobileDetection"
import { groundLevelResearch } from "@/data/EFCU/Research/groundLevelResearch"

interface Props {
  onNavigate: (direction: "prev" | "next") => void
  currentIndex: number
  total: number
}

export default function GroundLevelResearch({ onNavigate, currentIndex, total }: Props) {
  const { isMobile, isTablet, isDesktop1440px } = useMobileDetection()
  const section = groundLevelResearch

  if (isMobile) {
    return (
      <section 
        className="w-full flex flex-col gap-[var(--spacing-xl)] items-start px-[var(--spacing-lg)] py-[var(--spacing-lg)]"
        style={{
          backgroundColor: "#FDFFFE",
          borderLeft: "4px solid #1c4483",
          boxShadow: "var(--glow-shadow)",
          height: "450px"
        }}
      >
        <div className="flex flex-row justify-between items-center self-stretch">
          <h3 className="h3 text-[#2E8FB6]">01</h3>
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
        <div className="flex flex-col gap-[var(--spacing-s)]">
          <h2 className="h3 text-[#1c4483] uppercase">{section.heading}</h2>
          <p className="body text-[var(--color-primary)]">{section.intro}</p>
        </div>
        <ul className="flex flex-col gap-[var(--spacing-m)] list-none pl-0">
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
      </section>
    )
  }

  if (isTablet) {
    return (
      <section 
        className="w-full flex flex-col gap-[var(--spacing-xl)] items-start px-[var(--spacing-xl)] py-[var(--spacing-xl)]"
        style={{
          backgroundColor: "#FDFFFE",
          borderLeft: "6px solid #1c4483",
          boxShadow:"var(--glow-shadow)",
          height: "500px"
        }}
      >
        <div className="flex flex-row justify-between items-center self-stretch">
          <h3 className="h3 text-[#2E8FB6]">01</h3>
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
        <div className="flex flex-col gap-[var(--spacing-s)]">
          <h2 className="h3 text-[#1c4483] uppercase">{section.heading}</h2>
          <p className="body text-[var(--color-primary)]">{section.intro}</p>
        </div>
        <ul className="flex flex-col gap-[var(--spacing-m)] list-none pl-0">
          {section.bullets.map((item, i) => (
            <li
              key={i}
              className="body text-[var(--color-primary)] uppercase flex items-center gap-[var(--spacing-m)]"
            >
              <span className="Icon--ArrowRight--S Icon--1c4483" aria-hidden />
              {item}
            </li>
          ))}
        </ul>
      </section>
    )
  }

  if (isDesktop1440px) {
    return (
      <section 
        className="w-full flex flex-col gap-[var(--spacing-m)] items-start px-[var(--spacing-xl)] py-[var(--spacing-xl)]"
        style={{
          backgroundColor: "#FDFFFE",
          borderLeft: "6px solid #1c4483",
          boxShadow:"var(--glow-shadow)",
          height: "550px"
        }}
      >
        <div className="flex flex-row justify-between items-center self-stretch">
          <h3 className="h3 text-[#2E8FB6]">01</h3>
          <div className="flex items-center gap-[var(--spacing-s)]">
            <button
              onClick={() => onNavigate("prev")}
              className="w-[40px] h-[40px] rounded-full bg-[#2E8FB6] flex items-center justify-center"
              aria-label="Previous"
            >
              <span className="Icon--ChevronLeft--M text-white" style={{ color: "white" }} />
            </button>
            <span className="body text-[#2E8FB6]">{currentIndex} of {total}</span>
            <button
              onClick={() => onNavigate("next")}
              className="w-[40px] h-[40px] rounded-full bg-[#2E8FB6] flex items-center justify-center"
              aria-label="Next"
            >
              <span className="Icon--ChevronRight--M text-white" style={{ color: "white" }} />
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-[var(--spacing-s)]">
          <h2 className="h3 text-[#1c4483] uppercase">{section.heading}</h2>
          <p className="body text-[var(--color-primary)]">{section.intro}</p>
        </div>
        <ul className="flex flex-col gap-[var(--spacing-m)] list-none pl-0">
          {section.bullets.map((item, i) => (
            <li
              key={i}
              className="body text-[var(--color-primary)] uppercase flex items-center gap-[var(--spacing-s)]"
            >
              <span className="Icon--ArrowRight--M Icon--1c4483" aria-hidden />
              {item}
            </li>
          ))}
        </ul>
      </section>
    )
  }

  return (
    <section 
      className="w-full flex flex-col gap-[var(--spacing-m)] items-start px-[var(--spacing-xl)] py-[var(--spacing-xl)]"
      style={{
        backgroundColor: "#FDFFFE",
        borderLeft: "8px solid #1c4483",
        boxShadow: "var(--glow-shadow)",
        height: "650px"
      }}
    >
      <div className="flex flex-row justify-between items-center self-stretch">
        <h3 className="h3 text-[#2E8FB6]">01</h3>
        <div className="flex items-center gap-[var(--spacing-s)]">
          <button
            onClick={() => onNavigate("prev")}
            className="px-[var(--spacing-xs)] py-[var(--spacing-xs)] rounded-full bg-[#2E8FB6] flex items-center justify-center"
            aria-label="Previous"
          >
            <span className="Icon--ChevronLeft--M text-white" style={{ color: "white" }} />
          </button>
          <span className="body text-[#2E8FB6]">{currentIndex} of {total}</span>
          <button
            onClick={() => onNavigate("next")}
            className="px-[var(--spacing-xs)] py-[var(--spacing-xs)] rounded-full bg-[#2E8FB6] flex items-center justify-center"
            aria-label="Next"
          >
            <span className="Icon--ChevronRight--M text-white" style={{ color: "white" }} />
          </button>
        </div>
      </div>
      <div className="flex flex-col gap-[var(--spacing-s)]">
        <h2 className="h3 text-[#1c4483] uppercase">{section.heading}</h2>
        <p className="body text-[var(--color-primary)]">{section.intro}</p>
      </div>
      <ul className="flex flex-col gap-[var(--spacing-m)] list-none pl-0">
        {section.bullets.map((item, i) => (
          <li
            key={i}
            className="body text-[var(--color-primary)] font-bold uppercase flex items-center gap-[var(--spacing-s)]"
          >
            <span className="Icon--ArrowRight--M Icon--1c4483" aria-hidden />
            {item}
          </li>
        ))}
      </ul>
    </section>
  )
}
