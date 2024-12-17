import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { saveAs } from 'file-saver';
import { ReactP5Wrapper } from 'react-p5-wrapper';
import { templates } from '../data/presets.json';

const DesignTool = () => {
  const [width, setWidth] = useState(500);
  const [height, setHeight] = useState(500);
  const [color, setColor] = useState('#000000');
  const [parameter, setParameter] = useState(10);
  const [template, setTemplate] = useState(templates[0]);
  const [cachedColors, setCachedColors] = useState<string[]>([]);

  const sketch = (p5) => {
    p5.setup = () => {
      p5.createCanvas(width, height);
    };

    p5.draw = () => {
      p5.background(255);
      p5.fill(color);
      p5.noStroke();
      for (let i = 0; i < width; i += parameter) {
        for (let j = 0; j < height; j += parameter) {
          p5.ellipse(i, j, parameter, parameter);
        }
      }
    };
  };

  const exportSVG = () => {
    const svg = document.querySelector('canvas').toDataURL('image/svg+xml');
    saveAs(svg, 'design.svg');
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
      <ReactP5Wrapper sketch={sketch} />
      <button onClick={exportSVG}>Export as SVG</button>
    </div>
  );
};

export default DesignTool;
