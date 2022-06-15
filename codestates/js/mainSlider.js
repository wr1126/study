const slider = document.getElementById("mainSlider"),
  slides = slider.querySelectorAll(".slide"),
  currNum = document.querySelector(".currNum"),
  totalNum = document.querySelector(".totalNum"),
  prevBtn = document.getElementById("prevBtn"),
  nextBtn = document.getElementById("nextBtn"),
  pauseBtn = document.getElementById("pauseBtn"),
  pauseIcon = document.createElement("img");
pauseIcon.src = "img/icon/pause.png";
pauseBtn.appendChild(pauseIcon);

//-(slideWidth * slides.length + slideMargin * slides.length) + 90
const initialPos = -5510,
  slideWidth = 1100,
  slideMargin = 20;
let slidePos = 0,
  slideNum = 1;

//clone slides
function cloneSlides() {
  for (let i = 0; i < slides.length; i++) {
    const cloneSlide = slides[i].cloneNode(true);
    cloneSlide.classList.add("clone");
    slider.appendChild(cloneSlide);
  }
  for (let j = slides.length - 1; j >= 0; j--) {
    const cloneSlide = slides[j].cloneNode(true);
    cloneSlide.classList.add("clone");
    slider.prepend(cloneSlide);
  }
}

//autoSlider
let startAutoSlider = setInterval(autoSlider, 3000);
function autoSlider() {
  if (slidePos < -3360) {
    slider.style.left = initialPos + "px";
    slidePos = 0;
  } else {
    slider.style.left = initialPos + slidePos - slideWidth - slideMargin + "px";
    slidePos -= slideWidth + slideMargin;
  }
  pagination();
}

//pagination
function pagination() {
  slideNum === slides.length ? (slideNum = 1) : (slideNum += 1);
  currNum.innerText = `0${slideNum}`;
}

//pause/Play slide
function pausePlaySlide() {
  pauseIcon.src = "img/icon/play.png";
  clearInterval(startAutoSlider);
  pauseBtn.addEventListener("click", () => {
    pauseIcon.src = "img/icon/pause.png";
    let startAutoSlider = setInterval(autoSlider, 3000);
  });
}

//button control
function changeSlide(e) {
  clearInterval(startAutoSlider);

  if (e.target.parentNode.id === "prevBtn") {
    if (slidePos > 3360) {
      slider.style.left = initialPos + "px";
      slidePos = 0;
    } else {
      slider.style.left =
        initialPos + slidePos + slideWidth + slideMargin + "px";
      slidePos += slideWidth + slideMargin;
    }
    slideNum === 1 ? (slideNum = slides.length) : (slideNum -= 1);
    currNum.innerText = `0${slideNum}`;
  } else {
    autoSlider();
  }

  startAutoSlider = setInterval(autoSlider, 3000);
}

pauseBtn.addEventListener("click", pausePlaySlide);
prevBtn.addEventListener("click", changeSlide);
nextBtn.addEventListener("click", changeSlide);

window.onload = function () {
  cloneSlides();
  slider.style.left = initialPos + "px";
  totalNum.innerText = `0${slides.length}`;
};
