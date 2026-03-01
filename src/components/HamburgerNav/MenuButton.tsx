"use client"
import React from 'react'

interface MenuButtonProps {
    text: string
    onClick?: () => void
    type?: 'button' | 'submit' | 'reset'
    className?: string
    inverted?: boolean
    isActive?: boolean
}

const MenuButton: React.FC<MenuButtonProps> = ({
    text,
    onClick,
    type = 'button',
    className = '',
    inverted = false,
    isActive = false
}) => {
    return (
        <button
            className={`menu-button ${isActive ? 'active' : ''} ${className}`}
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

export default MenuButton