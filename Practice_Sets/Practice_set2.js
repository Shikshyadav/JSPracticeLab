// use logical operators to find whether the age of the person lies between 10 and 20
/*const readline = require('readline')  //calling the readline module
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question(`input yur age: \n`, (age) =>{
    if(age>10 && age<=20){
        console.log("your age lies between 10 and 20");
    }
    else{
        console.log("your age does not lie between 10 and 20");
    }
    rl.close();
});



// Demonstrate the use of switch case statements in js

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question(`enter your age`,(age)=>{
    switch(age){
        case '1':
            console.log("your age is 15");
            break
        
        case '2':
            console.log("your age is 17");
            break

        case '3':
            console.log("your age is 19");
        
            default :
            console.log("your age is not here");
    }

    rl.close();
});


// write a js program to find whether the number is divisible by 2 and 3

const prompt = require('prompt-sync')({sigint: true});

let num = prompt('enter the number');
num = Number(num);

if(num % 2 === 0 && num % 3 === 0){
    console.log("the number is divisible by 2 and 3");
}
else{
    console.log("the number is not divisible by 2 or 3");
}



// write a js program to find whether the number is divisible by either 2 or 3
const prompt = require('prompt-sync')({sigint: true});

let number = prompt('enter the number');
number = Number(number);

if(number%2==0 || number%3==0){
    if(number%2==0){
        console.log("divisible by 2")
    }
    if(number%3==0){
        console.log("divisible by 3")
    }
    console.log("divisible by 2 or 3");
}
else{
    console.log("not divisible by 2 or 3");
}
*/


// print "you can drive" or "you cannot drive" based on the age greater than 18 using ternary operator
const prompt = require('prompt-sync')({sigint: true});
let age = prompt('Enter your age');
age=Number(age)

let a = age > 18? "you can drive" : "you cannot drive"
console.log(a);
