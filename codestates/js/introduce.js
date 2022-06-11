const cards = document.querySelectorAll(".box");
let clicked = false;
let clickedCard = 0;

for (let i = 0; i < cards.length; i++) {
  cards[i].addEventListener("click", flipCard);
}

function flipCard(e) {
  const cardNum = e.target.classList[1].substr(4, 1);
  const btn = e.target.querySelector(".plusBtn");
  const text = e.target.querySelector(".textWrap");
  const hiddenText = e.target.querySelector(".textHidden");

  function showBack() {
    btn.innerText = "𝖷";
    btn.style.padding = "5px 10px";
    text.style.display = "none";
    hiddenText.style.display = "block";
    e.target.style.filter = "grayscale(1)";
    clickedCard = cardNum;
    clicked = true;
  }

  function showFront() {
    btn.innerText = "+ 더보기";
    btn.style.padding = "3px 12px";
    text.style.display = "block";
    hiddenText.style.display = "none";
    e.target.style.filter = "grayscale(0)";
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

  if (clicked === true) {
    if (cardNum === clickedCard) {
      showFront();
    } else {
      reset();
      showBack();
    }
  } else {
    showBack();
  }
}
