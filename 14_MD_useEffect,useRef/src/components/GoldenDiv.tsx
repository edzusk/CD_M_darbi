import React from "react";
import Button from "./inputs_buttons/button";
import { useRef } from "react";

const GoldenDiv = () => {
	const boxRef = useRef<HTMLDivElement>(null);

	const handleclick = () => {
		boxRef.current.style.backgroundColor = "gold"
	}

  return (
    <>
    <Button name="gold?" onClick={handleclick} />
    <div  ref={boxRef} className="box">Gold?</div>
    </>
  )
}

export default GoldenDiv