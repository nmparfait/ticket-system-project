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

$('#lancamento-slide').owlCarousel({
  items: 2,
  dots: false,
  loop: true,
  autoplay: true,
  autoplayHoverPause: true,
  responsive: {
    500: {
      items: 3,
    },
    1280: {
      items: 4,
    },
    1600: {
      items: 6,
    },
  },
});
