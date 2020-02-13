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
        // Declare variable 'ul' and select parent element where child 'li' elements will be added
        const ulPhrase = document.querySelector('ul');

        // Store randomly selected phrase into an array of characters
        let charArray = this.phrase.split('');
        // console.log(charArray.length);
        // console.log(charArray);

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
}


