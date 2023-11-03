// Date

 let myDate = new Date();
//  console.log(myDate);
//  console.log(myDate.toString());
//  console.log(myDate.toISOString());
//  console.log(myDate.toJSON());
//  console.log(myDate.toDateString());
//  console.log(myDate.toLocaleDateString());
//  console.log(myDate.toLocaleString());

// interview question
console.log(typeof myDate);
// it is an object

// let myCreatedDate = new Date(2023,0,23);
// console.log(myCreatedDate.toString());

let myCreatedDate = new Date(2023,0,23,5,3);
console.log(myCreatedDate.toString());

let myTimeStamp = Date.now();

console.log(myTimeStamp);
console.log(myCreatedDate.getTime());

// converting into seconds

console.log(Math.floor(Date.now()/1000));

let newDate = new Date();
console.log(newDate.toString());
console.log(newDate.getTime());
console.log(newDate.getDay());
console.log(newDate.getMonth() + 1);  //caz it starts from 0