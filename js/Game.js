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
        const game = new Game();
        const randomPhrase = game.getRandomPhrase();
        this.activePhrase = randomPhrase;
        const phrase = new Phrase(randomPhrase.phrase);
        phrase.addPhraseToDisplay();
    };
}

