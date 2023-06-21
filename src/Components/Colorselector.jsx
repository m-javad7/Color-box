import React from 'react';

const ColorSelector = ({ onColorChange }) => {
    const colors = ['Red', 'Green', 'Blue', 'Yellow'];

    const handleColorChange = (event) => {
        const selectedColor = event.target.value;
        onColorChange(selectedColor);
    };

    return (
        <select onChange={handleColorChange}>
            <option value="">Color selection</option>
            {colors.map((color) => (
                <option value={color}>
                    {color}
                </option>
            ))}
        </select>
    );
};

export default ColorSelector;
