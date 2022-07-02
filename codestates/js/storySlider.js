const storySlider = document.getElementById("storySlider"),
  storySlides = storySlider.querySelectorAll(".slide"),
  storyPrevBtn = document.getElementById("storyPrevBtn"),
  storyNextBtn = document.getElementById("storyNextBtn");

const storySlideWidth = 355,
  storySlideMargin = 30;

let storySliderCurrPos = 0,
  storySlideNum = 0;

function moveStorySlide(e) {
  if (
    e.target.parentNode.id === "storyNextBtn" &&
    storySlideNum < storySlides.length - 3
  ) {
    storySlider.style.transform = `translateX(${
      storySliderCurrPos - (storySlideWidth + storySlideMargin)
    }px)`;
    storySliderCurrPos -= storySlideWidth + storySlideMargin;
    storySlideNum += 1;
  } else if (e.target.parentNode.id === "storyPrevBtn" && storySlideNum !== 0) {
    storySlider.style.transform = `translateX(${
      storySliderCurrPos + storySlideWidth + storySlideMargin
    }px)`;
    storySliderCurrPos += storySlideWidth + storySlideMargin;
    storySlideNum -= 1;
  }
}

storyPrevBtn.addEventListener("click", moveStorySlide);
storyNextBtn.addEventListener("click", moveStorySlide);
