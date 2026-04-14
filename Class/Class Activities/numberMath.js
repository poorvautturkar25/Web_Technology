// Number Object & Methods 

// Creating a number object 
const balance = new Number(1000000);
console.log(balance); // Used when we want to access Number-specific methods
console.log(balance.toString()); // Converts number to string ,  Useful when doing string operations like length, concatenation.

console.log(balance.valueOf(balance));
// Returns the primitive numeric value
// Useful when Number object needs to be treated as a normal number

console.log(balance.toFixed(2)); 
// Formats number to fixed decimal places
// when you built E-commerce website and precisions value (number) is so long then we use to fix().

console.log(balance.toString().length); 
console.log(balance.toLocaleString());// Default US format → 1,000,000
console.log(balance.toLocaleString('en-IN'));// Use to see numbers in indian standard 

// Math Operations
console.log(Math); // Object
console.log(Math.abs(-4)); // Absolute value converts nagative value to positive and positive to positive .
console.log(Math.floor(4.6)); // Rounds down to nearest lowest integer → 4
console.log(Math.ceil(4.6)); // Rounds up to nearest highest integer → 5
console.log(Math.round(4.6)); // Rounds to nearest integer → 5
console.log(Math.min(1,2,3,4)); // Minimum value 
console.log(Math.max(1,2,3,4)); // Maximum value

//Activity Math.random use 
/* Math.random()

• Generates a pseudo-random number
• Range: 0 (inclusive) to 1 (exclusive)
• Output example: 0.2345, 0.9876

Why We Use It:
• Randomness in applications
• Simulations & games
• Testing scenarios
• User experience enhancement
*/
console.log(Math.random());

// Generate random number between 1 and 10
const randomNumber = Math.floor(Math.random() * 10) + 1;
console.log(randomNumber);


