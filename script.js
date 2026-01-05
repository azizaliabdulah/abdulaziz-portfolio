// year
const y = document.getElementById("y");
if (y) y.textContent = new Date().getFullYear();

// reveal on scroll
const els = document.querySelectorAll(".hero, .link-box");

const io = new IntersectionObserver((entries) => {
  entries.forEach((e) => {
    if (e.isIntersecting) {
      e.target.classList.add("show");
      io.unobserve(e.target);
    }
  });
}, { threshold: 0.18 });

els.forEach((el) => io.observe(el));
