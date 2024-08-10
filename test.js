// Import the functions from app.js
const { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound } = require('./app.js');

// Test the sum function
test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
});

// Test the fromEuroToDollar function
test('converts 1 Euro to 1.07 Dollar', () => {
    expect(fromEuroToDollar(1)).toBe(1.07);
});

// Test the fromDollarToYen function
test('converts 1 Dollar to Yen', () => {
    // 1 Dollar is approximately 146.26 Yen (1/1.07 * 156.5)
    expect(fromDollarToYen(1)).toBeCloseTo(146.26, 2);
});

// Test the fromYenToPound function
test('converts 156.5 Yen to 0.87 Pound', () => {
    // 156.5 Yen is approximately 0.87 Pound (156.5/156.5 * 0.87)
    expect(fromYenToPound(156.5)).toBeCloseTo(0.87, 2);
});