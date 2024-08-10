// Define the sum function if needed
const sum = (a, b) => a + b;

// Define the fromEuroToDollar function
const fromEuroToDollar = function(valueInEuro) {
    let valueInDollar = valueInEuro * 1.07;
    return valueInDollar;
}

// Define the fromDollarToYen function
const fromDollarToYen = function(dollarAmount) {
    let euroAmount = dollarAmount / 1.07; // Convert dollars to euros
    let yenAmount = euroAmount * 156.5; // Convert euros to yen
    return yenAmount;
}

// Define the fromYenToPound function
const fromYenToPound = function(yenAmount) {
    let euroAmount = yenAmount / 156.5; // Convert yen to euros
    let poundAmount = euroAmount * 0.87; // Convert euros to pounds
    return poundAmount;
}

// Export the functions
module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound }