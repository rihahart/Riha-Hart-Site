"use client"
import React from 'react'

interface ButtonProps {
  text: string
  onClick?: () => void
  type?: 'button' | 'submit' | 'reset'
  className?: string
  inverted?: boolean
  variant?: 'default' | 'redPrimary'
}

const Button: React.FC<ButtonProps> = ({
  text,
  onClick,
  type = 'button',
  className = '',
  inverted = false,
  variant = 'default'
}) => {
  return (
    <button
      className={`button ${inverted ? 'button--inverted' : ''} ${variant === 'redPrimary' ? 'button--red' : ''} ${className}`}
      role="button"
      onClick={onClick}
      type={type}
    >
      <span>{text}</span>
    </button>
  )
}

export default Button

