import p5 from 'p5';

export const koch = (p: p5) => {
  const iterations = 5;
  const length = 400;

  p.setup = () => {
    p.createCanvas(800, 800);
    p.noLoop();
  };

  p.draw = () => {
    p.background(255);
    p.stroke(0);
    p.noFill();
    p.translate(p.width / 2, p.height / 2);
    drawKochSnowflake(0, 0, length, iterations);
  };

  const drawKochSnowflake = (x, y, len, iter) => {
    if (iter === 0) {
      p.line(x, y, x + len, y);
    } else {
      len /= 3;
      drawKochSnowflake(x, y, len, iter - 1);
      x += len;
      y -= len * Math.sqrt(3) / 2;
      drawKochSnowflake(x, y, len, iter - 1);
      x += len;
      y += len * Math.sqrt(3);
      drawKochSnowflake(x, y, len, iter - 1);
      x -= len;
      y -= len * Math.sqrt(3) / 2;
      drawKochSnowflake(x, y, len, iter - 1);
    }
  };
};
