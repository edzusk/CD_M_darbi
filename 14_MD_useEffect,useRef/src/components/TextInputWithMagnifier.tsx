import React, { useEffect, useRef, useState } from "react";
import Button from "./inputs_buttons/button";
import TextInput from "./inputs_buttons/TextInput";

const TextInputWithMagnifier = () => {
	const [outputText, setOutputText] = useState<string>('')
	const [clickCounter, setClickCounter] = useState(0)
    const [counterFontsize, setCounterFontsize] = useState('')
    const pRef = useRef(null)

    
    useEffect(() => {
        setClickCounter(100);
        setCounterFontsize(window.getComputedStyle(pRef.current).fontSize);
      }, []);

	const handleClick = () => {
		setClickCounter(clickCounter + 1)
        setCounterFontsize(`${parseFloat(counterFontsize)+1}px`)
	}
    document.title = outputText

  return (
		<>
		<Button name="+" onClick={handleClick}/>
		<p className="paragraph"  style={{fontSize: counterFontsize}} ref={pRef}>Count : {clickCounter}</p>
		<TextInput placeholder="Write here" retunrValue={setOutputText}/>
		<p className="paragraph">{outputText}</p>
		</>
	)
}

export default TextInputWithMagnifier