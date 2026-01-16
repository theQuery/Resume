import './index.css';
import { useState } from 'react';

function Editor({ label, value, onChange }) {
    const root = document.getElementById('root');
    const computedStyle = getComputedStyle(root);
    const customColorProperties = Object.values(computedStyle)
        .filter(p => p.startsWith('--') && p.includes('color'));

    function getPropertyHexColor(property) {
        const value = computedStyle.getPropertyValue(property);
        const extractedHsl = extractHsl(value);
        return hslToHex(...extractedHsl);
    }

    function extractHsl(hsl) {
        return hsl.replace(/[^0-9,]/g, '').split(',');
    }

    function hslToHex(h, s, l) {
        l /= 100;
        const a = s * Math.min(l, 1 - l) / 100;
        const f = n => {
            const k = (n + h / 30) % 12;
            const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
            return Math.round(255 * color).toString(16).padStart(2, '0');
        };
        return `#${f(0)}${f(8)}${f(4)}`;
    }

    function handleColorChange(event, property) {
        const color = event.target.value;
        root.style.setProperty(property, color);
    }

    return <div className='editor'>
        {customColorProperties.map(property => {
            const label = property.replaceAll('-', ' ');
            const value = getPropertyHexColor(property);

            return <ColorPicker
                key={property}
                label={label}
                value={value}
                onChange={event => handleColorChange(event, property)}
            />
        })}
    </div>
}

export default Editor;

function ColorPicker({ label, value, onChange }) {
    const [color, setColor] = useState(value);

    function handleChange(event) {
        setColor(event.target.color);
        onChange(event);
    }

    return <div className='color-picker'>
        <label htmlFor={label}>{label}</label>
        <input
            type='color'
            name={label}
            id={label}
            value={color}
            onChange={handleChange}
        />
    </div>
}