"use strict";

// Function to determine letter grades value
function getLetterGrade(grade) {
    if (grade >= 88 && grade <= 100) {
        return 'A';
    }
        else if (grade >= 80 && grade <= 87) {
            return 'B';
        }
        else if (grade >= 68 && grade <= 79) {
            return 'C';
        }
        else if (grade >= 60 && grade <= 67) {
            return 'D';
        }
        else {
            return 'F';
        }
}

// Function that collects grade inputs and returns an alert if they don't meet criteria
function getValidGrades() {
    let gradeInput;
    let numericGrade;
    do {
        gradeInput = prompt("Enter a grade between 0-100\nOr enter 999 to end entries")
        numericGrade =parseFloat(gradeInput);
        // If a non valid input is given, alert!
        if (isNaN(numericGrade) || (numericGrade < 1 || numericGrade > 100) && numericGrade !== 999) {
            alert("Please enter a valid number between 1 and 100, or 999 to stop.");
        }
    } while (isNaN(numericGrade) || (numericGrade < 1 || numericGrade > 100) && numericGrade !== 999);
    return numericGrade;
}

// Function to initiate grades array and transfer number grades to letter grades using getValidGrades function
function collectGrades() {
    let grades = [];
    let grade;
    do {
        grade = getValidGrades();
        if (grade !== 999) { // Does not push 999 to grades if inputed
            grades.push(grade);
        }
    } while (grade !== 999); // Cancels loop when 999 is entered
    return grades;
}

// Function to display the grades, for each grade in the array
function displayGrades(grades) {
    if (grades.length > 0) {
        grades.forEach((grade) => {
            let letterGrade = getLetterGrade(grade);
            document.write(`<br>Grade: ${grade} = ${letterGrade}<br>`);
        });
    } else {
            document.write("<p>No grades entered.</p>");
        }
        
}

// Main function to execute neccesary functions
function main() {
        let grades = collectGrades();
        displayGrades(grades);
}

// Execute main
main();