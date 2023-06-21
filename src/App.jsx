import React, { useState } from 'react';
import ColorSelector from './Components/Colorselector.jsx';
import ColorBox from './Components/ColorBox.jsx';
import "./Css/index.css"

const App = () => {
    const [backgroundColor, setBackgroundColor] = useState('');

    const handleColorChange = (color) => {
        setBackgroundColor(color);
    };

    return (
        <div>
            <ColorSelector onColorChange={handleColorChange} />
            <ColorBox backgroundColor={backgroundColor} />
        </div>
    );
};

export default App;
