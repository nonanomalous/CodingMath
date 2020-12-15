window.onload = function () {
  var canvas = document.getElementById("canvas"),
    context = canvas.getContext("2d"),
    width = (canvas.width = window.innerWidth),
    height = (canvas.height = window.innerHeight),
    pA = particle.create(
      Math.random() * width,
      Math.random() * height,
      Math.random() * 50,
      Math.random() * Math.PI * 2,
      0,
      0.9
    ),
    pB = particle.create(
      Math.random() * width,
      Math.random() * height,
      Math.random() * 50,
      Math.random() * Math.PI * 2,
      0,
      0.9
    ),
    k = 0.01;
  (pC = particle.create(
    Math.random() * width,
    Math.random() * height,
    Math.random() * 50,
    Math.random() * Math.PI * 2,
    0,
    0.9
  )),
    (k = 0.01);
  separation = 100;
  pA.radius = 20;
  pB.radius = 20;
  pC.radius = 20;

  update();

  function update() {
    context.clearRect(0, 0, width, height);

    spring(pA, pB, separation);
    spring(pB, pC, separation);
    spring(pC, pA, separation);

    pA.update();
    pB.update();
    pC.update();

    context.beginPath();
    context.arc(
      pA.position.getX(),
      pA.position.getY(),
      pA.radius,
      0,
      Math.PI * 2,
      false
    );
    context.fill();

    context.beginPath();
    context.arc(
      pB.position.getX(),
      pB.position.getY(),
      pB.radius,
      0,
      Math.PI * 2,
      false
    );
    context.fill();

    context.beginPath();
    context.arc(
      pC.position.getX(),
      pC.position.getY(),
      pC.radius,
      0,
      Math.PI * 2,
      false
    );
    context.fill();

    context.beginPath();
    context.moveTo(pA.position.getX(), pA.position.getY());
    context.lineTo(pB.position.getX(), pB.position.getY());
    context.lineTo(pC.position.getX(), pC.position.getY());
    context.lineTo(pA.position.getX(), pA.position.getY());
    context.stroke();

    requestAnimationFrame(update);
  }
  function spring(p0, p1, separation) {
    var distance = p0.position.subtract(p1.position);
    distance.setLength(distance.getLength() - separation);

    var springForce = distance.multiply(k);

    p1.velocity = p1.velocity.add(springForce);
    p0.velocity = p0.velocity.subtract(springForce);
  }
};
