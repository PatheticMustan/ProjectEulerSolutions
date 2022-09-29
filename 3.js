// https://projecteuler.net/problem=3
let x = 600851475143;
let a = -1;

for (let i=2; i<x; i++) {
    if ((x%i) === 0) {
        a = Math.max(a, i);
        x /= i;
        i = 2
    }
}

console.log(x);
