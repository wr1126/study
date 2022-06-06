const container = document.getElementById("container");
const slider = document.getElementById("slider");
const slides = document.querySelectorAll(".slide");

const initialPos = -8440;
let slidePos = 0;

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
setInterval(function () {
  if (slidePos < -6200) {
    slider.style.left = initialPos + "px";
    slidePos = 0;
  } else {
    slider.style.left = initialPos + slidePos - 1220 + "px";
    slidePos -= 1220;
  }
}, 3000);

//버튼을 누르면 슬라이드가 넘어가도록

cloneSlide();
