// Simple function
function addNumbers(number1, number2){
    let result = number1 + number2;
    console.log(result);
}
addNumbers(3,4);

function add(num1, num2){
    let result1 = num1 + num2;
    return result1;
    console.log("Poorva"); // It is not executed beacuse after return anything will not execute.
}
console.log(add(1,2));

function userLogin(username){
    return `${username} Logged in`;
}
console.log(userLogin("Poorva"));
//console.log(userLogin()); // when string is empty it give undefined

// Spread Operator -- 
/* ... -> this is used when we want to 3 values in one parameter to store 
*/
function myFun(...n1){
    return n1;
}
console.log(myFun(100,200,300));

// Arrow Function
 const a = (a)=>
{
    return a;
}
console.log(a(4));


// this keyword
function coffee(){
    name = "Poorva";
    console.log(this);
}
coffee();

const arrowFunction = ()=>{
    myName = "Poorva Utturkar";
    console.log(this); // it gives {}(empty) object so this keyword is not used in arrow function.
}
arrowFunction();