// https://projecteuler.net/problem=2
let x=1, y=2;
let sum = 0;

while (y < 4e6) {
    // if it's even, add to the sum
    if ((y&1) === 0) sum += y;
    x += y;
    [x, y] = [y, x];
}

console.log(sum);
