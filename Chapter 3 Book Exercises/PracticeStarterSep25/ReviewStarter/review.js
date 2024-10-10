"use strict";
// Initiate numbers array
let numbers = [];

// Function to collect user imputed numbers and deal with invalid inputs. If "-999" is entered, break the loop!
function collectNumbers() {
    let input;
    do {
        input = prompt("Enter a Number, or -999 to stop!");
        if (!isNaN(input) && input.trim() !== "") {
            let number = parseFloat(input);
            if (number !== -999) {
                numbers.push(number);
            }
        } else {
            alert("Not a valid number. Please try again.");
            console.log("Not a valid number. Please try again.");
        }
    } while (input!== '-999');
}

// Function to calculate total value of user inputs
function calculateTotal() {
    let total = 0;
    for(let index in numbers) {
        total += numbers[index];
    }
    return total;
}

// Function to display given odd numbers
function displayOddNumbers() {
    console.log("Odd Numbers Entered: ");
    for(let number of numbers) {
        if(number % 2 !== 0) {
            console.log(number);
            document.write(`${number}, `);
        }
    }
}

// Main function to execute program
function main() {
    collectNumbers();
    let total = calculateTotal();
    document.write(`Sum:  ${total}<br>`);
    document.write("<br>Odd Numbers:  ");
    console.log(`<br>Total Number of Odd Numbers Entered:  ${total}`);
    displayOddNumbers();
}

main();



