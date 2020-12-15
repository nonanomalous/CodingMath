window.onload = function () {
  var canvas = document.getElementById("canvas"),
    context = canvas.getContext("2d"),
    width = (canvas.width = window.innerWidth),
    height = (canvas.height = window.innerHeight),
    sun = particle.create(width / 2, height / 2, 0, 0),
    earth = particle.create(width / 2 + 1000, height / 2, 10, -Math.PI / 2);
  venus = particle.create(width / 2 + 450, height / 2, 14, -Math.PI / 2);

  sun.mass = 450000;

  update();

  function update() {
    context.clearRect(0, 0, width, height);

    earth.gravitateTo(sun);
    earth.update();
    venus.gravitateTo(sun);
    venus.update();

    context.beginPath();
    context.fillStyle = "rgba(255,255,10,0.1)";
    context.arc(
      sun.position.getX(),
      sun.position.getY(),
      70,
      0,
      Math.PI * 2,
      false
    );
    context.fill();

    context.beginPath();
    context.fillStyle = "rgba(0,0,255,0.9)";
    context.arc(
      earth.position.getX(),
      earth.position.getY(),
      5,
      0,
      Math.PI * 2,
      false
    );
    context.fill();

    context.beginPath();
    context.fillStyle = "rgba(190,20,30,0.7)";
    context.arc(
      venus.position.getX(),
      venus.position.getY(),
      5,
      0,
      Math.PI * 2,
      false
    );
    context.fill();

    requestAnimationFrame(update);
  }
};
