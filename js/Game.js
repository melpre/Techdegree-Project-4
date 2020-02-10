/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */



class Game {
    constructor() {
        this.missed = 0;
        this.phrases = [
            new Phrase('Life is like a box of chocolates'),
            new Phrase('Say hello to my little friend'),
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
}

//NEXT TO DO: SEE STEP 6 IN PROJECT GUIDE