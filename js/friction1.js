window.onload = function () {
  var canvas = document.getElementById("canvas"),
    context = canvas.getContext("2d"),
    width = (canvas.width = window.innerWidth),
    height = (canvas.height = window.innerHeight),
    p = particle.create(
      width / 2,
      height / 2,
      Math.random() * 50,
      Math.random() * Math.PI * 2,
      0.1,
      0.01
    );
  friction = vector.create(0.005, 0);
  p.radius = Math.random() * 100;
  p.bounce = -0.9;

  update();

  function update() {
    context.clearRect(0, 0, width, height);

    friction.setAngle(p.velocity.getAngle());
    if (p.velocity.getLength() > friction.getLength()) {
      p.velocity = p.velocity.subtract(friction);
    } else {
      p.velocity.setLength(0);
    }

    p.update();

    context.beginPath();
    context.fillStyle = "#000";
    context.arc(
      p.position.getX(),
      p.position.getY(),
      p.radius,
      0,
      Math.PI * 2,
      false
    );
    context.fill();

    if (p.position.getX() - p.radius <= 0) {
      p.position.setX(p.radius);
      p.velocity.setX(p.velocity.getX() * p.bounce);
    }
    if (p.position.getX() + p.radius >= width) {
      p.position.setX(width - p.radius);
      p.velocity.setX(p.velocity.getX() * p.bounce);
    }
    if (p.position.getY() - p.radius <= 0) {
      p.position.setY(p.radius);
      p.velocity.setY(p.velocity.getY() * p.bounce);
    }
    if (p.position.getY() + p.radius >= height) {
      p.position.setY(height - p.radius);
      p.velocity.setY(p.velocity.getY() * p.bounce);
    }

    requestAnimationFrame(update);
  }
};
