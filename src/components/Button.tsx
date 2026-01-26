"use client"
import React from 'react'

interface ButtonProps {
  text: string
  alternateText: string
  onClick?: () => void
  type?: 'button' | 'submit' | 'reset'
  className?: string
}

const Button: React.FC<ButtonProps> = ({
  text,
  alternateText,
  onClick,
  type = 'button',
  className = ''
}) => {
  return (
    <button
      className={`button ${className}`}
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

