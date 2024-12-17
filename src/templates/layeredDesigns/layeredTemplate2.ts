import p5 from 'p5';

export const layeredTemplate2 = (p: p5) => {
  const layers = 4;
  const colors = ['#FF5733', '#33FF57', '#3357FF', '#FF33A1'];

  p.setup = () => {
    p.createCanvas(800, 800);
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
    const size = 150 - layerIndex * 30;
    const offset = layerIndex * 40;
    for (let x = offset; x < p.width; x += size) {
      for (let y = offset; y < p.height; y += size) {
        p.rect(x, y, size, size);
      }
    }
  };
};
