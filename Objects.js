// singleton
// object.create :--> the object made using constructor i.e. singleton

// object literals

// symbol
const mysym = Symbol("key1");

const JsUser = {
  name: "John",
  "fullname": "john delton",
  [mysym]: "mykey1", //declaration of symbol://syntax
  age: 18,
  location: "London",
  email: "john31@gmail.com",
  isLoggedIn: false,
  lastLoginDays: ["Monday", "Saturday"],
};

// console.log(JsUser.age); //mostly used
// console.log(JsUser["email"]);
// console.log(JsUser[mysym]);

JsUser.email = "johndelton@gmail.com";
// Object.freeze(JsUser);
JsUser.email = "john@gmail.com";

console.log(JsUser);

// adding functions
JsUser.greeting = function () {
  console.log("hello JS user");
};

JsUser.greeting2 = function () {
  console.log(`hello JS user, ${this.name}`); //if we need to reference the same object we use 'this.'
};

console.log(JsUser.greeting());
console.log(JsUser.greeting2());

