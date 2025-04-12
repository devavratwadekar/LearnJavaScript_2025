/*
# Primitive - 7 Types 
    1. String
    2. Number
    3. null
    4. Boolean
    5. undefined
    6. Symbol
    7. BigInt

# JS is dynamic programing language

*/
const value1 = 100;             // typeof --> number
const valueScore = 300.03       // typeof --> number

const isLoggedIn = false;       // typeof --> boolean
const isTemperature = null;     // typeof --> object
let userEmail;

const id = Symbol('123');       // typeof --> symbol
const anotherId = Symbol('123');
// console.log(id == anotherId);       // false

const bigNumber = 1214645464464664646464646464n;
// console.log(typeof bigNumber);      // bigint

/*
# Reference (Non primitive)
    1. Array
    2. Object
    3. Functions

*/

const heros = ["shaktiman","hatim","iron-man"];

let myObject = {
    name: "Subodh",
    age: 20,
    address: "Mumbai"
}

const myFunction = function(){
    console.log("Hello World!");
    
}

console.log(typeof id);

/*
    1. Let val be ? Evaluation of UnaryExpression.
    2. If val is a Reference Record, then
    a. If IsUnresolvableReference(val) is true, return "undefined".
    3. Set val to ? GetValue(val).

    4. If val is undefined, return "undefined".
    5. If val is null, return "object".
    6. If val is a String, return "string".
    7. If val is a Symbol, return "symbol".
    8. If val is a Boolean, return "boolean".
    9. If val is a Number, return "number".
    10. If val is a BigInt, return "bigint".
    
    11. Assert: val is an Object.
    12. NOTE: This step is replaced in section B.3.6.3.
    13. If val has a [[Call]] inte
*/