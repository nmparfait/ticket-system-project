$(document).ready(() => {
  $('#menu-bar').click(() => {
    $('#menu-bar').toggleClass('active');
    $('#nav-menu').toggleClass('active');
  });
});

// setting owl carousel

let navText = [
  "<i class='bx bx-chevron-left'></i>",
  "<i class='bx bx-chevron-right'></i>",
];

$('#hero-carousel').owlCarousel({
  items: 1,
  dots: false,
  loop: true,
  nav: true,
  navText: navText,
  autoplay: true,
  autoplayHoverPause: true,
});
