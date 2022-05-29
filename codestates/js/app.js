const header = document.getElementById("header");

window.addEventListener("scroll", () => {
  const header = document.getElementById("header");
  window.scrollY > 70
    ? (header.style.boxShadow = "0px 5px 5px 0px rgba(200, 200, 200, 0.1)")
    : (header.style.boxShadow = "none");
});
