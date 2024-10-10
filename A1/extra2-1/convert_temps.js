"use strict";

// Prompt User for Temperature in Fahrenheit
const tempf = parseFloat(prompt("Enter temperature in Fahrenheit"));

// Calculating Celsius from given Temp F
const tempc = parseFloat(tempf-32)*(5/9).toFixed(1);

// Create message for dialog box
const message = `Temperature in Fahrenheit = ${tempf}\n
Temperature in Celisus = ${tempc.toFixed(1)}\n
${tempf}F = ${tempc}C`;

alert(message);

const html = `<p>Temperature in Fahrenheit = ${tempf}</p>
<p>Temperature in Celsius = ${tempc.toFixed(1)}</p>
<p>${tempf}F = ${tempc}C</p>`;

document.write(html);


