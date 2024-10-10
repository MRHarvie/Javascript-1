"use strict";

// get investment amount - loop until user enters a number
let investment = 0;
do {
    investment = parseFloat(
        prompt("Enter investment amount as xxxxx.xx", 10000));
}
while ( isNaN(investment) );

// get interest rate - loop until user enters a number
let rate = 0;
do {
    rate = parseFloat(prompt("Enter interest rate as xx.x", 7.5));
}
while ( isNaN(rate) );

// get number of years - loop until user enters a number
let years = 0;
do {
    years = parseInt(prompt("Enter number of years", 10));
}
while ( isNaN(years) );

// calculate yearly future value
let yearlyFutureValue = investment;
for (let i = 1; i <= years; i++ ) {
    yearlyFutureValue += yearlyFutureValue * rate / 100;
}

// display yearly results
document.write(`<h3>Future Value with Yearly Interest</h3>`)
document.write(`<p><label>Investment amount:</label> ${investment}</p>`);
document.write(`<p><label>Interest rate:</label> ${rate}</p>`);
document.write(`<p><label>Years:</label> ${years}</p>`);
document.write(`<p><label>Future Value:</label> ${yearlyFutureValue.toFixed(2)}</p>`);

// Calculate Monthly Investment
let monthlyFutureValue = investment;
let monthlyRate = rate / 12 / 100;
let totalMonths = years * 12;
for (let i = 1; i <= totalMonths; i++) {
    monthlyFutureValue += monthlyFutureValue * monthlyRate; // apply monthly interest
}

//display monthly results
document.write(`<h3>Future Value with Monthly Interest</h3>`)
document.write(`<p><label>Investment amount:</label> ${investment}</p>`);
document.write(`<p><label>Interest rate:</label> ${rate}</p>`);
document.write(`<p><label>Years:</label> ${years}</p>`);
document.write(`<p><label>Future Value:</label> ${monthlyFutureValue.toFixed(2)}</p>`);


