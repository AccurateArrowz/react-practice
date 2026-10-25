import React from 'react'

type Button2Props = { 
    size: "sm" | "md" | "lg", 
    appearance: 
    color: string,
    bg: string,
    icon?: React.ReactElement
}
export default function Button2({size, icon}: Button2Props) {
    const [isHovered, setIsHovered ] = useState(false);
    const defaultIconProps = { 
        size: size === "lg" ? "lg" : "md",
        color:  ,

    }

  return (
    <button 
    onPointerEnter={()=> setIsHovered(true)} onPointerLeave={()=> setIsHovered(false)}>
        {icon}
        </button>
  )
}
