"use client"

import { useEffect, useRef } from "react"
import { Pie } from "react-chartjs-2"
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js"
import ChartDataLabels from "chartjs-plugin-datalabels"
import useMobileDetection from "@/_utilities/useMobileDetection"

ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels)

const chartData = {
  labels: ["Actions converted", "Users dropped off"],
  datasets: [
    {
      data: [42.5, 57.5],
      backgroundColor: ["#1E9263", "#D3D1C7"],
      borderWidth: 0,
      offset: [20, 0],
    },
  ],
}

const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: { display: false },
    tooltip: {
      callbacks: {
        label: (ctx: any) => " " + ctx.parsed.toFixed(1) + "%",
      },
    },
    datalabels: {
      color: ["#1a1a1a", "#1a1a1a"],
      font: { size: 12 },
      formatter: (value: number, ctx: any) => {
        const label = ctx.chart.data.labels[ctx.dataIndex]
        return label + "\n" + value.toFixed(1) + "%"
      },
      textAlign: "center" as const,
    },
  },
}

const containerClass =
  "p-[var(--spacing-xl)] lineshadow"

const h4Text =
  "Users felt unmotivated because the impact of their actions wasn't visible. In 2024 user data, EarthHero had an action conversion rate of 40–45% among existing users."

function useScrollAnimation() {
  const containerRef = useRef<HTMLDivElement>(null)
  const chartRef = useRef<ChartJS<"pie"> | null>(null)

  useEffect(() => {
    const el = containerRef.current
    if (!el) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && chartRef.current) {
            chartRef.current.reset()
            chartRef.current.update()
          }
        })
      },
      { threshold: 0.3 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return { containerRef, chartRef }
}

export default function ActionChart() {
  const { isMobile, isTablet, isDesktop1440px } = useMobileDetection()
  const { containerRef, chartRef } = useScrollAnimation()

  if (isMobile) {
    return (
      <div
        ref={containerRef}
        className={`${containerClass} flex flex-col items-center gap-[var(--spacing-3xl)] w-full self-stretch`}
      >
        <div style={{ maxWidth: 275, width: "100%", height: "auto", aspectRatio: "1" }}>
          <Pie ref={chartRef} data={chartData} options={chartOptions} />
        </div>
        <h4 className="h4 text-[var(--color-primary-inverse)]">{h4Text}</h4>
      </div>
    )
  }

  if (isTablet) {
    return (
      <div
        ref={containerRef}
        className={`${containerClass} flex flex-col items-center gap-[var(--spacing-3xl)] w-full self-stretch`}
      >
        <div style={{ maxWidth: 300, width: "100%", height: "auto", aspectRatio: "1" }}>
          <Pie ref={chartRef} data={chartData} options={chartOptions} />
        </div>
        <h4 className="h4 text-[var(--color-primary-inverse)]">{h4Text}</h4>
      </div>
    )
  }

  if (isDesktop1440px) {
    return (
      <div
        ref={containerRef}
        className={containerClass}
        style={{ width: 900, display: "flex", justifyContent: "space-between", alignItems: "center" }}
      >
        <div style={{ maxWidth: 300, width: "100%", height: 300 }}>
          <Pie ref={chartRef} data={chartData} options={chartOptions} />
        </div>
        <h4 className="h4 text-[var(--color-primary-inverse)]" style={{ width: 400 }}>
          {h4Text}
        </h4>
      </div>
    )
  }

  // Large Desktop
  return (
    <div
      ref={containerRef}
      className={containerClass}
      style={{ width: 1100, display: "flex", justifyContent: "space-between", alignItems: "center" }}
    >
      <div style={{ maxWidth: 345, width: "100%", height: 345 }}>
        <Pie ref={chartRef} data={chartData} options={chartOptions} />
      </div>
      <h4 className="h4 text-[var(--color-primary-inverse)]" style={{ width: 500 }}>
        {h4Text}
      </h4>
    </div>
  )
}
