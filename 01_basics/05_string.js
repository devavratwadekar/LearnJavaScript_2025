const name = "Devavrat";
// console.log(name);

const repoCount = 25;
// console.log(repoCount);
// console.log(name + repoCount + " value");
console.log(`My name is ${name} and my repo count is ${repoCount}`);

const newString = new String(name);
/*
    // length
    console.log(`length of ${name} is : ${name.length}`);    
    // key : value 
    console.log(`( key : value ) is 3 : ${name[3]}`);        
    // charAt()
    console.log(`The character at index 4 is ${name.charAt(4)}`);
    // charCodeAt - returns an integer between 0 and 65535 representing the UTF-16 code unit at the given index.
    console.log(`The character code ${name.charCodeAt(4)} is equal to ${name.charAt(4)}`);
*/


// # Testing if a string contains a substring
// includes()
const browserType = "Mozilla";
if(browserType.includes("zilla")){
    console.log("include Zilla !");                     // include Zilla !
}else{
    console.log("Not include Zilla here !");
}

// startsWith()
if(browserType.startsWith("zilla")){
    console.log("startWith Zilla !");
}else{
    console.log("Not startWith Zilla here !");          // Not startWith Zilla here !
}

// endsWith()
if(browserType.endsWith("zilla")){
    console.log("endsWith Zilla !");                    // endsWith Zilla !
}else{
    console.log("Not endsWith Zilla here !");
}

// # Finding the position of a substring in a string
// indexOf()
const tagline = "MDN - Resources for developers, by developers";
console.log(tagline.indexOf("developers"));             // 20


// # Extracting a substring from a string
// slice()
console.log(browserType.slice(1, 4));                   // "ozi"


// # Changing case
const radData = "My NaMe Is deVaVraT";
console.log(radData.toLowerCase());
console.log(radData.toUpperCase());


// # Updating parts of a string
const newStr = "Google"
const updated = newStr.replace("oog", "zil");
console.log(newStr);                                    // "Google"
console.log(updated);                                   // "Gzille"

let quote = "To be or not to be";
quote = quote.replaceAll("be", "code");
console.log(quote);                                     // "To code or not to code"


// # concat
const str1 = "Hello";
const str2 = "World";
console.log(str1.concat(" ", str2));                    // Hello World

// mactch
const paragraph = "The quick brown fox jumps over the lazy dog. It barked.";
const regex = /[A-Z]/g;
const found = paragraph.match(regex);
console.log(found);                                     // [ 'T', 'I' ]

// trim
const greeting = "   Hello world!   ";
console.log(greeting.trim());                           // Hello World

//  split()
const str = "The quick brown fox jumps over the lazy dog.";
const words = str.split(" ");
console.log(words[3]);                                  // fox

// search()
const paragraph1 = "I think Ruth's dog is cuter than your dog!";
const regex1 = /[^\w\s']/g;
console.log(paragraph1.search(regex1));                 // 41

// substring
const str3 = "Mozilla";
console.log(str3.substring(1, 3));                      // oz