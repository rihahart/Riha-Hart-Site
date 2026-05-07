"use client"

import useMobileDetection from "@/_utilities/useMobileDetection"
import { preferenceTestData } from "@/data/EH/FinalResult/PreferenceTest"

const { heading, quote1, quote2, quote3, quote4, body } = preferenceTestData

const quoteStyle = {
  fontStyle: "italic",
  color: "var(--neutral-500)",
  textTransform: "uppercase"
}

export default function PreferenceTest() {
  const { isMobile, isTablet, isDesktop1440px } = useMobileDetection()

  if (isMobile) {
    return (
      <div
        className="flex flex-col justify-center items-center gap-[var(--spacing-4xl)] border-t-[4px] border-[#A17E5E] self-stretch w-full"
        style={{ padding: "var(--spacing-m)" }}
      >
        <h3 className="h3 text-[var(--color-primary-inverse)]">{heading}</h3>

        <div className="flex flex-col justify-center items-center w-full">
          <div className="flex flex-col gap-[var(--spacing-2xl)] w-full items-center text-center">
            <h4 className="h4" style={quoteStyle}>{quote1}</h4>
            <h4 className="h4" style={quoteStyle}>{quote2}</h4>
            <h4 className="h4" style={quoteStyle}>{quote3}</h4>
            <h4 className="h4" style={quoteStyle}>{quote4}</h4>
          </div>
        </div>
        <p className="body text-[var(--color-primary-inverse)]">{preferenceTestData.body}</p>
      </div>
    )
  }

  const innerWidth = isTablet
    ? "w-full"
    : isDesktop1440px
    ? "max-w-[800px]"
    : "max-w-[1000px]"

  const borderTop = isTablet
    ? "border-t-[6px]"
    : isDesktop1440px
    ? "border-t-[8px]"
    : "border-t-[12px]"

  return (
    <div
      className={`flex flex-col justify-center items-center gap-[var(--spacing-8xl)] self-stretch w-full ${borderTop} border-[#A17E5E]`}
      style={{ padding: "var(--spacing-s)" }}
    >
      <h3 className="h3 text-[var(--color-primary-inverse)]">{heading}</h3>

      <div className="flex flex-col justify-center items-center gap-[var(--spacing-3xl)] w-full">
        <div className={`flex flex-col gap-[var(--spacing-3xl)] w-full ${innerWidth}`}>

          <div className="flex justify-center items-start gap-[var(--spacing-9xl)]">
            <h4 className="h4" style={quoteStyle}>{quote1}</h4>
            <h4 className="h4" style={quoteStyle}>{quote2}</h4>
          </div>

          <div className="flex justify-between items-start">
            <h4 className="h4" style={quoteStyle}>{quote3}</h4>
            <h4 className="h4" style={quoteStyle}>{quote4}</h4>
          </div>

        </div>
        <p className="body text-[var(--color-primary-inverse)]">{preferenceTestData.body}</p>
      </div>
    </div>
  )
}
