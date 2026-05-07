"use client"

import React, { useState, useEffect } from "react"
import useMobileDetection from "@/_utilities/useMobileDetection"


const heading = <h2 className="h3 text-[var(--color-primary-inverse)]  uppercase">Clarifying Membership</h2>



const ul = <ul className="list-none caption text-[var(--color-primary-inverse)]  uppercase flex flex-col gap-[var(--spacing-m)]">
    <li>Explains membership and how to apply</li>
    <li>Eligibility and document requirements clearly stated</li>
    <li>Highlights membership benefits and available services</li>
    <li>Navigation to business account application for members</li>
</ul>


export default function ClarifyingMembership() {
  const { isMobile, isTablet, isDesktop1440px } = useMobileDetection()
  
  
  if (isMobile) {
    return (
    <div className="w-full flex flex-col justify-between items-start gap-[var(--spacing-s)] " >
        <div className="flex flex-col gap-[var(--spacing-s)]">
          {heading}
          <img
            src="/EFCU/ClarifyingNavAnimation/Arrow.png"
            alt="arrow pointing to nav animation"
             style={{ filter: "brightness(0) saturate(100%) invert(97%) sepia(19%) saturate(317%) hue-rotate(326deg) brightness(103%) contrast(97%) drop-shadow(0 0 8px rgba(253,247,230,0.6))" }}
            className="w-[50px] h-auto pl-[var(--spacing-s)] scale-x-[-1] rotate-[-80.16deg] translate-x-[200px] mt-[-25px] "
          />
        </div>
        <div className="w-full flex justify-center items-center">
          <img
            src="/EFCU/Applications/ClarifyingMembership/LoanClarification.png"
            alt="loan clarification"
            className="w-full h-auto mt-[var(--spacing-m)]"
          />
        </div>
        <div className="w-full flex flex-col gap-[var(--spacing-m)]">
          <img
            src="/EFCU/ClarifyingNavAnimation/Arrow.png "
            alt="arrow"
             style={{ filter: "brightness(0) saturate(100%) invert(97%) sepia(19%) saturate(317%) hue-rotate(326deg) brightness(103%) contrast(97%) drop-shadow(0 0 8px rgba(253,247,230,0.6))" }}
            className="w-[50px] h-auto"
          />
          <div className="w-full flex justify-end items-center">
          {ul}
          </div>
           <img
            src="/EFCU/Applications/ClarifyingMembership/BecomeaMemberBlue.png"
            alt="become a member"
            className="w-full h-auto py-[var(--spacing-xl)]"
          />
             <img
            src="/EFCU/Applications/ClarifyingMembership/ApplyforLoanComb.png"
            alt="apply for loan"
            className="w-full h-auto py-[var(--spacing-xl)]"
          />
        </div>
      </div>
    )
  }


  if (isTablet) {
    return (
    <div className="w-full flex flex-col justify-between items-start gap-[var(--spacing-s)] px-[var(--spacing-2xl)] " >
        <div className="flex flex-col gap-[var(--spacing-s)]">
          {heading}
          <img
            src="/EFCU/ClarifyingNavAnimation/Arrow.png"
            alt="arrow pointing to nav animation"
             style={{ filter: "brightness(0) saturate(100%) invert(97%) sepia(19%) saturate(317%) hue-rotate(326deg) brightness(103%) contrast(97%) drop-shadow(0 0 8px rgba(253,247,230,0.6))" }}
            className="w-[75px] h-auto pl-[var(--spacing-s)] scale-x-[-1] rotate-[-80.16deg] translate-x-[280px] mt-[-25px] "
          />
        </div>
        <div className="w-full flex justify-center items-center">
          <img
            src="/EFCU/Applications/ClarifyingMembership/LoanClarification.png"
            alt="loan clarification"
            
            className="w-full h-auto"
          />
        </div>
        <div className="w-full flex flex-col gap-[var(--spacing-m)]">
          <img
            src="/EFCU/ClarifyingNavAnimation/Arrow.png "
            alt="arrow"
             style={{ filter: "brightness(0) saturate(100%) invert(97%) sepia(19%) saturate(317%) hue-rotate(326deg) brightness(103%) contrast(97%) drop-shadow(0 0 8px rgba(253,247,230,0.6))" }}
            className="w-[75px] h-auto"
          />
          <div className="w-full flex justify-end items-center mt-[-20px]">
          {ul}
          </div>
           <img
            src="/EFCU/Applications/ClarifyingMembership/BecomeaMemberBlue.png"
            alt="become a member"
            className="w-full h-auto py-[var(--spacing-xl)]"
          />
             <img
            src="/EFCU/Applications/ClarifyingMembership/ApplyforLoanComb.png"
            alt="apply for loan"
            className="w-full h-auto py-[var(--spacing-xl)]"
          />
        </div>
      </div>
    )
  }

  if (isDesktop1440px) {
    return (
        <div className="w-full flex flex-col justify-between items-start gap-[var(--spacing-2xl)] px-[var(--spacing-6xl)] py-[var(--spacing-3xl)] " >
        <div className="w-full flex flex-col ">
        {heading}
          <img
            src="/EFCU/ClarifyingNavAnimation/Arrow.png"
            alt="arrow pointing to nav animation"
             style={{ filter: "brightness(0) saturate(100%) invert(97%) sepia(19%) saturate(317%) hue-rotate(326deg) brightness(103%) contrast(97%) drop-shadow(0 0 8px rgba(253,247,230,0.6))" }}
            className="w-[100px] h-auto pl-[var(--spacing-sm)] scale-x-[-1] md:scale-x-100"
          />
        </div>
        <div className="w-full flex justify-end items-start mt-[-50px]">
          <img
            src="/EFCU/Applications/ClarifyingMembership/LoanClarification.png"
            alt="loan clarification"
            className="max-w-[850px] w-full h-auto"
          />
        </div>
        <div className="flex flex-row  gap-[var(--spacing-3xl)] py-[var(--spacing-3xl)] items-center w-full">
          <div className="w-full flex items-end justify-center">
            <img
              src="/EFCU/Applications/ClarifyingMembership/BecomeaMember.svg"
              alt="become a member"
              className="max-w-[900px] w-full h-auto"
            />
          </div>
          <div className="flex flex-col items-start gap-[var(--spacing-4xl)] mt-[-20px]">
            <img
              src="/EFCU/ClarifyingNavAnimation/Arrow.png"
              alt="arrow"
               style={{ filter: "brightness(0) saturate(100%) invert(97%) sepia(19%) saturate(317%) hue-rotate(326deg) brightness(103%) contrast(97%) drop-shadow(0 0 8px rgba(253,247,230,0.6))" }}
              className="w-[100px] h-auto scale-x-[-1] "
            />
            {ul}
          </div>
        </div>
        <div className="w-full flex gap-[var(--spacing-2xl)] items-end justify-center">
            <img
              src="/EFCU/Applications/ClarifyingMembership/MobileBlue.png"
              alt="become a member"
              className="max-w-[260px] h-auto"
            />
             <img
              src="/EFCU/Applications/ClarifyingMembership/Applyforloan.png"
              alt="become a member"
              className="max-w-[600px] h-auto"
            />


        </div>
      </div>
    )
}


  return (
    <div className="w-full flex flex-col justify-between items-start gap-[var(--spacing-2xl)] px-[var(--spacing-8xl)] py-[var(--spacing-3xl)] " >
        <div className="w-full flex flex-col ">
        {heading}
          <img
            src="/EFCU/ClarifyingNavAnimation/Arrow.png"
            alt="arrow pointing to nav animation"
             style={{ filter: "brightness(0) saturate(100%) invert(97%) sepia(19%) saturate(317%) hue-rotate(326deg) brightness(103%) contrast(97%) drop-shadow(0 0 8px rgba(253,247,230,0.6))" }}
            className="w-[150px] pl-[var(--spacing-lg)] h-auto scale-x-[-1] md:scale-x-100"
          />
        </div>
        <div className="w-full flex justify-end items-end mt-[-80px]">
          <img
            src="/EFCU/Applications/ClarifyingMembership/LoanClarification.png"
            alt="loan clarification"
            className="max-w-[1000px] h-auto"
          />
        </div>
        <div className="flex flex-row  gap-[var(--spacing-3xl)] py-[var(--spacing-3xl)] items-center w-full">
          <div className="w-full flex items-start justify-center">
            <img
              src="/EFCU/Applications/ClarifyingMembership/BecomeaMember.svg"
              alt="become a member"
              className="w-[900px] h-auto"
            />
          </div>
          <div className="flex flex-col items-start gap-[var(--spacing-lg)] mt-[-140px]">
            <img
              src="/EFCU/ClarifyingNavAnimation/Arrow.png"
              alt="arrow"
               style={{ filter: "brightness(0) saturate(100%) invert(97%) sepia(19%) saturate(317%) hue-rotate(326deg) brightness(103%) contrast(97%) drop-shadow(0 0 8px rgba(253,247,230,0.6))" }}
              className="w-[115px] h-auto scale-x-[-1]  mb-[120px] "
            />
            {ul}
          </div>
        </div>
            <div className="w-full flex gap-[var(--spacing-2xl)] items-end justify-center">
            <img
              src="/EFCU/Applications/ClarifyingMembership/MobileBlue.png"
              alt="become a member"
              className="max-w-[350px] w-full h-auto"
            />
             <img
              src="/EFCU/Applications/ClarifyingMembership/Applyforloan.png"
              alt="become a member"
              className="max-w-[850px] w-full h-auto"
            />


        </div>
      </div>
    )
}
