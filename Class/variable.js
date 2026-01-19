// Difference between var, let and const 
/*
var : 
-- Can be redeclared
-- Can be reassigned (updates within the same scope)
-- Declares variables with function or Has global scope (can access from anywhere)

let:
-- Cannot be redeclared within same block.
-- Can be reassigned (allow to update values)
-- Has block scope 

const :
-- Cannot be redeclared
-- Cannot be reassigned after initialization.
-- Has Block scope 
*/

// var example
var p = 10;
var p = 20;   // Re-declaration allowed
p = 30;       // Update allowed
console.log(p); // Output: 30

// Example of const
const email = "poorva@25gmail.com";
// email = "saniya@38gmail.com";   // This will give error because const cannot be reassigned
console.log(email);

// Example of let
let price = 40;
// let price = 20; // Re-declaration NOT allowed
price  = 60; // Update allowed
console.log(price); // 60

/* Data Types in JavaScript

Primitive Data Types:
- Number, String, Boolean, Undefined, Null, Symbol, BegIt

Non-Primitive Data Types:
- Object, Array, Function
*/

// Examples of Primitive Data Types
let age = 21;                      // Number
let studentName = "Poorva";        // String
let isStudent = true;              // Boolean
let address;                       // Undefined
let marks = null;                  // Null
let largeNumber = 12345678901234567890n; // BigInt
let id = Symbol("uniqueId");       // Symbol

console.log(age, studentName, isStudent, address, marks, largeNumber, id);

// Examples of Non-Primitive Data Types
// Object
let student = {
    name: "Poorva",
    rollNo: 25
};

// Array
let subjects = ["JavaScript", "HTML", "CSS"];

// Function
function greet() {
    console.log("Hello Students");
}

console.log(student);
console.log(subjects);
greet();

// Variable Declaration Examples
let accountId = 101;          // Number
let accountName = "poorva";   // String
let city;                     // Undefined
let isLogin = true;           // Boolean
let joinDate = null;          // Null

console.log("Account Id is :", accountId);
console.log("Account name :", accountName);
console.log("The city is :", city);
console.log("Is login :", isLogin);
console.log("The joining date is :", joinDate);

// Checking data types using typeof
console.log(typeof accountId);     // number
console.log(typeof accountName);   // string
console.log(typeof city);          // undefined
console.log(typeof isLogin);       // boolean
console.log(typeof joinDate);      // object (this is JavaScript behavior for null)

/* •	Difference between null and undefined
undefined:
- A variable is declared but not assigned any value

null:
- A variable is assigned with empty or no value intentionally
*/
let x;
let y = null;

console.log(x);  // undefined
console.log(y);  // null

console.log(typeof x); // undefined
console.log(typeof y); // object





