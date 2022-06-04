const container = document.getElementById("container");
let counter = 1;
let imgArr = [
  "https://pixabay.com/get/gee71506b3196ab9cbc687a1f7568447d65dfc66ad0374bd2a1faa26f94975ba4f0578e4291b815bc2ce51388a0a774bb.jpg",
  "https://pixabay.com/get/gf41e0133cb7e16b60f8ecf8996de47ae4028e8f25e866b3d3da04bdaa4581ee4818d41b88e9e15f1cc50175a3025e0a7.jpg",
  "https://pixabay.com/get/gbf656f1a6fd54ba1dc7a206ce5af26b7d9c9eb6b80efb21495a87dea397f62ae148e39aafb5fb3e285abf252478f3608.jpg",
  "https://pixabay.com/get/g845d7e1961f9b35af131b6979dc66b729836b57b0038267ef8b56cb08c29f8a8553c05ee6dc6608146d3e6ab8468f355.jpg",
  "https://pixabay.com/get/gca398f1f46100447ad21965dc094ef7ea5a1cd443e6070f5e831234e10db325335e11d62fd31e72705a52d499ba2ac6a.jpg",
];
let imgs = new Array();

for (let i = 0; i < imgArr.length; i++) {
  imgs[i] = new Image();
  imgs[i].src = imgArr[i];
}

function startSlide() {
  const timer = setTimeout(() => {
    changeSlide();
  }, 2000);
}

function changeSlide() {
  const interval = setInterval(() => {
    if (counter < 5) {
      container.style.backgroundImage = `url('${imgs[counter].src}')`;
      counter++;
    } else if (counter === 5) {
      container.style.backgroundImage = `url('${imgs[0].src}')`;
      counter = 1;
    }
  }, 3000);
}

//마우스를 올리면 슬라이드 정지
function stopSlide() {
  clearInterval(interval);
  console.log(timer);
}

container.style.backgroundImage = `url('${imgs[0].src}')`;
startSlide();
container.addEventListener("mouseenter", stopSlide);
