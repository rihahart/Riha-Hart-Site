"use client"

import { ReactNode } from 'react'
import useMobileDetection from '@/_utilities/useMobileDetection'

export default function MainContent({ children }: { children: ReactNode }) {
    const { isMobile, isTablet, isDesktop1440px } = useMobileDetection()

    // Calculate padding based on navbar height + padding
    // Mobile: 70px logo + 12px top + 12px bottom = ~94px
    // Tablet: 80px logo + 16px top + 16px bottom = ~112px
    // Desktop 1440px: 100px logo + 24px top + 24px bottom = ~148px
    // Large Desktop: 120px logo + 24px top + 24px bottom = ~168px

    let paddingTop = '140px' // default for large desktop

    if (isMobile) {
        paddingTop = '80px' // 70px logo + 24px padding (12px top + 12px bottom)
    } else if (isTablet) {
        paddingTop = '100px' // 80px logo + 32px padding (16px top + 16px bottom)
    } else if (isDesktop1440px) {
        paddingTop = '120px' // 100px logo + 48px padding (24px top + 24px bottom)
    }

    return (
        <main style={{ paddingTop }}>
            {children}
        </main>
    )
}

