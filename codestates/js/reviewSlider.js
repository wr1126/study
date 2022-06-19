const reviewSlider = document.getElementById("reviewSlider");
const reviewSlides = reviewSlider.querySelectorAll(".slide");
const reviewPrevBtn = document.querySelector("#reviewPrevBtn");
const reviewNextBtn = document.querySelector("#reviewNextBtn");

const reviewSlideWidth = 559;
const reviewSlideMargin = 20;
let reviewInitialPos = -(reviewSlideWidth + reviewSlideMargin) * 6;
let currPos = 0;

//clone slides & set initial slider position
function cloneReviewSlides() {
  for (let i = 0; i < reviewSlides.length; i++) {
    const newSlide = reviewSlides[i].cloneNode(true);
    newSlide.classList.add("reviewClone");
    reviewSlider.appendChild(newSlide);
  }
  for (let i = reviewSlides.length - 1; i >= 0; i--) {
    const newSlide = reviewSlides[i].cloneNode(true);
    newSlide.classList.add("reviewClone");
    reviewSlider.prepend(newSlide);
  }
  reviewSlider.style.left = reviewInitialPos + "px";
}

//move slides with button
function moveSlide(e) {
  if (e.target.parentNode.id === "reviewNextBtn") {
    console.log(currPos);
    if (currPos < -2316) {
      reviewSlider.style.left = reviewInitialPos + "px";
      currPos = 0;
    } else {
      reviewSlider.style.left =
        reviewInitialPos +
        currPos -
        reviewSlideWidth -
        reviewSlideMargin +
        "px";
      currPos -= reviewSlideWidth + reviewSlideMargin;
    }
  } else {
    if (currPos > 2316) {
      reviewSlider.style.left = reviewInitialPos + "px";
      currPos = 0;
    } else {
      reviewSlider.style.left =
        reviewInitialPos +
        currPos +
        reviewSlideWidth +
        reviewSlideMargin +
        "px";
      currPos += reviewSlideWidth + reviewSlideMargin;
    }
  }
}

//draggable slider

cloneReviewSlides();
reviewPrevBtn.addEventListener("click", moveSlide);
reviewNextBtn.addEventListener("click", moveSlide);
