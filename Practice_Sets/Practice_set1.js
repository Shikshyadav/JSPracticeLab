// create a variable of type string and try to add a number to it

let a = "practice";
let b = 7;

console.log(a + b);  // when something is added to the string it gets concatinated

// Use typeof operator to find the datatype of the string in the last question

console.log(typeof (a + b));  //first evaluates typeof a and then adds b that is why thw answer is string

// Create a const object in js. Can you change it to hold a number later?

const obj1 = {
    name: "shiksha",
    age: 20,
    isStudent: true
}
console.log(obj1);

// obj1 = 45; //no the constants variable in js cannot be change to any other type later however the properties ob object can be changed

obj1.name = "me";
console.log(obj1.name);


// Try to add a new key to the const object in problem 3

obj1['friend'] = "samikshya";
obj1['college'] = false;
console.log(obj1);

//  Write a js program to create a word meaning dictionary of 4 words

const dict =  {
    Hirsute: "a formal word that means “hairy.”",
    incunabula: "the earliest stages or first traces of anything.",
    macabre: "gruesome and horrifying; ghastly; horrible.",
    traipse: "to walk or go aimlessly or idly or without finding or reaching one's goal."
}
console.log(dict.Hirsute);
console.log(dict['incunabula']);