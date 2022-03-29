const superheroes = require("superheroes");
const supervillains = require("supervillains");

const super1 = superheroes.random();
console.log("super hero:");

console.log(super1);

console.log("supervillains:");

for (let i = 0; i < 10; ++i) {
  const villain = supervillains.random();
  console.log(villain);
}
