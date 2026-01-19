/* Data Type Conversion in JavaScript

In JavaScript, we can convert data from one type to another.
This is called Type Conversion or Type Casting. */

// Checking original data types

let score = "22"; // string
let scoreforbool = true; // Boolean
let scorefornull = null; // Null
let scoreforundefined ;  // Undefined

console.log(typeof(score));         // string
console.log(typeof(scoreforbool));  // boolean
console.log(typeof(scorefornull));  // object
console.log(typeof(scoreforundefined)); // Undefined


/* String to Number Conversion

Number() function is used to convert string into number.

- If string contains only digits → converts successfully
- If string contains letters → result will be NaN (Not a Number)
*/

let jj = "33";                // valid numeric string
let jjconvert = Number(jj);   // converts string to number

console.log(jj);              // "33"
console.log(jjconvert);       // 33

console.log(typeof jj);        // string
console.log(typeof jjconvert); // number


// Example of invalid conversion

let invalid = "33abc";
let invalidConvert = Number(invalid);

console.log(invalidConvert);   // NaN (Not a Number)
console.log(typeof invalidConvert); // number

// Number to String Conversion
/*
String() function is used to convert number into string
*/

let ss = 45;
let ssconvert = String(ss);

console.log(typeof(ss));        // number
console.log(typeof(ssconvert)); //string

//Activity 1 : Do all data type conversion.

// Boolean Conversions
/* 
Boolean conversion rules:
- 1 → true
- 0 → false
- empty string "" → false
- any non-empty string → true
*/
let isActive = 1;
let boolConvert = Boolean(isActive);

console.log(boolConvert);      // true
console.log(typeof boolConvert); // boolean

let emptyString = "";
console.log(Boolean(emptyString)); // false

// Other Possible Conversions 

// Null to Number
console.log(Number(null));   //0

// Undefined to Number
console.log(Number(undefined)); // NaN

// Boolean to Number
console.log(Number(true));    // 1
console.log(Number(false));   // 0

// Arithmetic Operations 
console.log(2+3);   // Add
console.log(5-3);   // Subtract
console.log(5*9);   // Multiply
console.log(20/4);  // Division
console.log(2%2);   // Modulus

// String Concatenation
let str1 = "Hello";
let str2 = " Poorva";
console.log(str1 + str2);

// Conversions
// JavaScript automatically only converts string to numbers in arithmatic operations
console.log("1" + 2);
console.log("1" + 2 + 2);
console.log(1 + "2");
console.log(1 + 3 + "2");
console.log((3+4)*5%3);





