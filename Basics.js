console.log('first practice ses');

const accountId = 1234;
let accountName = 'shiksha'
var accountState = "bla bla";

/*
prefer not using "var" because of issue in block scope and functional scope
as in older version or even here agar var ko name autai xa dherai thau ma ani second person le ayera change gardida tyo var name ko value sabai 
thau ko value change hunxa instead of one
*/

let accountEmail;

console.log(accountName);

console.table([accountId, accountEmail, accountName]);

console.log(3 + 3);

// data types

"user strict"; //treat all js code as newer version     

let name = "bla bla" //string
let age = 18
let isLoggedIn = false
let state;
///primitive data types
// number =>2 to power 53
// bigInt - will not be mostly used, only used when the numbers are tooooo big or for trading stock market or very big websites like reddit facebook.
// string => ""
// boolean => true/false
// null => no value/stand alone value/representation of empty value/special type
// undefined =>
// symbol => unique identifier/used by figma tools


console.log(typeof "shiksha"); //to know values type
console.log(typeof null);
console.table([accountEmail,accountId,accountName]);

// ************************* Operation ***********************************

let value = 3
let negValue = -value
console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3); //2 power 3
// console.log(2/2);
// console.log(2%3); // remainder

let str1 = "hello";
let str2 = " shiksha"

let str3 = str1 + str2;
console.log(str3);

// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + 2 + 2);
// console.log(1 + 2 +"2");

// console.log((3 + 4) * 5 % 6); //please use palenthesis

console.log(+true);
console.log(+"");

let num1, num2, num3
num1 = num2 = num3 = 2+3 //code must be readable these type of codes are nor accepted in real world

//***************** Prefix Postfix ****************

let gameCounter = 100
++gameCounter; //If used postfix, with operator after operand (for example, x++), the increment operator increments and returns the value before incrementing.
//If used prefix, with operator before operand (for example, ++x), the increment operator increments and returns the value after incrementing.
console.log(gameCounter); //read about precedence,postfix and prefix from JS MDN

// TYPESCRIPT
// Typescript is statically typed but JS is dynamically typed ; designed by microsoft
// ststic=> type cannot be changed; fixed
// dynamic => can be changed    


let name1 = "shiksha"
name1.length;
console.log(name1.length);
console.log(typeof name1.length);   //here length is called property in programming

"shiksha".length
console.log("shiksha".length);
console.log("shiksha"[4]);