"use client"

import React, { useState } from "react"

interface ExitButtonProps {
  onClick?: () => void
  size?: "large" | "small"
  className?: string
  "aria-label"?: string
}

const ExitButton: React.FC<ExitButtonProps> = ({
  onClick,
  size = "large",
  className = "",
  "aria-label": ariaLabel = "Close",
}) => {
  const [isHovered, setIsHovered] = useState(false)
  const sizeClass = size === "large" ? "exit-btn--large" : "exit-btn--small"

  // Large: default = ExitPrimaryInverse.png, hover = ExitPrimary.png.
  // Small: default = ExitPrimaryInverse.svg, hover = ExitPrimary.svg.
  const iconSrc =
    size === "large"
      ? isHovered
        ? "/Icons/Exit/ExitPrimary.png"
        : "/Icons/Exit/ExitPrimaryInverse.png"
      : isHovered
        ? "/Icons/Exit/ExitPrimary.svg"
        : "/Icons/Exit/ExitPrimaryInverse.svg"

  const imgStyle =
    size === "large"
      ? { height: "32px", width: "auto", objectFit: "contain" as const }
      : { height: "18px", width: "auto", objectFit: "contain" as const }

  return (
    <button
      type="button"
      className={`exit-btn ${sizeClass} ${className}`.trim()}
      onClick={onClick}
      aria-label={ariaLabel}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img src={iconSrc} alt="" style={imgStyle} />
    </button>
  )
}

export default ExitButton
