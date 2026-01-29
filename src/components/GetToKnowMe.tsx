"use client"

import React from "react"
import { useRouter } from "next/navigation"
import useMobileDetection from "@/_utilities/useMobileDetection"
import Button from "./Button"

export default function GetToKnowMe() {
    const router = useRouter()
    const { isMobile, isTablet, isDesktop1440px } = useMobileDetection()

    // Mobile (≤768px)
    if (isMobile) {
        return (
            <div className="w-full flex justify-center align-center">
                <div className="flex flex-col items-start justify-center gap-[var(--spacing-xl)] py-[var(--spacing-xl)]">
                    <p
                        className="text-[var(--lightblack)] text-[32px] font-black leading-[48px]"
                    >
                        I am a designer by training, project manager by necessity, and an occasional developer who makes things happen.
                    </p>
                    <Button text="Get to know me" alternateText="See my bio" onClick={() => router.push('/bio')} />
                </div>
            </div>
        )
    }

    // Tablet (769px - 1024px)
    if (isTablet) {
        return (
            <div className="flex w-full align-center justify-center">
                <div className="flex flex-col items-start justify-center  gap-[var(--spacing-2xl)] py-[var(--spacing-2xl)]">
                    <p
                        className="text-[var(--lightblack)] text-[40px] font-black leading-[64px]"
                    >
                        I am a designer by training, project manager by necessity, and an occasional developer who makes things happen.
                    </p>
                    <Button text="Get to know me" alternateText="See my bio" onClick={() => router.push('/bio')} />
                </div>
            </div>
        )
    }

    // Desktop 1440px (1025px - 1440px)
    if (isDesktop1440px) {
        return (
            <div className="w-[1020px] flex justify-end">
                <div className="flex flex-col items-start justify-center w-[750px] gap-[var(--spacing-2xl)] py-[var(--spacing-2xl)]">
                    <p
                        className="text-[var(--lightblack)] text-[48px] font-black leading-[74px]"
                    >
                        I am a designer by training, project manager by necessity, and an occasional developer who makes things happen.
                    </p>
                    <Button text="Get to know me" alternateText="See my bio" onClick={() => router.push('/bio')} />
                </div>
            </div>
        )
    }

    // Large Desktop (>1440px)
    return (
        <div className="w-full flex justify-end">
            <div className="flex flex-col items-start justify-center w-[900px] gap-[var(--spacing-2xl)] py-[var(--spacing-3xl)]">
                <p
                    className=" text-[var(--lightblack)] text-[64px] font-black leading-[96px]"
                >
                    I am a designer by training, project manager by necessity, and an occasional developer who makes things happen.
                </p>
                <Button text="Get to know me" alternateText="See my bio" onClick={() => router.push('/bio')} />
            </div>
        </div>
    )
}

