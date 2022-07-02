const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

let x = canvas.width / 2; //화면 중앙에 공 그리기
let y = canvas.height - 30;
let dx = 2;
let dy = -2;
let ballRadius = 10;
let paddleWidth = 75;
let paddleHeight = 10;
let paddleX = (canvas.width - paddleWidth) / 2; //패들의 시작지점을 가운데 아래에 위치

let rightPressed = false;
let leftPressed = false;

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

function keyDownHandler(e) {
  if (e.keyCode == 39) {
    rightPressed = true;
  } else if (e.keyCode == 37) {
    leftPressed = true;
  }
}

function keyUpHandler(e) {
  if (e.keyCode == 39) {
    rightPressed = false;
  } else if (e.keyCode == 37) {
    leftPressed = false;
  }
}

function drawBall() {
  ctx.beginPath();
  ctx.arc(x, y, ballRadius, 0, Math.PI * 2);
  ctx.fillStyle = "#0095DD";
  ctx.fill();
  ctx.closePath();
}

function drawPaddle() {
  ctx.beginPath();
  ctx.rect(paddleX, canvas.height - paddleHeight, paddleWidth, paddleHeight);
  ctx.fillStyle = "0095DD";
  ctx.fill();
  ctx.closePath();
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height); //지우개 사각형. 범위 내 모든 것을 지워줌.
  drawBall();
  drawPaddle();
  x += dx;
  y += dy;

  //공이 사방의 벽에 부딪히면(너비와 높이를 넘기면), 방향을 바꾸어줌.
  if (x + dx < ballRadius || x + dx > canvas.width - ballRadius) {
    //공의 중심이 아니라 지름을 포함해야 하므로 지름만큼의 값이 기준이 됨.
    dx = -dx;
  }
  /*   if (y + dy < ballRadius) {
    dy = -dy;
  } else if (y + dy > canvas.height - ballRadius) {
    if(x>paddleX &&)
    console.log("GAME OVER");
    document.location.reload();
  } */

  //패들이 캔버스 안에서만 움직이도록 처리. (범위: 0 ~ (캔버스 넓이 - 패들 넓이))
  if (rightPressed && paddleX < canvas.width - paddleWidth) {
    paddleX += 7;
  } else if (leftPressed && paddleX > 0) {
    paddleX -= 7;
  }
}

setInterval(draw, 10);
