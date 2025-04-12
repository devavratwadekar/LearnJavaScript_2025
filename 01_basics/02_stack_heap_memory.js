// # STACK ---> Primitive
let myName = "devavrat_wadekar";
let myFullName = myName;
myFullName = "devavrat_kishor_wadekar";

console.log(myName);        // devavrat_wadekar
console.log(myFullName);    // devavrat_kishor_wadekar


// # HEAP  ---> Non-Primitive
let userOne = {
    name : "pranav",
    age : 24
}
let userTwo = userOne;
userTwo.age = 25;

console.log(userOne.age);       // 25
console.log(userTwo.age);       // 25
