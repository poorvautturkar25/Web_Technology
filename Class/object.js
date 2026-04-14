// we can declare two types of object -- 1. object literals , 2 .object singleton
// 1. object literals
let user = {
    name: "Poorva",
    age: 20,
    email: "poorva@67gmail.com",
    city: "Ichalkaranji",
    isLogin: true,
    latLoginDay: ["Monday", "Tuseday","Wednesday","Thrusday"],
    "fullName" : "Kavya"
};
console.log(user);
console.log(user.email);// proper way
console.log(user["fullName"]); // if keys

user.email = "kavya@45gmail.com";
console.log(user.email);

user.email = "abc@46gmail.com";
console.log(user.email);

//Object.freeze(user);  // used when data is sensitive or we do not allow to change in that so that time.
user.greeting = function()
{
    console.log("Hello JS")
};
console.log(user.greeting());

user.greeting2 = function(){
    console.log(`Hello ${this.email}`);
    
};
console.log(user.greeting2());


// Symbol example 
//create one symbol , add it to object key and print this key .
const mySymbol = Symbol("abc");

const myObj = {
     [mySymbol]: "sum"
};
console.log(myObj[mySymbol]);
console.log(typeof(myObj));
console.log(mySymbol);










