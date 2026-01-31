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
            <footer className="w-full py-[var(--spacing-2xl)] bg-[var(--darkblack)] overflow-hidden">
                <div className="flex flex-col items-start px-[var(--spacing-lg)] pt-[var(--spacing-lg)] pb-[var(--spacing-2xl)]">
                    <div className="flex flex-col items-start justify-between gap-[var(--spacing-4xl)] mx-auto">

                        <div className="flex flex-col items-start gap-[var(--spacing-2xl)]">
                            <p className="text-[var(--white)] text-[32px] leading-[48px]">

                                Connect with me!
                            </p>
                            <div className="flex items-start gap-[var(--spacing-xl)]">
                                <Button text="Email" alternateText="Email me" onClick={handleEmailClick} inverted={true} />
                                <Button text="LinkedIn" alternateText="Add me" onClick={handleLinkedInClick} inverted={true} />
                                <Button text="Instagram" alternateText="Follow me" onClick={handleInstagramClick} inverted={true} />
                            </div>
                        </div>

                        <DolphinAnimation className="h-full max-w-[300px]" />

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
            <footer className="w-full py-[var(--spacing-4xl)] bg-[var(--darkblack)] overflow-hidden">
                <div className="flex items-center justify-between px-[var(--spacing-4xl)] pt-[var(--spacing-lg)] pb-[var(--spacing-6xl)] mx-auto">

                    <div className="flex flex-col h-full items-start gap-[var(--spacing-2xl)]">
                        <p className="text-[var(--white)] text-[40px] leading-[64px]">
                            Connect with me!
                        </p>
                        <div className="flex items-start gap-[var(--spacing-lg)]">
                            <Button text="Email" alternateText="Email me " onClick={handleEmailClick} inverted={true} />
                            <Button text="LinkedIn" alternateText="Add me" onClick={handleLinkedInClick} inverted={true} />
                            <Button text="Instagram" alternateText="Follow me" onClick={handleInstagramClick} inverted={true} />
                        </div>
                    </div>
                    <div className="flex items-start justify-between]">
                        <DolphinAnimation className="h-[250px] w-full" />
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
            <footer className="w-full py-[var(--spacing-5xl)] bg-[var(--darkblack)] overflow-hidden">
                <div className="flex items-center justify-between px-[var(--spacing-6xl)] pt-[var(--spacing-xl)] pb-[var(--spacing-6xl)] mx-auto">
                    <div className="flex flex-col h-[281px] items-start gap-[var(--spacing-2xl)]">
                        <p className="text-[var(--white)] text-[48px] leading-[72px]">
                            Connect with me!
                        </p>
                        <div className="flex items-start gap-[var(--spacing-xl)]">
                            <Button text="Email" alternateText="Email me " onClick={handleEmailClick} inverted={true} />
                            <Button text="LinkedIn" alternateText="Add me" onClick={handleLinkedInClick} inverted={true} />
                            <Button text="Instagram" alternateText="Follow me" onClick={handleInstagramClick} inverted={true} />
                        </div>

                    </div>
                    <div className="flex items-start justify-between">
                        <DolphinAnimation className="h-[300px] w-full" />
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
        <footer className="w-full py-[var(--spacing-4xl)] bg-[var(--darkblack)] overflow-hidden ">
            <div className="flex max-w-[1600px] items-center justify-between px-[var(--spacing-8xl)] pt-[var(--spacing-2xl)] pb-[var(--spacing-8xl)] mx-auto">
                <div className="flex flex-col h-full gap-[var(--spacing-3xl)] items-start">
                    <p className="text-[var(--white)] text-[64px] leading-[96px]">
                        Connect with me!
                    </p>
                    <div className="flex items-start gap-[var(--spacing-2xl)]">
                        <Button text="Email" alternateText="Email me " onClick={handleEmailClick} inverted={true} />
                        <Button text="LinkedIn" alternateText="Add me" onClick={handleLinkedInClick} inverted={true} />
                        <Button text="Instagram" alternateText="Follow me" onClick={handleInstagramClick} inverted={true} />
                    </div>
                </div>
                <div className="flex items-start justify-between]">
                    <DolphinAnimation className="h-[350px] w-full " />
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

