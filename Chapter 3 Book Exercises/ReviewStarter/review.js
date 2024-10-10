"use strict";

const secretNumber = 6;
let guess = -1;
let guessCount = 0

while(guess != secretNumber) {


    do {
        guess=parseInt(prompt("Enter a number between 1 & 10"));
    } while( isNaN(guess) || guess <= 0 || guess > 10 )
        
    if(guess != secretNumber) {
        alert("Incorrect Guess, try again!")
    }
    guessCount ++;
}

alert(`You Guessed The Correct Number ${secretNumber} in ${guessCount} Guesses!`)