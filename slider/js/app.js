const prevBtn = document.getElementById("prev"),
  nextBtn = document.getElementById("next");
const slider = document.getElementById("slider"),
  slide = document.querySelectorAll(".slide"),
  slideWidth = 600,
  slideMargin = 20,
  newSlide = [];
let currPos = -3000;

//1. 슬라이드를 복사해 앞뒤로 붙임
function cloneSlides() {
  for (let i = 0; i < slide.length; i++) {
    newSlide.push(slide[i]);
  }
  for (let i = 0; i < slide.length; i++) {
    const cloneSlide = slide[i].cloneNode(true);
    cloneSlide.classList.add("clone");
    slider.appendChild(cloneSlide);
    newSlide.push(cloneSlide);
  }
  for (let j = slide.length - 1; j >= 0; j--) {
    const cloneSlide = slide[j].cloneNode(true);
    cloneSlide.classList.add("clone");
    slider.prepend(cloneSlide);
    newSlide.unshift(cloneSlide);
  }
  setSlidesPos();
}

//2. 슬라이드를 일렬로 나열
function setSlidesPos() {
  for (let i = 0; i < newSlide.length; i++) {
    newSlide[i].style.left = i * (slideWidth + slideMargin) + "px";
  }
  setStartPos();
}

//3. 1번 슬라이드로 시작지점 지정
function setStartPos() {
  slider.style.left = currPos + "px";
}

//4. 버튼 클릭 시 슬라이드를 움직임
function moveSlide(e) {
  const posNum = parseInt(slider.style.left.slice(0, -2));
  setTimeout(function () {
    if (e.target.id === "next") {
      slider.classList.add("animated");
      currPos -= 620;
      slider.style.left = currPos + "px";
    } else {
      slider.classList.add("animated");
      currPos += 620;
      slider.style.left = currPos + "px";
    }
  }, 200);

  posNum <= -5480 || posNum >= -520 ? returnSlide() : null;
  console.log(posNum);
}

//5. 슬라이드의 양끝에서 버튼을 누르면 left 위치를 원상태로 돌리기
function returnSlide() {
  setTimeout(function () {
    slider.classList.remove("animated");
    currPos = -3000;
    setStartPos();
  }, 400);
}

cloneSlides();
nextBtn.addEventListener("click", moveSlide);
prevBtn.addEventListener("click", moveSlide);
