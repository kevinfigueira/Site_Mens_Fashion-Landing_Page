//Select DOM
const slide = document.querySelector('.first');
const arrowLeft = document.querySelector('.fa-angle-double-left');
const arrowRight = document.querySelector('.fa-angle-double-right');

//Events
arrowRight.addEventListener('click', nextSlide)


//Functions
function nextSlide(){
    slide.style.marginLeft = '-50%'
}