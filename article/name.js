const sliderContainer = document.querySelector(".slider-container");
const sliderImages = document.querySelectorAll(".slider-container img");

let counter = 0;
const slideWidth = sliderImages[0].clientWidth;

// Set the initial position of the slider
sliderContainer.style.transform = `translateX(-${counter * slideWidth}px)`;

// Handle click events on previous and next buttons
document.querySelector(".slider-prev").addEventListener("click", () => {
  if (counter <= 0) return;
  counter--;
  sliderContainer.style.transform = `translateX(-${counter * slideWidth}px)`;
});

document.querySelector(".slider-next").addEventListener("click", () => {
  if (counter >= sliderImages.length - 1) return;
  counter++;
  sliderContainer.style.transform = `translateX(-${counter * slideWidth}px)`;
});
