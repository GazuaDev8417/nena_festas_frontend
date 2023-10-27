
var swiper = new Swiper(".home-slider", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    loop: true,
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
    pagination: {
      el: ".swiper-pagination",
    },
  })

  /* const swiper = new Swiper('.home-slider', {
    // Optional parameters
    direction: 'horizontal',
    effect: 'coverflow',
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  }); */


  
    // Get all image elements in the slider
    const images = document.querySelectorAll('.home-slider .swiper-slide')
    images.forEach(image => {
        image.addEventListener('click', function () {
            image.style.transition = '1s'
            image.style.transform = 'scale(2)'
        })
    })


  