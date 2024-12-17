import p5 from 'p5';
import { motion } from 'framer-motion';

export const sierpinski = (p: p5) => {
  const depth = 5;

  p.setup = () => {
    p.createCanvas(800, 800);
    p.noLoop();
  };

  p.draw = () => {
    p.background(255);
    p.fill(0);
    drawSierpinski(p.width / 2, 50, p.width - 100, depth);
  };

  const drawSierpinski = (x, y, size, depth) => {
    if (depth === 0) {
      p.triangle(x, y, x - size / 2, y + size, x + size / 2, y + size);
    } else {
      drawSierpinski(x, y, size / 2, depth - 1);
      drawSierpinski(x - size / 4, y + size / 2, size / 2, depth - 1);
      drawSierpinski(x + size / 4, y + size / 2, size / 2, depth - 1);
    }
  };
};

const SierpinskiFractal = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div id="sierpinski-fractal"></div>
    </motion.div>
  );
};

export default SierpinskiFractal;
