import React from "react";
import { useState, useRef } from "react";
import Button from "./inputs_buttons/button";
import TextInput from "./inputs_buttons/TextInput";

const SingeInputForm = () => {
  const [textInput, setInputText] = useState('')
	const [inputValues, setInputValues] = useState<string[]>([])
	const infocusRef = useRef<HTMLInputElement>(null);

	const sumbit = () =>{
		setInputValues([...inputValues, textInput])
		setInputText('')
		infocusRef.current?.focus();
	}

    return (
        <>
				<form onSubmit={(e) => {
					e.preventDefault();
					sumbit()
					}}
					action="">
					<TextInput placeholder="Text Input" retunrValue={setInputText} value={textInput} inFocus={infocusRef}/>
					<Button name="SUBMIT" />
				</form>
				<div>
					<p className="paragraph">{inputValues.join(' ')}</p>
				</div>
				</>
    )
}

export default SingeInputForm