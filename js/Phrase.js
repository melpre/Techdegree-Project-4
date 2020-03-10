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
        // Select 'ul' element where child 'li' elements will be nested
        const ulPhrase = document.querySelector('ul');

        // Store randomly selected phrase into an array of characters
        let charArray = this.phrase.split('');

        // Loop through 'charArray' to create li elements and their attributes
        charArray.forEach(char => {

            // Declare variable 'li' for each character in array
            let li = document.createElement('li');
            li.innerHTML = char;
            li.setAttribute('class', 'hide letter ' + char);

            // Check condition: If blank space, write class 'space' with no text innerHTML
            if (char === ' ') {
                li.setAttribute('class', 'space')
            };

            // Append each 'li' to 'ul'
            ulPhrase.appendChild(li);          
        });
    }

    /***
    * Checks if passed letter is in phrase
    * @param (string) letter - Letter to check
    ***/
    checkLetter(letter) {
        // Store characters from random phrase inside array
        let charArray = this.phrase.split('');

        // Return true or false if letter parameter matches character in 'charArray'
        return charArray.includes(letter);
    };

    /***
    * Displays passed letter on screen after a match is found
    * @param (string) letter - Letter to display
    ***/
    showMatchedLetter(letter) {
        // Select ALL letter 'li' elements and store in variable 
        let liLetters = document.querySelectorAll('li');

        // Loop through each letter and check condition:
        liLetters.forEach(li => {

            // If clicked button matches character in random phrase, display letter/s
            if (li.innerHTML === letter) {
                li.setAttribute('class', 'show');
            };
        });    
    };
}

