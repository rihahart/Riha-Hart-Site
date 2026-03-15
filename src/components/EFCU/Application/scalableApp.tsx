"use client"

import { useEffect, useRef, useState } from "react"
import useMobileDetection from "@/_utilities/useMobileDetection"

const Img1 = "/EFCU/Applications/ScalableFolder/BecomeaMember.png"
const Img2 = "/EFCU/Applications/ScalableFolder/BusinessAccount.png"
const Img3 = "/EFCU/Applications/ScalableFolder/Mobile.png"
const Img4 = "/EFCU/Applications/ScalableFolder/Prefills.png"

const headingDesktop = <h1 className="h1 text-[var(--color-secondary-inverse)] text-center">SCALABLE MEMBERSHIP AND LOAN APPLICATION</h1>
const headingMobile = <h1 className="h1 text-[var(--color-secondary-inverse)] text-left">SCALABLE MEMBERSHIP AND LOAN APPLICATION</h1>
const bodyDesktop = <p className="body text-[var(--color-secondary-inverse)] text-center">Everest FCU was growing quickly and regularly launching new membership types and loan products. One scalable membership application and one loan application were designed to support product growth.</p>
const bodyMobile = <p className="body text-[var(--color-secondary-inverse)] text-left">Everest FCU was growing quickly and regularly launching new membership types and loan products. One scalable membership application and one loan application were designed to support product growth.</p>

function useScrollUp() {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true)
      },
      { threshold: 0.15 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return { ref, visible }
}

export default function ScalableApp() {
  const { isMobile, isTablet, isDesktop1440px } = useMobileDetection()
  const row1 = useScrollUp()
  const row2 = useScrollUp()

  const animUp = (visible: boolean, delay: string) =>
    `transition-all duration-700 ease-out ${delay} ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`
  const animLeft = (visible: boolean, delay: string) =>
    `transition-all duration-700 ease-out ${delay} ${visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`
  const animRight = (visible: boolean, delay: string) =>
    `transition-all duration-700 ease-out ${delay} ${visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`

  if (isMobile) {
    return (
      <div className="w-full flex flex-col py-[var(--spacing-xl)] gap-[var(--spacing-xl)] bg-[#3B558E]">
        <div className="flex flex-col items-center gap-[var(--spacing-xs)] self-stretch w-full px-[var(--spacing-lg)]">
          {headingMobile}
          {bodyMobile}
        </div>
        <div className="w-full flex flex-col items-center justify-center py-[var(--spacing-xl)] overflow-hidden">
          <div ref={row1.ref} className="flex items-center justify-center w-full gap-[var(--spacing-xl)]">
            <img src={Img1} alt="Become a Member" className={`max-w-[278px] h-auto object-contain shadow-lg rotate-[0.79deg] ${animLeft(row1.visible, "delay-0")}`} />
            <img src={Img2} alt="Business Account" className={`max-w-[125px] h-auto object-contain shadow-lg rotate-[-5.70deg] ${animRight(row1.visible, "delay-150")}`} />
          </div>
          <div ref={row2.ref} className="flex items-center justify-center w-full gap-[var(--spacing-2xl)]">
            <img src={Img3} alt="Mobile" className={`max-w-[90px] h-auto object-contain shadow-lg ${animLeft(row2.visible, "delay-0")}`} />
            <img src={Img4} alt="Prefills" className={`max-w-[225px] h-auto object-contain shadow-lg rotate-[2deg] ${animRight(row2.visible, "delay-150")}`} />
          </div>
        </div>
      </div>
    )
  }

  if (isTablet) {
    return (
      <div className="w-full flex flex-col py-[var(--spacing-xl)] gap-[var(--spacing-xl)]  bg-[#3B558E]">
        <div className="flex flex-col items-center gap-[var(--spacing-xs)] self-stretch w-full px-[var(--spacing-3xl)]">
          {headingMobile}
          {bodyMobile}
        </div>
        <div className="w-full flex flex-col items-center justify-center">
          <div ref={row1.ref} className="flex items-center justify-center w-full gap-[var(--spacing-3xl)]">
            <img src={Img1} alt="Become a Member" className={`max-w-[360px] h-auto object-contain shadow-lg rotate-[0.79deg] ${animLeft(row1.visible, "delay-0")}`} />
            <img src={Img2} alt="Business Account" className={`max-w-[190px] h-auto object-contain shadow-lg rotate-[-5.70deg] ${animRight(row1.visible, "delay-150")}`} />
          </div>
          <div ref={row2.ref} className="flex items-center justify-center w-full gap-[var(--spacing-5xl)]">
            <img src={Img3} alt="Mobile" className={`max-w-[145px] h-auto object-contain shadow-lg ${animLeft(row2.visible, "delay-0")}`} />
            <img src={Img4} alt="Prefills" className={`max-w-[350px] h-auto object-contain shadow-lg rotate-[2deg] ${animRight(row2.visible, "delay-150")}`} />
          </div>
        </div>
      </div>
    )
  }

  if (isDesktop1440px) {
    return (
      <div className="w-full flex flex-col py-[var(--spacing-xl)] gap-[var(--spacing-lg)] bg-[#3B558E]">
        <div className="flex flex-col items-center gap-[var(--spacing-xs)] self-stretch max-w-[800px] mx-auto w-full">
          {headingDesktop}
          {bodyDesktop}
        </div>
        <div ref={row1.ref} className="flex items-center justify-center w-full gap-[var(--spacing-xl)] overflow-hidden">
          <img src={Img1} alt="Become a Member" className={`max-w-[420px] h-auto object-contain shadow-lg rotate-[0.79deg] ${animUp(row1.visible, "delay-0")}`} />
          <img src={Img2} alt="Business Account" className={`max-w-[190px] h-auto object-contain shadow-lg rotate-[-5.70deg] ${animUp(row1.visible, "delay-100")}`} />
          <img src={Img3} alt="Mobile" className={`max-w-[145px] h-auto object-contain shadow-lg ${animUp(row1.visible, "delay-200")}`} />
          <img src={Img4} alt="Prefills" className={`max-w-[350px] h-auto object-contain shadow-lg rotate-[2deg] ${animUp(row1.visible, "delay-300")}`} />
        </div>
      </div>
    )
  }

  return (
    <div className="w-full flex flex-col py-[var(--spacing-xl)] gap-[var(--spacing-lg)] bg-[#3B558E]">
      <div className="flex flex-col items-center gap-[var(--spacing-xs)] self-stretch max-w-[1000px] mx-auto w-full">
        {headingDesktop}
        {bodyDesktop}
      </div>
      <div ref={row1.ref} className="flex items-center justify-center w-full gap-[var(--spacing-xl)]">
        <img src={Img1} alt="Become a Member" className={`max-w-[445px] h-auto object-contain shadow-lg rotate-[0.79deg] ${animUp(row1.visible, "delay-0")}`} />
        <img src={Img2} alt="Business Account" className={`max-w-[200px] h-auto object-contain shadow-lg rotate-[-5.70deg] ${animUp(row1.visible, "delay-100")}`} />
        <img src={Img3} alt="Mobile" className={`max-w-[145px] h-auto object-contain shadow-lg ${animUp(row1.visible, "delay-200")}`} />
        <img src={Img4} alt="Prefills" className={`max-w-[365px] h-auto object-contain shadow-lg rotate-[2deg] ${animUp(row1.visible, "delay-300")}`} />
      </div>
    </div>
  )
}
