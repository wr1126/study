const ul = document.getElementById("bannerWrap");
let banners = [
  "../img/banner01.png",
  "../img/banner02.png",
  "../img/banner03.png",
  "../img/banner04.png",
];
let ulLeft = ul.style.left;

function addBanner() {
  for (let i = 0; i < banners.length; i++) {
    const li = document.createElement("li");
    li.classList.add("banner");
    li.style.backgroundImage = `url('${banners[i]}')`;
    ul.appendChild(li);
  }
  setInterval(moveSlide, 1000);
}

function moveSlide() {
  console.log("moveSlide");

  /*   ul.offsetLeft -= 2000;

  ul.style.left -= 2000;
 */
  ul.style.left -= 2000;
  ulLeft -= 2200;
}

addBanner();
//setInterval(moveSlide, 1000);
