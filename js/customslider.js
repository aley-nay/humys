$(document).ready(function () {
  $("#testimonial-slider").owlCarousel({
    items: 1,
    itemsDesktop: [1000, 2],
    itemsDesktopSmall: [980, 1],
    itemsTablet: [768, 1],
    pagination: true,
    navigation: false,
    navigationText: [
      '<i class="bi bi-arrow-left custom-arrow"></i>',
      '<i class="bi bi-arrow-right custom-arrow"></i>',
    ],
    autoPlay: true,
  });

  const links = document.querySelectorAll(".text-slide h1");
  const imagesLeft = document.querySelectorAll(".col-md-3:first-child img");
  const imagesRight = document.querySelectorAll(".col-md-3:last-child img");

  // İlk h1 elemanını siyah yap
  links[0].classList.add("active");

  links.forEach((link, index) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();

      imagesLeft.forEach((img) => img.classList.add("d-none"));
      imagesRight.forEach((img) => img.classList.add("d-none"));

      imagesLeft[index].classList.remove("d-none");
      imagesRight[index].classList.remove("d-none");


      links.forEach((l) => l.classList.remove("active"));

      link.classList.add("active");
    });

    link.addEventListener("mouseenter", () => {

      links.forEach((l) => l.classList.remove("active"));
    });

    link.addEventListener("mouseleave", () => {

      const activeLink = document.querySelector(".text-center h1.active");
      if (activeLink) {
        activeLink.classList.remove("active");
      }
      link.classList.add("active");
    });
  });
});
