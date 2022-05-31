const ul = document.getElementById("slider");
const lis = document.querySelectorAll(".slide");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
let currIdx = 0;
let count = 1;

makeClone();

function makeClone() {
  for (let i = 0; i < lis.length; i++) {
    //요소를 만드는 게 아니라 기존 요소를 복사하는 것
    const cloneLi = lis[i].cloneNode(true);
    cloneLi.classList.add("clone");
    ul.appendChild(cloneLi);
  }
  for (let j = lis.length - 1; j >= 0; j--) {
    const cloneLi = lis[j].cloneNode(true);
    cloneLi.classList.add("clone");
    ul.prepend(cloneLi);
  }
  //처음 로드 시 슬라이드가 animated되는 효과를 안 보이게 하기 위해
  setTimeout(() => ul.classList.add("animated"), 300);
  setPosition();
}

function setPosition() {
  //left가 아닌 transform으로 하는 이유: left는 슬라이드를 옮기는 데 이용할 것이기 때문에.
  ul.style.transform = `translateX(${-520 * lis.length + "px"})`;
}

function moveSlide(idx) {
  ul.style.left = idx * 520 + "px";
  currIdx = idx;

  if (-idx === lis.length || idx === lis.length) {
    setTimeout(function () {
      //전환효과만큼의 시간간격을 두고 원래 상태로 돌아가도록 함.
      ul.classList.remove("animated");
      ul.style.left = "0px";
      currIdx = 0;
    }, 300);
  }
  setTimeout(function () {
    //전환 효과를 다시 넣되 원래 상태로 돌아간 이후에 넣어야 휘리릭 넘어가는 것이 안 보이므로
    //remove되기 전 animated 효과 시간 + 약간의 여유를 두고 클래스를 다시 넣어줌.
    ul.classList.add("animated");
  }, 400);
}

prevBtn.addEventListener("click", () => moveSlide(currIdx + 1));
nextBtn.addEventListener("click", () => moveSlide(currIdx - 1));
