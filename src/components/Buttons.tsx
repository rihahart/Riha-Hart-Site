"use client"

import React from "react"
import { useMenu } from "@/contexts/MenuContext"

// ─── Button ───────────────────────────────────────────────────────────────────

interface ButtonProps {
  text: string
  onClick?: () => void
  type?: "button" | "submit" | "reset"
  className?: string
  inverted?: boolean
  variant?: "default" | "redPrimary" | "primary" | "inverse" | "link" | "iKPrimary"
  size?: "large" | "small"
}

export const Button: React.FC<ButtonProps> = ({
  text,
  onClick,
  type = "button",
  className = "",
  inverted = false,
  variant = "default",
  size = "large",
}) => {
  const resolvedVariant =
    variant === "redPrimary" ? "primary" : inverted ? "inverse" : variant === "default" ? "primary" : variant

  const variantClass =
    variant === "iKPrimary"
      ? "button--ik-primary"
      : resolvedVariant === "primary"
        ? "button--primary"
        : resolvedVariant === "inverse"
          ? "button--inverse"
          : resolvedVariant === "link"
            ? "button--link"
            : "button--primary"

  const sizeClass = size === "small" ? "button--small" : "button--large"

  return (
    <button
      className={`button ${variantClass} ${sizeClass} ${className}`.trim()}
      role="button"
      onClick={onClick}
      type={type}
    >
      <span>{text}</span>
    </button>
  )
}

// ─── MenuButton ───────────────────────────────────────────────────────────────

interface MenuButtonProps {
  text: string
  onClick?: () => void
  type?: "button" | "submit" | "reset"
  className?: string
  inverted?: boolean
  isActive?: boolean
}

export const MenuButton: React.FC<MenuButtonProps> = ({
  text,
  onClick,
  type = "button",
  className = "",
  inverted = false,
  isActive = false,
}) => {
  return (
    <button
      className={`menu-button ${isActive ? "active" : ""} ${className}`}
      role="button"
      onClick={(e) => {
        e.preventDefault()
        e.stopPropagation()
        onClick?.()
      }}
      type={type}
    >
      <span>{text}</span>
    </button>
  )
}

// ─── ExitButton ───────────────────────────────────────────────────────────────

interface ExitButtonProps {
  onClick?: () => void
  size?: "large" | "small"
  className?: string
  "aria-label"?: string
}

export const ExitButton: React.FC<ExitButtonProps> = ({
  onClick,
  size = "large",
  className = "",
  "aria-label": ariaLabel = "Close",
}) => {
  const sizeClass = size === "large" ? "exit-btn--large" : "exit-btn--small"
  const imgStyle = size === "large"
    ? { height: "32px", width: "auto", objectFit: "contain" as const }
    : { height: "18px", width: "auto", objectFit: "contain" as const }

  return (
    <button
      type="button"
      className={`exit-btn ${sizeClass} ${className}`.trim()}
      onClick={onClick}
      aria-label={ariaLabel}
    >
      <img src="/Icons/Exit/ExitPrimaryInverse.svg" alt="" className="exit-icon" style={imgStyle} />
    </button>
  )
}

// ─── HamburgerButton ──────────────────────────────────────────────────────────

interface HamburgerButtonProps {
  className?: string
  "aria-label"?: string
}

export const HamburgerButton: React.FC<HamburgerButtonProps> = ({
  className = "",
  "aria-label": ariaLabel = "Menu",
}) => {
  const { toggleMenu } = useMenu()
  return (
    <button
      type="button"
      className={`hamburger-btn ${className}`.trim()}
      onClick={toggleMenu}
      aria-label={ariaLabel}
    >
      <img
        src="/Icons/Hamburger/HamburgerSmall.svg"
        alt=""
        style={{ width: "var(--Icon-Hamburger-S-width)", height: "var(--Icon-Hamburger-S-height)", objectFit: "contain" }}
      />
    </button>
  )
}

// ─── NavButton ────────────────────────────────────────────────────────────────

interface NavButtonProps {
  onClick?: () => void
  direction?: "up" | "down" | "left" | "right"
  alt?: string
  className?: string
}

export const NavButton: React.FC<NavButtonProps> = ({
  onClick,
  direction = "right",
  alt = "",
  className = "",
}) => {
  const arrowClass =
    direction === "up"
      ? "nav-arrow nav-arrow-up"
      : direction === "down"
        ? "nav-arrow nav-arrow-down"
        : direction === "left"
          ? "nav-arrow nav-arrow-left"
          : "nav-arrow"

  return (
    <button
      type="button"
      className={`nav-btn ${className}`.trim()}
      onClick={onClick}
    >
      <img src="/Icons/RightArrow/RightArrowLarge.svg" className={arrowClass} alt={alt} />
    </button>
  )
}

// ─── SocialButton ─────────────────────────────────────────────────────────────

interface SocialButtonProps {
  onClick?: () => void
  icon: "linkedin" | "instagram" | "gmail"
  className?: string
}

export const SocialButton: React.FC<SocialButtonProps> = ({
  onClick,
  icon,
  className = "",
}) => {
  const src = icon === "linkedin"
    ? "/Icons/Social/LinkedIn.svg"
    : icon === "instagram"
      ? "/Icons/Social/Instagram.svg"
      : "/Icons/Social/Gmail.svg"

  return (
    <button
      type="button"
      className={`nav-btn nav-btn--social ${className}`.trim()}
      onClick={onClick}
      aria-label={icon === "linkedin" ? "LinkedIn" : "Instagram"}
    >
      <img src={src} alt="" className="nav-social-icon" />
    </button>
  )
}
