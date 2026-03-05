"use client"

import React from "react"

interface HamburgerButtonProps {
  onClick?: () => void
  size?: "large" | "small"
  className?: string
  "aria-label"?: string
}

const HamburgerButton: React.FC<HamburgerButtonProps> = ({
  onClick,
  size = "large",
  className = "",
  "aria-label": ariaLabel = "Menu",
}) => {
  const sizeClass = size === "large" ? "hamburger-btn--large" : "hamburger-btn--small"
  const iconSrc =
    size === "large"
      ? "/Icons/Hamburger/Hamburger.png"
      : "/Icons/Hamburger/HamburgerSmall.svg"

  return (
    <button
      type="button"
      className={`hamburger-btn ${sizeClass} ${className}`.trim()}
      onClick={onClick}
      aria-label={ariaLabel}
    >
      <img
        src={iconSrc}
        alt=""
        style={{
          width: size === "large" ? "var(--Icon-Hamburger-M-width)" : "var(--Icon-Hamburger-S-width)",
          height: size === "large" ? "var(--Icon-Hamburger-M-height)" : "var(--Icon-Hamburger-S-height)",
          objectFit: "contain",
        }}
      />
    </button>
  )
}

export default HamburgerButton
