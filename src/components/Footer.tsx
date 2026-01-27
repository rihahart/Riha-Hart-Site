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
                <div className="flex flex-col w-[400px] items-start justify-between gap-[var(--spacing-2xl)] px-[var(--spacing-2xl)] py-[var(--spacing-lg)] mx-auto">
                    <div className="flex flex-col items-start">
                        <p className="text-[var(--white)] text-[26px] px-[var(--spacing-m)] leading-[34px]">
                            Get in touch with me!
                        </p>
                    </div>
                    <div className="flex items-start justify-between py-[var(--spacing-xl)]">
                        <video
                            src="/DolphinFinalShort.mp4"
                            autoPlay
                            muted
                            playsInline
                            loop
                            className="h-[160px] w-[300px] object-contain"
                        />
                    </div>

                </div>
                <div className="footer-scroll">
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.26775rem' }}>
                        {duplicatedFrames.map((frame, index) => (
                            <img
                                key={index}
                                src={frame}
                                alt={`Frame ${index + 1}`}
                                style={{ width: '38px', height: '46px', flexShrink: 0 }}
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
                <div className="flex max-w-[820px] items-center justify-between px-[var(--spacing-2xl)] mx-auto">
                    <div className="flex items-start justify-between py-[var(--spacing-xl)]">
                        <video
                            src="/DolphinFinalShort.mp4"
                            autoPlay
                            muted
                            playsInline
                            loop
                            className="h-[160px] w-[300px] object-contain"
                        />
                    </div>
                    <div className="flex flex-col h-[160px] items-start">
                        <p className="text-[var(--white)] text-[26px] leading-[34px]">
                            Get in touch with me!
                        </p>
                    </div>
                </div>
                <div className="footer-scroll">
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.26775rem' }}>
                        {duplicatedFrames.map((frame, index) => (
                            <img
                                key={index}
                                src={frame}
                                alt={`Frame ${index + 1}`}
                                style={{ width: '40px', height: '48px', flexShrink: 0 }}
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
                <div className="flex max-w-[1050px] px-[var(--spacing-2xl)] items-center justify-between mx-auto">
                    <div className="flex items-start justify-between py-[var(--spacing-xl)]">
                        <video
                            src="/DolphinFinalShort.mp4"
                            autoPlay
                            muted
                            playsInline
                            loop
                            className="h-[160px] w-[300px] object-contain"
                        />
                    </div>
                    <div className="flex flex-col h-[200px] items-start">
                        <p className="text-[var(--white)] text-[32px] leading-[84px]">
                            Get in touch with me!
                        </p>
                    </div>
                </div>
                <div className="footer-scroll">
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.26775rem' }}>
                        {duplicatedFrames.map((frame, index) => (
                            <img
                                key={index}
                                src={frame}
                                alt={`Frame ${index + 1}`}
                                style={{ width: '48px', height: '56px', flexShrink: 0 }}
                            />
                        ))}
                    </div>
                </div>
            </footer>
        )
    }

    // Large Desktop (>1440px)
    return (
        <footer className="w-full py-[var(--spacing-2xl)] bg-[var(--darkblack)] overflow-hidden ">
            <div className="flex w-[1200px] items-center justify-between mx-auto">
                <div className="flex items-start justify-between py-[var(--spacing-2xl)]">
                    <video
                        src="/DolphinFinalShort.mp4"
                        autoPlay
                        muted
                        playsInline
                        loop
                        className="h-[200px] w-[350px] object-contain"
                    />
                </div>
                <div className="flex flex-col h-[230px] items-start">
                    <p className="text-[var(--white)] text-[36px] leading-[84px]">
                        Get in touch with me!
                    </p>
                </div>
            </div>
            <div className="footer-scroll">
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.26775rem' }}>
                    {duplicatedFrames.map((frame, index) => (
                        <img
                            key={index}
                            src={frame}
                            alt={`Frame ${index + 1}`}
                            style={{ width: '56px', height: '64px', flexShrink: 0 }}
                        />
                    ))}
                </div>
            </div>

        </footer >
    )
}

