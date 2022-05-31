function autoSlide() {
  ul.style.left = count * -520 + "px";
  count += 1;

  if (count === 5) {
    setTimeout(function () {
      ul.classList.remove("animated");
      ul.style.left = "0px";
      count = 1;
    }, 300);
  }
  setTimeout(function () {
    ul.classList.add("animated");
  }, 400);
}

setInterval(autoSlide, 2000);
