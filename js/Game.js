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
        // Call getRandomPhrase() method on prototype 'game' object
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
        // Select phrase's displayed li DOM elements and store in variable
        let liShow = document.querySelectorAll('li.show');
        // Check condition: if ALL of the phrase's li DOM elements have class name 'show', return true
        //How to test that ALL li elements have the 'show' class name?
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
            divOverlay.style.display = 'block';
            divOverlay.setAttribute('class', 'win');
        } else {
            gameOver.innerHTML = 'Sorry, better luck next time!';
            gameOver.style.display = 'block';
            divOverlay.style.display = 'block';
            divOverlay.setAttribute('class', 'lose');
        };
    };

    /***
    * Handles onscreen keyboard button clicks
    * @param (HTMLButtonElement) button - The clicked button element
    ***/
    handleInteraction(button) {
        console.log(button);
    };
};
