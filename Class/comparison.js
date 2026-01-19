// Camparison Operators in JavaScript

/* Comparison operators are used to compare two values.
   The result of a comparison is always true or false.
*/

// Basic Operators 
/*console.log(2 >= 1);  // true
console.log(2 > 1);     // true
console.log(2 <= 1);    //false
console.log(2 < 1);     //false
console.log(2 == 1);    //false
console.log(2 != 1);   // true
*/

// Comparison with different data types

/* When we compare string with number,
   JavaScript automatically converts string into number.
*/
console.log("2" > 1);  // true -> "2" is converted to number 2, and 2 > 1
console.log("02" > 1); // do not give input like this beacause it not give correct output 

/*
Explanation:
- Equality (==) and comparisons (>, <, >=, <=) behave differently with null.
- That is why null >= 0 is true but null == 0 is false.
*/

console.log(null > 0);  // false
console.log(null == 0); // false -> null only equals undefined, not 0
console.log(null >= 0); // true

/*
undefined does not convert to 0 like null,
so all numeric comparisons with undefined return false.
*/
console.log(undefined == 0); // false
console.log(undefined > 0);  // false
console.log(undefined < 0);  // false

// Strict Equality (===)
/*
==  -> checks only value
=== -> checks value AND data type
*/
console.log("2" == 2); // true
console.log("2" === 2);// false -> data types are different (string vs number)








