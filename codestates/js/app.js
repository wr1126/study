const header = document.getElementById("header");
const outcome = document.querySelector(".contentWrap");

//add header boxShadow when scroll
window.addEventListener("scroll", () => {
  window.scrollY > 70
    ? (header.style.boxShadow = "0px 5px 5px 0px rgba(200, 200, 200, 0.1)")
    : (header.style.boxShadow = "none");
  window.scrollY > 3900 ? outcome.classList.add("animated") : null;
});
