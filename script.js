document.addEventListener('DOMContentLoaded', function () {
    const adContainer = document.getElementById('ad-container');
    const adImage = document.getElementById('ad-image');
    const dotsContainer = document.getElementById('dots');

    const images = ['burger-meal.jpg', 'burger.jpg', 'wings.jpg','ribs.jpg'];
    let currentImageIndex = 0;
    let isPlaying = true;
    let intervalId;

    // Play and pause button
    function togglePlayPause() {
        isPlaying = !isPlaying;

        const playPauseButton = document.getElementById('play-pause');
        playPauseButton.textContent = isPlaying ? '▶' : '❚❚';

        if (isPlaying) {
            intervalId = setInterval(showNextImage, 5000); // Change this interval (in milliseconds) as needed
        } else {
            clearInterval(intervalId);
        }
        console.log("Button clicked");
    }

    // Triggers an event lister to play the pause button
    document.getElementById("play-pause").addEventListener("click",togglePlayPause);


    // Show next image button on display 
    function showNextImage() {
        if (!isPlaying) return; // Don't proceed if paused
        adImage.style.opacity = 0;

        setTimeout(function () {
            currentImageIndex = (currentImageIndex + 1) % images.length;
            updateImage();
        }, 500); // Change this delay (in milliseconds) as needed
    }

    document.getElementById("next").addEventListener("click",showNextImage);

    // Show previous image on display using a button
    function showPrevImage() {
        if (!isPlaying) return; // Don't proceed if paused
        adImage.style.opacity = 0;

        setTimeout(function () {
            currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
            updateImage();
        }, 500); // Change this delay (in milliseconds) as needed
    }


    document.getElementById("prev").addEventListener("click",showPrevImage);

    function updateImage() {
        adImage.src = images[currentImageIndex];
        adImage.style.opacity = 1;
        updateDots();
    }

    function updateDots() {
        dotsContainer.innerHTML = '';
        for (let i = 0; i < images.length; i++) {
            const dot = document.createElement('div');
            dot.classList.add('dot');
            if (i === currentImageIndex) {
                dot.style.backgroundColor = '#333'; // Highlight the current image dot
            }
            dotsContainer.appendChild(dot);
        }
    }

    // Initial image display and dots
    updateImage();

    // Set interval to show images every 5 seconds
    intervalId = setInterval(showNextImage, 5000); // Change this interval (in milliseconds) as needed
});


// Choosing a menu with a slider script 

const slider = document.getElementById('mySlider');
const sliderValue = document.getElementById('sliderValue');

// Intialize the slider value to 1
slider.value = 1;

slider.addEventListener('input', updateSlider);

function updateSlider() {
    const value = slider.value;
    sliderValue.textContent = value;
    // You can perform additional actions with the value if needed
}

function incrementValue() {
    slider.stepUp();
    updateSlider();
}

function decrementValue() {
    slider.stepDown();
    updateSlider();
}

var snack = false;
var hungry = false;
var starving = false;

var snackEl = document.getElementById("snack-button");
snackEl.addEventListener("click", actionSnack);

var hungryEl = document.getElementById("hungry-button");
hungryEl.addEventListener("click", actionHungry);

var starvingEl = document.getElementById("starving-button");
starvingEl.addEventListener("click", actionStarving);


function actionSnack(){
    snack = true;
    snackEl.style.backgroundColor = "grey";

    hungry = false;
    hungryEl.style.backgroundColor = "rgb(181, 202, 160)";

    starving = false;
    starvingEl.style.backgroundColor = "rgb(181, 202, 160)";
}

function actionHungry(){
    hungry = true;
    hungryEl.style.backgroundColor = "grey";

    snack = false;
    snackEl.style.backgroundColor = "rgb(181, 202, 160)";

    starving = false;
    starvingEl.style.backgroundColor = "rgb(181, 202, 160)";
}

function actionStarving(){
    starving = true;
    starvingEl.style.backgroundColor = "grey";

    snack = false;
    snackEl.style.backgroundColor = "rgb(181, 202, 160)";

    hungry = false;
    hungryEl.style.backgroundColor = "rgb(181, 202, 160)";
}

var navOpenEl = document.getElementById("nav-open");
navOpenEl.addEventListener("click", openNav);

var navExitEl = document.getElementById("nav-close");
navExitEl.addEventListener("click", closeNav);

var displayNavEl = document.querySelector("nav");
displayNavEl.addEventListener("click",displayNav);



function openNav(){
    navOpenEl.style.display = "none";
    displayNavEl.style.display = "contents";
    var screen = document.getElementById("small-scr");
    screen.style.backgroundColor = "forestgreen";

    var navListEl = document.getElementById("navList");
    navListEl.style.padding = "6%";
}

function closeNav(){
    displayNavEl.style.display = "none";
    navOpenEl.style.display = "block";
    var screen = document.getElementById("small-scr");
    screen.style.backgroundColor = "black";
}

function displayNav(){

}

