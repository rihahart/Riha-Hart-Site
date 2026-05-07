"use client"

import React, { useState, useEffect } from "react"
import useMobileDetection from "@/_utilities/useMobileDetection"
import { impactBox } from "@/data/EFCU/IntroImpact/impactBox"

type ScreenSize = "mobile" | "tablet" | "desktop1440" | "large"

function CountingNumber({ targetMillions, className }: { targetMillions: number; className: string }) {
  const [count, setCount] = useState(1)
  const [isVisible, setIsVisible] = useState(false)
  const ref = React.useRef<HTMLSpanElement>(null)
  const target = targetMillions * 1000000

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        } else {
          setIsVisible(false)
          setCount(1) // Reset count when not visible
        }
      },
      {
        threshold: 1.0 // Trigger when 100% visible
      }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [])

  useEffect(() => {
    if (!isVisible) return

    const duration = 600 // 0.6 seconds
    const steps = 40
    const increment = target / steps
    const stepDuration = duration / steps
    let current = 1

    const timer = setInterval(() => {
      current += increment
      if (current >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, stepDuration)

    return () => clearInterval(timer)
  }, [target, isVisible])

  const formatNumber = (num: number) => {
    if (num >= 1000000) {
      const millions = num / 1000000
      return `$${Math.round(millions)} Million`
    }
    return `$${Math.floor(num / 1000)}K`
  }

  return <span ref={ref} className={className}>{formatNumber(count)}</span>
}

function CountingPercentage({ targetPercent, className }: { targetPercent: number; className: string }) {
  const [count, setCount] = useState(1)
  const [isVisible, setIsVisible] = useState(false)
  const ref = React.useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        } else {
          setIsVisible(false)
          setCount(1) // Reset count when not visible
        }
      },
      {
        threshold: 1.0 // Trigger when 100% visible
      }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [])

  useEffect(() => {
    if (!isVisible) return

    const duration = 600 // 0.6 seconds
    const steps = 40
    const increment = targetPercent / steps
    const stepDuration = duration / steps
    let current = 1

    const timer = setInterval(() => {
      current += increment
      if (current >= targetPercent) {
        setCount(targetPercent)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, stepDuration)

    return () => clearInterval(timer)
  }, [targetPercent, isVisible])

  return <span ref={ref} className={className}>{count}%</span>
}

function CountingTime({ className }: { className: string }) {
  const timeStages = ["3 DAYS", "2 DAYS", "1 DAY", "12 hr", "6 hr", "3 hr", "1 hr"]
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const ref = React.useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        } else {
          setIsVisible(false)
          setCurrentIndex(0) // Reset when not visible
        }
      },
      {
        threshold: 1.0 // Trigger when 100% visible
      }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [])

  useEffect(() => {
    if (!isVisible) return

    const duration = 600 // 0.6 seconds total
    const stepDuration = duration / timeStages.length
    let index = 0

    const timer = setInterval(() => {
      index++
      if (index >= timeStages.length) {
        setCurrentIndex(timeStages.length - 1)
        clearInterval(timer)
      } else {
        setCurrentIndex(index)
      }
    }, stepDuration)

    return () => clearInterval(timer)
  }, [isVisible])

  return <span ref={ref} className={className}>3 days to {timeStages[currentIndex]}</span>
}

/* Arrow Right; rotated to face up */
function ArrowIcon({
  size,
  className,
  style
}: {
  size: "small" | "medium" | "large"
  className?: string
  style?: React.CSSProperties
}) {
  const w = size === "small" ? 22 : size === "medium" ? 26 : 32
  const h = size === "small" ? 15 : size === "medium" ? 24 : 22
  return (
    <svg
      width={w}
      height={h}
      viewBox="0 0 32 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={style}
      aria-hidden
    >
      <path
        d="M30.5 10.4704C30.5 10.4704 24.0374 4.66973 19.219 1.5M1.5 10.5627C1.5 10.5627 18.9415 10.9091 30.4529 10.5627M30.5 10.5617C30.5 10.5617 24.0374 16.3624 19.219 19.5321"
        stroke="var(--color-primary)"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  )
}

const cardStyles: Record<
  ScreenSize,
  {
    cardClass: string
    arrowSize: "small" | "medium" | "large"
    iconTranslateY: number
    metricClass: string
    descriptionClass: string
    metricGap: string
    contentGap: string
  }
> = {
  mobile: {
    arrowSize: "small",
    cardClass: "p-[var(--spacing-l)]",
    iconTranslateY: 0,
    metricClass: "h2",
    descriptionClass: "body",
    metricGap: "gap-[var(--spacing-s)]",
    contentGap: "gap-[var(--spacing-s)]"
  },
  tablet: {
    cardClass: "h-[180px] p-[var(--spacing-m)]",
    arrowSize: "small",
    iconTranslateY: 2,
    metricClass: "h3",
    descriptionClass: "caption",
    metricGap: "gap-[var(--spacing-xs)]",
    contentGap: "gap-[var(--spacing-xs)]"
  },
  desktop1440: {
    cardClass: " h-[200px] p-[var(--spacing-s)]",
    arrowSize: "medium",
    iconTranslateY: 2,
    metricClass: "h3",
    descriptionClass: "caption",
    metricGap: "gap-[var(--spacing-xs)]",
    contentGap: "gap-[var(--spacing-xs)]"
  },
  large: {
    cardClass: "h-[250px] p-[var(--spacing-s)]",
    arrowSize: "large",
    iconTranslateY: 2,
    metricClass: "h3",
    descriptionClass: "caption",
    metricGap: "gap-[var(--spacing-xs)]",
    contentGap: "gap-[var(--spacing-xs)]"
  }
}

