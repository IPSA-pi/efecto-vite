export default function sketch(p) {
  let points = [];
  let intervalId;

  p.setup = function() {
    p.createCanvas(400, 400);
    initPoints();

    // Set up an interval to update the sketch every 1000 ms
    intervalId = setInterval(updatePoints, 50);
  };

  function initPoints() {
    for (let i = 0; i < 1000; i++) {
      points[i] = p.createVector(p.random(p.width), p.random(p.height));
    }
  }

  function updatePoints() {
    // Modify points or any other part of the sketch here
    initPoints(); // For simplicity, we're just re-initializing the points here
  }

  p.draw = function() {
    p.background(255);
    for (let v of points) {
      p.stroke(0);
      p.strokeWeight(4);
      p.point(v.x, v.y);
    }
  };

  p.remove = function() {
    // Clean up the interval when the sketch is removed
    clearInterval(intervalId);
    // Call the original p5 remove function if necessary
    if (p.constructor.prototype.remove) {
      p.constructor.prototype.remove.call(p);
    }
  };
}
