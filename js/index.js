// Header Section
const bars = document.querySelector(".bars");
const navbar = document.querySelector(".navbar");
const search = document.querySelector(".search");
const header_input = document.querySelector(".header_input");

bars.addEventListener("click", () => {
  navbar.classList.toggle("active");
  header_input.classList.remove("active");
});
search.addEventListener("click", () => {
  header_input.classList.toggle("active");
  navbar.classList.remove("active");
});

window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    navbar.classList.remove("active");
    header_input.classList.remove("active");
  }
});

// Some count that matters
document.addEventListener("DOMContentLoaded", () => {
  const counters = document.querySelectorAll(".count_item h2");

  const animateCounter = (counter) => {
    const target = +counter.getAttribute("data-target");
    const duration = 2000;
    const step = target / (duration / 16);

    let current = 0;

    const updateCounter = () => {
      current += step;
      if (current < target) {
        counter.innerText = Math.floor(current) + "+";
        requestAnimationFrame(updateCounter);
      } else {
        counter.innerText = target + "+";
      }
    };

    updateCounter();
  };

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.5 }
  );

  counters.forEach((counter) => {
    observer.observe(counter);
  });
});

