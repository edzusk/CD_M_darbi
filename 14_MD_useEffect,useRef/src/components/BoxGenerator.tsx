import React, { useState } from "react"
import ColorDropdown from "./inputs_buttons/ColorDropdown"
import Button from "./inputs_buttons/button"

const Boxgenerator = () => {
	const [boxColorList, setBoxColorList] =  useState<string[]>([])
	const [selectedColor, setSelectedColor] = useState('')

	const handleClick = () => {
		setBoxColorList([...boxColorList, selectedColor])
	}


	return (
		<>
		<Button name="+" onClick={handleClick} />
		<ColorDropdown onchange={setSelectedColor} />

			{boxColorList.map((boxColor, i) => (
				<div key={i} style={{backgroundColor : boxColor }} className="box">{i}</div>
			))}
		</>

  )
}

export default Boxgenerator;