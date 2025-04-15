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



