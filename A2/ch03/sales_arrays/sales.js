"use strict";

const region1 = [1540, 1130, 1580, 1105];
const region2 = [2010, 1168, 2305, 4102];
const region3 = [2450, 1847, 2710, 2391];
const region4 = [1845, 1491, 1284, 1575];
const region5 = [2120, 1767, 1599, 3888];

const regions = [region1, region2, region3, region4, region5];

// Calculate total sales by quarter
document.write("<h3>Sales by Quarter</h3>");
const totalSalesByQuarter = [0, 0, 0, 0];
for (let i = 0; i < regions.length; i++) {
  for (let j = 0; j < regions[i].length; j++) {
    totalSalesByQuarter[j] += regions[i][j];
  }
}
for (let i = 0; i < totalSalesByQuarter.length; i++) {
  document.write(`Q${i + 1}: $${totalSalesByQuarter[i]}<br>`);
}

// Calculate total sales per region
document.write("<h3>Sales by Region</h3>");
for (let i = 0; i < regions.length; i++) {
  const totalSalesForRegion = regions[i].reduce((sum, value) => sum + value, 0);
  document.write(`Region ${i + 1}: $${totalSalesForRegion}<br>`);
}

// Calculate total sales for all regions
document.write("<h3>Total Sales</h3>");
let totalSales = 0;
for (let i = 0; i < regions.length; i++) {
  totalSales += regions[i].reduce((sum, value) => sum + value, 0);
}
document.write(`$${totalSales}<br>`);
