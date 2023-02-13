import React from "react";
import style from "./inputs.module.scss";
// import { useRef } from "react";

type TextInputProps = {
  placeholder?: string;
  onChange?: (e: string) => void;
  value?: string;
  inFocus?: boolean;
  required?: boolean;
};

const TextInputArea = ({
  placeholder,
  onChange,
  value,
  required = false,
  inFocus = false,
}: TextInputProps) => {
  const handleOnchange = (e: string) => {
    onChange ? onChange(e) : console.log(e);
  };

  return (
    <textarea required={required} 
    onChange={(e) => handleOnchange(e.target.value)}
    placeholder={placeholder}
    value={value}
    className={style.textInput}
    name="" id="" cols={30} rows={10}></textarea>
  );
};

export default TextInputArea;
