// symbol = for unique id
let a = Symbol("12");
console.log(a);

let b = Symbol("34");
console.log(b);

let id = 123;
console.log(id===a);
// javaScript is dyanamic language.

// Array
const subjects = ["JavaScript", "HTML", "CSS"];
console.log(subjects);

// Object
const myObj ={
    fname: "Poorva",
    age:20
};
console.log(myObj);
console.log(myObj.age); // use myObj.age to just print age 

// Function
// Activity how to use function declaration, defination,all 
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
