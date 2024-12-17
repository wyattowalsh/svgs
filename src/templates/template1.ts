import p5 from 'p5';

export const template1 = (p: p5) => {
  const layers = 3;
  const colors = ['#FF0000', '#00FF00', '#0000FF'];

  p.setup = () => {
    p.createCanvas(100, 100);
    p.noLoop();
  };

  p.draw = () => {
    p.background(255);
    for (let i = 0; i < layers; i++) {
      p.fill(colors[i]);
      p.noStroke();
      p.blendMode(p.MULTIPLY);
      drawLayer(i);
    }
  };

  const drawLayer = (layerIndex) => {
    const size = 80 - layerIndex * 20;
    const offset = layerIndex * 10;
    for (let x = offset; x < p.width; x += size) {
      for (let y = offset; y < p.height; y += size) {
        p.ellipse(x, y, size, size);
      }
    }
  };
};
