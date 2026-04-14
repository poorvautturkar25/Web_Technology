let superheros = ["superman", "spiderman", "thor", "captain america"];
let ab = ["krish", "ironman", "hulk", "gamora"];
console.log(superheros.push(ab)); // It adds 2 nd array as a element of first one 
console.log(superheros);

console.log(superheros[3]);
console.log(superheros[4][2][3]); // gives character 
console.log(superheros.concat(ab)); // it joins both array 

const anotherArray = [1,2,3,[4,5,6],7,[6,7,[4,5]]];
let anotherArray2 = anotherArray.flat(Infinity);
console.log(anotherArray2);
anotherArray2 = anotherArray.flat(1);
console.log(anotherArray2);

//used for data scripting
console.log(Array.isArray(anotherArray)); //  ask question to array 
console.log(Array.from("Poorav")); // convert to array
console.log(Array.from({name : "Poorva"})); // Give empty arrat directly not convert into key-value

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1,score2,score3)); // converts given values into array

