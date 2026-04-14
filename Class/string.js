//Old Way of Printing String 
const str1 = "JS";
console.log(str1);

// New Way - String Interpolation 
/* String Interpolation: 
 - Use backticks (``)
 - Variables can be directly used inside string using ${ }
 - This is the modern and recommended way to print strings
*/
console.log(`Hello My Course Name ${str1}`);

// Sting object and methods
const gameCount = new String("DL");

console.log(gameCount.length); // gives length of string
console.log(gameCount[1]);    //  shows character at given index (1) 
console.log(gameCount.toUpperCase()); // converts string to uppercase
console.log(gameCount.toLowerCase()); // converts string to lowercase
console.log(gameCount.charAt(1));  //  shows character at given index
console.log(gameCount.indexOf("L")); // gives index of given character

const newstr2 = "  JS  ";

console.log(newstr2);  // prints with spaces
console.log(newstr2.trim()); // prints without spaces

// Activity --- Use all string options like include, split, 
let message = "Hello JavaScript World";

// includes()--> checks whether a string contains given word
console.log(message.includes("JavaScript")); // true
console.log(message.includes("Python"));  // false

// startsWith() --> checks if string starts with given text
console.log(message.startsWith("Hello")); // true

// endsWith() --> checks if string ends with given text
console.log(message.endsWith("World")); // true

// split() – splits string into array based on space
console.log(message.split(" ")); // output: ["Hello", "JavaScript", "World"]

// replace() – replaces a word in string
console.log(message.replace("World", "Students"));  // output: Hello JavaScript Students

// substring() – extracts part of string using index
console.log(message.substring(0, 5));         
// output: Hello

// slice() – extracts part of string using index
console.log(message.slice(6, 16));            
// output: JavaScript

/*
- Strings in JavaScript are immutable (cannot be changed directly)
- All string methods return new string instead of modifying original
*/




