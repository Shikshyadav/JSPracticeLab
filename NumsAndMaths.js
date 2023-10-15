const score = 400;
console.log(score);

const balance = new Number(100);
console.log(balance);

console.log(balance.toString());
console.log(balance.toFixed(2)); //it gives the number of digits to be printed after the decimal
// mostly used in tha calculations done in e-commerce website

console.log(balance.toString().length); //converts the given number to string first then prints out the length

const otherNumber = 23.8966;
console.log(otherNumber.toPrecision(5)); // it will give upto how many numbers we want after the decimal point
// gives precise number

const hundreds = 1000000;
console.log(hundreds.toLocaleString("en-IN")); //it gives the number format in indian number type
// by default it's in english format

Number.MAX_VALUE;
console.log(Number);

Number.MIN_VALUE;
console.log(Number);

// +++++++++++++++++++++++++++++++++++++++++++++++++++++ MATHS +++++++++++++++++++++++++++++++++++++

console.log(Math.abs(-4)); //gives absolute values by changing the negative numbers to negative
console.log(Math.round(2.5)); //rounds off the value to nearest integer
console.log(Math.floor(2.7)); //returns largest integer less than or equal to a given number
console.log(Math.ceil(2.6));

console.log(Math.min(3, 4, 5, 6));
console.log(Math.max(4, 5, 6, 7));

console.log(Math.random()); //gives values from 0 to 1

console.log(Math.random() * 10); //t0 get numbers other than 0 and 1
console.log(Math.random() * 10 + 1);

console.log(Math.floor(Math.random() * 10) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min);
