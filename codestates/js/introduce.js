const cards = document.querySelectorAll(".box");
let cardNum;
let clicked = false;
let clickedCard;

for (let i = 0; i < cards.length; i++) {
  cards[i].addEventListener("click", setCardNum);
}

function setCardNum(e) {
  const targetList = e.target.classList;
  const targetParent = e.target.parentNode;

  if (targetList.contains("box")) {
    cardNum = targetList[1].substr(4, 1);
    flipCard(e.target, cardNum);
  } else if (
    targetList.contains("plusBtn") ||
    targetList.contains("textWrap")
  ) {
    cardNum = targetParent.classList[1].substr(4, 1);
    flipCard(targetParent, cardNum);
  } else if (targetList.contains("textHidden")) {
    showFront(e.target);
  } else {
    cardNum = targetParent.parentNode.classList[1].substr(4, 1);
    flipCard(targetParent.parentNode, cardNum);
  }
}

function flipCard(target, cardNum) {
  if (clicked === true) {
    if (cardNum === clickedCard) {
      showFront(target);
    } else {
      reset();
      showBack(target);
    }
  } else {
    showBack(target);
  }
}

function showBack(target) {
  const btn = target.querySelector(".plusBtn");
  const text = target.querySelector(".textWrap");
  const hiddenText = target.querySelector(".textHidden");

  btn.innerText = "𝖷";
  btn.style.padding = "5px 10px";
  text.style.display = "none";
  hiddenText.style.display = "block";
  target.style.filter = "grayscale(1)";
  clickedCard = cardNum;
  clicked = true;
}

function showFront(target) {
  let btn;
  let text;
  let hiddenText;
  let bg;

  if (target.classList.contains("textHidden")) {
    btn = target.parentNode.querySelector(".plusBtn");
    text = target.parentNode.querySelector(".textWrap");
    hiddenText = target;
    bg = target.parentNode;
  } else {
    btn = target.querySelector(".plusBtn");
    text = target.querySelector(".textWrap");
    hiddenText = target.querySelector(".textHidden");
    bg = target;
  }

  btn.innerText = "+ 더보기";
  btn.style.padding = "3px 12px";
  text.style.display = "block";
  hiddenText.style.display = "none";
  bg.style.filter = "grayscale(0)";

  clickedCard = 0;
  clicked = false;
}

function reset() {
  for (let i = 0; i < cards.length; i++) {
    const btn = cards[i].querySelector(".plusBtn");
    const text = cards[i].querySelector(".textWrap");
    const hiddenText = cards[i].querySelector(".textHidden");

    btn.innerText = "+ 더보기";
    btn.style.padding = "3px 12px";
    text.style.display = "block";
    hiddenText.style.display = "none";
    cards[i].style.filter = "grayscale(0)";
  }
}
