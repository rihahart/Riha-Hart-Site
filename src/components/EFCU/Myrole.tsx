"use client"

import React from "react"
import useMobileDetection from "@/_utilities/useMobileDetection"
import { myRole } from "@/data/EFCU/myRole"

export default function Myrole() {
    const { isMobile, isTablet, isDesktop1440px } = useMobileDetection()

    // Mobile (≤768px)
    if (isMobile) {
        return (
            <div className="w-full flex justify-center align-center">
                <div className="flex flex-col items-center justify-center gap-[var(--spacing-2xl)] py-[var(--spacing-xl)] ">
                    <div className="flex flex-col items-start justify-center gap-[var(--spacing-xl)]">
                        <p className="body text-[var(--lightblack)]">
                            {myRole.body1}
                        </p>
                        <p className="body text-[var(--lightblack)]">
                            {myRole.body2}
                        </p>
                        <p className="body text-[var(--lightblack)]">
                            {myRole.body3}
                        </p>
                        <p className="body text-[var(--lightblack)]">
                            {myRole.body4}
                        </p>
                        <p className="body text-[var(--lightblack)]">
                            {myRole.body5}
                        </p>
                    </div>
                    <div className="flex flex-col items-start justify-center gap-[var(--spacing-xl)] h3 text-[var(--lightblack)]">
                        <div className="h-[8px] bg-[var(--red)] w-full"></div>
                        <p className="h3 text-[var(--lightblack)]">
                            {myRole.h3}
                        </p>
                    </div>


                </div>
            </div>
        )
    }

    // Tablet (769px - 1024px)
    if (isTablet) {
        return (
            <div className="flex w-full align-center justify-center">
                <div className="flex flex-col items-start justify-center gap-[var(--spacing-3xl)] py-[var(--spacing-2xl)] px-[var(--spacing-2xl)] ">
                    <div className="flex flex-col items-start justify-center gap-[var(--spacing-2xl)] body text-[var(--lightblack)]">
                        <p className="body text-[var(--lightblack)]">
                            {myRole.body1}
                        </p>
                        <p className="body text-[var(--lightblack)]">
                            {myRole.body2}
                        </p>
                        <p className="body text-[var(--lightblack)]">
                            {myRole.body3}
                        </p>
                        <p className="body text-[var(--lightblack)]">
                            {myRole.body4}
                        </p>
                        <p className="body text-[var(--lightblack)]">
                            {myRole.body5}
                        </p>
                    </div>
                    <div className="flex flex-col items-start justify-center gap-[var(--spacing-2xl)] h3 text-[var(--lightblack)]">
                        <div className="h-[12px] bg-[var(--red)] w-full"></div>
                        <p className="h3 text-[var(--lightblack)]">
                            {myRole.h3}
                        </p>
                    </div>
                </div>
            </div>
        )
    }

    // Desktop 1440px (1025px - 1440px)
    if (isDesktop1440px) {
        return (
            <div className="w-full flex justify-end">
                <div className="flex flex-col items-start justify-center gap-[var(--spacing-4xl)] py-[var(--spacing-6xl)] px-[var(--spacing-5xl)]">
                    <div className="flex flex-col items-start justify-center gap-[var(--spacing-2xl)] body text-[var(--lightblack)]">
                        <p className="body text-[var(--lightblack)]">
                            {myRole.body1}
                        </p>
                        <p className="body text-[var(--lightblack)]">
                            {myRole.body2}
                        </p>
                        <p className="body text-[var(--lightblack)]">
                            {myRole.body3}
                        </p>
                        <p className="body text-[var(--lightblack)]">
                            {myRole.body4}
                        </p>
                        <p className="body text-[var(--lightblack)]">
                            {myRole.body5}
                        </p>
                    </div>
                    <div className="flex flex-col items-start justify-center gap-[var(--spacing-2xl)] h3 text-[var(--lightblack)]">
                        <div className="h-[12px] bg-[var(--red)] w-full"></div>
                        <p className="h3 text-[var(--lightblack)]">
                            {myRole.h3}
                        </p>

                    </div>

                </div>
            </div>
        )
    }

    // Large Desktop (>1440px)
    return (
        <div className="w-full flex justify-end">
            <div className="flex flex-col items-start justify-center gap-[var(--spacing-5xl)] py-[var(--spacing-8xl)] px-[var(--spacing-5xl)]">
                <div className="flex flex-col items-start justify-center gap-[var(--spacing-3xl)]">
                    <p className="body text-[var(--lightblack)]">
                        {myRole.body1}
                    </p>
                    <p className="body text-[var(--lightblack)]">
                        {myRole.body2}
                    </p>
                    <p className="body text-[var(--lightblack)]">
                        {myRole.body3}
                    </p>
                    <p className="body text-[var(--lightblack)]">
                        {myRole.body4}
                    </p>
                    <p className="body text-[var(--lightblack)]">
                        {myRole.body5}
                    </p>
                </div>
                <div className="flex flex-col items-start justify-center gap-[var(--spacing-2xl)] h3 text-[var(--lightblack)]">
                    <div className="h-[16px] bg-[var(--red)] w-full"></div>
                    <p className="h3 text-[var(--lightblack)]">
                        {myRole.h3}
                    </p>
                </div>
            </div>
        </div>
    )
}

