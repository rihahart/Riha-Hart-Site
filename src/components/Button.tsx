"use client"
import React from 'react'

interface ButtonProps {
  text: string
  alternateText: string
  onClick?: () => void
  type?: 'button' | 'submit' | 'reset'
  className?: string
  inverted?: boolean
}

const Button: React.FC<ButtonProps> = ({
  text,
  alternateText,
  onClick,
  type = 'button',
  className = '',
  inverted = false
}) => {
  return (
    <button
      className={`button ${inverted ? 'button-inverted' : ''} ${className}`}
      role="button"
      onClick={onClick}
      type={type}
    >
      <span className="text">{text}</span>
      <span>{alternateText}</span>
    </button>
  )
}

export default Button

