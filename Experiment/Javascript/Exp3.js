/* 1. Difference between arrow function and simple fuction.

Simple Function :
1.Defined using the 'function' keyword
2.Has its own this keyword
3.Can be used as a constructor
4.arguments object is available
5.Syntax is longer
6.Best for normal & reusable functions

Arrow Function:
1.Defined using => (arrow)
2.Does not have its own this
3.Cannot be used as constructor
4.arguments object not available
5.Syntax is short and clean
6.Best for short functions & callbacks

*/
// Simple function declaration
function add(a, b) {
    // This function adds two numbers
    return a + b;
}

// Function call
console.log(add(5, 3)); // Output: 8

// Arrow function
const addArrow = (a, b) => {
    // Arrow function returns sum of two numbers
    return a + b;
};

console.log(addArrow(6,7));


const square = (num) => {
    // num is the input number
    return num * num;
};

// Function call
console.log(square(4)); // Output: 16


// 3. write a code for switch case 
    let day = 3;
    switch (day) {
        case 1 :
            console.log("Monday");
        break;

        case 2 :
            console.log("Tuesday");
        break;

        case 3 :
            console.log("Wednesday");
        break;

        case 4:
            console.log("Thursday");
        break;
        
        case 5 :
            console.log("Friday");
        break;

        case 6 :
            console.log("Saturday");
        break;

        case 7:
            console.log("Sunday");
        break;
        
        default :
            console.log("Invalid day");
        
    }

// 4. How to use truthy and falsy value
/* Truthy and Falsy Values in JavaScript
   Purpose:
     - To understand how JavaScript treats values
       as true or false in conditional statements

   FALSY VALUES IN JAVASCRIPT :
   -- These values are ALWAYS false
      when used inside if conditions
      false        → boolean false
      0            → number zero
     -0           → negative zero
     0n           → BigInt zero
     ""           → empty string
     null         → no value
     undefined    → variable declared but not assigned
     NaN          → Not a Number


 IMPORTANT NOTE:
 Any value that is NOT in the above list
 is considered TRUTHY in JavaScript

 TRUTHY VALUES (EXAMPLES)
 These values behave like true
 -- Non-zero numbers
    let marks = 50;

    Non-empty string
    let username = "Poorva";

    Empty array and object are TRUTHY
    let arr = [];
    let obj = {};
*/
// Empty string is falsy
let password = "";
if(password){
    // This block runs only if password is NOT empty
    console.log("Password Entered");
}
else{
    console.log("Password is required");
}

// Boolean() explicitly converts value to true/false
console.log(Boolean(0));       // false
console.log(Boolean("Hello"));// true

// Double NOT (!!) does the same thing
console.log(!!null);          // false
console.log(!!"JS");          // true


/* 5. how to use terniary operators in js

The ternary operator is a short form of if-else condition in JavaScript.
Syntax:
  condition ? expression_if_true : expression_if_false;

*/
let num = 10;
// Ternary operator to check even or odd
let result = (num % 2 === 0) ? "Even" : "Odd";

console.log(result); // Output: Even

/* 6. write a code for how to use loops in js (difference between for of & for in)

A loop is used to repeat a block of code multiple times.
*/
// Array of fruits
let fruits = ["Apple", "Banana", "Mango"];

// for...of loop
for (let fruit of fruits) {
    // 'fruit' stores the VALUE of each element
    console.log(fruit);
}

// Object of student details
let student = {
    name: "Rahul",
    age: 20,
    course: "BSc CS"
};

// for...in loop
for (let key in student) {
    // 'key' stores the PROPERTY NAME
    console.log(key + " : " + student[key]);
}

/* 7. how to use map and filter function in js

map() is used to create a new array by modifying each element of an existing array.
Syntax:
   array.map((element) => {
    return modifiedValue;
});

filter() is used to create a new array with elements that match a condition.
Syntax:
    array.filter((element) => {
    return condition;
});

*/
// Original array
let numbers = [1, 2, 3, 4];

// map() function
let doubledNumbers = numbers.map((num) => {
    // Multiply each number by 2
    return num * 2;
});

console.log(doubledNumbers); // Output: [2, 4, 6, 8]

// Original array
let numbers1 = [1, 2, 3, 4, 5, 6];

// filter() function
let evenNumbers = numbers1.filter((num) => {
    // Condition to check even number
    return num % 2 === 0;
});
console.log(evenNumbers); // Output: [2, 4, 6]

/* 8. use of this keyword in for of and for in in js
this refers to the current object that is executing the code.
*/

// Object with properties
let student1 = {
    name: "Amit",
    age: 21,
    course: "BSc CS",

    // Method inside object
    showDetails: function () {

        // for...in loop
        for (let key in this) {
            // this[key] accesses object properties
            console.log(key + " : " + this[key]);
        }
    }
};

// Function call
student1.showDetails();

/* for...of does NOT work directly on objects.
It is used for arrays / strings. */
let student2 = {
    name: "Amit",
    subjects: ["Maths", "Physics", "Computer"],

    showSubjects: function () {

        // for...of loop (correct use)
        for (let subject of this.subjects) {
            console.log(subject);
        }
    }
};

// Function call
student2.showSubjects();

/* 9. Use of reduce method in js

reduce() is used to reduce an array to a single value
(like sum, total, average, max, min, etc.)
Syntax of reduce():
    array.reduce((accumulator, currentValue) => {
    return updatedValue;
}, initialValue);
*/
// Array of numbers
let numbers2 = [10, 20, 30, 40];

// reduce() to calculate sum
let sum = numbers2.reduce((total, num) => {
    // total = accumulator
    // num = current value
    return total + num;
}, 0); // initial value is 0

console.log(sum); // Output: 100

