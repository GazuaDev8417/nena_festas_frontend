//Header variables
const menu = document.querySelector('#menu-bars')
const navbar = document.querySelector('.navbar')
//Form variables
const form = document.querySelector('#form')
let client = document.querySelector('#client')
let email = document.querySelector('#email')
let phone = document.querySelector('#phone')
let subject = document.querySelector('#subject')
let message = document.querySelector('#message')
//Gallery section variables
const gallerySection = document.getElementById('gallery')
let boxElements = gallerySection.getElementsByClassName('box')




//Menu icons to responsive size of screen
menu.onclick = ()=>{
    menu.classList.toggle('fa-times')
    navbar.classList.toggle('active')
}

window.onscroll = ()=>{
    menu.classList.remove('fa-times')
    navbar.classList.remove('active')
}

//its ends

//Swiper to slide pictures
var swiper = new Swiper(".home-slider", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 100,
      modifier: 2,
      slideShadows: true,
    },
    loop: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false
    }
  })

//its ends

//Navigate to the gallery of albums
const boxArray = Array.from(boxElements)

boxArray.forEach((box, index)=>{
  box.addEventListener('click', ()=>{
    location.href = `albums.html#${box.id}`
  })
})


//Function to reset form when it submit
  const clearForm = ()=>{
    client.value = '',
    email.value = '',
    phone.value = '',
    subject.value = '',
    message.value = ''
  }

//Request when form submition
  form.addEventListener('submit', async(e)=>{
    e.preventDefault()
    try{
      const body = {
        client: client.value,
        email: email.value,
        phone: Number(phone.value),
        subject: subject.value,
        message: message.value
      }
      const res = await fetch('https://nena-festas.vercel.app/message', {
        method:'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
      })

      if(!res.ok){
        /* const failed = await res.text()
        return alert(`Falha ao enviar: ${failed}`) */
        return alert('Falha ao enviar')
      }

      const data = await res.text()
      alert(data)
      clearForm()
    }catch(e){
      alert(e.message) 
    }
  })