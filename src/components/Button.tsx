"use client"
import React from 'react'

interface ButtonProps {
  text: string
  onClick?: () => void
  type?: 'button' | 'submit' | 'reset'
  className?: string
  inverted?: boolean
  variant?: 'default' | 'redPrimary' | 'primary' | 'inverse' | 'link'
  size?: 'large' | 'small'
}

const Button: React.FC<ButtonProps> = ({
  text,
  onClick,
  type = 'button',
  className = '',
  inverted = false,
  variant = 'default',
  size = 'large'
}) => {
  const resolvedVariant =
    variant === 'redPrimary' ? 'primary' : inverted ? 'inverse' : variant === 'default' ? 'primary' : variant

  const variantClass =
    resolvedVariant === 'primary'
      ? 'button--primary'
      : resolvedVariant === 'inverse'
        ? 'button--inverse'
        : resolvedVariant === 'link'
          ? 'button--link'
          : 'button--primary'

  const sizeClass = size === 'small' ? 'button--small' : 'button--large'

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

export default Button
