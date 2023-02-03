import React from "react";
import { useState, useEffect } from "react";
import Button from "./inputs_buttons/button";

type MultiplierProps = {
    step? :number,
    multiplier?: number
}

const Multiplier = ({step=1, multiplier=2 }: MultiplierProps) => {
  const [curentValue, setcurentValue] = useState(0)
	const [isButtonDisabled, setIsButtonDisabled] = useState(true);
	useEffect(() => {
		setTimeout(() => {
      setIsButtonDisabled(false);
    }, 5000);
	},[])	

	const handleClick = () => {
		setcurentValue(curentValue + step)
	}

  return (
    <>
		<Button isDisabled={isButtonDisabled} name={'Poga'} onClick={handleClick} />
		<span className="paragraph">{curentValue} * {multiplier} = </span>
		<span className="paragraph">{curentValue * multiplier} </span>
		</>
  )
}

export default Multiplier;