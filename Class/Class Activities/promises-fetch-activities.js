/* Activities :
1. Where we use promises in company level
2. why promises better than call back 
3. write code for 3 examples of promises.
4. 4 examples with promises - with async and await
5. what is fetch and where use in company level
6. 4 examples of fetch
7. write ex of fetch eith await and aync 
8. fetch host - show only first 5 recoreds
9. create one fetch promises manaually and resolve after 3 sec and reject after 3 sec
*/

/* 1. Where we use promises in company level?
--> At company level, Promises are used to handle asynchronous operations in real-world applications. 
    — meaning tasks that take time to complete.
    ex. Imagine:
User clicks Login
→ Frontend sends request to backend
→ Backend checks database
→ Returns success or error
All this uses Promises.

Common Uses:
1.API calls (fetching data from server)
2.Database queries (get/insert/update data)
3.File handling (read/write files)
4.Authentication (login, OTP verification)
5.Payment processing
6.Third-party services (Google Maps, email, SMS)

Why companies use Promises?
1.To manage success and errors properly
2.To avoid callback hell
3.To write clean and readable code
4.Works well with async/await
*/

/* 2. Why promises better than call back ?
--> cCallback:
A callback is a function that is passed as an argument to another function
and is executed after some task is completed.
Example of Callback:
function greet(name, callback) {
    console.log("Hi " + name);
    callback();   // calling the callback function
}

function sayBye() {
    console.log("Bye!");
}

greet("Poorva", sayBye);

Here:
sayBye is a callback function.
It runs after greet finishes its work.

Callbacks run a function after a task finishes.

Promises are better than callbacks because they:
1️.Avoid Callback Hell
Callbacks can create deeply nested code (hard to read).
Promises use .then() chaining → cleaner structure.

2️.Better Error Handling
In callbacks, error handling must be done separately at each level.
In Promises, one .catch() handles all errors.

3️.More Readable Code
Promises make asynchronous code easier to understand and maintain.

4️.Supports async/await
Promises work with modern async/await, making code look like normal synchronous code.
*/

//3.Write code for 3 examples of promises.
/*
// Example 1: Login Validation Promise
function login(username,password) {
    return new Promise((res,rej) =>{
        if(username == "admin" && password =="1234"){
            res("Login Successful");
        }
        else{
            rej("Invalid Credentials");
        }
    });
}

login("admin","1234")
  .then((message) =>{
    console.log(message);
  })
  .catch((error) =>{
    console.log(error);
  })

//Example 2: Promise for Marks Result
function checkResult(marks) {

    return new Promise((resolve, reject) => {

        if (marks >= 35) {
            resolve("Student Passed");
        } else {
            reject("Student Failed");
        }

    });
}

checkResult(60)
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log(error);
    });


// Example 3: Division Promise

function divideNumbers(a, b) {

    return new Promise((resolve, reject) => {

        if (b === 0) {
            reject("Cannot divide by zero");
        } else {
            resolve("Result: " + (a / b));
        }

    });
}

divideNumbers(10, 2)
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log(error);
    });
*/

// 4. Write 4 examples with promises - with async and await
/*
// Example 1: Simple async/await
function getMessage() {
    return new Promise((resolve) => {
        resolve("Hello from Async/Await");
    });
}

async function showMessage() {
    let result = await getMessage();
    console.log(result);
}

showMessage();

// Example 2: Product Price Check using async/await

function checkPrice(price) {
    return new Promise((resolve, reject) => {
        if (price > 0) {
            resolve("Valid Product Price");
        } else {
            reject("Invalid Product Price");
        }
    });
}

async function verifyPrice() {
    try {
        let result = await checkPrice(500);
        console.log(result);
    } catch (error) {
        console.log(error);
    }
}

verifyPrice();

// Example 3: Order Status Check

function getOrderStatus(orderId) {
    return new Promise((resolve, reject) => {
        if (orderId === 101) {
            resolve("Order Delivered");
        } else {
            reject("Order Not Found");
        }
    });
}

async function checkOrder() {
    try {
        let status = await getOrderStatus(101);
        console.log(status);
    } catch (error) {
        console.log(error);
    }
}

checkOrder();


// Example 4: Temperature Checker

function checkTemperature(temp) {
    return new Promise((resolve, reject) => {
        if (temp <= 30) {
            resolve("Normal Temperature");
        } else {
            reject("High Temperature");
        }
    });
}

async function verifyTemperature() {
    try {
        let result = await checkTemperature(28);
        console.log(result);
    } catch (error) {
        console.log(error);
    }
}

verifyTemperature();
*/

