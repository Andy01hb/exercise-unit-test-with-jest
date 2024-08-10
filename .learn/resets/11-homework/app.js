// Define the sum function if needed
const sum = (a, b) => a + b;

// Define the fromEuroToDollar function
const fromEuroToDollar = function(valueInEuro) {
    let valueInDollar = valueInEuro * 1.07;
    return valueInDollar;
}

// Export the functions
module.exports = { sum, fromEuroToDollar }