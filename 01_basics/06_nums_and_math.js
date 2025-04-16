
const number = 100;
console.log(number)                         // 500

const balance = new Number(500);
console.log(balance)                        // [Number: 500]

console.log(balance.toString())             // 500
console.log(balance.toString().length)      // 3
console.log(balance.toFixed(2))             // 500.00

const anotherNumber = 23.8956
console.log(anotherNumber.toPrecision(3));  // 23.9

const anotherNum = 123.8956
console.log(anotherNum.toPrecision(3));     // 124


const one_lac = 100000;
console.log(one_lac.toLocaleString("en-IN"));   // 1,00,000


// ++++++++++++++++++++++++++++++ Maths ++++++++++++++++++++++++++++++++++++++++

console.log(Math);      // Object [Math] {}
console.log(Math.E);        // Euler's number and the base of natural logarithms; approximately 2.718.
console.log(Math.LN10);     // Natural logarithm of 10; approximately 2.303.
console.log(Math.LN2);      // Natural logarithm of 2; approximately 0.693.
console.log(Math.LOG10E);   // Base-10 logarithm of E; approximately 0.434.
console.log(Math.LOG2E);    // Base-2 logarithm of E; approximately 1.443.
console.log(Math.PI);       // Ratio of a circle's circumference to its diameter; approximately 3.14159.
console.log(Math.SQRT1_2);  // Square root of ½; approximately 0.707.
console.log(Math.SQRT2);    // Square root of 2; approximately 1.414.



// Math.abs() : Returns the absolute value of a number (the value without regard to whether it is positive or negative)
function difference(a, b) {
    return Math.abs(a - b);
}
console.log(difference(3, 5));      // Expected output: 2
console.log(difference(5, 3));      // Expected output: 2
console.log(difference(1.23456, 7.89012));  // Expected output: 6.6555599999999995


// Math.acos() : Returns the arc cosine (or inverse cosine) of a number.
function calcAngle(adjacent, hypotenuse) {
    return Math.acos(adjacent / hypotenuse);
}
console.log(calcAngle(8, 10));         // Expected output: 0.6435011087932843
console.log(calcAngle(5, 3));          // Expected output: NaN


// Math.acosh() static method returns the inverse hyperbolic cosine of a number. 
console.log(Math.acosh(0.999999999999));        // Expected output: NaN
console.log(Math.acosh(1));                     // Expected output: 0
console.log(Math.acosh(2));                     // Expected output: 1.3169578969248166
console.log(Math.acosh(2.5));                   // Expected output: 1.566799236972411


//  Math.asin() static method returns the inverse sine (in radians) of a number.
function calcAngle(opposite, hypotenuse) {
    return Math.asin(opposite / hypotenuse);
}
console.log(calcAngle(6, 10));          // Expected output: 0.6435011087932844
console.log(calcAngle(5, 3));           // Expected output: NaN


// Math.asinh() static method returns the inverse hyperbolic sine of a number.
console.log(Math.asinh(1));             // Expected output: 0.881373587019543
console.log(Math.asinh(0));             // Expected output: 0
console.log(Math.asinh(-1));            // Expected output: -0.881373587019543
console.log(Math.asinh(2));             // Expected output: 1.4436354751788103


// # IMP
// Math.round() static method returns the value of a number rounded to the nearest integer.
console.log(Math.round(0.9));       // Expected output: 1
console.log(Math.round(5.95), Math.round(5.5), Math.round(5.05));       // Expected output: 6 6 5
console.log(Math.round(-5.05), Math.round(-5.5), Math.round(-5.95));    // Expected output: -5 -5 -6

// Math.ceil() static method always rounds up and returns the smallest integer greater than or equal to a given number.
console.log(Math.ceil(0.95));           // Expected output: 1
console.log(Math.ceil(4));              // Expected output: 4
console.log(Math.ceil(7.004));          // Expected output: 8
console.log(Math.ceil(-7.004));         // Expected output: -7

// Math.floor() static method always rounds down and returns the largest integer less than or equal to a given number.
console.log(Math.floor(5.95));      // Expected output: 5
console.log(Math.floor(5.05));      // Expected output: 5
console.log(Math.floor(5));         // Expected output: 5
console.log(Math.floor(-5.05));     // Expected output: -6

// Math.max() static method returns the largest of the numbers given as input parameters, or -Infinity if there are no parameters.
console.log(Math.max(1, 3, 2));         // Expected output: 3
console.log(Math.max(-1, -3, -2));      // Expected output: -1

// Math.min() static method returns the smallest of the numbers given as input parameters, or Infinity if there are no parameters.
console.log(Math.min(2, 3, 1));         // Expected output: 1
console.log(Math.min(-2, -3, -1));      // Expected output: -3

// Math.pow() static method returns the value of a base raised to a power.
console.log(Math.pow(7, 3));            // Expected output: 343
console.log(Math.pow(4, 0.5));          // Expected output: 2
console.log(Math.pow(7, -2));           // Expected output: 0.02040816326530612
// (1/49)
console.log(Math.pow(-7, 0.5));         // Expected output: NaN

// Math.random() static method returns a floating-point, pseudo-random number that's greater than or equal to 0 and less than 1, with approximately uniform distribution over that range — which you can then scale to your desired range. The implementation selects the initial seed to the random number generation algorithm; it cannot be chosen or reset by the user.
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
console.log(getRandomInt(3));       // Expected output: 0, 1 or 2
console.log(getRandomInt(1));       // Expected output: 0
console.log(Math.random());         // Expected output: a number from 0 to <1


// ++++++++++++++++++++++++++ Example ++++++++++++++++++++++++++++++++++++++
console.log(Math.random());
console.log(Math.random() * 10);
console.log((Math.random() * 10) + 1);

const min = 10;
const max = 20;
console.log(Math.floor(Math.random() * (max - min + 1)) + min);