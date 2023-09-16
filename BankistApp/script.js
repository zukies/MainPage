'use strict';
const scrollButton = document.querySelector('.btn--scroll-to');
const sectionScroll = document.querySelector('.features__header');
const featuresSection = document.querySelector('.features');
const div = document.querySelector('H1');

const tabs = document.querySelectorAll('.operations__tab');
const container = document.querySelector('.operations__tab-container');
const pageContents = document.querySelectorAll('.operations__content');

///////////////////////////////////////
// Modal window
////////////////////////////////////////

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const header = document.querySelector('.highlight');


// Opens the modal window
const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

// Closes the modal window
const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
header.color = 'rgb(255, 255, 255)';


//The 'learn more' click event that takes you to the banks features
scrollButton.addEventListener('click', function () {
 
 
  featuresSection.scrollIntoView({
  behavior: 'smooth'})
  });

// Scrolling from the top navigation buttons
document.querySelector('.nav__links').addEventListener('click',function(e)
{

  {
  e.preventDefault()

   if(e.target.classList.contains('nav__link')){
    
    if(e.target.classList.contains('nav__link--btn')){return}

    const link=e.target.getAttribute('href')
    
   document.querySelector(link).scrollIntoView({behavior:'smooth'})
   
  }
  }
}
)


///////////////////////////////////
//////Foot navigation bar/////
/////////////////////////////////////

// Footer navigation bar (all links direct to the top of the webpage)

const footer=document.querySelector('.footer__nav')

footer.addEventListener('click',function(e){
  e.preventDefault()

  if(!e.target.classList.contains('footer__link'))return

   const menu=e.target.getAttribute('href')
  
   document.querySelector(menu).scrollIntoView({behavior:'smooth'})
  }
)

container.addEventListener('click',function(e){
  e.preventDefault()
 
  // Choosing all link elements, then moving the active class from one link element to the other
  const closestClick=e.target.closest('.operations__tab')
  if(!closestClick)return
  
  tabs.forEach(tabLink=>{tabLink.classList.remove('operations__tab--active');
closestClick.classList.add('operations__tab--active')
  
  // Choosing all information elements, then moving the active class from one element to the other
  pageContents.forEach(informationFromTab=>informationFromTab
  .classList.remove('operations__content--active'))
  document.querySelector(`.operations__content--${closestClick.dataset.tab}`).classList.add('operations__content--active')

  })
  
})


// With the mouse over/mouse out you get to fade all other links in navigation bar except the target link including open account button and left side image
const siblings = document.querySelectorAll('.highlight');
const navBar = document.querySelector('.nav');


const linksFadeFunction = function (e) {

  if (e.target.closest('.nav__item')) {
    const link = e.target;
    
    // To select all sibling links
    const children = document.querySelector('.nav').querySelectorAll('.nav__link')
    
    children.forEach(el => {
  if (el !== link ) {
  el.style.opacity = this;
  }

  // Image opacity
const image=document.querySelector('img')
  if (image)
  image.style.opacity = this;
  });
  }
};

// Mouse function events for top links
navBar.addEventListener('mouseover', linksFadeFunction.bind(0.5));
navBar.addEventListener('mouseout', linksFadeFunction.bind(1));

////////////////////////////////////////////////
//Testimonials
///////////////////////////////////////

// Using the left/right buttons you can slide the pictures, then using the dots at the bottom of the images you can choose which image you want to see

const slides = document.querySelectorAll('.slide');
const sliderContainer = document.querySelector('.slider');
const lBtn = document.querySelector('.slider__btn--left');
const rBtn = document.querySelector('.slider__btn--right');
const maxSlide = slides.length - 1;
const dots = document.querySelectorAll('.dots__dot');
const dotContainer = document.querySelector('.dots');

let letSlide=1
init();

function slideDot(e){
  e.preventDefault()
  const dotEvent=e.target.closest('.dots__dot')
  
  if(!dotEvent.classList.contains('dots__dot'))return

dots.forEach(eachDot=>
   
eachDot.classList.remove('dots__dot--active')
)

// Dots that are active
dotEvent.classList.add('dots__dot--active')

  letSlide=dotEvent.dataset.slide
  imageSlider(letSlide)

}

dotContainer.addEventListener('click', slideDot.bind() )

// To slide images left/right using buttons or dots
function imageSlider(letSlide) {

  slides.forEach(function (slide, i) {
    
    slide.style.transform = `translateX(${100 * (i+1-letSlide)}%)`;

  });
};

// The left image button
lBtn.addEventListener('click',  fnLBtn.bind(letSlide))

  function fnLBtn(){
   if(letSlide<=1)return
    letSlide = +letSlide - 1;
    
    imageSlider(letSlide);
    document
    .querySelector(`.dots__dot[data-slide='${letSlide+1}']`).classList.remove('dots__dot--active')
    document
    .querySelector(`.dots__dot[data-slide='${letSlide}']`).classList.add('dots__dot--active')
  }

  // The right image button
rBtn.addEventListener('click',  fnRBtn.bind(letSlide))

  function fnRBtn(){
  if(letSlide>=3)return
letSlide = letSlide +1;
imageSlider(letSlide);
document
.querySelector(`.dots__dot[data-slide='${letSlide-1}']`).classList.remove('dots__dot--active')
document
.querySelector(`.dots__dot[data-slide='${letSlide}']`).classList.add('dots__dot--active')
  }

function init() {
  imageSlider(1);
};


// The sticky navigation bar using intersection oberserver API

const obsOptions = {
  root: null,
  threshold: 0,
};

const head = document.querySelector('.header__title');

function stickyFunction(entries) {
  const [entry] = entries

  if (!entry.isIntersecting) {
    document.querySelector('.nav').classList.add('sticky');
};
if (entry.isIntersecting) {
  document.querySelector('.nav').classList.remove('sticky');
}
};

const observer = new IntersectionObserver(stickyFunction, obsOptions);

observer.observe(head);

//The sections with intersection oberserver API
const sectioned = document.querySelectorAll('.section');

const fnSections = function (entries, observed) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;
  entry.target.classList.remove('section--hidden');
  observed.unobserve(entry.target);
};

const objObserve = {
  root: null,
  threshold: 0.15,
};

const allSections = sectioned.forEach(function (sections) {
  const observed = new IntersectionObserver(fnSections, objObserve);
  observed.observe(sections);
  sections.classList.add('section--hidden');
});

// Implementing lazy loading images
const newImage=document.querySelectorAll('img[data-src]')

const imgFn=function(entries){
  const [entry]=entries
  if(!entry.isIntersecting) return
  entry.target.src=entry.target.dataset.src
  entry.target.classList.remove('lazy-img')

}

const imgObject={
  root:null,
  rootMargin:'400px'
  
}

// Replace the current (blurry) image with the real image
const replaceImg=new IntersectionObserver(imgFn,imgObject)

newImage.forEach(imgElement=>replaceImg.observe(imgElement))

// Hides the images out of the image container
sliderContainer.style.overflow = 'hidden';