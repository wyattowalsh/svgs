import p5 from 'p5';

export const julia = (p: p5) => {
  const maxIterations = 1000;
  const cRe = -0.7;
  const cIm = 0.27015;

  p.setup = () => {
    p.createCanvas(800, 800);
    p.pixelDensity(1);
  };

  p.draw = () => {
    p.loadPixels();
    for (let x = 0; x < p.width; x++) {
      for (let y = 0; y < p.height; y++) {
        let zx = p.map(x, 0, p.width, -1.5, 1.5);
        let zy = p.map(y, 0, p.height, -1.5, 1.5);
        let n = 0;
        while (n < maxIterations) {
          const xtemp = zx * zx - zy * zy;
          zy = 2 * zx * zy + cIm;
          zx = xtemp + cRe;
          if (zx * zx + zy * zy > 4) {
            break;
          }
          n++;
        }
        const bright = p.map(n, 0, maxIterations, 0, 1);
        const pix = (x + y * p.width) * 4;
        p.pixels[pix + 0] = bright * 255;
        p.pixels[pix + 1] = bright * 255;
        p.pixels[pix + 2] = bright * 255;
        p.pixels[pix + 3] = 255;
      }
    }
    p.updatePixels();
  };
};
