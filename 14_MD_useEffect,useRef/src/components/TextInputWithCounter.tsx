import React, { useEffect, useState } from "react";
import Button from "./inputs_buttons/button";
import TextInput from "./inputs_buttons/TextInput";

const TextInputWithCounter = () => {
	const [outputText, setOutputText] = useState<string>('')
	const [clickCounter, setClickCounter] = useState(0)

	useEffect(() => {
		console.log(" 1st RENDER");
		},[])
	
	const handleInput = (val: string) => {
    setOutputText(val);
    console.log("RENDER TOO ?");
    console.log('INPUT CHANGE')
  }
	
	const handleClick = () => {
		console.log("CHANGING COUNT");
		console.log("RENDER TOO ?");
		setClickCounter(clickCounter + 1)
	}

  return (
		<>
		<Button name="+" onClick={handleClick}/>
		<p className="paragraph">Count : {clickCounter}</p>
		<TextInput placeholder="Write here" retunrValue={handleInput}/>
		<p className="paragraph">{outputText}</p>
		</>
	)
}

export default TextInputWithCounter