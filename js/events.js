
 
 
 /**Hamburguer menu */

 const ham = document.querySelector('.ham');
 const enlaces = document.querySelector('.enlaces-menu');
 const barras = document.querySelectorAll('.ham span');
 const back = document.querySelector('.back');
 const link  = document.querySelector('.enlaces-menu ul .link');
 

 ham.addEventListener('click', () => {
     enlaces.classList.toggle('activado');
     barras.forEach(child => {
          child.classList.toggle('animado')});
     ham.classList.toggle('girar');  
 });

// enlaces.addEventListener('click' , ()=> {
//   back.style.display = " inline-block";
 
// })


/* Evento que me regresa a la parte de arriba */


  // back.addEventListener('click', ()=>{
  //    window.scrollTo(0,0);
  //    back.style.display = "none";
  //    console.log(back);
  // })




/** carrousel */
var swiper = new Swiper(".mySwiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "2",
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 300,
    modifier: 2,
    slideShadows: true,
  },
  autoplay: {
    delay: 5000,
  },
 loop: true,
});


/**Close answer */
// const minor = document.querySelector(".ion-md-remove");
// minor.addEventListener("click" ()=>{

// })


window.onload = function(){

  const checkboxInput = document.querySelector('.checkbox-input');
  checkboxInput.addEventListener( 'click', ()=>{
    
  if( checkboxInput.checked ){
    console.log( 'Esta marcado el checkbox español')
    window.location = "/fidelitybots/en/index.html";
    return checkboxInput = 'true';
  }else{
    console.log(" No esta marcado el checkbox")
     "index.html"
}
})

  }




  
  const checkboxInput2 = document.querySelector('.checkbox-input2');
  checkboxInput2.addEventListener( 'click', ()=>{

    if( checkboxInput2.checked ){
      console.log( 'Esta marcado el checkbox de ingles')
      setTimeout(() => {
       
        window.location = "/fidelitybots/index.html"
        
      }, 3000);
    }
     else{
       console.log(" No esta marcado el checkbox de Ingles")
     }
  }) 


  
