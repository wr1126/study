const container = document.getElementById("container");
const imgArr = [
  "url('../img/1.jpg')",
  "url('../img/2.JPG')",
  "url('../img/3.jpg')",
  "url('../img/4.jpeg')",
  "url('../img/5.JPG')",
];
let counter = 1;

function changeInterval() {
  if (counter < 5) {
    container.style.backgroundImage = imgArr[counter];
    counter++;
  } else if (counter === 5) {
    container.style.backgroundImage = imgArr[0];
    counter = 1;
  }
}

let handleInterval = setInterval(changeInterval, 3000);

container.style.backgroundImage = imgArr[0];
container.addEventListener("mouseenter", () => clearInterval(handleInterval));
container.addEventListener(
  "mouseleave",
  () => (handleInterval = setInterval(changeInterval, 3000))
);
