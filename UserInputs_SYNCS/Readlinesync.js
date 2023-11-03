// taking input from user using readline
// use logical operators to find whether the age of the person lies between 10 and 20
const { Console } = require('console')
const readline = require('readline')  //calling the readline module
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