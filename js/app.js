/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */


// Start Game Click Event Listener
let game;
const resetButton = document.querySelector('button');
resetButton.addEventListener('click', (event) => {
    game = new Game();
    game.startGame();
});


// Onscreen Keyboard Click Event Listener
// Select parent div of keyword buttons
const keyboard = document.querySelector('div#qwerty');

// Add event listener to 'keyboard' to listen for clicks
keyboard.addEventListener('click', (event) => {
    //Check condition, if clicked event has tag name button, execute handleInteraction()
    if (event.target.tagName === 'BUTTON') {
        game.handleInteraction(event.target);
    };
});


// Extra Credit:
// Add event listener to keyboard to listen for key presses 
document.addEventListener('keyup', (event) => {
    // Declare variable to store key up value
    let keyUp = event.key;

    // Declare variable to store keyword buttons' value
    let keyButtons = document.querySelectorAll('button.key');

    // Loop through node list of key buttons to check condition:
    for (let i = 0; i < keyButtons.length; i++) {
        // If key button in array MATCHES 'keyup' event key,
        if (keyButtons[i].innerHTML === keyUp) {
            //Execute handleInteraction() method
            game.handleInteraction(keyButtons[i]);
            break;
        };              
    };
});




