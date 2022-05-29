const ul = document.getElementById("bannerWrap");
let banners = [
  "../img/banner04.png",
  "../img/banner01.png",
  "../img/banner02.png",
  "../img/banner03.png",
];

function addBanner() {
  for (let i = 0; i < banners.length; i++) {
    const li = document.createElement("li");
    li.classList.add("banner");
    li.style.backgroundImage = `url('${banners[i]}')`;
    ul.appendChild(li);
  }
}

addBanner();

/* const div = document.createElement("div");
div.style.backgroundImage = banners[i];
bannerContainer.appendChild(div); */
