/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */


class Phrase {
    constructor (phrase) {
        this.phrase = phrase.toLowerCase();
    }

    /***
    * Display phrase on game board
    ***/
    addPhraseToDisplay() {
        // Declare variable 'ulPhrase' and select parent element where child 'li' elements will be added
        const ulPhrase = document.querySelector('ul');

        // Store randomly selected phrase into an array of characters
        let charArray = this.phrase.split('');

        // Initiate loop on 'charArray' to create the needed amount of li elements with specified classes
        charArray.forEach(char => {
            // Declare variable 'li' element for each character in the array
            let li = document.createElement('li');
            li.innerHTML = char;
            li.setAttribute('class', 'hide letter ' + char);
            //If blank space, write class 'space' with no text innerHTML
            if (char === ' ') {
                li.setAttribute('class', 'space')
            };
            ulPhrase.appendChild(li);          
        });
    }

    /***
    * Checks if passed letter is in phrase
    * @param (string) letter - Letter to check
    ***/
    checkLetter(letter) {
        // Store characters in the random phrase inside an array
        let charArray = this.phrase.split('');

        // Return true or false if letter parameter matches character in charArray
        return charArray.includes(letter);
    };

    /***
    * Displays passed letter on screen after a match is found
    * @param (string) letter - Letter to display
    ***/
    showMatchedLetter(letter) {
        // Select phrase's li DOM elements and store in variable 
        let liLetters = document.querySelectorAll('li');

        // Select all of the letter DOM elements that have a CSS class name that matches the 
        // selected letter and replace each selected element's `hide` CSS class with the `show` 
        // CSS class
        liLetters.forEach(li => {
            // Conditional check: If clicked button matches character in random phrase, display letter/s
            if (li.innerHTML === letter) {
                li.setAttribute('class', 'show');
            };
        });    
    };
}

