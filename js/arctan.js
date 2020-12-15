window.onload = function () {
  var canvas = document.getElementById("canvas"),
    context = canvas.getContext("2d"),
    width = (canvas.width = window.innerWidth),
    height = (canvas.height = window.innerHeight);
  arrowx = width / 2;
  arrowy = height / 2;
  dx = 0;
  dy = 0;
  angle = 0;

  render();

  function render() {
    context.clearRect(0, 0, width, height);

    context.save();
    context.translate(arrowx, arrowy);
    context.rotate(angle);

    context.beginPath();
    context.moveTo(20, 0);
    context.lineTo(-20, 0);
    context.moveTo(20, 0);
    context.lineTo(10, -10);
    context.moveTo(20, 0);
    context.lineTo(10, 10);
    context.stroke();

    context.restore();
    requestAnimationFrame(render);
  }

  document.body.addEventListener("mousemove", function (event) {
    dx = event.clientX - arrowx;
    dy = event.clientY - arrowy;
    angle = Math.atan2(dy, dx);
  });
};
