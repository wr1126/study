const ul = document.querySelector("ul");
let left = 0;
const moveValue = -500;

function moveSlide() {
  ul.style.left = left + "px";
  left += moveValue;
  left === -2000 ? cloneSlide() : null;
}

function cloneSlide() {}

moveSlide();
setInterval(moveSlide, 3000);
