export default function sketch(p) {

  let points=[];

  p.setup = function() {
    p.createCanvas(400, 400);
    for (let i = 0; i < 100; i++) {
      points[i] = p.createVector(p.random(p.width), p.random(p.height));
    }
  };

  p.draw = function() {
    p.background(255);
    // p.ellipse(p.width / 2, p.height / 2, 50, 50);
    for (let v of points) {
      p.stroke(0);
      p.strokeWeight(4);
      p.point(v.x, v.y);
    }
  };
}