// what is the value of each variable in each line of code?

let num = 5;
let newNum = num++;
console.log(num);
console.log(newNum);
newNum = ++num;
console.log(num);
console.log(newNum);

// find the errors is the following code
// let 1age = 25;                                                   let age=25;
// let 2age = 35;   the variables cannot be started with number.    let age=35;

// let marks = 75;
// let isPass= True;    boolean must have small 't'

// let isPass = 'true'   if isPass is boolean variable then this will not work as 'true' is a string

// Q1) Declare your name as a string and print its length is js
 let string = "Shiksha"
 console.log(string.length);


//   Q2) Declare your first name as a string ans print its first character
let firstName = "Shiksha"
console.log(firstName[0]);

//   Q2) Declare your first name as a string ans print its last character
let FirstName = "Shiksha"
console.log(FirstName[FirstName.length-1]);

// Q3) what is the output of the following code "blablabla"+123
console.log("blablabla"+123);

// Q4) what are the length of empty string and a string with a single space?
// ==> empty strings length will be zero and the string with a single space will be counted as a single character or variable
let empty = "";
console.log(empty.length);
let space = " ";
console.log(space.length);
