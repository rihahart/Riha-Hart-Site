"use client"

import { useEffect, useRef } from "react"
import useMobileDetection from "@/_utilities/useMobileDetection"

const PHOTOS = ["/RihaHart/RihaPhoto1.png", "/RihaHart/RihaPhoto2.png"]

export default function RihaPhotos({ className = "" }: { className?: string }) {
    const imgRef = useRef<HTMLImageElement>(null)
    const { isMobile, isTablet } = useMobileDetection()
    const isSmall = isMobile || isTablet

    useEffect(() => {
        let i = 0
        const id = setInterval(() => {
            i = (i + 1) % PHOTOS.length
            if (imgRef.current) imgRef.current.src = PHOTOS[i]
        }, 800)
        return () => clearInterval(id)
    }, [])

    return (
        <div className={className} style={{ border: "0px solid white", overflow: "hidden", borderBottom: isSmall ? "1px solid var(--color-primary-inverse)" : undefined }}>
            <img
                ref={imgRef}
                src={PHOTOS[0]}
                alt="Riha Hart"
                style={{ display: "block", transition: "none", width: "100%", marginTop: "-15%", marginBottom: "-20%" }}
            />
        </div>
    )
}
