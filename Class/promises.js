// Example 1: Understanding Asynchronous Behavior

console.log("Start");

// setTimeout is an asynchronous function
// It executes the callback after 2000 milliseconds (2 seconds)
// Meanwhile, the rest of the code continues executing

setTimeout(() => {
    console.log("Inside setTimeout");
}, 2000);

console.log("End");

// Output Order:
// Start
// End
// Inside setTimeout
// (Because setTimeout runs after 2 seconds asynchronously)

// PROMISES
/*
Promises:
- A Promise is an object that represents the eventual result
  (success or failure) of an asynchronous operation.
- It gives the result in the future.
- It helps avoid callback hell.

A Promise has 3 states:
1. Pending   -> Initial state (waiting)
2. Fulfilled -> Operation completed successfully (resolve)
3. Rejected  -> Operation failed (reject)

Syntax:
new Promise((resolve, reject) => { })
*/

let myPromise = new Promise((resolve, reject) => {

    // Simulating success or failure
    let success = true;   // change to false to test reject

    if (success) {
        resolve("Promise is fulfilled");
    } else {
        reject("Promise is rejected");
    }
});


// Handling Promise Result

myPromise
    .then((result) => {
        // .then() runs when promise is resolved
        console.log(result);
    })
    .catch((error) => {
        // .catch() runs when promise is rejected
        console.log(error);
    });

/*
Important Points:

resolve() -> Called when operation is successful
reject()  -> Called when operation fails
.then()   -> Executes when promise is fulfilled
.catch()  -> Executes when promise is rejected

Promises improve code readability and manage asynchronous tasks
like API calls, file reading, database operations, etc.
*/