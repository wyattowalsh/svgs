import React, { useState, useEffect } from 'react';
import { saveAs } from 'file-saver';
import { templates } from '../data/presets.json';
import ParameterizedSVG from '../components/svg/ParameterizedSVG';

const DesignTool = () => {
  const [width, setWidth] = useState(500);
  const [height, setHeight] = useState(500);
  const [color, setColor] = useState('#000000');
  const [parameter, setParameter] = useState(10);
  const [template, setTemplate] = useState(templates[0]);
  const [cachedColors, setCachedColors] = useState<string[]>([]);

  const exportSVG = () => {
    const svg = document.querySelector('svg').outerHTML;
    const blob = new Blob([svg], { type: 'image/svg+xml' });
    saveAs(blob, 'design.svg');
  };

  const cacheColor = () => {
    if (!cachedColors.includes(color)) {
      setCachedColors([...cachedColors, color]);
    }
  };

  return (
    <div>
      <div>
        <label>
          Template:
          <select value={template.name} onChange={(e) => setTemplate(templates.find(t => t.name === e.target.value))}>
            {templates.map((template, index) => (
              <option key={index} value={template.name}>
                {template.name}
              </option>
            ))}
          </select>
        </label>
        <label>
          Width:
          <input type="number" value={width} onChange={(e) => setWidth(e.target.value)} />
        </label>
        <label>
          Height:
          <input type="number" value={height} onChange={(e) => setHeight(e.target.value)} />
        </label>
        <label>
          Color:
          <input type="color" value={color} onChange={(e) => setColor(e.target.value)} />
          <button onClick={cacheColor}>Cache Color</button>
        </label>
        <label>
          Parameter:
          <input type="number" value={parameter} onChange={(e) => setParameter(e.target.value)} />
        </label>
      </div>
      <div>
        <h3>Cached Colors:</h3>
        <div>
          {cachedColors.map((cachedColor, index) => (
            <div key={index} style={{ backgroundColor: cachedColor, width: '20px', height: '20px', display: 'inline-block', margin: '2px' }}></div>
          ))}
        </div>
      </div>
      <ParameterizedSVG width={width} height={height} color={color} parameters={template.parameters} />
      <button onClick={exportSVG}>Export as SVG</button>
    </div>
  );
};

export default DesignTool;
