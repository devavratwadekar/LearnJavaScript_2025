let score1 = 33;
console.log(typeof score1);      // number
let valueInNumber1 = Number(score1);
console.log(valueInNumber1);     // 33

let score2 = "33";
console.log(typeof score2);      // string
let valueInNumber2 = Number(score2);
console.log(valueInNumber2);     // 33

let score3 = "33abc";
console.log(typeof score3);      // string
let valueInNumber3 = Number(score3);
console.log(valueInNumber3);     // NaN

let score4 = "";
console.log(typeof score4);      // string
let valueInNumber4 = Number(score4);
console.log(valueInNumber4);     // 0

let score5 = null;
console.log(typeof score5);      // object
let valueInNumber5 = Number(score5);
console.log(valueInNumber5);     // 0

let score6 = undefined;
console.log(typeof score6);      // undefined
let valueInNumber6 = Number(score6);
console.log(valueInNumber6);     // NaN

let score7 = true;
console.log(typeof score7);      // boolean
let valueInNumber7 = Number(score7);
console.log(valueInNumber7);     // treu -> 1 ; false -> 0

let score8 = 33;
console.log(typeof score8);             // number
let valueInString8 = String(score8);
console.log(valueInString8);            // 333
console.log(typeof valueInString8);     // string

let score9 = "";
console.log(typeof score9);              // string
let valueInBoolean9 = Boolean(score9);
console.log(valueInBoolean9);            // "" -> false; "devavrat" ->true
console.log(typeof valueInBoolean9);     // boolean


// ******************************* Operations **********************************
console.log(2+2);   // 4
console.log(2-2);   // 0
console.log(2*2);   // 4
console.log(2**3);  // 8
console.log(2/3);   // 0.666666666666
console.log(2%3);   // 2

let str1 = "Hello";
let str2 = " Devavrat";
let str3 = str1 + str2;
console.log(str3);       // Hello Devavrat


console.log(1 + "2");         // 12
console.log("1" + 2);         // 12
console.log("1" + 2 + 2);     // 122
console.log(+true);           // 1
console.log(+"");             // 0

let num1, num2, num3;
num1 = num2 = num3 = 2 + 3;
console.log(num1 + num2 + num3);    // 15

let gameCounter = 100;
++gameCounter;
console.log(gameCounter);           // 101









