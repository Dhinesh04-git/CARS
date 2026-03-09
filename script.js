const images = ["img/car1.jpg", "img/car3.jpg", "img/RR.jpg", "img/RR1.jpg"];
let index = 0;
const hero = document.getElementById("hero");
images.forEach((src) => {
  const img = new Image();
  img.src = src;
});

function changeBackground() {
  hero.style.backgroundImage = `url('${images[index]}')`;
  index = (index + 1) % images.length;
}
changeBackground();
setInterval(changeBackground, 4000);

//SLIDER

const buttons = document.querySelectorAll(".faq-btn");

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const content = btn.nextElementSibling;
    const arrow = btn.querySelector(".arrow");

    if (content.style.maxHeight) {
      content.style.maxHeight = null;
      arrow.classList.remove("rotate-180");
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
      arrow.classList.add("rotate-180");
    }
  });
});
const carousel = document.getElementById("carousel");
const dots = document.querySelectorAll(".dot");
letindex = 0;
const totalSlides = dots.length;

function updateCarousel() {
  carousel.style.transform = `translateX(-${index * 100}%)`;

  dots.forEach((dot) => dot.classList.remove("bg-red-600"));
  dots[index].classList.add("bg-red-600");
}

function nextSlide() {
  index = (index + 1) % totalSlides;
  updateCarousel();
}

// Dot Click
dots.forEach((dot, i) => {
  dot.addEventListener("click", () => {
    index = i;
    updateCarousel();
  });
});

// Auto Slide Every 3 Seconds
setInterval(nextSlide, 6000);

// Initial Active Dot
updateCarousel();

const backToTopBtn = document.getElementById("backToTop");

window.onscroll = function () {
  // Show button after scrolling down 400px
  if (
    document.body.scrollTop > 400 ||
    document.documentElement.scrollTop > 400
  ) {
    backToTopBtn.classList.remove(
      "opacity-0",
      "translate-y-10",
      "pointer-events-none",
    );
    backToTopBtn.classList.add(
      "opacity-100",
      "translate-y-0",
      "pointer-events-auto",
    );
  } else {
    backToTopBtn.classList.add(
      "opacity-0",
      "translate-y-10",
      "pointer-events-none",
    );
    backToTopBtn.classList.remove(
      "opacity-100",
      "translate-y-0",
      "pointer-events-auto",
    );
  }
};

// Scroll to top logic
backToTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

