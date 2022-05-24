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
let brickRowCount = 3;
let brickColumnCount = 6;
let brickWidth = 80;
let brickHeight = 20;
let brickPadding = 10;
//벽돌이 벽에서 얼마나 떨어져 있을지 간격 지정
let brickOffsetTop = 30;
let brickOffsetLeft = 30;
let bricks = [];
let score = 0;
let lives = 3;

//벽돌 초기화. 위에서 지정한 행, 열의 수만큼 반복하며 새로운 벽돌을 만듦.
for (var c = 0; c < brickColumnCount; c++) {
  bricks[c] = [];
  for (let r = 0; r < brickRowCount; r++) {
    bricks[c][r] = { x: 0, y: 0, status: 1 };
  }
}

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

document.addEventListener("mousemove", mouseMoveHandler, false);

function mouseMoveHandler(e) {
  //브라우저 화면 내(뷰포트, clientX)에서 canvas의 시작점(왼쪽 절대좌표, offsetLeft)을 구함.
  let relativeX = e.clientX - canvas.offsetLeft;
  if (relativeX > 0 && relativeX < canvas.width) {
    //즉 캔버스 영역 내에서 마우스가 움직인다면, 패들의 위치를 조정할 수 있게 함.
    //패들의 중간을 잡고 움직일 수 있어야 하므로 / 2 처리
    paddleX = relativeX - paddleWidth / 2;
  }
}

function collisionDetection() {
  //공과 벽돌의 충돌 감지 함수
  for (var c = 0; c < brickColumnCount; c++) {
    for (var r = 0; r < brickRowCount; r++) {
      let b = bricks[c][r]; //각 벽돌

      if (b.status == 1) {
        //공이 블록의 너비와 높이 내에 닿으면 충돌한 것으로 간주하여 방향을 바꾸어줌.
        if (
          x > b.x &&
          x < b.x + brickWidth &&
          y > b.y &&
          y < b.y + brickHeight
        ) {
          dy = -dy;
          b.status = 0; //충돌이 일어난 벽돌의 status는 0으로 바꾸어 drawBricks에서 더이상 그리지 않게 함.
          score++;
          if (score == brickRowCount * brickColumnCount) {
            alert("You Win!");
            document.location.reload();
          }
        }
      }
    }
  }
}

function drawScore() {
  ctx.font = "16px Arial";
  ctx.fillStyle = "#0095DD";
  ctx.fillText("Score: " + score, 8, 20); //작성할 텍스트, x좌표, y좌표
}

function drawLives() {
  ctx.font = "16px Arial";
  ctx.fillStyle = "#095DD";
  ctx.fillText("Lives: " + lives, canvas.width - 65, 20);
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

function drawBricks() {
  //만들어 배열에 넣어둔 벽돌들을 실제로 그림.
  for (var c = 0; c < brickColumnCount; c++) {
    for (var r = 0; r < brickRowCount; r++) {
      //충돌이 감지되면 status가 변화하여 벽돌을 그리지 않음(사라짐).
      if (bricks[c][r].status == 1) {
        //각 벽돌의 시작점을 다르게 지정해줌.
        let brickX = c * (brickWidth + brickPadding) + brickOffsetLeft;
        let brickY = r * (brickHeight + brickPadding) + brickOffsetTop;
        bricks[c][r].x = brickX;
        bricks[c][r].y = brickY;

        ctx.beginPath();
        ctx.rect(brickX, brickY, brickWidth, brickHeight);
        ctx.fillStyle = "#0095DD";
        ctx.fill();
        ctx.closePath();
      }
    }
  }
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height); //지우개 사각형. 범위 내 모든 것을 지워줌.
  drawBricks();
  drawBall();
  drawPaddle();
  drawScore();
  drawLives();
  collisionDetection();

  //공이 삼방의 벽에 부딪히면(너비와 높이를 넘기면), 방향을 바꾸어줌.
  if (x + dx < ballRadius || x + dx > canvas.width - ballRadius) {
    //공의 중심이 아니라 지름을 포함해야 하므로 지름만큼의 값이 기준이 됨.
    dx = -dx;
  }
  if (y + dy < ballRadius) {
    dy = -dy;
  } else if (y + dy > canvas.height - ballRadius) {
    //공이 패들에 닿으면 튕겨짐.
    if (x > paddleX && x < paddleX + paddleWidth) {
      //공의 위치가 패들의 시작점과 끝점 사이에 있을 때 튕겨짐
      dy = -dy;
    } else {
      //공이 패들에 닿지 않으면 생명을 깎음.
      lives--;
      if (!lives) {
        //생명이 없어지면 게임 오버.
        alert("Game Over");
        document.location.reload();
        //clearInterval(interval);
      } else {
        //생명이 아직 남아있으면 위치 초기화.
        x = canvas.width / 2;
        y = canvas.height - 30;
        dx = 2;
        dy = -2;
        paddleX = (canvas.width - paddWidth) / 2;
      }
    }
  }

  //패들이 캔버스 안에서만 움직이도록 처리. (범위: 0 ~ (캔버스 넓이 - 패들 넓이))
  if (rightPressed && paddleX < canvas.width - paddleWidth) {
    paddleX += 7;
  } else if (leftPressed && paddleX > 0) {
    paddleX -= 7;
  }

  x += dx;
  y += dy;
  requestAnimationFrame(draw);
  //자신을 반복적으로 호출하게 함. setInterval보다 더 효율적이고 부드러운 애니메이션 루프제작 가능.
}

//var interval = setInterval(draw, 10);
draw();
