const arr = [];

for (let i = 0; i < 10; ++i) {
  const rand = Math.floor(Math.random() * 6) + 1;
  arr.push(rand);
}

console.log(arr.includes(6));
