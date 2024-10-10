"use strict";

// Function to gather user inputs and print the sums of all numbers from 1 to userInput
function getSum() {

    let sums = []; // Create sums array

    while (true) {
        let userInput = parseInt(prompt("Enter a Number Between 1 & 100"));
        if (userInput < 1 || userInput > 100 || isNaN(userInput)) {
            alert("Please enter an integer between 1 & 100"); // Alert user if improper integer is given
            continue;}

        let sum = 0;
        for (let i = 1; i <= userInput; i++) {
            sum += i; // Equation to add sums of all incremented numbers up to and including user input
        }
        // Push results from sum to array
        sums.push(`<br>Sum of numbers from 1 to ${userInput} is ${sum}<br>`);
        // Prompt user for another input, break loop if "y" is not pressed.
        let anotherInput = prompt("Do another sum? (y/n)");
        if (anotherInput.toLowerCase() === "y") {
            continue;} 
            else { 
            break;}
    }

    // Print sum results to document (and console)
    sums.forEach(sum => document.write(sum));
    sums.forEach(sum => console.log(sum));
}

// Main Function to run functions
function main() {
    getSum();
}

// Initiate main
main();