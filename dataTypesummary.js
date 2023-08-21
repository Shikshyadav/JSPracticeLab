// datas are categorized on how is the data kept in the memory and accessed 
// it is of two types ie: primitive and non primitive.

// primitive: 7 types: STRING, NUMBER, BOOLEAN, NULL--> it is empty it is not zero; it is not an empty string, UNDEFINED, SYMBOL, BIGINT

// Primitive datatypes like int, float etc are stored directly into the stack or heap area.

const score = 100;
const scoreValue= 100.3;

const isLoggedIn = false;
const temperature = null;
let userEmail; //undefined

const id = Symbol('123');
const anotherId = Symbol('123'); //these two are not same both are special declaration

console.log(id === anotherId); //false

const bigNumber = 332258521323n; //bigint number --> it is used to store biiiiigggg numbers

// Reference type(non-primitive): ARRAYS, OBJECTS, FUNCTIONS
// the return datatype of non primitive data type is "function object" or "object function"
const heros = ["bla bla","blasnxjk","vckS"] // Arrays


let myOBJ ={
    name: "bla bla",   //Objects
    age: 22,
}

const myFunction = function()
{
    console.log("hyeee!!");
}

console.log(typeof bigNumber);
console.log(typeof temperature); //null ko datatype is object.

// https://262.ecma-international.org/5.1/#sec-11.4.3


