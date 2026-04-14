// FETCH API
/*
Fetch is a built-in JavaScript method used to make HTTP requests to a server. 
It returns a Promise and is used to retrieve or send data.

It is mainly used to:
- Get data from server (GET)
- Send data to server (POST)
- Update data (PUT)
- Delete data (DELETE)

Syntax:
fetch(url, options)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log(error))

Fetch returns a Promise.
*/
// Example: Fetching user data from a fake API

fetch("https://jsonplaceholder.typicode.com/users/1")

.then((response) => {

    /*
    Step 1:
    The fetch() method returns a Promise.
    When the request is successful,
    we get a Response object.

    response.json() converts JSON data
    into JavaScript object.
    It also returns a Promise.
    */

    // Optional: Check if response is OK (status 200-299)
    if (!response.ok) {
        throw new Error("Network response was not OK");
    }

    return response.json();
})

.then((data) => {

    /*
    Step 2:
    Now we receive actual data
    converted into JavaScript object.
    */

    console.log("User Data:");
    console.log(data);

})

.catch((error) => {

    /*
    Step 3:
    .catch() runs if:
    - Network error occurs
    - Server returns error
    - We manually throw error
    */

    console.log("Error occurred:");
    console.log(error);

});

/*
Important Points:

1. fetch() returns a Promise.
2. .then() handles success.
3. .catch() handles errors.
4. response.json() converts JSON to JS object.
5. Fetch is asynchronous.

Common Use Cases:
- Calling REST APIs
- Getting database data
- Connecting frontend to backend
*/

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

Interview Questions : 

what is promises? states ?
diff bet promises and callback ?
what does fetch return ?
why do we use response.json?
diff bet then / catch and async /await?
what is promise chaining?
*/