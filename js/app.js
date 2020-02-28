/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

//TEST CODE (PLEASE DELETE BEFORE FINAL SUBMIT)

//STEP 1 Test
// const phrase = new Phrase('Life is like a box of chocolates');
// console.log(`Phrase-phrase: ${phrase.phrase}`);

//STEP 2 Test
// const game = new Game();
// game.phrases.forEach((phrase, index) => {
// console.log(`Phrase ${index} - phrase: ${phrase.phrase}`);
// });

//STEP 3 - 5 Test
// const logPhrase = (phrase) => {
//     console.log(`Phrase - phrase: `, phrase.phrase);
//     };
// const game = new Game();
// logPhrase(game.getRandomPhrase());
// logPhrase(game.getRandomPhrase());
// logPhrase(game.getRandomPhrase());
// logPhrase(game.getRandomPhrase());
// logPhrase(game.getRandomPhrase());

//STEP 6 Test
// const game = new Game();
// const randomPhrase = game.getRandomPhrase();
// const phrase = new Phrase(randomPhrase.phrase);
// phrase.addPhraseToDisplay();

//STEP 7 Test
// const game = new Game();
// game.startGame();
// console.log(`Active Phrase - phrase: ${game.activePhrase.phrase}`);

//STEP 8
let game;
const resetButton = document.querySelector('button');
resetButton.addEventListener('click', (event) => {
    game = new Game();
    game.startGame();
});

//STEP 9 Test
// Type game.activePhrase.checkLetter('a') directly into console
// Type game.activePhrase.showMatchedLetter('a') directly into console
// Type game.checkForWin() directly into console
// Type game.removeLife() directly into console
// Type game.gameOver(true/false) directly into console

//STEP 10 Test
// Select keyrow div
const divKeyrow = document.getElementsByClassName('keyrow');
// Select parent div of keyword buttons
const keyboard = document.querySelector('div#qwerty');

// Add event listener to 'keyboard' to listen for clicks
keyboard.addEventListener('click', (event) => {
    //Check condition, if clicked event is 'div.keyrow', stop event from bubbling
    if (event === divKeyrow) {
        event.stopPropagation();
    };
    game.handleInteraction(event.target);
});






