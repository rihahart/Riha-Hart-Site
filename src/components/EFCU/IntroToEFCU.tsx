"use client"

import React from "react"
import useMobileDetection from "@/_utilities/useMobileDetection"
import { introToEFCU } from "@/data/EFCU/introToEFCU"
import Button from "@/components/Button"

export default function IntroToEFCU() {
    const { isMobile, isTablet, isDesktop1440px } = useMobileDetection()

    const handleVisitWebsite = () => {
        window.open('https://everestfcu.org', '_blank')
    }

    // Mobile (≤768px)
    if (isMobile) {
        return (
            <div className="w-full flex justify-center align-center">
                <div className="flex flex-col items-start justify-center gap-[var(--spacing-xl)] py-[var(--spacing-xl)]">
                    <div className="inline-block">
                        <h2 className="h2 text-[var(--color-primary)] inline-block">
                            {introToEFCU.heading}
                        </h2>
                        <p className="h4 text-[var(--color-secondary)] mt-[var(--spacing-xs)]">
                            {introToEFCU.subtitle}
                        </p>
                    </div>
                    <p className="body text-[var(--color-primary)]">
                        {introToEFCU.body}
                    </p>
                    <Button
                        text="Visit site"
                        alternateText="Click me"
                        onClick={handleVisitWebsite}
                        variant="redPrimary"
                    />
                </div>
            </div>
        )
    }

    // Tablet (769px - 1024px)
    if (isTablet) {
        return (
            <div className="flex w-full align-center justify-center">
                <div className="flex flex-col items-start justify-center gap-[var(--spacing-2xl)] py-[var(--spacing-2xl) px-[var(--spacing-2xl)]">
                    <div className="inline-block">
                        <h2 className="h2 text-[var(--color-primary)] inline-block">
                            {introToEFCU.heading}
                        </h2>
                        <p className="h4 text-[var(--color-secondary)] mt-[var(--spacing-s)]">
                            {introToEFCU.subtitle}
                        </p>
                    </div>
                    <p className="body text-[var(--color-primary)]">
                        {introToEFCU.body}
                    </p>
                    <Button
                        text="Visit site"
                        alternateText="Click me"
                        onClick={handleVisitWebsite}
                        variant="redPrimary"
                    />
                </div>
            </div>
        )
    }

    // Desktop 1440px (1025px - 1440px)
    if (isDesktop1440px) {
        return (
            <div className="w-full flex justify-end">
                <div className="flex flex-col items-start justify-center w-[70%] gap-[var(--spacing-2xl)] py-[var(--spacing-2xl)] px-[var(--spacing-5xl)]">
                    <div className="inline-block">
                        <h2 className="h2 text-[var(--color-primary)] inline-block">
                            {introToEFCU.heading}
                        </h2>
                        <p className="h4 text-[var(--color-secondary)] mt-[var(--spacing-s)]">
                            {introToEFCU.subtitle}
                        </p>
                    </div>
                    <p className="body text-[var(--color-primary)]">
                        {introToEFCU.body}
                    </p>
                    <Button
                        text="Visit site"
                        alternateText="Click me"
                        onClick={handleVisitWebsite}
                        variant="redPrimary"
                    />
                </div>
            </div>
        )
    }

    // Large Desktop (>1440px)
    return (
        <div className="w-full flex justify-end">
            <div className="flex flex-col items-start justify-center w-[70%] gap-[var(--spacing-3xl)] py-[var(--spacing-3xl) px-[var(--spacing-5xl)]">
                <div className="inline-block">
                    <h2 className="h2 text-[var(--color-primary)] inline-block">
                        {introToEFCU.heading}
                    </h2>
                    <p className="h4 text-[var(--color-secondary)] mt-[var(--spacing-m)]">
                        {introToEFCU.subtitle}
                    </p>
                </div>
                <p className="body text-[var(--color-primary)]">
                    {introToEFCU.body}
                </p>
                <Button
                    text="Visit site"
                    alternateText="Click me"
                    onClick={handleVisitWebsite}
                    variant="redPrimary"
                />
            </div>
        </div>
    )
}
