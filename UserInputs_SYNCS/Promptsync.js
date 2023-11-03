// use logical operators to find whether the age of the person lies between 10 and 20

const prompt = require('prompt-sync')({sigint: true}); //creates the prompt
let age = prompt('enter your age');
if(age>10 && age<20){
    console.log("your age is between 10 and 20");
}
else{
    console.log("your age doesnot lie between 10 and 20");
}


