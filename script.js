//Slide banner
const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,
  slidesPerView: 1,
  spaceBetween: 30,
  speed: 1100,
  autoplay: true,
  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
// toggle navbar
$(".toggle").click(function () {
  $(this).toggleClass("activate");
  $(".poppup-tablet").toggleClass("active");

  $(".overlay").toggleClass("active");
});

$(".overlay").click(function () {
  $(".toggle").trigger("click");
});
