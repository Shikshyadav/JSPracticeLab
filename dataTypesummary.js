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


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// STACK MEMORY (primitive type) HEAP MEMORY (Reference/non-primitive)


let abc1 = "something";

let abc2 = abc1;
abc2 = "something else";

console.log(abc1);
console.log(abc2);              //in stack memory the copy of the first declared variable is given so the data doesnot change in stack first abc1 is stored than abc2 then the copy of abc1 goes up

// HEAP MEMORY

let user1 = {
    email: "shikshyadav81@gmail.com",
    phone: 98324245623  
}

let user2= user1;

user2.email = "yadavshiksha@gmail.com"

console.log(user1.email);
console.log(user2.email);    //in heap memory the reference of original data is given i.e. if something is changed in the second object then the original object also changes
                            // here the email of user1 gets changed if the email of user2 is changed




