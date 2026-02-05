"use client"

import React from "react"
import useMobileDetection from "@/_utilities/useMobileDetection"

export default function EverestScroll() {
    const { isMobile, isTablet, isDesktop1440px } = useMobileDetection()

    // Mobile (≤768px)
    if (isMobile) {
        return (
            <div className="w-screen bg-[#1C4483] py-[var(--spacing-m)] overflow-hidden" style={{ marginLeft: 'calc(-50vw + 50%)', marginRight: 'calc(-50vw + 50%)', width: '100vw' }}>
                <div className="footer-scroll">
                    <div style={{ display: 'flex', alignItems: 'center', gap: '2rem', animation: 'scrollFrames 10000ms linear infinite', willChange: 'transform', whiteSpace: 'nowrap', backfaceVisibility: 'hidden', transform: 'translateZ(0)' }}>
                        {Array.from({ length: 20 }, (_, i) => (
                            <React.Fragment key={i}>
                                <img
                                    src="/EFCU/Everest.svg"
                                    alt="Everest"
                                    style={{ height: '30px', width: 'auto', flexShrink: 0 }}
                                />
                                <span className="body text-white" style={{ fontFamily: 'Lato, sans-serif', flexShrink: 0, margin: '0 2rem' }}>BRANDING</span>
                            </React.Fragment>
                        ))}
                        {Array.from({ length: 20 }, (_, i) => (
                            <React.Fragment key={`duplicate-${i}`}>
                                <img
                                    src="/EFCU/Everest.svg"
                                    alt="Everest"
                                    style={{ height: '30px', width: 'auto', flexShrink: 0 }}
                                />
                                <span className="body text-white" style={{ fontFamily: 'Lato, sans-serif', flexShrink: 0, margin: '0 2rem' }}>BRANDING</span>
                            </React.Fragment>
                        ))}
                    </div>
                </div>
            </div>
        )
    }

    // Tablet (769px - 1024px)
    if (isTablet) {
        return (
            <div className="w-screen bg-[#1C4483] py-[var(--spacing-lg)] overflow-hidden" style={{ marginLeft: 'calc(-50vw + 50%)', marginRight: 'calc(-50vw + 50%)', width: '100vw' }}>
                <div className="footer-scroll">
                    <div style={{ display: 'flex', alignItems: 'center', gap: '3rem', animation: 'scrollFrames 10000ms linear infinite', willChange: 'transform', whiteSpace: 'nowrap', backfaceVisibility: 'hidden', transform: 'translateZ(0)' }}>
                        {Array.from({ length: 20 }, (_, i) => (
                            <React.Fragment key={i}>
                                <img
                                    src="/EFCU/Everest.svg"
                                    alt="Everest"
                                    style={{ height: '40px', width: 'auto', flexShrink: 0 }}
                                />
                                <span className="body text-white" style={{ fontFamily: 'Lato, sans-serif', flexShrink: 0, margin: '0 3rem' }}>BRANDING</span>
                            </React.Fragment>
                        ))}
                        {Array.from({ length: 20 }, (_, i) => (
                            <React.Fragment key={`duplicate-${i}`}>
                                <img
                                    src="/EFCU/Everest.svg"
                                    alt="Everest"
                                    style={{ height: '40px', width: 'auto', flexShrink: 0 }}
                                />
                                <span className="body text-white" style={{ fontFamily: 'Lato, sans-serif', flexShrink: 0, margin: '0 3rem' }}>BRANDING</span>
                            </React.Fragment>
                        ))}
                    </div>
                </div>
            </div>
        )
    }

    // Desktop 1440px (1025px - 1440px)
    if (isDesktop1440px) {
        return (
            <div className="w-screen bg-[#1C4483] py-[var(--spacing-xl)] overflow-hidden" style={{ marginLeft: 'calc(-50vw + 50%)', marginRight: 'calc(-50vw + 50%)', width: '100vw' }}>
                <div className="footer-scroll">
                    <div style={{ display: 'flex', alignItems: 'center', gap: '4rem', animation: 'scrollFrames 10000ms linear infinite', willChange: 'transform', whiteSpace: 'nowrap', backfaceVisibility: 'hidden', transform: 'translateZ(0)' }}>
                        {Array.from({ length: 20 }, (_, i) => (
                            <React.Fragment key={i}>
                                <img
                                    src="/EFCU/Everest.svg"
                                    alt="Everest"
                                    style={{ height: '50px', width: 'auto', flexShrink: 0 }}
                                />
                                <span className="body text-white" style={{ fontFamily: 'Lato, sans-serif', flexShrink: 0, margin: '0 4rem' }}>BRANDING</span>
                            </React.Fragment>
                        ))}
                        {Array.from({ length: 20 }, (_, i) => (
                            <React.Fragment key={`duplicate-${i}`}>
                                <img
                                    src="/EFCU/Everest.svg"
                                    alt="Everest"
                                    style={{ height: '50px', width: 'auto', flexShrink: 0 }}
                                />
                                <span className="body text-white" style={{ fontFamily: 'Lato, sans-serif', flexShrink: 0, margin: '0 4rem' }}>BRANDING</span>
                            </React.Fragment>
                        ))}
                    </div>
                </div>
            </div>
        )
    }

    // Large Desktop (>1440px)
    return (
        <div className="w-screen bg-[#1C4483] py-[var(--spacing-2xl)] overflow-hidden" style={{ marginLeft: 'calc(-50vw + 50%)', marginRight: 'calc(-50vw + 50%)', width: '100vw' }}>
            <div className="footer-scroll">
                <div style={{ display: 'flex', alignItems: 'center', gap: '5rem', animation: 'scrollFrames 10000ms linear infinite', willChange: 'transform', whiteSpace: 'nowrap', backfaceVisibility: 'hidden', transform: 'translateZ(0)' }}>
                    {Array.from({ length: 20 }, (_, i) => (
                        <React.Fragment key={i}>
                            <img
                                src="/EFCU/Everest.svg"
                                alt="Everest"
                                style={{ height: '60px', width: 'auto', flexShrink: 0 }}
                            />
                            <span className="body text-white" style={{ fontFamily: 'Lato, sans-serif', flexShrink: 0, margin: '0 5rem' }}>BRANDING</span>
                        </React.Fragment>
                    ))}
                    {Array.from({ length: 20 }, (_, i) => (
                        <React.Fragment key={`duplicate-${i}`}>
                            <img
                                src="/EFCU/Everest.svg"
                                alt="Everest"
                                style={{ height: '60px', width: 'auto', flexShrink: 0 }}
                            />
                            <span className="body text-white" style={{ fontFamily: 'Lato, sans-serif', flexShrink: 0, margin: '0 5rem' }}>BRANDING</span>
                        </React.Fragment>
                    ))}
                </div>
            </div>
        </div>
    )
}

