//Header variables
const menu = document.querySelector('#menu-bars')
const navbar = document.querySelector('.navbar')


//Menu icons to responsive size of screen
menu.onclick = ()=>{
  menu.classList.toggle('fa-times')
  navbar.classList.toggle('active')
}

window.onscroll = ()=>{
  menu.classList.remove('fa-times')
  navbar.classList.remove('active')
}


var swiper = new Swiper(".home-slider", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
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


  