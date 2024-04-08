// window.onscroll = function () {
//   scrollRotate();
// };

// function scrollRotate() {
//   let slider = document.querySelector(".hero-images-slider");
//   slider.style.transform = "translateX(" + (window.scrollY / 2 - 800) + "px)";
// }

// let imgRight = document.querySelectorAll(".img-right.animate-t.imgInRight");
// let imgLeft = document.querySelectorAll(".imgInLeft");

// const obs = new IntersectionObserver(
//   function (entries) {
//     entries.forEach((entry) => {
//       if (!entry.isIntersecting) return;
//       if (entry.isIntersecting) {
//         // Add "active" class to the intersecting element
//         entry.target.classList.add("active");
//       } else {
//         // Remove "active" class from other elements
//         entry.target.classList.remove("active");
//       }
//     });
//     console.log(entries);
//   },
//   {
//     root: null,
//     threshold: 0,
//     rootMargin: "0px",
//   }
// );

// imgRight.forEach((img) => {
//   obs.observe(img);
// });
// imgLeft.forEach((img) => {
//   obs.observe(img);
// });

let faqRows = document.querySelectorAll(".faq-row");

faqRows.forEach((faqRow) => {
  faqRow.addEventListener("click", (event) => {
    let plusImg = faqRow.querySelector(".plus-img");
    let minusImg = faqRow.querySelector(".minus-img");
    let faqAnswer = faqRow.querySelector(".faq-answer");

    faqAnswer.classList.toggle("active");
    plusImg.classList.toggle("active");
    minusImg.classList.toggle("active");
  });
});

// Navigation //

let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("nav a");

const resetLinks = () =>
  navLinks.forEach((link) => link.classList.remove("active"));

const handleScroll = () => {
  const { pageYOffset } = window;
  sections.forEach((section) => {
    const { id, offsetTop, clientHeight } = section;
    const offset = offsetTop - 1;

    if (pageYOffset >= offset && pageYOffset < offset + clientHeight) {
      resetLinks();
      navLinks.forEach((link) => {
        if (link.dataset.scroll === id) { 
          link.classList.add("active");
        }
      });
    }
  });
};

document.addEventListener("scroll", handleScroll);


let scrollToTop = document.querySelector('.arrow-nav-link');

scrollToTop.onclick = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

