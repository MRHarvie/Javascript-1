"use strict";

let repeat;

do {

    // get investment amount - loop until user enters a number
    let investment = 0;
    do {
        investment = parseFloat(
            prompt("Enter investment amount as xxxxx.xx", 10000));
    }
    while ( isNaN(investment) || investment <= 0 );

    // get interest rate - loop until user enters a number
    let rate = 0;
    do {
        rate = parseFloat(prompt("Enter interest rate as xx.x", 7.5));
    }
    while ( isNaN(rate) || rate <= 0 || rate >= 15);

    // get number of years - loop until user enters a number
    let years = 0;
    do {
        years = parseInt(prompt("Enter number of years", 10));
    }
    while ( isNaN(years) || years <=0 );

    // calulate future value
    

    // display results
    document.write(`<p>\nInvestment amount = ${investment} Interest Rate = ${rate} Years = ${years}</p>`.bold());
    let futureValue = investment;
    for (let i = 1; i <= years; i++)  {    
        let interest = futureValue * rate / 100;
        futureValue += interest;
        document.write(`<p>Year=${i} Interest=${interest.toFixed(2)} Value=${futureValue.toFixed(2)}`)
    }
    repeat = prompt("Do you want to perform another calculation? (y/n)", "no").toLowerCase();
} while (repeat === "yes")
