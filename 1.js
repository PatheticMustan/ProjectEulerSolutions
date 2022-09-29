// https://projecteuler.net/problem=1
const a = new Array(1000).fill(0).map((v,i) => i).filter(v => v%3===0 || v%5===0).reduce((a,b) => a + b, 0);
console.log(a);
