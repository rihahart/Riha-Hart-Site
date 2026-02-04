"use client"

import React from "react"
import useMobileDetection from "@/_utilities/useMobileDetection"
import { efcuImpact } from "@/data/EFCU/EFCUImpact"
import Button from "@/components/Button"

export default function Impact() {
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
                        <div className="h-[8px] bg-[var(--red)] w-full mb-[var(--spacing-xl)]"></div>
                        <h2 className="h2 text-[var(--lightblack)] inline-block">
                            {efcuImpact.heading}
                        </h2>
                    </div>
                    <div className="flex flex-col items-start justify-center gap-[var(--spacing-lg)]">
                        {efcuImpact.items.map((item, index) => (
                            <h4 key={index} className="body text-[var(--lightblack)]">
                                {item}
                            </h4>
                        ))}
                    </div>
                    <Button
                        text="Visit the website"
                        alternateText="Visit the website"
                        onClick={handleVisitWebsite}
                    />
                </div>
            </div>
        )
    }

    // Tablet (769px - 1024px)
    if (isTablet) {
        return (
            <div className="flex w-full align-center justify-center">
                <div className="flex flex-col items-start justify-center gap-[var(--spacing-2xl)] py-[var(--spacing-2xl)]">
                    <div className="inline-block">
                        <div className="h-[10px] bg-[var(--red)] w-full mb-[var(--spacing-2xl)]"></div>
                        <h2 className="h2 text-[var(--lightblack)] inline-block">
                            {efcuImpact.heading}
                        </h2>
                    </div>
                    <div className="flex flex-col items-start justify-center gap-[var(--spacing-xl)]">
                        {efcuImpact.items.map((item, index) => (
                            <h4 key={index} className="body text-[var(--lightblack)]">
                                {item}
                            </h4>
                        ))}
                    </div>
                    <Button
                        text="Visit the website"
                        alternateText="Visit the website"
                        onClick={handleVisitWebsite}
                    />
                </div>
            </div>
        )
    }

    // Desktop 1440px (1025px - 1440px)
    if (isDesktop1440px) {
        return (
            <div className="w-full flex justify-end">
                <div className="flex flex-col items-start justify-center w-[70%] gap-[var(--spacing-2xl)] py-[var(--spacing-2xl)]">
                    <div className="inline-block">
                        <div className="h-[12px] bg-[var(--red)] w-full mb-[var(--spacing-2xl)]"></div>
                        <h2 className="h2 text-[var(--lightblack)] inline-block">
                            {efcuImpact.heading}
                        </h2>
                    </div>
                    <div className="flex flex-col items-start justify-center gap-[var(--spacing-xl)]">
                        {efcuImpact.items.map((item, index) => (
                            <h4 key={index} className="body text-[var(--lightblack)]">
                                {item}
                            </h4>
                        ))}
                    </div>
                    <Button
                        text="Visit the website"
                        alternateText="Visit the website"
                        onClick={handleVisitWebsite}
                    />
                </div>
            </div>
        )
    }

    // Large Desktop (>1440px)
    return (
        <div className="w-full flex justify-end">
            <div className="flex flex-col items-start justify-center w-[70%] gap-[var(--spacing-3xl)] py-[var(--spacing-3xl)]">
                <div className="inline-block">
                    <div className="h-[16px] bg-[var(--red)] w-full mb-[var(--spacing-3xl)]"></div>
                    <h2 className="h2 text-[var(--lightblack)] inline-block">
                        {efcuImpact.heading}
                    </h2>
                </div>
                <div className="flex flex-col items-start justify-center gap-[var(--spacing-2xl)]">
                    {efcuImpact.items.map((item, index) => (
                        <h4 key={index} className="body text-[var(--lightblack)]">
                            {item}
                        </h4>
                    ))}
                </div>
                <Button
                    text="Visit the website"
                    alternateText="Visit the website"
                    onClick={handleVisitWebsite}
                />
            </div>
        </div>
    )
}

