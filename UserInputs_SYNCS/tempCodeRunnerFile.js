const prompt = require('prompt-sync')({sigint: true});
var n1, n2;
n1 = parseInt(prompt('enter first number \n'));
n2 = parseInt(prompt('enter second number \n'));
console.log(n1 + n2);