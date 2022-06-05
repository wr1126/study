const container = document.getElementById("container");
const slider = document.getElementById("slider");
const slide = document.querySelectorAll(".slide");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
const pagerWrap = document.getElementById("pager");

let slidePos = 0;

function createPager() {
  for (let i = 0; i < slide.length; i++) {
    const pager = document.createElement("div");
    pager.classList.add("pager", `page${i}`);
    pagerWrap.appendChild(pager);
  }
}

function handleBtn(e) {
  for (let i = 0; i < slide.length; i++) {
    slide[i].style.opacity = "0";
  }
  if (e.target.parentNode.classList.contains("next")) {
    showNextSlide();
  } else {
    showPrevSlide();
  }
}

function showNextSlide() {
  if (slidePos === 4) {
    slidePos = 0;
    slide[slidePos].style.opacity = "1";
  } else {
    slidePos += 1;
    slide[slidePos].style.opacity = "1";
  }
}

function showPrevSlide() {
  if (slidePos === 0) {
    slidePos = 4;
    slide[slidePos].style.opacity = "1";
  } else {
    slidePos -= 1;
    slide[slidePos].style.opacity = "1";
  }
}

slide[0].style.opacity = "1";
createPager();
prevBtn.addEventListener("click", handleBtn);
nextBtn.addEventListener("click", handleBtn);
