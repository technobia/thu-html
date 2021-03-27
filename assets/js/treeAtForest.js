$(window).ready(() => {
  $('.owl-carousel').owlCarousel({
    loop: true,
    center: true,
    nav: false,
    autoWidth: true,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    responsive: {
      1200: {
        items: 1
      }
    }
  })
})