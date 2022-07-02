const header = document.getElementById("header");
const outcome = document.querySelector(".contentWrap");
const banner = document.getElementById("banner");

//scroll event
window.addEventListener("scroll", () => {
  console.log(scrollY);
  window.scrollY > 70
    ? (header.style.boxShadow = "0px 5px 5px 0px rgba(200, 200, 200, 0.1)")
    : (header.style.boxShadow = "none");
  window.scrollY > 3000 ? outcome.classList.add("animated") : null;
  window.scrollY > 5000 ? banner.classList.add("animated") : null;
});

//show top part when window is onloaded
history.scrollRestoration = "manual";
