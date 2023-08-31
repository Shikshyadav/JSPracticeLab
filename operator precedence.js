console.log((2+1)*3);

console.log(3/1+2**3);

console.log(4+1*6/2);

// operator precedence
// (), **, *,/,%, +,-

// ******** Comparison ********

console.log(null>0);
console.log(null==0);
console.log(null>=0);

console.log(undefined>0);
console.log(undefined==0);
console.log(undefined<0);

// The reason is that an equality check == and comparisons > < >= <= work differently. Comparisons convert null to a number, treating it as 0. That’s why (3) null >= 0 is true and (1) null > 0 is false.

// On the other hand, the equality check == for undefined and null is defined such that, without any conversions, they equal each other and don’t equal anything else. That’s why (2) null == 0 is false.

// null is treated in a special way by the Equals Operator (==). In a brief, it only coerces to undefined:

// null == null; // true
// null == undefined; // true
// Value such as false, '', '0', and [] are subject to numeric type coercion, all of them coerce to zero.


// find the average value

let maths= 23;
let english = 34;
let science = 56;

let average = (maths + english + science)/3;
console.log(average);


// uniary operator
// PRE-INCREMENT(FIRST CHANGE, THEN USE)

let ages = 10;
let newAge = ++ages;4
console.log(ages);
console.log(newAge);

// POST-INCREMENT (FIRST USE, THEN CHANGe)

let num = 10;
let newNum = num++;
console.log(num);
console.log(newNum);

// same for decrement

// operator comparison between non-number its unicode is compared 
// a<b<c<d.....  A<B<C<D....  a>A  b>B..