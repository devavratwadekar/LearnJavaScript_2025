// console.log(2 > 1);         // true
// console.log(2 < 1);         // false
// console.log(2 == 1);        // false
// console.log(2 <= 1);        // false
// console.log(2 != 1);        // true
// console.log(2 >= 1);        // true

// console.log("1" > 2);           // false
// console.log("01" > 2);           // false

console.log(null > 0);          // false
console.log(null == 0);         // false
console.log(null >= 0);         // true
// The reason is that and equality check == and comparison > < >= <= work differently.
// Comparison convert null to number, treat it as 0.
// That's why null >= 0 is true and null > 0 is false 


console.log(undefined > 0);     // false
console.log(undefined < 0);     // false
console.log(undefined == 0);    // false

console.log("2" == 2);          // true
console.log("2" === 2);         // false
