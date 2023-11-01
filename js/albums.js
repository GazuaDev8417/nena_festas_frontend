
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


  
// Get all image elements in the slider
  const images = document.querySelectorAll('.home-slider .swiper-slide')
  let isLarged = false
  
  images.forEach(image => {
    image.addEventListener('click', function () {
      if(!isLarged){
        image.style.transition = '1s'
        image.style.transform = 'scale(2)'
        
        isLarged = true
        }else{
          image.style.transition = '1s'
          image.style.transform = 'scale(1)'
  
          isLarged = false
        }  
      })
  })
  
  

  