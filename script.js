'use strict';


const proItems =document.querySelector('.product-items');
const allProImage = document.querySelectorAll('.pro--image');
const allProDisplay = document.querySelectorAll('.product-display');
const slider = document.querySelector('.slide');
const slides = document.querySelectorAll('.slide');
const btnLeft = document.querySelector('.slider__btn--left');
const btnRight = document.querySelector('.slider__btn--right');
const slideItems = document.querySelector('.slide-items')
const contentImage = document.querySelectorAll('.content-image');
const sliderProduct = document.querySelector('.slider-product');
const slideClose = document.querySelector('.slide-close');
const notification = document.querySelector('.notifications');
const addCart = document.querySelector('.add-cart');
const popDisplay = document.querySelector('.pop-display');
const hiddenActive = document.querySelector('.pop-non-display');
const cartPop = document.querySelector('.cart-pop')


contentImage.forEach(el => {
 el.addEventListener('click',function(){
 sliderProduct.classList.remove('hidden')
 })
});
slideClose.addEventListener('click', function(){
 sliderProduct.classList.add('hidden')
})


// PRODUCT VIEW
proItems.addEventListener('click', (e) => {
 // const clicked = e.target.classList.contains('pro--image')
 const clicked = e.target.closest('.pro--image');
 console.log(clicked)
 // DYNAMIC CHANGING OF THE PRODUCT ITEMS
 allProImage.forEach((el, i) => el.classList.remove('image-active'));
 if (!clicked) return;
 clicked.classList.add('image-active');

 console.log(clicked.dataset.tab)
 // DYNAMIC CHANGING OF THE PRODUCT DISPLAY (LINKING OF THE PRO.DISPLAY VIEW WITH PRODUCT ITEMS)
 allProDisplay.forEach(el => el.classList.remove('display-content--active'));

 document.querySelector(`.display-content--${clicked.dataset.tab}`).classList.add('display-content--active');
});
// WORKING WITH THE MODAL 


let calSlide = 0;
const maxSlide = slides.length;


slides.forEach((el, i) => {
 el.style.transform = `translateX(${100 * i}%)`
})
// Creating an outside function
const movSlide =function(slide) {
 slides.forEach((el, i) => {
 el.style.transform = `translateX(${100 * (i - slide)}%)`
})
}

// ATTACHING SLIDERS TO SLIDE ITEMS
const activeSlide = function(slide){
 document.querySelectorAll('.slide-item--image').forEach(el => {
  el.classList.remove('image-active')
 });
 document.querySelector(`.slide-item--image[data-slide="${slide}"]`).classList.add('image-active')
}


btnRight.addEventListener('click', function(e) {
 if(calSlide === maxSlide - 1) {
  calSlide= 0;
 } else {
  calSlide++;
 }
 movSlide(calSlide)
 activeSlide(calSlide)
 // document.querySelectorAll('.slide-item--image').forEach(el => {
 //  el.classList.remove('image-active')
 // });
 // document.querySelector(`.slide-item--image[data-slide="${calSlide}"]`).classList.add('image-active')
});

btnLeft.addEventListener('click',  function(){
 if(calSlide === 0) {
  calSlide = maxSlide-1
 } else {
  calSlide--;
 }
  movSlide(calSlide);
 activeSlide(calSlide)

});

// Use the Direction Key to Scroll
document.addEventListener('keydown', (e) => {
 if(e.key === 'ArrowRight') nextSlide;
 e.key === 'ArrowLeft' && prevSlide
});

// WORKING WITH CART COUNT
const dCount = document.querySelector('.decre');
const iCount = document.querySelector('.incre');
// let cartCount = document.querySelector('.cart-num').value;
let cartCount = document.querySelector('.cart-num');
let popCal = document.querySelector('.pop-cal')
let displayCal = document.querySelector('.pop-cal-answer')
 
// Dealing with Cart Order Calculation
const cartOrderCalc = function (cart) {
 let orderCal = [125.00];
 const newOrderCal = orderCal.map(el => {
  return el * cart
 })
 const arrCal = newOrderCal[0]
 popCal.textContent= `${orderCal[0].toFixed(2)} x ${cart}`;
 displayCal.textContent = `$${arrCal.toFixed(2)}`;
}


let cartVal = 0;
iCount.addEventListener('click', ()=> {
 if (cartVal === 10){
  cartVal = 10
 } else {
  cartVal++;
 }
  cartCount.textContent = cartVal;

  // Dealing with Cart Order Calculation
 cartOrderCalc(cartVal)
});

dCount.addEventListener('click', ()=> {
 if(cartVal === 0) {
  cartVal = 0;
 } else {
 cartVal--;
 }
 cartCount.textContent = cartVal;
 cartOrderCalc(cartVal)
});
// WORKING WITH NOTIFICATION


addCart.addEventListener('click', function(){
 notification.classList.remove('hide');
 notification.textContent = cartVal;
 if(cartVal > 0) {
  popDisplay.classList.remove('pop-hidden');
  hiddenActive.classList.add('pop-hidden')
 } else {
  popDisplay.classList.add('pop-hidden');
  hiddenActive.classList.remove('pop-hidden')
 }
})

// DISPLAYING CART
document.querySelector('.cart-profile').addEventListener('click', function(){
 cartPop.classList.toggle('hidden-active')
})

//WORKING WITH RESPONSIVE SLIDE PAGE
const reSlider = document.querySelector('.response-slider');
const reSlides = document.querySelectorAll('.response-slide');
const resBtnLeft = document.querySelector('.res-btn--left');
const resBtnRight = document.querySelector('.res-btn--right');
let respSlide = 0;
const maxReSlide = reSlides.length;
reSlides.forEach((el, i) => {
 el.style.transform = `translateX(${100 * i}%)`
});
//Right
resBtnRight.addEventListener('click', function(){
 if(respSlide === maxReSlide-1) {
  respSlide = 0;
 } else {
  respSlide++;
 }
 reSlides.forEach((el, i) => {
 el.style.transform = `translateX(${100 * (i - respSlide)}%)`
});
});
//Left
resBtnLeft.addEventListener('click', function(){
 if(respSlide === 0) {
  respSlide = maxReSlide -1;
 } else{
  respSlide--;
 }
  reSlides.forEach((el, i) => {
 el.style.transform = `translateX(${100 * (i - respSlide)}%)`
})
})

const menuIcon = document.querySelector('.menu-icon');
const closeIcon = document.querySelector('.close-icon');
const navLinks = document.querySelector('.nav-links');
const pop = document.querySelector('.pop');
const blury = document.querySelector('.res-blur');
const navigateLinks = document.querySelector('.navigate-links')

menuIcon.addEventListener('click', function(){
 navLinks.classList.remove('navigate-links');
 blury.classList.remove('blurry');
});
closeIcon.addEventListener('click', function(){
 navLinks.classList.add('navigate-links');
 blury.classList.add('blurry');
})


