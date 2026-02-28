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
                    <h2 className="h2 text-[var(--color-primary)]">
                        I am a designer by training, project manager by necessity, and an occasional developer who makes things happen.
                    </h2>
                    <Button text="Get to know me" onClick={() => router.push('/bio')} variant="redPrimary" />
                </div>
            </div>
        )
    }

    // Tablet (769px - 1024px)
    if (isTablet) {
        return (
            <div className="flex w-full align-center justify-center">
                <div className="flex flex-col items-start justify-center  gap-[var(--spacing-2xl)] py-[var(--spacing-2xl)]">
                    <h2 className="h2 text-[var(--color-primary)]">
                        I am a designer by training, project manager by necessity, and an occasional developer who makes things happen.
                    </h2>
                    <Button text="Get to know me" onClick={() => router.push('/bio')} variant="redPrimary" />
                </div>
            </div>
        )
    }

    // Desktop 1440px (1025px - 1440px)
    if (isDesktop1440px) {
        return (
            <div className="w-full flex justify-end">
                <div className="flex flex-col items-start justify-center w-[70%] gap-[var(--spacing-2xl)] py-[var(--spacing-2xl)]">
                    <h2 className="h2 text-[var(--color-primary)]">
                        I am a designer by training, project manager by necessity, and an occasional developer who makes things happen.
                    </h2>
                    <Button text="Get to know me" onClick={() => router.push('/bio')} variant="redPrimary" />
                </div>
            </div>
        )
    }

    // Large Desktop (>1440px)
    return (
        <div className="w-full flex justify-end">
            <div className="flex flex-col items-start justify-center w-[70%] gap-[var(--spacing-3xl)] py-[var(--spacing-3xl)]">
                <h2 className="h2 text-[var(--color-primary)]">
                    I am a designer by training, project manager by necessity, and an occasional developer who makes things happen.
                </h2>
                <Button text="Get to know me" onClick={() => router.push('/bio')} variant="redPrimary" />
            </div>
        </div>
    )
}

