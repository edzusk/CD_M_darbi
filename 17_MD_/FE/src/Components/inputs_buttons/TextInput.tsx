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

const TextInput = ({
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
    <input
      type="text"
      required={required}
      autoFocus={inFocus}
      placeholder={placeholder}
      onChange={(e) => handleOnchange(e.target.value)}
      value={value}
      className={style.textInput}
    />
  );
};

export default TextInput;
