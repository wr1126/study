const sliderContainer = document.getElementById("sliderContainer"),
  slider = document.getElementById("slider"),
  slides = document.querySelectorAll(".slide");

const sliderWidth = 1000,
  slideWidth = 800,
  slideMargin = 20,
  adjVal = (sliderWidth - slideWidth - slideMargin * 2) / 2 + slideMargin,
  initialPos = -(slideWidth + slideMargin) * slides.length + adjVal;

let slidePos = 0;

//clone Slides
function start() {
  for (let i = 0; i < slides.length; i++) {
    const cloneSlides = slides[i].cloneNode(true);
    slider.appendChild(cloneSlides);
  }
  for (let i = slides.length - 1; i >= 0; i--) {
    const cloneSlides = slides[i].cloneNode(true);
    slider.prepend(cloneSlides);
  }
  slider.style.left = initialPos + "px";
  slidePos = initialPos;
}

//autoSlide
setInterval(function () {
  console.log(slidePos);
  let currPos = slidePos - slideWidth - slideMargin;
  if (slidePos < -6460) {
    setTimeout(() => (slider.style.transition = "none"), 300);
    slider.style.left = initialPos + slideWidth + slideMargin + "px";
    slidePos = initialPos + slideWidth + slideMargin;
  } else {
    slider.style.left = currPos + "px";
    slidePos = currPos;
  }
}, 1000);

start();
