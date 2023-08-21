
// type conversion

let score = "33abc"

console.log(typeof score);
console.log(typeof (score));

let valueInNumber = Number(score) //converted to number
console.log(typeof valueInNumber ); //converted to what type
console.log(valueInNumber); //what is the value

let Age = null

console.log(typeof Age);
console.log(typeof (Age));

let value = Number(Age) //converted to number
console.log(typeof value); //converted to what type
console.log(value); //what is the value

/* NOTE
"33" => 33
"33abc" => NaN
true => 1; false => 0;
*/

let isEntered = 1

let booleanIsEntered = Boolean(isEntered)
console.log(typeof booleanIsEntered);
console.log(booleanIsEntered);

// 1 => true; 0 => false;
// "" => false
// "hitesh" => true 

let someNumber = 33
let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);

// ************************************** ASSIGNMENT OPERATOR**************************

age = age + 2;
age+=2; //it gives the same answer it can also be written this way

age = age - 2;
age -= 2;

age = age*2;
age *=2;