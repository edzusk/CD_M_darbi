import React from "react";
// import { useRef } from "react";

type TextInputProps = {
    placeholder?:string,
    retunrValue: (e: string) => void,
    value?: string,
    inFocus?:React.RefObject<HTMLInputElement>
}

const TextInput = ({ placeholder, retunrValue, value, inFocus}: TextInputProps) => {

    return (
        <input type="text"
        ref = {inFocus}
        autoFocus = {inFocus}
        placeholder = {placeholder} 
        onChange = {(e) => retunrValue(e.target.value)}
        value = {value}  
        className="text-input" />
    )
}

export default TextInput