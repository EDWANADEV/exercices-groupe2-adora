const slides = document.querySelectorAll(".slider");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
const slideCount = slides.length;
const dotsEl = document.getElementById("dots");

let current = 0;
let autoplayTime;

for (let i = 0; i < slideCount; i++) {
  const dot = document.createElement("button");
  dot.className = "dot" + (i === 0 ? " active" : "");
  dot.addEventListener("click", () => {
    goToSlide(i);
  });
  dotsEl.appendChild(dot);
}
prevBtn.addEventListener("click", () => moveSlider(-1));
nextBtn.addEventListener("click", () => moveSlider(1));
console.log("hi!");

function goToSlide(index) {
  current = index;
  updateSlider();
  reseAutoplay();
}

function updateSlider() {
  slides.forEach((slide, i) => {
    slide.classList.toggle("active", i === current);
  });

  document.querySelectorAll(".dot").forEach((d, i) => {
    d.classList.toggle("active", i === current);
  });
}

function moveSlider(delta) {
  current = (current + delta + slideCount) % slideCount;
  updateSlider();
  reseAutoplay();
}
function reseAutoplay() {
  clearInterval(autoplayTime);
  autoplayTime = setInterval(() => {
    moveSlider(1);
  }, 3000);
}
reseAutoplay();
