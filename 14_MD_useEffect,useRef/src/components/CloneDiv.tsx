import React, { useRef, useState } from "react";
import Button from "./inputs_buttons/button";

const CloneDiv = () => {
	const boxRef = useRef(null);


	const handleClick = () => {
		if (boxRef.current) {
      const divClone = boxRef.current.cloneNode(true) as HTMLDivElement;
      boxRef.current.parentNode?.appendChild(divClone);
    }
		
	}

	return (
		<>
		<Button name="clone Dolly" onClick={handleClick} />
		<div className="box"
		ref={boxRef}>
			I am Dolly
		</div>
		</>
	)
}

export default CloneDiv