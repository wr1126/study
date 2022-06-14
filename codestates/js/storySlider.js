const storySlider = document.getElementById("storySlider"),
  storySlides = storySlider.querySelectorAll(".slide"),
  storyPrevBtn = document.getElementById("storyPrevBtn"),
  storyNextBtn = document.getElementById("storyNextBtn");

const storySlideWidth = 355,
  storySlideMargin = 30;
/*   storySlideLength =
    (storySlideWidth + storySlideMargin) * storySlides.length - 30;
console.log(storySlideLength); */

let storySlideCurrPos = 0,
  storySlideNum = 0;
//홀수 짝수인 경우 고려해야 함!
function moveStorySlide(e) {
  if (e.target.parentNode.id === "storyNextBtn") {
    if (storySlideNum < storySlides.length - 2) {
      storySlider.style.transform = `translateX(${-(
        storySlideCurrPos +
        storySlideWidth +
        storySlideMargin
      )}px)`;
      //storySlideCurrPos += storySlideWidth + storySlideMargin;
      storySlideNum += 1;
    }
    console.log(storySlideNum, storySlideNum - 2);
    /*  if (!(storySlideCurrPos >= storySlideLength / 2)) {
      storySlider.style.transform = `translateX(${-(
        storySlideCurrPos +
        storySlideWidth +
        storySlideMargin
      )}px)`;
      storySlideCurrPos += storySlideWidth + storySlideMargin;
      storySlideNum += 1;
    } */
  } else {
    storySlider.style.transform = `translateX(${
      storySlideCurrPos + storySlideWidth + storySlideMargin
    }px)`;
    storySlideCurrPos += storySlideWidth + storySlideMargin;
    storySlideNum -= 1;
  }
  /*   console.log(storySlideCurrPos);
  console.log(storySlideNum); */
}

storyPrevBtn.addEventListener("click", moveStorySlide);
storyNextBtn.addEventListener("click", moveStorySlide);
