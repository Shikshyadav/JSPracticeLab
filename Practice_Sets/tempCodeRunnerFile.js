const prompt = require('prompt-sync')({sigint: true});

let number = prompt('enter the number');
number = Number(number);

if(number%2==0){
    console.log("divisible by 2");
}
if(number%3==0){
    console.log("divisible by 3");
}
if(number%2==0 && number%3==0){
    console.log("divisible by both");
}
else{
    console.log("not divisible by any of them");
}