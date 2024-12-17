import p5 from 'p5';

export const mandelbrot = (p: p5) => {
  const maxIterations = 1000;

  p.setup = () => {
    p.createCanvas(800, 800);
    p.pixelDensity(1);
  };

  p.draw = () => {
    p.loadPixels();
    for (let x = 0; x < p.width; x++) {
      for (let y = 0; y < p.height; y++) {
        let a = p.map(x, 0, p.width, -2.5, 1.5);
        let b = p.map(y, 0, p.height, -2, 2);
        const ca = a;
        const cb = b;
        let n = 0;
        while (n < maxIterations) {
          const aa = a * a - b * b;
          const bb = 2 * a * b;
          a = aa + ca;
          b = bb + cb;
          if (p.abs(a + b) > 16) {
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
