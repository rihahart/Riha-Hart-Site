"use client"

import useMobileDetection from "@/_utilities/useMobileDetection"

export default function NewNav() {
  const { isMobile, isTablet, isDesktop1440px } = useMobileDetection()

  const heading = (
    <h3 className="h3 text-[var(--color-primary)]">
      so for the new nav, I clarified MEMBERSHIP and repositioned LOANS
    </h3>
  )

  if (isMobile) {
    return (
      <div className="w-full flex flex-col justify-between items-start gap-[var(--spacing-s)] py-[var(--spacing-2xl)]" >
        <div className="flex flex-col">
          {heading}
          <img
            src="/EFCU/ClarifyingNavAnimation/Arrow.png"
            alt="arrow pointing to nav animation"
            className="w-[50px] h-auto pl-[var(--spacing-s)] md:translate-x-0 md:scale-x-100"
          />
        </div>
        <div className="w-full flex flex-col  items-start">
            <img src="/EFCU/NewNav.png" alt="New navigation layout" className="w-full max-h-[350px] object-contain" />
          </div>
           <div className="flex w-full flex-col items-end gap-[var(--spacing-m)]">
        <h3 className="h3 text-[var(--color-primary)] pt-[var(--spacing-2xl)]">
         The foundation is set. Time to design the EVEREST EXPERIENCE
        </h3>
        <img
            src="/EFCU/ClarifyingNavAnimation/ArrowDown.png"
            alt="arrow pointing to nav animation"
            className="h-[70px] w-auto scale-x-[-1] px-[var(--spacing-8xl)] mt-[-10px]"
          />
        </div>
        </div>

    )
  }

  if (isTablet) {
    return (
     <div className="w-full flex flex-col justify-between items-start gap-[var(--spacing-s)] p-[var(--spacing-2xl)] " >
        <div className="flex flex-col gap-[var(--spacing-s)]">
          {heading}
          <img
            src="/EFCU/ClarifyingNavAnimation/Arrow.png"
            alt="arrow pointing to nav animation"
            className="w-[75px] h-auto] "
          />
          <div className="w-full flex justify-start">
                <img src="/EFCU/NewNav.png" alt="New navigation layout" className="w-full pl-[var(--spacing-8xl)] mt-[-60px] max-h-[300px] object-contain" />
          </div>
           <div className="flex w-full flex-col items-end gap-[var(--spacing-m)]">
        <h3 className="h3 text-[var(--color-primary)] pt-[var(--spacing-2xl)]">
          The foundation is set. Time to design the EVEREST EXPERIENCE
        </h3>
        <img
            src="/EFCU/ClarifyingNavAnimation/ArrowDown.png"
            alt="arrow pointing to nav animation"
            className="w-auto h-[100px] scale-x-[-1] mt-[-10px]"
          />
        </div>
          
        </div>
      </div>
    )
  }

  if (isDesktop1440px) {
    return (
       <div className="w-full flex flex-col justify-between items-start gap-[var(--spacing-s)] p-[var(--spacing-8xl)] " >
        <div className="flex flex-col gap-[var(--spacing-s)] mb-[-30px]">
          {heading}
          <img
            src="/EFCU/ClarifyingNavAnimation/Arrow.png"
            alt="arrow pointing to nav animation"
            className="w-[115px] h-auto pl-[var(--spacing-s)] scale-x-[-1] md:scale-x-100"
          />
        </div>
        <div>
          <img src="/EFCU/NewNav.png" alt="New navigation layout" className="w-full pl-[var(--spacing-8xl)] mt-[-40px] max-h-[345px] object-contain" />
        </div>
      <div className="flex flex-col w-full items-end justify-end gap-[var(--spacing-lg)] pt-[var(--spacing-8xl)]">
      <h3 className="h3 text-[var(--color-primary)] ">
        The foundation is set. Time to design the EVEREST EXPERIENCE
      </h3>
          <img
            src="/EFCU/ClarifyingNavAnimation/ArrowDown.png"
            alt="arrow pointing to nav animation"
            className="w-[60px] h-auto scale-x-[-1] pr-[var(--spacing-xl)] mt-[-10px]"
          />

    </div>
      </div>
    )
  }

  return (
  <div className="w-full flex flex-col justify-between items-start gap-[var(--spacing-s)] p-[var(--spacing-8xl)] " >
        <div className="flex flex-col gap-[var(--spacing-s)] mb-[-30px]">
          {heading}
          <img
            src="/EFCU/ClarifyingNavAnimation/Arrow.png"
            alt="arrow pointing to nav animation"
            className="w-[140px] h-auto pl-[var(--spacing-s)] scale-x-[-1] md:scale-x-100"
          />
        </div>
          <div>
          <img src="/EFCU/NewNav.png" alt="New navigation layout" className="w-full pl-[var(--spacing-8xl)] mt-[-40px] max-h-[425px] object-contain" />
        </div>
      <div className="flex flex-col w-full items-end justify-end gap-[var(--spacing-lg)] pt-[var(--spacing-8xl)]">
      <h3 className="h3 text-[var(--color-primary)] ">
        The foundation is set. Time to design the EVEREST EXPERIENCE
      </h3>
          <img
            src="/EFCU/ClarifyingNavAnimation/ArrowDown.png"
            alt="arrow pointing to nav animation"
            className="w-[75px] h-auto scale-x-[-1] pr-[var(--spacing-xl)] mt-[-10px]"
          />
          
    </div>
      </div>

    
  )
}
