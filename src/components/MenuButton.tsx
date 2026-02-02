"use client"
import React from 'react'

interface MenuButtonProps {
    text: string
    alternateText: string
    onClick?: () => void
    type?: 'button' | 'submit' | 'reset'
    className?: string
    inverted?: boolean
}

const MenuButton: React.FC<MenuButtonProps> = ({
    text,
    alternateText,
    onClick,
    type = 'button',
    className = '',
    inverted = false
}) => {
    return (
        <button
            className={`menu-button ${className}`}
            role="button"
            onClick={(e) => {
                e.preventDefault()
                e.stopPropagation()
                onClick?.()
            }}
            type={type}
        >
            <span className="text">{text}</span>
            <span>{alternateText}</span>
        </button>
    )
}

export default MenuButton

