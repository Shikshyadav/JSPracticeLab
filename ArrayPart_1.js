//  array basic
const array = [1, 2, 3, 4, 5, 6];
const myHerros = ["shaktiman", "blabla"];

const arr2 = new Array(1, 2, 3, 4);
// console.log(array[1]);

// array methods
array.push(9); //adds an extra value to the array
array.pop(7); //pops the last element

array.unshift(9); //adds element in the beginning
array.shift(); //shifts the element to the left

// console.log(array.includes(9)); //includes or not

// console.log(array.indexOf(3));

const newArr = array.join() //araay is converted into string
  .split(","); //string is split based on comma and returns as array

// console.log(array);

//slice, splice

console.log("A", array);

const myarr = array.slice(1, 3);

console.log(myarr);
console.log("B", array);

const myarr2 = array.splice(1,3);
console.log("C",array);
console.log(myarr2);   

// slice operation doesn't manipulate the original array and hence prints the elements of the range not including the end range
// splice operation manipulates the original array and hence prints the elements of the given range
