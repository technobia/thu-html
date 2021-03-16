$('.owl-carousel').owlCarousel({
  loop: true,
  center: true,
  margin: 50,
  nav: false,
  autoWidth: true,
  autoplay: true,
  autoplayTimeout: 5000,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 3
    },
    1000: {
      items: 5
    }
  }
})