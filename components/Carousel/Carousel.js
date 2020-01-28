/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/

// === attempt at Carousel function ===

function Carousel() {
  const carousel = document.createElement('div');
  carousel.classList.add('carousel');

  const leftArrow = document.createElement('div');
  leftArrow.classList.add('left-button');
  leftArrow.textContent = ' < ';
  leftArrow.addEventListener('click', event => {

   

    const posZero = event.target.nextElementSibling; 
    carousel.insertBefore(posZero, rightArrow);   
    

    // ===animation issue above===
  })
  carousel.appendChild(leftArrow);

  const imgOne = document.createElement('img');
  imgOne.src = './assets/carousel/mountains.jpeg';
  imgOne.classList.add('fade');
  imgOne.classList.add('active');
  carousel.appendChild(imgOne);

  const imgTwo = document.createElement('img');
  imgTwo.setAttribute('src', './assets/carousel/computer.jpeg');
  imgTwo.classList.add('active');
  imgTwo.classList.add('fade');
  carousel.appendChild(imgTwo);

  const imgThree = document.createElement('img');
  imgThree.src = './assets/carousel/trees.jpeg';
  imgThree.classList.add('active');
  imgThree.classList.add('fade');
  carousel.appendChild(imgThree);

  const imgFour = document.createElement('img');
  imgFour.src = './assets/carousel/turntable.jpeg';
  imgFour.classList.add('fade');
  imgFour.classList.add('active');
  carousel.appendChild(imgFour);

  const rightArrow = document.createElement('div');
  rightArrow.classList.add('right-button');
  rightArrow.textContent = ' > ';
  rightArrow.addEventListener('click', event => {

    

    const posFour = event.target.previousElementSibling;
    leftArrow.insertAdjacentElement('afterend', posFour);

    
  })
  carousel.appendChild(rightArrow);

  return carousel;
}

const carouselParent = document.querySelector('.carousel-container');
const carousel = Carousel();
carouselParent.appendChild(carousel);

const posZero = document.querySelector('img');
const posOne = posZero.nextElementSibling;
console.log(posOne);
