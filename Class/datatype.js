/* JavaScript is dyanamic language.
   This means we do not need to specify data type while declaring variables.
   Data type is decided automatically at runtime.
*/

// Symbol is used for unique id and it is basically used in .net 
/* Symbol:
- Symbol is a primitive data type
- It is used to create unique identifiers
- Even if two symbols have same value, they are always different
*/

let a = Symbol("12");
console.log(a);

let b = Symbol("34");
console.log(b);

let id = 123;
console.log(id===a); // false because symbol and number are different types


// Array
const subjects = ["JavaScript", "HTML", "CSS"];
console.log(subjects);

/*
Object:
- Object is a collection of key-value pairs
- It is used to store real world entity information
*/

const myObj ={
    fname: "Poorva",
    age:20
};
console.log(myObj);
console.log(myObj.age); // use myObj.age to just print age 

// Function
 
function call()
{
    console.log("Poorva");
    
}
console.log(call());

let demoFun = function call()
           {
                console.log("Poorva");
    
           }
console.log(demoFun);

// Activity
/*
- A function is a block of code designed to perform a specific task.
- Functions help in code reusability.
- A function executes only when it is called.
- Functions make programs organized and easy to understand.
*/

function displayName() {           // Function Declaration
    console.log("Poorva");         // Function Definition
}
displayName();                     // Function Calling

function addNumbers(x, y) {
    return x + y;                  // returning result
}

let result = addNumbers(10, 20);   // passing arguments
console.log("Addition is:", result);


// Memory
//Stack - primitive use , whatever you can declare variable it gives copy 
// heap - non primitive , it gives Reference, original value

// stack example , primitive data type stored in stack . 
// When we assign one variable to another , a copy is made so changing one does not affect other.

// non primitive data type stored in heap memory,  
// When we assign one variable to another, reference is copied not the value so if we change one then both variables are changes.

// stack example
let myYoutubeName = "PVU";
let newYoutubeName = myYoutubeName;
newYoutubeName = "SAP";
console.log(myYoutubeName);
console.log(newYoutubeName); // It tales reference , updated value

// heap example -- non primitive
let user1 = {
    email: "poorva@45gmail.com",
    fname: "poorva",
    id: 101
};

let user2 = user1;
user2.email = "kavya@56gmail.com";
console.log(user1.email);
console.log(user2.email);





