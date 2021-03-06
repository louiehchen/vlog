$(document).ready(function(){
  var canvas = document.getElementById('ballCanvas');
  var ctx = canvas.getContext('2d');
// x y coors
  var x = canvas.width / 2;
  var y = canvas.height - 30;
  var dx = 2;
  var dy = -2;
// ball variables
  var ballRadius = 5;
// paddle variables
  var paddleWidth = 55;
  var paddleHeight = 10;
  var paddleX = (canvas.width - paddleWidth) / 2;
// key listener variables
  var rightPressed = false;
  var leftPressed = false;
// brick variables
  var brickRowCount = 3;
  var brickColumnCount = 6;
  var brickWidth = 55;
  var brickHeight = 20;
  var brickPadding = 10;
  var brickOffsetTop = 30;
  var brickOffsetLeft = 30;
// make bricks
  var bricks = [];
  for(c=0; c<brickColumnCount; c++) {
    bricks[c] = [];
    for(r=0; r<brickRowCount; r++) {
      bricks[c][r] = { x: 0, y: 0, status: 1 };
    };
  };
  var brickX = (c*(brickWidth+brickPadding))+brickOffsetLeft;
  var brickY = (r*(brickHeight+brickPadding))+brickOffsetTop;
// scoring variables
  var score = 0;

  function drawScore() {
    ctx.font = "16px Arial";
    ctx.fillStyle = "00ffb8";
    ctx.fillText("Score: "+score, 8, 20);
  }

  function randomColor(){
    var hex = '#' + Math.floor(Math.random()*16777215).toString(16);
    return hex;
  };

  function changeColor(color) {
    ctx.fillStyle = color
  };

  function drawBall(){
    ctx.beginPath();
    ctx.arc(x, y, ballRadius, 0, Math.PI*2);
    // ctx.fillStyle = "00ffb8";
    ctx.fill();
    ctx.closePath();
  };

  function drawPaddle() {
    ctx.beginPath();
    ctx.rect(paddleX, canvas.height - paddleHeight, paddleWidth, paddleHeight);
    ctx.fillStyle = "00ffb8";
    ctx.fill();
    ctx.closePath();
  };

  function drawBricks(){
    for(c=0; c<brickColumnCount; c++) {
      for(r=0; r<brickRowCount; r++) {
        if(bricks[c][r].status == 1){
          var brickX = (c*(brickWidth+brickPadding))+brickOffsetLeft;
          var brickY = (r*(brickHeight+brickPadding))+brickOffsetTop;
          bricks[c][r].x = brickX;
          bricks[c][r].y = brickY;
          ctx.beginPath();
          ctx.rect(brickX, brickY, brickWidth, brickHeight);
          ctx.fillStyle = "00ffb8";
          ctx.fill();
          ctx.closePath();
        }
      }
    }
  }

  function wallCheckBall(){
    if(x + dx > canvas.width - ballRadius || x + dx < ballRadius){
      dx = -dx;
      changeColor(randomColor());
    };
    if(y + dy < ballRadius){
      dy = -dy;
      changeColor(randomColor());
    } else if(y + dy > canvas.height - ballRadius){
      if(x > paddleX && x < paddleX + paddleWidth){
        dy = -dy;
      }
      else{
        alert("G A M E   O V E R");
        clearInterval(intervalId);
        // document.location.reload();
        // console.log('game over');
      }
    };
  };

  function wallCheckPaddle(){
    if(rightPressed && paddleX < canvas.width-paddleWidth) {
      paddleX += 3;
    }
    else if(leftPressed && paddleX > 0) {
      paddleX -= 3;
    }
  };

  function collisionDetection(){
    for(c=0; c<brickColumnCount; c++){
      for(r=0; r<brickRowCount; r++){
        var b = bricks[c][r];
        if(b.status == 1){
          if(x > b.x && x < b.x+brickWidth && y > b.y && y < b.y+brickHeight){
            dy = -dy;
            b.status = 0;
            score++;
            if(score == brickRowCount*brickColumnCount) {
              alert("YOU WIN, CONGRATULATIONS!");
              document.location.reload();
            }
          }
        }
      }
    }
  }

  function keyDownHandler(e){
    if(e.keyCode == 39){
      rightPressed = true;
    }
    else if(e.keyCode == 37){
      leftPressed = true;
    }
  };

  function keyUpHandler(e){
    if(e.keyCode == 39){
      rightPressed = false;
    }
    else if(e.keyCode == 37){
      leftPressed = false;
    }
  };

  function draw(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBall();
    drawBricks();
    drawPaddle();
    collisionDetection();
    wallCheckBall();
    wallCheckPaddle();
    drawScore();
    x += dx;
    y += dy
  };

  document.addEventListener('keydown', keyDownHandler, false);
  document.addEventListener('keyup', keyUpHandler, false);
  var intervalId = setInterval(draw, 10);

});