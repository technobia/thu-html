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
      0: {
        items: 1
      },
      640: {
        items: 2
      },
      768: {
        items: 3
      },
      1200: {
        items: 5
      }
    }
  })


  $('[data-toggle="popover"]').popover()
})