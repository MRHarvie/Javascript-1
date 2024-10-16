"use strict";

// Helper function to get elements by selector
const $ = selector => document.querySelector(selector);

// Event handler to process the user's entry
const processEntry = () => {
    const userEntry = parseInt($("#cents").value);  // Get user's entry and convert it to an integer
    
    // Validate the entry
    if (isNaN(userEntry) || userEntry < 0 || userEntry > 99) {
        alert("Please enter a number between 0 and 99.");
        return;
    }
    
    // Call the makeChange function and pass the user's entry
    makeChange(userEntry);
};

// Function to calculate quarters, dimes, nickels, and pennies
const makeChange = (cents) => {
    let quarters = Math.floor(cents / 25);  // Number of quarters
    cents %= 25;  // Remaining cents after quarters

    let dimes = Math.floor(cents / 10);  // Number of dimes
    cents %= 10;  // Remaining cents after dimes

    let nickels = Math.floor(cents / 5);  // Number of nickels
    let pennies = cents % 5;  // Remaining cents are pennies

    // Display the results in the respective text boxes
    $("#quarters").value = quarters;
    $("#dimes").value = dimes;
    $("#nickels").value = nickels;
    $("#pennies").value = pennies;
};

// Attach event listener when the DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
    // Attach the processEntry function to the click event of the Calculate button
    const calculateBtn = $("#calculate");
    
    if (calculateBtn) {
        calculateBtn.addEventListener("click", processEntry);
    } else {
        console.error("Calculate button not found");
    }
});
