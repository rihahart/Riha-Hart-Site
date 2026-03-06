"use client"

import React from "react"
import { useRouter } from "next/navigation"
import useMobileDetection from "@/_utilities/useMobileDetection"
import { Amrita, DesignAndType, Manet, VanGogh } from "./GetToKnowMePhotos"
import ReEducationAnimation from "./Re-educationAnimation"
import Button from "@/components/Button"

export default function GetToKnowMe() {
    const router = useRouter()
    const { isMobile, isTablet, isDesktop1440px } = useMobileDetection()

    // Mobile (≤768px)
    if (isMobile) {
        return (
            <div className="w-full flex flex-col items-stretch gap-[var(--spacing-2xl)]">
                 <div className="flex justify-between items-end self-stretch gap-[var(--spacing-xs)]">
                <DesignAndType src="/getToKnowMe/getToKnowMePhotos/Item1/Design%20and%20Type.png" alt="Design and Type" />
                <Manet src="/getToKnowMe/getToKnowMePhotos/Item1/Manet.png" alt="Manet" />
            </div>
            <div className="flex flex-col items-center gap-[var(--spacing-xs)]">
                <ReEducationAnimation />
                <Button text="Get to know me" onClick={() => router.push("/bio")} variant="primary" size="small" />
            </div>
            <div className="flex justify-between items-end self-stretch gap-[var(--spacing-xs)]">
                <Amrita src="/getToKnowMe/getToKnowMePhotos/Item2/Amrita.png" alt="Amrita" />
                <VanGogh src="/getToKnowMe/getToKnowMePhotos/Item2/Van%20Gogh.png" alt="Van Gogh" />
            </div>
            </div>
        )
    }

    // Tablet (769px - 1024px)
    if (isTablet) {
        return (
            <div className="w-full flex flex-col items-stretch gap-[var(--spacing-2xl)]">
                 <div className="flex justify-between items-end self-stretch">
                <DesignAndType src="/getToKnowMe/getToKnowMePhotos/Item1/Design%20and%20Type.png" alt="Design and Type" />
                <Manet src="/getToKnowMe/getToKnowMePhotos/Item1/Manet.png" alt="Manet" />
            </div>
            <div className="flex flex-col items-center gap-[var(--spacing-xs)] relative z-0">
                <ReEducationAnimation />
                <Button text="Get to know me" onClick={() => router.push("/bio")} variant="primary" size="large" />
            </div>
            <div className="flex justify-between items-end self-stretch relative z-10 -mt-[var(--spacing-2xl)]">
                <Amrita src="/getToKnowMe/getToKnowMePhotos/Item2/Amrita.png" alt="Amrita" />
                <VanGogh src="/getToKnowMe/getToKnowMePhotos/Item2/Van%20Gogh.png" alt="Van Gogh" />
            </div>
            </div>
        )
    }

    // Desktop 1440px (1025px - 1440px)
    if (isDesktop1440px) {
        return (
            <div className="w-full flex flex-col items-stretch">
                 <div className="flex justify-between items-end self-stretch relative z-10">
                <DesignAndType src="/getToKnowMe/getToKnowMePhotos/Item1/Design%20and%20Type.png" alt="Design and Type" />
                <Manet src="/getToKnowMe/getToKnowMePhotos/Item1/Manet.png" alt="Manet" />
            </div>
            <div className="flex flex-col items-center gap-[var(--spacing-xs)] relative z-0">
                <ReEducationAnimation />
                <Button text="Get to know me" onClick={() => router.push("/bio")} variant="primary" size="large" />
            </div>
                <div className="flex justify-between items-end self-stretch relative z-10 -mt-[var(--spacing-12xl)]">
                <Amrita src="/getToKnowMe/getToKnowMePhotos/Item2/Amrita.png" alt="Amrita" />
                <VanGogh src="/getToKnowMe/getToKnowMePhotos/Item2/Van%20Gogh.png" alt="Van Gogh" />
            </div>
            </div>
        )
    }

    // Large Desktop (>1440px)
    return (
        <div className="w-full flex flex-col items-stretch">
            <div className="flex justify-between items-end self-stretch relative z-10 ">
                <DesignAndType src="/getToKnowMe/getToKnowMePhotos/Item1/Design%20and%20Type.png" alt="Design and Type" />
                <Manet src="/getToKnowMe/getToKnowMePhotos/Item1/Manet.png" alt="Manet" />
            </div>
            <div className="flex flex-col items-center gap-[var(--spacing-xs)] relative z-0">
            <ReEducationAnimation />
            <Button text="Get to know me" onClick={() => router.push("/bio")} variant="primary" size="large" />
            </div>
            <div className="flex justify-between items-end self-stretch relative z-10 -mt-[var(--spacing-8xl)]">
                <Amrita src="/getToKnowMe/getToKnowMePhotos/Item2/Amrita.png" alt="Amrita" />
                <VanGogh src="/getToKnowMe/getToKnowMePhotos/Item2/Van%20Gogh.png" alt="Van Gogh" />
            </div>
        </div>
    )
}

