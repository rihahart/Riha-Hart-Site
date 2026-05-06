"use client"

import { useEffect } from "react"
import useMobileDetection from "@/_utilities/useMobileDetection"
import ReEducationAnimation from "./GetToKnowMe/Re-educationAnimation"

export default function IntroAnimation({ onDone }: { onDone?: () => void }) {
    const { isMobile, isTablet, isDesktop1440px } = useMobileDetection()

    useEffect(() => {
        document.body.classList.add('intro-active')
    }, [])

    let contentWidth: string
    if (isMobile) contentWidth = "90vw"
    else if (isTablet) contentWidth = "70vw"
    else if (isDesktop1440px) contentWidth = "50vw"
    else contentWidth = "40vw"

    return (
        <>
            <style>{`
                .intro-wrap {
                    position: fixed;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    z-index: 9999;
                    pointer-events: none;
                    width: 100vw;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }
                .intro-wrap > div {
                    width: var(--intro-content-width) !important;
                }
            `}</style>
            <div className="intro-wrap" style={{ '--intro-content-width': contentWidth } as React.CSSProperties}>
                <ReEducationAnimation onComplete={onDone} />
            </div>
        </>
    )
}
