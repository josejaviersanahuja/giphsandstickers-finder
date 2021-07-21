import React, { ReactElement, ReactNode } from 'react'
const FSIZES = {
    small: '1em',
    medium: '2em',
    large: '3em'
  }
  const PSIZES = {
    small: '.5em',
    medium: '1em',
    large: '1.5em'
  }
interface BotonProps {
    children : ReactNode
    size?: "small" | "medium" | "large",
    onClick?: React.MouseEventHandler,
    id?: string
}
export default function ButtonComponent ({children, size="small", onClick=()=>{}, id=""}: BotonProps) : ReactElement{
    const style : React.CSSProperties = {
        padding:PSIZES[size],
        fontSize:FSIZES[size]
    }

  return  <button id={id} className="boton" style={style} onClick={onClick}>{children}</button>
}