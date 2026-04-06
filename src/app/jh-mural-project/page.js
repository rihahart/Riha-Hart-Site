"use client"

import React from "react"
import useMobileDetection from "@/_utilities/useMobileDetection"
import IntroToJHMural from "@/components/JHMural/IntroToJHMural"
import JHMuralTabs from "@/components/JHMural/JHMuralTabs"

export default function JHMuralProject() {
  const { isMobile, isTablet, isDesktop1440px } = useMobileDetection()  

  // Mobile (≤768px)
  if (isMobile) {
  return (
    <div className="flex flex-col items-center w-full mx-auto">

      {/* div with margins starts here*/}
      <div className="flex flex-col items-center w-full p-[var(--spacing-lg)] pb-[var(--spacing-4xl)] gap-[var(--spacing-4xl)] mx-auto">
          <img
                   src="/Jhmural/JHMuralProject.jpg"
                   alt="Mural on 82nd Street"
                   className="w-full max-w-full h-auto object-contain"
                 />
             <IntroToJHMural />
         <JHMuralTabs />
      </div>

      {/* this div with margins ends here*/}
      
    </div>
  )
  }

  // Tablet (769px - 1024px)
  if (isTablet) {
    return (
      <div className="flex flex-col items-center w-full mx-auto">

        {/* div with margins starts here*/}
        <div className="flex flex-col items-center w-full p-[var(--spacing-2xl)] pb-[var(--spacing-4xl)] gap-[var(--spacing-6xl)] mx-auto">
             <img
                        src="/Jhmural/JHMuralProject.jpg"
                        alt="Mural on 82nd Street"
                        className="w-full max-w-full h-auto object-contain"
                      />
           <IntroToJHMural />
            <JHMuralTabs />
       
        </div>

        {/* this div with margins ends here*/}
      </div>
    )
  }

  // Desktop 1440px (1025px - 1440px)
  if (isDesktop1440px) {
    return (  
      <div className="flex flex-col items-center w-full mx-auto">

        {/* div with margins starts here*/}
        <div className="flex flex-col w-full p-[var(--spacing-3xl)] pb-[var(--spacing-4xl)] gap-[var(--spacing-8xl)] mx-auto">
            <img
                       src="/Jhmural/JHMuralProject.jpg"
                       alt="Mural on 82nd Street"
                       className="w-full max-w-full h-auto object-contain"
                     />
             <IntroToJHMural />
           <JHMuralTabs />
       
        </div>

        {/* this div with margins ends here*/}
      </div>
    )
  }

  // Large Desktop (>1440px)  
  return (
    <div className="flex flex-col items-center w-full mx-auto">

      {/* div with margins starts here*/}

      <div className="flex flex-col items-center max-w-[1600px] p-[var(--spacing-3xl)] pb-[var(--spacing-4xl)] gap-[var(--spacing-8xl)] mx-auto">
          <img
                   src="/Jhmural/JHMuralProject.jpg"
                   alt="Mural on 82nd Street"
                   className="w-full max-w-full h-auto object-contain"
                 />
          <IntroToJHMural />
        <JHMuralTabs />
      </div>
      {/* this div with margins ends here*/}

    </div>
  )   
}