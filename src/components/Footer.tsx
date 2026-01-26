"use client"

import React from "react"
import Image from "next/image"
import useMobileDetection from "@/_utilities/useMobileDetection"

export default function Footer() {
    const { isMobile, isTablet, isDesktop1440px } = useMobileDetection()

    // Generate array of frame paths (duplicate for seamless loop)
    const frames = Array.from({ length: 70 }, (_, i) => `/Photos/ColorFrames/Frame${i + 1}.svg`)
    const duplicatedFrames = [...frames, ...frames] // Duplicate for seamless loop

    // Mobile (≤768px)
    if (isMobile) {
        return (
            <footer className="w-full py-[var(--spacing-m)] bg-[var(--darkblack)] overflow-hidden">
                <div className="footer-scroll">
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.26775rem' }}>
                        {duplicatedFrames.map((frame, index) => (
                            <Image
                                key={index}
                                src={frame}
                                alt={`Frame ${index + 1}`}
                                width={25}
                                height={29}
                            />
                        ))}
                    </div>
                </div>
            </footer>
        )
    }

    // Tablet (769px - 1024px)
    if (isTablet) {
        return (
            <footer className="w-full py-[var(--spacing-lg)] bg-[var(--darkblack)] overflow-hidden">
                <div className="footer-scroll">
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.26775rem' }}>
                        {duplicatedFrames.map((frame, index) => (
                            <Image
                                key={index}
                                src={frame}
                                alt={`Frame ${index + 1}`}
                                width={25}
                                height={29}
                            />
                        ))}
                    </div>
                </div>
            </footer>
        )
    }

    // Desktop 1440px (1025px - 1440px)
    if (isDesktop1440px) {
        return (
            <footer className="w-full py-[var(--spacing-xl)] bg-[var(--darkblack)] overflow-hidden">
                <div className="footer-scroll">
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.26775rem' }}>
                        {duplicatedFrames.map((frame, index) => (
                            <Image
                                key={index}
                                src={frame}
                                alt={`Frame ${index + 1}`}
                                width={25}
                                height={29}
                            />
                        ))}
                    </div>
                </div>
            </footer>
        )
    }

    // Large Desktop (>1440px)
    return (
        <footer className="w-full py-[var(--spacing-2xl)] bg-[var(--darkblack)] overflow-hidden">
            <div className="footer-scroll">
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.26775rem' }}>
                    {duplicatedFrames.map((frame, index) => (
                        <Image
                            key={index}
                            src={frame}
                            alt={`Frame ${index + 1}`}
                            width={25}
                            height={29}
                        />
                    ))}
                </div>
            </div>
        </footer>
    )
}

