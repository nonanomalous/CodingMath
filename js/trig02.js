window.onload = function () {
  var canvas = document.getElementById("canvas"),
    context = canvas.getContext("2d"),
    width = (canvas.width = window.innerWidth),
    height = (canvas.height = window.innerHeight);

  var centerY = height * 0.5,
    centerX = width * 0.5,
    //r_offset = 50, //to radius
    y_offset = height * 0.4,
    a_offset = 0.1,
    baseRadius = 100,
    baseAlpha = 0.8,
    x_speed = 0.1,
    y_speed = 0.131,
    x_angle = 0,
    y_angle = 0;

  render();

  function render() {
    var x = centerX + Math.sin(x_angle) * y_offset;
    var y = centerY + Math.cos(y_angle) * y_offset;
    //var red = 128 + Math.sin(x_angle) * 127;
    //var green = 128 + Math.cos(x_angle) * 127;
    //var blue = 128 + Math.tan(x_angle) * 127;
    //var radius = baseRadius + Math.sin(angle) * r_offset;
    //var alpha = baseAlpha + Math.sin(x_angle) * a_offset;

    //context.fillStyle = "rgba(" + red + "," + green + "," + blue + "," + alpha + ")";

    context.clearRect(0, 0, width, height);
    context.beginPath();
    context.arc(x, y, 25, 0, Math.PI * 2, false);
    context.fill();

    x_angle -= x_speed;
    y_angle -= y_speed;

    requestAnimationFrame(render);
  }
};
