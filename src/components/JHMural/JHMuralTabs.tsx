"use client"

import { useState } from "react"
import Button from "@/components/Button"
import { inBloom } from "@/data/JHMural/inBloom"
import InBloomGallery from "@/components/JHMural/InBloomGallery"
import useMobileDetection from "@/_utilities/useMobileDetection"

type Tab = "inBloom" | "upcoming"

export default function JHMuralTabs() {
    const [activeTab, setActiveTab] = useState<Tab>("inBloom")
    const { isMobile, isTablet } = useMobileDetection()

    return (
        <div className={`flex flex-col w-full ${isMobile || isTablet ? "gap-[var(--spacing-4xl)]" : "gap-[var(--spacing-6xl)]"}`}>
            {/* Tabs */}
            <div className="flex flex-row gap-[var(--spacing-xl)] border-b border-[var(--color-tertiary)]">
                <Button
                    text="Jackson Heights in Bloom"
                    variant="link"
                    className={`!text-[var(--color-primary)]${activeTab === "inBloom" ? " active" : ""}`}
                    onClick={() => setActiveTab("inBloom")}
                />
                <Button
                    text="Upcoming Mural"
                    variant="link"
                    className={`!text-[var(--color-primary)]${activeTab === "upcoming" ? " active" : ""}`}
                    onClick={() => setActiveTab("upcoming")}
                />
            </div>

            {/* Content */}
            {activeTab === "inBloom" && (
                <div className="flex flex-col w-full gap-[var(--spacing-xl)]">
                    <p className="body text-[var(--color-primary)]">
                        <span className="h2 text-[var(--color-primary)]">{inBloom.heading}</span> {inBloom.body}
                    </p>
                    <InBloomGallery />
                </div>
            )}

            {activeTab === "upcoming" && (
                <div className={`flex flex-col w-full ${isMobile || isTablet ? "p-[var(--spacing-xl)]" : "p-[var(--spacing-4xl)]"}`}>
                    <img
                        src="/JHMural/Planning.png"
                        alt="Upcoming mural placeholder"
                        className="w-full h-auto object-contain"
                    />

                </div>
            )}
        </div>
    )
}
