import React, { useState } from 'react'

type ButtonProps = {
    bgColor: string,
    color: string,
    disabled: boolean,
    size: "lg"| "md " | "sm",
    icon?: React.ReactElement, 
    hoveredIcon? : React.ReactNode,
}

export default function Button({disabled= false, size, bgColor, color, icon, hoveredIcon = icon}: ButtonProps) {
    const [isHovered, setIsHovered] = useState(false);
    const defaultProps = {
        size: size === 'lg'? 'lg': "md",
        color: disabled ? 'grey' : 'white',

    }
    const iconProps = icon?.props ?? {};
    const mergedProps = {...defaultProps, ...iconProps };

  return (
    <button 
        className = {`${bgColor} ${color}  hover? bg-${bgColor}-300`}
        disabled={disabled}
        onPointerEnter={()=> setIsHovered(true)}
        onPointerOut={()=> setIsHovered(false)} >

            {!isHovered && icon}
            {isHovered && hoveredIcon}

    </button>
  )
}

