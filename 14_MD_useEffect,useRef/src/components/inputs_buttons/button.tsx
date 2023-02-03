import React from "react"

type ButtonProps = {
    name?: string,
    onClick?: () => void | undefined
    isDisabled? : boolean
} 

const Button = ({name, onClick, isDisabled} : ButtonProps) => {
    
    const handleClick= () => {
        onClick ? onClick() : console.log('click')
    }

    return(
        <button disabled={isDisabled} onClick = {() => handleClick()} className="btn">{name}</button>
    )
}

export default Button