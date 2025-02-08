
let slides = null;
let slideIndex = 8;
let intervalId = 0;
slides = document.querySelectorAll('.card');
    
currentSlide();

intervalId = setInterval(nextSlide, 2000);

function currentSlide(){
    if (slideIndex >= slides.length) {
        slideIndex = 0;
    } 
    else if(slideIndex < 0) {
        slideIndex = slides.length - 1;
    }
    if (intervalId) {
      clearInterval(intervalId);
    }

    
    let visibleSlidesCount = Math.ceil(slides.length / 4);
        // Calculate the start and end indices for slicing
    let startIndex = slideIndex - visibleSlidesCount;
    let endIndex = slideIndex + visibleSlidesCount ;

        // Adjust indices if they are out of bounds
        // Slice the array to get the visible slides

    let availableSlides;
    if (endIndex > slides.length) {
       
        let firstPartIndices = [];
        for (let i = 0; i < startIndex; i++) {
            firstPartIndices.push((startIndex + i + slides.length) % slides.length);
        }
        let secondPart = Array.from({length: endIndex - slides.length}, (_, i) => i);
        console.log(firstPartIndices);
        console.log(secondPart);
        // console.log(firstPart);
        // console.log(secondPart);
       // console.log(startIndex, slides.length);
      
        //console.log(0, 0+endIndex-slides.length);
        availableSlides = firstPartIndices.concat(secondPart);
       
    }
    else if (startIndex < 0) {
        
        let firstPart = Array.from({length: slides.length + startIndex}, (_, i) => slides.length + startIndex + i);
        let secondPart = Array.from({length: endIndex}, (_, i) => i);
        availableSlides = firstPart.concat(secondPart);
        availableSlides = firstPart.concat(secondPart);
    }    
    else {
        availableSlides = Array.from({length: endIndex - startIndex}, (_, i) => startIndex + i);
    }

 

    // Hide all slidessl
    slides.forEach(slide => {
        slide.style.display = "none";
    });

    availableSlides.forEach(slide => {
        slides[slide].style.display = "inline-block";
    });
    

    intervalId = setInterval(nextSlide, 4000); // Change interval to 4000ms
   
}

function changeSlide(_step) {
    slideIndex += 1;
    currentSlide();
}

function nextSlide() {
    changeSlide(1);
}

function prevSlide() {
    changeSlide(-1);
}