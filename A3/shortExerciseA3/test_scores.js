"use strict";

const scores = [];

// Convert to arrow function
const $ = selector => document.querySelector(selector);

// Convert to arrow function
const addScore = () => {
    const score = parseInt($("#score").value);
    if (score >= 0 && score <= 100) {
        scores[scores.length] = score;
        $("#score").value = "";
        $("#average").value = calculateAverage();
    } else {
        alert("Score must be a valid number from 0 through 100");
    }
    $("#score").focus();
};

const calculateAverage = () => {
    let total = 0;
    for (let val of scores) {
        total += val;
    }
    return parseInt(total / scores.length);
};

// Modify document.addEventListener to use an anonymous arrow function
document.addEventListener("DOMContentLoaded", () => {
    $("#add").addEventListener("click", addScore);
    $("#score").focus();
});
