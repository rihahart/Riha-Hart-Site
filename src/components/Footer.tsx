"use client"

import React from "react"
import Image from "next/image"
import useMobileDetection from "@/_utilities/useMobileDetection"
import Button from "./Button"
import DolphinAnimation from "./DolphinAnimation"

export default function Footer() {
    const { isMobile, isTablet, isDesktop1440px } = useMobileDetection()

    // Generate array of frame paths (duplicate for seamless loop)
    const frames = Array.from({ length: 70 }, (_, i) => `/Photos/ColorFrames/Frame${i + 1}.svg`)
    const duplicatedFrames = [...frames, ...frames] // Duplicate for seamless loop

    const handleEmailClick = () => {
        window.location.href = 'mailto:rihahart@gmail.com'
    }

    const handleLinkedInClick = () => {
        window.open('https://linkedin.com/in/rihahart', '_blank')
    }

    const handleInstagramClick = () => {
        window.open('https://www.instagram.com/riha.hart', '_blank')
    }

    // Mobile (≤768px)
    if (isMobile) {
        return (
            <footer className="w-full py-[var(--spacing-2xl)] bg-[var(--neutral-1000)] overflow-hidden">
                <div className="flex flex-col items-start px-[var(--spacing-lg)] pt-[var(--spacing-md)] pb-[var(--spacing-2xl)]">
                    <div className="relative flex flex-col items-start justify-between gap-[var(--spacing-4xl)] mx-auto w-full">
                        <div style={{ transform: 'scaleX(-1)' }}>
                            <DolphinAnimation className="h-full max-w-[300px] px-[var(--spacing-lg)]" />
                        </div>
                        <div className="absolute bottom-[-40%] left-0 w-full z-10 flex flex-col items-start gap-[var(--spacing-2xl)] px-[var(--spacing-lg)]">
                            { /* <p className="text-[var(--color-primary-inverse)] text-[32px] leading-[48px]">

                                Connect with me!
                            </p>*/}
                            <div className="flex items-start gap-[var(--spacing-xl)]">
                                <Button text="Email" alternateText="Email me" onClick={handleEmailClick} inverted={true} />
                                <Button text="LinkedIn" alternateText="Add me" onClick={handleLinkedInClick} inverted={true} />
                                <Button text="Instagram" alternateText="Follow me" onClick={handleInstagramClick} inverted={true} />
                            </div>
                        </div>
                    </div>

                </div>
                <div className="footer-scroll mt-[var(--spacing-6xl)]">
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.26775rem' }}>
                        {duplicatedFrames.map((frame, index) => (
                            <img
                                key={index}
                                src={frame}
                                alt={`Frame ${index + 1}`}
                                style={{ width: '20px', height: '28px', flexShrink: 0 }}
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
            <footer className="w-full py-[var(--spacing-2xl)] bg-[var(--neutral-1000)] overflow-hidden">
                <div className="flex flex-col items-start px-[var(--spacing-lg)] pt-[var(--spacing-md)] pb-[var(--spacing-2xl)]">
                    <div className="relative flex flex-col items-start justify-between gap-[var(--spacing-4xl)] mx-auto w-full">
                        <div style={{ transform: 'scaleX(-1)' }}>
                            <DolphinAnimation className="h-full max-w-[400px] px-[var(--spacing-lg)]" />
                        </div>
                        <div className="absolute bottom-[-40%] left-0 w-full z-10 flex flex-col items-start gap-[var(--spacing-2xl)] px-[var(--spacing-lg)]">
                            { /* <p className="text-[var(--color-primary-inverse)] text-[32px] leading-[48px]">

                                Connect with me!
                            </p>*/}
                            <div className="flex items-start gap-[var(--spacing-xl)]">
                                <Button text="Email" alternateText="Email me" onClick={handleEmailClick} inverted={true} />
                                <Button text="LinkedIn" alternateText="Add me" onClick={handleLinkedInClick} inverted={true} />
                                <Button text="Instagram" alternateText="Follow me" onClick={handleInstagramClick} inverted={true} />
                            </div>
                        </div>
                    </div>

                </div>
                <div className="footer-scroll mt-[var(--spacing-10xl)]">
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.26775rem' }}>
                        {duplicatedFrames.map((frame, index) => (
                            <img
                                key={index}
                                src={frame}
                                alt={`Frame ${index + 1}`}
                                style={{ width: '32px', height: '40px', flexShrink: 0 }}
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
            <footer className="w-full py-[var(--spacing-2xl)] bg-[var(--neutral-1000)] overflow-hidden">
                <div className="flex flex-col items-start px-[var(--spacing-lg)] pt-[var(--spacing-md)] pb-[var(--spacing-2xl)]">
                    <div className="relative flex flex-col items-start justify-between gap-[var(--spacing-4xl)] mx-auto w-full">
                        <div style={{ transform: 'scaleX(-1)' }}>
                            <DolphinAnimation className="h-full max-w-[450px] px-[var(--spacing-lg)]" />
                        </div>
                        <div className="absolute bottom-[-40%] left-0 w-full z-10 flex flex-col items-start gap-[var(--spacing-2xl)] px-[var(--spacing-lg)]">
                            { /* <p className="text-[var(--color-primary-inverse)] text-[32px] leading-[48px]">

                                Connect with me!
                            </p>*/}
                            <div className="flex items-start gap-[var(--spacing-xl)]">
                                <Button text="Email" alternateText="Email me" onClick={handleEmailClick} inverted={true} />
                                <Button text="LinkedIn" alternateText="Add me" onClick={handleLinkedInClick} inverted={true} />
                                <Button text="Instagram" alternateText="Follow me" onClick={handleInstagramClick} inverted={true} />
                            </div>
                        </div>
                    </div>

                </div>
                <div className="footer-scroll mt-[var(--spacing-12xl)]">
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.26775rem' }}>
                        {duplicatedFrames.map((frame, index) => (
                            <img
                                key={index}
                                src={frame}
                                alt={`Frame ${index + 1}`}
                                style={{ width: '38px', height: '48px', flexShrink: 0 }}
                            />
                        ))}
                    </div>
                </div>
            </footer>
        )
    }

    // Large Desktop (>1440px)
    return (
        <footer className="w-full py-[var(--spacing-2xl)] bg-[var(--neutral-1000)] overflow-hidden">
            <div className="flex flex-col items-start px-[var(--spacing-lg)] pt-[var(--spacing-md)] pb-[var(--spacing-2xl)]">
                <div className="relative flex flex-col items-start justify-between gap-[var(--spacing-4xl)] mx-auto w-full max-w-[1600px]">
                    <div style={{ transform: 'scaleX(-1)' }}>
                        <DolphinAnimation className="h-full max-w-[500px] px-[var(--spacing-lg)]" />
                    </div>
                    <div className="absolute bottom-[-40%] left-0 w-full z-10 flex flex-col items-start gap-[var(--spacing-2xl)] px-[var(--spacing-lg)]">
                        { /* <p className="text-[var(--color-primary-inverse)] text-[32px] leading-[48px]">

                            Connect with me!
                        </p>*/}
                        <div className="flex items-start gap-[var(--spacing-xl)]">
                            <Button text="Email" alternateText="Email me" onClick={handleEmailClick} inverted={true} />
                            <Button text="LinkedIn" alternateText="Add me" onClick={handleLinkedInClick} inverted={true} />
                            <Button text="Instagram" alternateText="Follow me" onClick={handleInstagramClick} inverted={true} />
                        </div>
                    </div>
                </div>

            </div>
            <div className="footer-scroll mt-[140px]">
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.26775rem' }}>
                    {duplicatedFrames.map((frame, index) => (
                        <img
                            key={index}
                            src={frame}
                            alt={`Frame ${index + 1}`}
                            style={{ width: '48px', height: '64px', flexShrink: 0 }}
                        />
                    ))}
                </div>
            </div>

        </footer >
    )
}

