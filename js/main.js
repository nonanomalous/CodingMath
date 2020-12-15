window.onload = function () {
  var canvas = document.getElementById("canvas"),
    context = canvas.getContext("2d"),
    width = (canvas.width = window.innerWidth),
    height = (canvas.height = window.innerHeight);

  //context.fillRect(0, 0, width, height);

  //   for (var i = 0; i < 100; i += 1) {
  //     context.beginPath();
  //     context.moveTo(Math.random() * width, Math.random() * height);
  //     context.lineTo(Math.random() * width, Math.random() * height);
  //     context.stroke();

  context.translate(0, height / 2);
  context.scale(1, -1);

  for (var angle = 0; angle < Math.PI * 2; angle += 0.01) {
    var x = angle * 200,
      y = Math.sin(angle) * 200;

    context.fillRect(x, y, 5, 5);
  }
};
