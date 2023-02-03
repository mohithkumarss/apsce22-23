console.clear();

Splitting();

const chars = document.querySelectorAll(".char");
let i = 0;
setInterval(function () {
  chars.forEach((char) => {
    char.style.fontVariationSettings = '"wght" 200';
    char.style.opacity = "0.5";
  });
  chars[i].style.opacity = "1";
  chars[i].style.fontVariationSettings = '"wght" 700';
  i++;
  if (i == chars.length) i = 0;
}, 250);

window.addEventListener("load", () => {
  const preload = document.querySelector(".preload");
  preload.classList.add("preload-finish");
});
