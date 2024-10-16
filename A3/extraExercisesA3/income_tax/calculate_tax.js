"use strict";
const $ = selector => document.querySelector(selector);

document.addEventListener("DOMContentLoaded", () => {
    // Add event handler for the Calculate button
    $("#calculate").addEventListener("click", processEntry);
});

// Function to handle the user's entry and calculate tax
const processEntry = () => {
    const incomeInput = parseFloat($("#income").value); // Get the user's input and convert to a number

    // Validate the input: check if it's a number greater than 0
    if (isNaN(incomeInput) || incomeInput <= 0) {
        alert("Please enter a valid taxable income greater than zero.");
        $("#income").focus(); // Move focus back to the input field
        return;
    }

    // Calculate the tax
    const taxAmount = calculateTax(incomeInput);
    
    // Display the calculated tax and round it to two decimal places
    $("#tax").value = taxAmount.toFixed(2);
    $("#income").focus(); // Move focus back to the input field
};

// Function to calculate tax based on the taxable income
const calculateTax = (income) => {
    let tax = 0;

    // Tax Brackets based on the 2020 federal income tax table
    if (income <= 9875) {
        tax = income * 0.10; // 10% tax on income up to $9,875
    } 
    else if (income <= 40125) {
        tax = 987.50 + (income - 9875) * 0.12; // $987.50 plus 12% of excess over $9,875
    }
    else if (income <= 85525) {
        tax = 4617.50 + (income - 40125) * 0.22; // $4,617.50 plus 22% of excess over $40,125
    } 
    else if (income <= 163300) {
        tax = 14605.50 + (income - 85525) * 0.24; // $14,605.50 plus 24% of excess over $85,525
    } 
    else if (income <= 207350) {
        tax = 33271.50 + (income - 163300) * 0.32; // $33,271.50 plus 32% of excess over $163,300
    } 
    else if (income <= 518400) {
        tax = 47367.50 + (income - 207350) * 0.35; // $47,367.50 plus 35% of excess over $207,350
    } 
    else {
        tax = 156235.00 + (income - 518400) * 0.37; // $156,235.00 plus 37% of excess over $518,400
    }

    return tax; // Return the calculated tax
};
