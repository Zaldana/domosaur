//WARM UP ========================================================

//1. Span font size
const mWmspan = document.querySelector("span.mess-with-me");
mWmspan.style.fontSize = '40px';

//2. paragraph background
const greenP = document.querySelector("p.mess-with-me");
greenP.style.backgroundColor = 'green';

//3. Hide Dino
const hideDino = document.querySelector("#hide-me");
hideDino.style.display = "none";

//4. Dino image resize
const dinoOne = document.querySelector('#triceratops');
dinoOne.width = '324px'

//Event Listeners ================================================

//1. Mess with me listener with border
const redDino = document.querySelector('#triceratops');

function borderClick() {

    redDino.style.border = "1px solid #FF0000";

}

//2.Dino listener
redDino.addEventListener('click', borderClick);

//3. Event listener for feathered dino
const featheredDino = document.querySelector('#feathers');

function opClick() {

    featheredDino.style.opacity = "0.5";

}

featheredDino.addEventListener('click', opClick);

//4. Event listener for background color
const backgroundButton = document.querySelector('#toggle');

function buttonClick() {

    const row = document.querySelector('#row');
    row.style.backgroundColor = "red";

}

backgroundButton.addEventListener('click', buttonClick);

//5.Biggify
const biggify = document.querySelector('#biggify');

biggify.addEventListener('mouseover', function ( event ) {
    
    event.target.style.width = "200px";
 
}, false);


