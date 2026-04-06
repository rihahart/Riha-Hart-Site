"use client"

import React from "react"
import useMobileDetection from "@/_utilities/useMobileDetection"
import { photoCaption } from "@/data/JHMural/photoCaption"

export default function InBloomGallery() {
    const { isMobile, isTablet } = useMobileDetection()

    // Mobile & Tablet — single column
    if (isMobile || isTablet) {
        return (
            <div className="flex flex-col w-full gap-[var(--spacing-xl)]">
                {photoCaption.map((item) => (
                    <div key={item.photo} className="flex flex-col gap-[var(--spacing-xs)]">
                        <img
                            src={`/Jhmural/EventPhotos/${item.photo}`}
                            alt={item.caption}
                            className="w-full h-auto object-contain"
                        />
                        <p className="caption text-[var(--color-secondary)] text-center">{item.caption}</p>
                    </div>
                ))}
            </div>
        )
    }

    // Desktop (1025px+) — 2 columns
    return (
        <div
            className="grid w-full gap-[var(--spacing-xl)]"
            style={{ gridTemplateColumns: "repeat(2, 1fr)" }}
        >
            {photoCaption.map((item) => (
                <div key={item.photo} className="flex flex-col gap-[var(--spacing-xs)]">
                    <img
                        src={`/Jhmural/EventPhotos/${item.photo}`}
                        alt={item.caption}
                        className="w-full h-auto object-contain"
                    />
                    <p className="caption text-[var(--color-secondary)] text-center">{item.caption}</p>
                </div>
            ))}
        </div>
    )
}
