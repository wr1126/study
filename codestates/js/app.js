const bannerContainer = document.getElementById("banner");
let banners = [
  "url(../img/banner01.png)",
  "url(../img/banner02.png)",
  "url(../img/banner03.png)",
];

function addBanner() {
  for (let i = 0; i < banners.length; i++) {
    const div = document.createElement("div");
    div.style.backgroundImage = banners[i];
    bannerContainer.appendChild(div);
  }
}

addBanner();
