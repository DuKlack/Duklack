const slides = document.querySelectorAll(".Slide img");
let slideIndex = 0;
let intervalId=  null;


currentSlide();

function currentSlide(){
  if (slideIndex >= slides.length) {
     
      slideIndex = 0;
  } else if(slideIndex < 0) {
      slideIndex = slides.length - 1;
  }
  if (intervalId) {
    clearInterval(intervalId);
  }

  slides.forEach((slide) => {
    slide.style.display = "none";
  });
  slides[slideIndex].style.display = "block";
  intervalId = setInterval(nextSlide, 3000);
  
}



function previousSlide(){
    slideIndex--;
    currentSlide();
}
function nextSlide(){

    slideIndex ++;
    currentSlide();

}