"use client"

import React from "react"
import useMobileDetection from "@/_utilities/useMobileDetection"

export default function JHMuralProject() {
  const { isMobile, isTablet, isDesktop1440px } = useMobileDetection()  

  // Mobile (≤768px)
  if (isMobile) {
  return (
    <div className="flex flex-col items-center w-full mx-auto">

      {/* div with margins starts here*/}
      <div className="flex flex-col items-center w-full p-[var(--spacing-lg)] pb-[var(--spacing-4xl)] gap-[var(--spacing-4xl)] mx-auto">
        <div className="flex flex-col items-center justify-center h-full w-full gap-[var(--spacing-lg)]">
         
        </div>
        <div
        
        >
            <h2 className="h2 text-[var(--color-primary)]">JH Mural Project Comming Soon</h2>
        </div>
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
        <div className="flex flex-col items-center w-full p-[var(--spacing-2xl)] pb-[var(--spacing-4xl)] gap-[var(--spacing-4xl)] mx-auto">
          <div className="flex flex-col items-center justify-center h-full w-full gap-[var(--spacing-2xl)]">
            <h2 className="h2 text-[var(--color-primary)]">JH Mural Project Comming Soon</h2>
           
          </div>
       
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
        <div className="flex flex-col items-center w-full p-[var(--spacing-3xl)] pb-[var(--spacing-4xl)] gap-[var(--spacing-4xl)] mx-auto">
          <div className="flex flex-col items-center justify-center h-full w-full gap-[var(--spacing-3xl)]">
            <h2 className="h2 text-[var(--color-primary)]">JH Mural Project Comming Soon</h2>
           
          </div>
       
        </div>

        {/* this div with margins ends here*/}
      </div>
    )
  }

  // Large Desktop (>1440px)  
  return (
    <div className="flex flex-col items-center w-full mx-auto">

      {/* div with margins starts here*/}

      <div className="flex flex-col items-center max-w-[1600px] p-[var(--spacing-3xl)] pb-[var(--spacing-4xl)] gap-[var(--spacing-4xl)] mx-auto">
        <div className="flex flex-col items-center justify-center h-full w-full gap-[var(--spacing-3xl)]">
          <h2 className="h2 text-[var(--color-primary)]">JH Mural Project Comming Soon</h2>
        </div>
      </div>
      {/* this div with margins ends here*/}

    </div>
  )   
}