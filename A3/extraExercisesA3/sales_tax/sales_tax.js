"use strict";

// Helper function to get elements by selector
const $ = selector => document.querySelector(selector);

// Function to process the entries, validate inputs, and calculate results
const processEntries = () => {
    const subtotal = parseFloat($("#subtotal").value);
    const taxRate = parseFloat($("#tax_rate").value);
    
    // Input validation
    if (isNaN(subtotal) || subtotal <= 0 || subtotal >= 10000) {
        alert("Subtotal must be > 0 and < 10000");
        $("#subtotal").focus(); // Move cursor to subtotal on error
        return;
    }
    if (isNaN(taxRate) || taxRate <= 0 || taxRate >= 12) {
        alert("Tax Rate must be > 0 and < 12");
        $("#tax_rate").focus(); // Move cursor to tax rate on error
        return;
    }
    
    // Calculations
    const salesTax = subtotal * (taxRate / 100);
    const total = subtotal + salesTax;
    
    // Display the results
    $("#sales_tax").value = salesTax.toFixed(2);
    $("#total").value = total.toFixed(2);
    
    // Move the cursor back to the subtotal field
    $("#subtotal").focus();
};

// Function to clear all input fields and move cursor to subtotal
const clearEntries = () => {
    $("#subtotal").value = "";
    $("#tax_rate").value = "";
    $("#sales_tax").value = "";
    $("#total").value = "";
    $("#subtotal").focus(); // Move cursor to subtotal
};

// Function to clear text boxes when focused
const clearField = (field) => {
    $(field).value = "";
};

// Attach event listeners after the DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
    // Focus on the subtotal field when the page loads
    $("#subtotal").focus();

    // Attach click event listener to the Calculate button
    $("#calculate").addEventListener("click", processEntries);
    
    // Attach click event listener to the Clear button
    $("#clear").addEventListener("click", clearEntries);
    
    // Attach focus event listeners to clear subtotal and tax rate fields
    $("#subtotal").addEventListener("focus", () => clearField("#subtotal"));
    $("#tax_rate").addEventListener("focus", () => clearField("#tax_rate"));
});
