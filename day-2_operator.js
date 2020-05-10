
function solve (meal_cost , tip_percent , tax_percent) {
    // round the total cost to the nearest dollar 
const total_cost = Math.round(meal_cost + (meal_cost * tip_percent/100) + (meal_cost * tax_percent/100));

// print = the total meal cost
console.log(total_cost);
}