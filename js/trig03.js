window.onload = function () {
  var canvas = document.getElementById("canvas"),
    context = canvas.getContext("2d"),
    width = (canvas.width = window.innerWidth),
    height = (canvas.height = window.innerHeight);

  var centerY = height / 2,
    centerX = width / 2,
    radius = 200,
    angle = 0,
    numObjects = 20,
    slice = (Math.PI * 2) / numObjects,
    x,
    y;

  for (var i = 0; i < numObjects; i += 1) {
    angle = i * slice;
    var x = centerX + Math.sin(angle) * radius;
    var y = centerY + Math.cos(angle) * radius;
    context.beginPath();
    context.arc(x, y, 10, 0, Math.PI * 2, false);
    context.fill();
  }
};
