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



