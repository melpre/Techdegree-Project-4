/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */


class Game {
    constructor() {
        this.missed = 0;
        this.phrases = [
            new Phrase('ET phone home'),
            new Phrase('Go ahead make my day'),
            new Phrase('Show me the money'),
            new Phrase('May the force be with you'),
            new Phrase('I see dead people')
        ];
        this.activePhrase = null;
    }

    /***
    * Selects random phrase from phrases property
    * @return {Object} Phrase object chosen to be used
    ***/
    getRandomPhrase() {
        let i = Math.floor(Math.random() * this.phrases.length);
        return this.phrases[i];  
    };

    /***
    * Begins game by selecting a random phrase and displaying it to user
    ***/
    startGame() {
        // Select 'div#overlay" and hide display
        document.querySelector('div#overlay').style.display = 'none';

        // Call getRandomPhrase() method on 'game' object
        const randomPhrase = game.getRandomPhrase();
        this.activePhrase = randomPhrase;
        const phrase = new Phrase(randomPhrase.phrase);
        phrase.addPhraseToDisplay();
    };

    /***
    * Checks for winning move
    * @return {boolean} True if game has been won, false if game wasn't won
    ***/
    checkForWin() {
        // Select phrase's hidden li DOM elements and store in variable
        let liHide = document.querySelectorAll('li[class~="hide"]');

        // Check condition: if there are NO hidden li elements, return true, else false
        if (liHide.length === 0) {
            return true;
        } else {
            return false;
        };
    };

    /***
    * Increases the value of the missed property
    * Removes a life from the scoreboard
    * Checks if player has remaining lives and ends game if player is out
    ***/
    removeLife() {
        // Declare variable to hold ALL img elements
        const imgHearts = document.querySelectorAll('img');

        // If src is 'liveHeart.png', change src to 'lostHeart.png'
        if (imgHearts[this.missed].src = 'images/liveHeart.png') {
            imgHearts[this.missed].src = 'images/lostHeart.png';
            // Increase value of 'missed' property by 1
            this.missed += 1;
        };
        if (this.missed === 5) {
            game.gameOver(false);
        };
    };

    /***
    * Displays game over message
    * @param {boolean} gameWon - Whether or not the user won the game
    ***/
    gameOver(gameWon) {
        // Select 'h1#game-over-message'
        const gameOver = document.querySelector('h1#game-over-message');

        // Select 'div#overlay"
        const divOverlay = document.querySelector('div#overlay');

        // Condition check, if 'gameWon' parameter = true, 
        if (gameWon === true) {
            gameOver.innerHTML = 'You win! Well done!';
            gameOver.style.display = 'block';
            gameOver.style.justifyContent = 'center';
            divOverlay.style.display = 'block';
            divOverlay.setAttribute('class', 'win');
        } else {
            gameOver.innerHTML = 'Sorry, better luck next time!';
            gameOver.style.display = 'block';
            gameOver.style.justifyContent = 'center';
            divOverlay.style.display = 'block';
            divOverlay.setAttribute('class', 'lose');
        };

        // Add click event listener to reset button
        resetButton.addEventListener('click', (event) => {
            // Call reset game FUNCTION
            resetGame();
            game = new Game();
            game.startGame();
        });
    };

    /***
    * Handles onscreen keyboard button clicks
    * @param (HTMLButtonElement) button - The clicked button element
    ***/
    handleInteraction(button) {
        // Declare variable to hold 'button's' inner HTML value
        let chosenLetter = button.innerHTML;

        // Check condition: If checkLetter method returns true (chosen letter = letter in phrase),
        if (this.activePhrase.checkLetter(chosenLetter)) {
            button.disabled = true;
            button.className = 'chosen';
            this.activePhrase.showMatchedLetter(chosenLetter);
            // Check condition: If checkForWin method returns true (game is won),
            if (this.checkForWin()) {
                this.gameOver(true);
            };
        } else {
            button.className = 'wrong';
            this.removeLife();
        };
    };
};

// Reset Game Function
function resetGame() {
    // Select parent phrase 'ul' element
    const ulPhrase = document.querySelector('ul');

    // Remove all `li` elements from the phrase 'ul' element
    while (ulPhrase.hasChildNodes()) {  
        ulPhrase.removeChild(ulPhrase.firstChild);
    };

    // Select ALL onscreen keyboard buttons
    const keyboardButtons = keyboard.querySelectorAll('button');

    // Loop through keyboard buttons node list
    keyboardButtons.forEach(key => {
        // Enable ALL keys
        key.disabled = false;
        // Change ALL class names back to 'key'
        key.className = 'key';
    });

    // Declare variable to hold ALL img elements
    const imgHearts = document.querySelectorAll('img');
    
    // Reset all of the heart images (i.e. the player's lives) in the scoreboard at the bottom of
    // the gameboard to display the `liveHeart.png` image.
    imgHearts.forEach(heart => {
        heart.src = 'images/liveHeart.png';
    });
};
