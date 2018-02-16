// Canvas
function draw() {
  var canvas = document.getElementById('canvas');
  if (canvas.getContext) {
    var ctx = canvas.getContext('2d');

    //snowman start
    ctx.beginPath();
    ctx.ellipse(160, 400, 80, 80, 0, 0, Math.PI*2, true);
    ctx.fillStyle = "white";
    ctx.fill();
    ctx.stroke();

    ctx.beginPath();
    ctx.ellipse(160, 280, 60, 60, 0, 0, Math.PI*2, true);
    ctx.fillStyle = "white";
    ctx.fill();
    ctx.stroke();

    ctx.beginPath();
    ctx.ellipse(160, 200, 40, 40, 0, 0, Math.PI*2, true);
    ctx.fillStyle = "white";
    ctx.fill();
    ctx.stroke();
    //snowman end

    //robot start
    ctx.rect(100, 20, 120, 100);
    ctx.rect(130, 90, 60, 10);
    ctx.rect(130, 60, 10, 10);
    ctx.rect(180, 60, 10, 10);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(130, 40);
    ctx.lineTo(190, 40);
    ctx.stroke();
    //robot end
  }
}

/*
ctx.fill();

ctx.fillStyle = 'rgb(200, 0, 0)';
ctx.fillRect(10, 10, 50, 50);

ctx.fillStyle = 'rgba(0, 0, 200, 0.5)';
ctx.fillRect(30, 30, 50, 50);

ctx.fillRect(25, 25, 100, 100);
ctx.clearRect(45, 45, 60, 60);
ctx.strokeRect(50, 50, 50, 50);

ctx.beginPath();
ctx.moveTo(75, 50);
ctx.lineTo(100, 75);
ctx.lineTo(100, 25);
ctx.fill();
*/
