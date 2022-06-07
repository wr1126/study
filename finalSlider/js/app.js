const container = document.getElementById("container");
const slider = document.getElementById("slider");
const slides = document.querySelectorAll(".slide");
const currSlideNum = document.querySelector(".currSlide");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const pauseBtn = document.getElementById("pause");
let pause = document.createElement("img");

const initialPos = -8440;
const slideWidth = 1220;
let slidePos = 0;
let slideNum = 1;

//슬라이드 복사
function cloneSlide() {
  for (let i = 0; i < slides.length; i++) {
    const cloneSlide = slides[i].cloneNode(true);
    cloneSlide.classList.add("clone");
    slider.appendChild(cloneSlide);
  }
  for (let i = slides.length - 1; i >= 0; i--) {
    const cloneSlide = slides[i].cloneNode(true);
    cloneSlide.classList.add("clone");
    slider.prepend(cloneSlide);
  }
  //슬라이드 위치 조정
  slider.style.left = initialPos + "px";
}

//오토 슬라이드
let autoSlide = setInterval(startAutoSlide, 3000);
function startAutoSlide() {
  if (slidePos < -6100) {
    slider.style.left = initialPos + "px";
    slidePos = 0;
    slideNum = 1;
  } else {
    slider.style.left = initialPos + slidePos - slideWidth + "px";
    slidePos -= slideWidth;
    slideNum === 7 ? (slideNum = 1) : (slideNum += 1);
  }
  //pagination
  currSlideNum.innerText = `0${slideNum}`;
}

//pause 버튼: 슬라이드 멈춤 / 다시 재생
function pauseSlide() {
  clearInterval(autoSlide);
  pause.src = "img/play.png";
  pauseBtn.addEventListener("click", () => {
    pause.src = "img/pause.png";
    autoSlide = setInterval(startAutoSlide, 3000);
  });
}

//next, prev 버튼: 슬라이드 이동
function moveSlide(e) {
  clearInterval(autoSlide);
  if (e.target.parentNode.id === "next") {
    startAutoSlide();
  } else {
    if (slidePos >= 7320) {
      slider.style.left = initialPos + "px";
      slidePos = 0;
      slideNum = 1;
    } else {
      slider.style.left = initialPos + slidePos + slideWidth + "px";
      slidePos += slideWidth;
      slideNum === 1 ? (slideNum = 7) : (slideNum -= 1);
    }
    currSlideNum.innerText = `0${slideNum}`;
  }
  autoSlide = setInterval(startAutoSlide, 3000);
}

pauseBtn.addEventListener("click", pauseSlide);
nextBtn.addEventListener("click", moveSlide);
prevBtn.addEventListener("click", moveSlide);

window.onload = function () {
  pause.src = "img/pause.png";
  pauseBtn.appendChild(pause);
  cloneSlide();
};
