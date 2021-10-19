// Grab some elements in DOM
const slider = document.querySelector(".slider");
const after = document.querySelector(".img-container-after");
const before = document.querySelector(".img-container-before");
const container = document.querySelector(".container");


// Function to slide the image 
const dragSlider = (e) => {

    // Get the xPos and size of the container
    let xPos = e.layerX;
    let size = container.offsetWidth;

    // Set the initial width for 'before' and 'slider' position
    before.style.width = xPos + "px";
    slider.style.left = xPos + "px";

    if( xPos < 50 ) {
        before.style.width = 0;
        slider.style.left = 0;
    }
    if( (xPos + 30) > size ) {
        before.style.width = size;
        slider.style.left = size;
    }
}

// Finally add event listener to the container so the slide function is triggered on Mouse Move
container.addEventListener("mousemove", dragSlider);

