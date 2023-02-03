import React, { useState } from "react";

type ColorDropdownProps = {
	onchange?: (color: string) => void;
}

const ColorDropdown = ({ onchange }: ColorDropdownProps) => {
  const colors = ['none', 'Blue', 'Red', 'Gold', 'cadetblue', 'forestgreen']
  const [selectedColor, setSelectedColor] = useState(colors[0])
  
	const handleColorChange = (e:React.ChangeEvent<HTMLSelectElement>) => {
		setSelectedColor(e.target.value);
		onchange && onchange(e.target.value);
	}

	return (
    <select
      className="dropdown"
      value={selectedColor} 
      onChange={(e) => handleColorChange(e)}
        >
        {colors.map(color => (
					<option style={{ backgroundColor: color }} key={color} value={color}>
						{color}
          </option>
        ))}
		</select>
  )
}

export default ColorDropdown