/* 5. What is fetch and where use in company level?
--> Fetch :
Fetch is a built-in JavaScript method used to make HTTP requests to a server.
In companies, it is used to connect frontend and backend for API calls, 
login systems, data fetching, and real-time updates.

It is mainly used to:
1.Get data from server (GET)
2.Send data to server (POST)
3.Update data (PUT)
4.Delete data (DELETE)

Where Fetch is Used in Company Level?
1️.API Calls:
Getting user data
Showing product list
Loading dashboard data

2️.Login & Registration:
Sending username/password to server
Getting authentication token

3️.E-commerce Websites:
Adding products to cart
Placing orders
Checking order status

4️.Real-Time Applications:
Chat applications
Notifications
Updating data without refreshing page

5️.Third-Party APIs:
Google Maps
Payment gateways
Weather APIs

Fetch returns a Promise.
It is asynchronous.
*/

// 6. Write 4 examples of fetch.
/*
// Example 1: Get all users
fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(data => {
        console.log("All Users:");
        console.log(data);
    })
    .catch(error => console.log(error));

// Example 2: Create new post (POST request)
fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        title: "New Post",
        body: "This is sample content",
        userId: 1
    })
})
.then(response => response.json())
.then(data => {
    console.log("Post Created:");
    console.log(data);
})
.catch(error => console.log(error));
/*
// Example 3: Update a post (PUT request)
fetch("https://jsonplaceholder.typicode.com/posts/1", {
    method: "PUT",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        id: 1,
        title: "Updated Title",
        body: "Updated content",
        userId: 1
    })
})
.then(response => response.json())
.then(data => {
    console.log("Updated Data:");
    console.log(data);
})
.catch(error => console.log(error));

// Example 4: Delete a post
fetch("https://jsonplaceholder.typicode.com/posts/1", {
    method: "DELETE"
})
.then(response => {
    if (response.ok) {
        console.log("Post Deleted Successfully");
    }
})
.catch(error => console.log(error));
*/

/* 7. Write ex of fetch with await and async 
--> Fetch with async/await is used to make HTTP requests in a cleaner way using 
await instead of .then() and error handling with try...catch.
ex. :
// Example 1: Fetch single user (GET)

async function getUser() {
    try {
        let response = await fetch("https://jsonplaceholder.typicode.com/users/1");

        if (!response.ok) {
            throw new Error("Network response not OK");
        }

        let data = await response.json();
        console.log("User Data:", data);

    } catch (error) {
        console.log("Error:", error);
    }
}

getUser();
*/

/* 8. What is fetch host - show only first 5 recoreds
--> Fetch host means the server (domain) from which we are requesting data.

In company level:
- It is the backend server
- It may be company API server
- It may be cloud server (AWS, Azure, etc.)

*/
// Fetch from host and display first 5 records

async function getFirstFive() {
    try {
        let response = await fetch("https://jsonplaceholder.typicode.com/users");

        let data = await response.json();

        // Showing only first 5 records
        let firstFive = data.slice(0, 5);

        console.log("First 5 Records:");
        console.log(firstFive);

    } catch (error) {
        console.log("Error:", error);
    }
}

getFirstFive();

// 9. Create one fetch promises manaually and resolve after 3 sec and reject after 3 sec
// Promise that randomly resolves or rejects after 3 seconds

let myPromise = new Promise((resolve, reject) => {

    setTimeout(() => {

        let success = Math.random() > 0.5;

        if (success) {
            resolve("Resolved after 3 seconds");
        } else {
            reject("Rejected after 3 seconds");
        }

    }, 3000);

});

myPromise
    .then(result => console.log(result))
    .catch(error => console.log(error));