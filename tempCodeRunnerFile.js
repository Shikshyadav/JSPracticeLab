// singleton
// object.create :--> the object made using constructor i.e. singleton

// object literals

// symbol
const mysym = Symbol("key1");


const JsUser = {
  name: "John",
  "fullname":"john delton",
  [mysym]:"mykey1",             //declaration of symbol://syntax 
  age: 18,
  location: "London",
  email: "john31@gmail.com",
  isLoggedIn: false,
  lastLoginDays: ["Monday", "Saturday"],
};
 
console.log(JsUser.age);
console.log(JsUser["email"]);
console.log(JsUser[mysym]);

