const container = document.getElementById("container");
const slider = document.getElementById("slider");
const slide = document.querySelectorAll(".slide");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
const pagerWrap = document.getElementById("pager");

let slidePos = 0;
let pagers = [];

function createPager() {
  for (let i = 0; i < slide.length; i++) {
    const pager = document.createElement("div");
    pager.classList.add("pager", `pager${i}`);
    pagers.push(pager);
    pagerWrap.appendChild(pager);
  }
  slide[0].style.opacity = "1";
  pagers[0].style.backgroundColor = "red";
  handlePager();
}

function handlePager() {
  pagers.forEach((pager) => {
    pager.addEventListener("click", () => {
      const pagerNum = parseInt(pager.classList[1].substr(5, 1));
      for (let i = 0; i < slide.length; i++) {
        pagers[i].style.backgroundColor = "rgba(255, 255, 255, 0.5)";
        slide[i].style.opacity = "0";
      }
      switch (pagerNum) {
        case 0:
          pager.style.backgroundColor = "red";
          break;
        case 1:
          pager.style.backgroundColor = "orange";
          break;
        case 2:
          pager.style.backgroundColor = "yellow";
          break;
        case 3:
          pager.style.backgroundColor = "green";
          break;
        case 4:
          pager.style.backgroundColor = "blue";
          break;
      }
      slide[pagerNum].style.opacity = "1";
      slidePos = pagerNum;
    });
  });
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
    changePagerColor();
  } else {
    slidePos += 1;
    slide[slidePos].style.opacity = "1";
    changePagerColor();
  }
}

function showPrevSlide() {
  if (slidePos === 0) {
    slidePos = 4;
    slide[slidePos].style.opacity = "1";
    changePagerColor();
  } else {
    slidePos -= 1;
    slide[slidePos].style.opacity = "1";
    changePagerColor();
  }
}

function changePagerColor() {
  for (let i = 0; i < pagers.length; i++) {
    pagers[i].style.backgroundColor = "rgba(255, 255, 255, 0.5)";
  }
  switch (slidePos) {
    case 0:
      pagers[slidePos].style.backgroundColor = "red";
      break;
    case 1:
      pagers[slidePos].style.backgroundColor = "orange";
      break;
    case 2:
      pagers[slidePos].style.backgroundColor = "yellow";
      break;
    case 3:
      pagers[slidePos].style.backgroundColor = "green";
      break;
    case 4:
      pagers[slidePos].style.backgroundColor = "blue";
      break;
  }
}

createPager();
prevBtn.addEventListener("click", handleBtn);
nextBtn.addEventListener("click", handleBtn);