export default function ImpactBox() {
  const { isMobile, isTablet, isDesktop1440px } = useMobileDetection()

  const Card = ({
    item,
    index,
    screenSize
  }: {
    item: { metric: string; description: string }
    index: number
    screenSize: ScreenSize
  }) => {
    const { cardClass, arrowSize, iconTranslateY, metricClass, descriptionClass, metricGap, contentGap } =
      cardStyles[screenSize]
    return (
      <div
        className={`flex flex-col items-start justify-start text-left bg-[var(--color-primary-inverse)] shadow-md w-full ${contentGap} ${cardClass}`}
      >
        <div className={`flex w-full items-center justify-center ${metricGap}`}>
          {item.metric !== "$15 Million" && item.metric !== "3 days to 1 hr" && (
            <ArrowIcon
              size={arrowSize}
              className="flex-shrink-0 self-center"
              style={{ transform: iconTranslateY ? `translateY(${iconTranslateY}px) rotate(-90deg)` : "rotate(-90deg)" }}
            />
          )}
          {item.metric === "$15 Million" ? (
            <CountingNumber targetMillions={15} className={`${metricClass} text-[var(--color-primary)]`} />
          ) : item.metric === "160%" ? (
            <CountingPercentage targetPercent={160} className={`${metricClass} text-[var(--color-primary)]`} />
          ) : item.metric === "3 days to 1 hr" ? (
            <CountingTime className={`${metricClass} text-[var(--color-primary)]`} />
          ) : (
            <span className={`${metricClass} text-[var(--color-primary)]`}>
              {item.metric}
            </span>
          )}
        </div>
        <p
          className={`${descriptionClass} text-[var(--color-primary)] text-left w-full`}
        >
          {item.description}
        </p>
      </div>
    )
  }

  // Mobile (≤768px): stacked, full width cards
  if (isMobile) {
    return (
      <div 
        className="w-full p-[var(--spacing-l)] lineshadow"
        style={{
          background: "radial-gradient(ellipse 100% 70% at 50% 100%, rgba(28,68,131,0.8) 0%, transparent 90%), linear-gradient(180deg, #033361 0%, #1C4483 100%, #01519C 100%)"
        }}
      >
        <div className="w-full flex flex-col gap-[var(--spacing-l)]">
          {impactBox.map((item, index) => (
            <Card key={index} item={item} index={index} screenSize="mobile" />
          ))}
        </div>
      </div>
    )
  }

  // Tablet (769px - 1024px): 3 columns, smaller padding
  if (isTablet) {
    return (
      <div 
        className="w-full p-[var(--spacing-m)] lineshadow"
        style={{
          background: "radial-gradient(ellipse 100% 70% at 50% 100%, rgba(28,68,131,0.8) 0%, transparent 90%), linear-gradient(180deg, #033361 0%, #1C4483 100%, #01519C 100%)"
        }}
      >
        <div className="w-full grid grid-cols-3 gap-[var(--spacing-m)]">
          {impactBox.map((item, index) => (
            <Card key={index} item={item} index={index} screenSize="tablet" />
          ))}
        </div>
      </div>
    )
  }

  // Desktop 1440px (1025px - 1440px): 3 columns, more gap
  if (isDesktop1440px) {
    return (
      <div 
        className="w-full p-[var(--spacing-m)] lineshadow"
        style={{
          background: "radial-gradient(ellipse 100% 70% at 50% 100%, rgba(28,68,131,0.8) 0%, transparent 90%), linear-gradient(180deg, #033361 0%, #1C4483 100%, #01519C 100%)"
        }}
      >
        <div className="w-full grid grid-cols-3 gap-[var(--spacing-m)]">
          {impactBox.map((item, index) => (
            <Card key={index} item={item} index={index} screenSize="desktop1440" />
          ))}
        </div>
      </div>
    )
  }

  // Large Desktop (>1440px): 3 columns, max-width container, card height 275 + 4xl padding
  return (
    <div 
      className="w-full max-w-[1600px] mx-auto p-[var(--spacing-m)] lineshadow"
      style={{
        background: "radial-gradient(ellipse 100% 70% at 50% 100%, rgba(28,68,131,0.8) 0%, transparent 90%), linear-gradient(180deg, #033361 0%, #1C4483 100%, #01519C 100%)"
      }}
    >
      <div className="w-full grid grid-cols-3 gap-[var(--spacing-m)]">
        {impactBox.map((item, index) => (
          <Card key={index} item={item} index={index} screenSize="large" />
        ))}
      </div>
    </div>
  )
}
