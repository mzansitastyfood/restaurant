document.addEventListener('DOMContentLoaded', function () {
    const adContainer = document.getElementById('ad-container');
    const adImage = document.getElementById('ad-image');
    const imageType = document.getElementById('type');
    const imageName = document.getElementById('meal-name');
    const imageDescr = document.getElementById('meal-description');
    const imageAmount = document.getElementById('meal-amount');

    const dotsContainer = document.getElementById('dots');
   
    const images = ['burger-meal.jpg', 'burger.jpg', 'wings.jpg','ribs.jpg'];

    var image_dictionary = {
        'burger-meal.jpg': {
            'type': "New!",
            'name': "Burger Mate",
            'description': "1 big burger and side choice.",
            'amount': "R49,99"
        ,
        },
        'burger.jpg': {
            'type': "Limited Edition!",
            'name': "Mega Burger Wings",
            'description': "1 big burger with ultimate wings.",
            'amount': "R129,99"
        },
        'wings.jpg': {
            'type': "Recommended!",
            'name': "Dipped wings with sause",
            'description': "6 dipped wings.",
            'amount': "R55,99"
        },
        'ribs.jpg': {
            'type': "Limited Edition!",
            'name': "Ribs and Chips",
            'description': "1 rib burger and ultimate chips.",
            'amount': "R54,99"
        }
    }

    

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
        var currentImage = Object.keys(image_dictionary)[currentImageIndex];
        adImage.src = "images/"+currentImage;
        imageType.textContent =  image_dictionary[currentImage]['type'];
        imageName.textContent =  image_dictionary[currentImage]['name'];
        imageDescr.textContent =  image_dictionary[currentImage]['description'];
        imageAmount.textContent =  image_dictionary[currentImage]['amount'];


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


// Running numbers variables
const run_numbers = document.getElementById('numbers-run');
const snackButton = document.getElementById('snack-button');
const hungryButton = document.getElementById('hungry-button');
const starvingButton = document.getElementById('starving-button');


// Running the numbers continued functions 
run_numbers.addEventListener('click', numbers);
snackButton.addEventListener('click',snackButtonClick);
hungryButton.addEventListener('click', hungryButtonClick);
starvingButton.addEventListener('click', starvingButtonClick);

var click_which_button_food = 'snack';

function snackButtonClick(){
    click_which_button_food = 'snack'
}

function hungryButtonClick(){
    click_which_button_food = 'hungry';
}

function starvingButtonClick(){
    click_which_button_food = 'starving';
}

var all_images = {
    'burger-meal.jpg': {
        'type': "New!",
        'name': "Burger Mate",
        'description': "1 big burger and side choice.",
        'amount': "R49,99"
    ,
    },
    'burger.jpg': {
        'type': "Limited Edition!",
        'name': "Mega Burger Wings",
        'description': "1 big burger with ultimate wings.",
        'amount': "R129,99"
    },
    'wings.jpg': {
        'type': "Recommended!",
        'name': "Dipped wings with sause",
        'description': "6 dipped wings.",
        'amount': "R55,99"
    },
    'ribs.jpg': {
        'type': "Limited Edition!",
        'name': "Ribs and Chips",
        'description': "1 rib burger and ultimate chips.",
        'amount': "R54,99"
    }
}


var left_or_right = 1;

function addImage(image,type,name,description,amount){
    var here = ` 
    <div class="pane">
        <img src="images/${image}" alt="Image">
    </div>
    <div id="type">${type}</div>
    <div id="meal-name">${name}</div>
    <br>
    <div id="meal-description">${description}</div>
    <div id="meal-amount">${amount}</div>
    <button id="meal-order-button">Order Now →</button>`;

    return here;
}

var slider_value = 0;
var clicked_food = '';

var image_list = [];

function numbers(){

    var how_hungry_el = document.getElementById('how-hungry-container');
    how_hungry_el.style.display = 'contents';
    how_hungry_el.style.marginTop = '5%';
    how_hungry_el.style.backgroundColor = 'white';
    how_hungry_el.style.display = 'flex';
    how_hungry_el.style.alignContent = 'center';
    how_hungry_el.style.alignItems = 'center';
    how_hungry_el.style.justifyContent = 'center';
    how_hungry_el.style.textAlign = 'center';
    how_hungry_el.style.width = '80%';
    how_hungry_el.style.padding = '2.5%';
    how_hungry_el.style.marginLeft = '5%';
    how_hungry_el.style.marginRight = '5%';

    console.log("New "+ clicked_food);
    console.log("Actual "+click_which_button_food);
    console.log("Slider value "+slider_value);
    console.log("Actual slider "+slider.value);
    console.log("------------------------------")


    // snack if-statements
    if(slider.value==1 && click_which_button_food == 'snack'||click_which_button_food == ''){
        image_list = ['wings.jpg'];
    }
    if(slider.value>1 && slider.value<5 && click_which_button_food == 'snack'){
        image_list = ['wings.jpg'];
    }
    if(slider.value>5 && click_which_button_food == 'snack'){
        image_list = ['burger.jpg'];
    }

    // hungry if-statements
    if(slider.value==1 && click_which_button_food == 'hungry'){
        image_list = ['burger-meal.jpg','ribs.jpg'];

    }
    if(slider.value>1 && slider.value<5 && click_which_button_food == 'hungry'){
        image_list = ['burger.jpg'];

    }
    if(slider.value>5 && click_which_button_food == 'hungry'){
        image_list = ['burger.jpg'];
    }

    // starving if-statements
    if(slider.value==1 && click_which_button_food == 'starving'){
        image_list = ['burger.jpg'];
    }
    if(slider.value>1 && slider.value<5 && click_which_button_food == 'starving'){
        image_list = ['burger.jpg'];
    }
    if(slider.value>5 && click_which_button_food == 'starving'){
        image_list = ['burger.jpg'];
    }


    if(!(slider_value === slider.value && clicked_food.trim()===click_which_button_food.trim())){
       

        var sign = true;
        var howHungryEl = howHungryEl = document.getElementById('left');;
        var howHungryElRight = document.getElementById('right');
       
        howHungryEl.innerHTML = ''; // Delete previous innerHtml
        howHungryElRight.innerHTML = ''; // delete the one on the right too
        
        image_list.forEach(image => {
           var inner_of_hungry =  addImage(image,all_images[image].type, all_images[image].name,all_images[image].description,all_images[image].amount);
            
            // Populate images left and right
            
            if(sign){
                howHungryEl = document.getElementById('left');
            }
            else{
                howHungryEl = document.getElementById('right');
            }
            sign = !sign;
            howHungryEl.innerHTML +=inner_of_hungry;
        });

       
    }
   
    slider_value = slider.value;
    clicked_food = click_which_button_food.toString();

   
    
}



