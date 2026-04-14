let myArray = [10,1,2,3,4,"poorva"];
console.log(myArray);

const myArray2 = new Array(myArray); // 
console.log(myArray2);

console.log(myArray[1]);

// Array Mathods
myArray.push(5); // add last value to array 
console.log(myArray);
console.log(myArray.pop()); // remove last value from array 
console.log(myArray.unshift(9)); // Add given value at first position and shifts all to next position
console.log(myArray.shift()); //  Remove value from first position

console.log(myArray.includes(9));  // It checks the given value is present ot not 
console.log(myArray.indexOf(8));// it gives value present at that index


const newArr = myArray.join();
console.log(typeof(newArr)); // gives output in string



