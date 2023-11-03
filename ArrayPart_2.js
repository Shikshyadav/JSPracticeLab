const marvelHeros = ["thor", "ironman", "spiderman"];
const dc = ["superman", "flash", "batman"];

marvelHeros.push(dc);
// push doesnt add/merge the arrays together
// console.log(marvelHeros);

// console.log(marvelHeros[3][1]);

marvelHeros.concat(dc);
// console.log(marvelHeros);
// concat too does't add or merge

// to use concat we need to declare a new variable

const heroes = marvelHeros.concat(dc);
console.log(heroes);

// spread out element
const all_new_heroes = [...marvelHeros, ...dc]; //using this two array gets merged aba tyo araay rahadaina auta auta element individual hunxa
console.log(all_new_heroes);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];
const real_another_array = another_array.flat(Infinity);

console.log(real_another_array);

console.log(Array.isArray("shiksha"));
console.log(Array.from("shiksha"));

console.log(Array.from({ name: "shiksha" })); //interesting case
// we need to say from which the array must be made whether the key:i.e name or the values:i.e shiksha

let score1 = 100;
let score2 = 89;
let score3 = 99;

console.log(Array.of(score1, score2, score3));
