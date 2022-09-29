// https://projecteuler.net/problem=4
let h = -1;
for (let x=500; x<1000; x++) {
    for (let y=500; y<1000; y++) {
        let c = (x*y+"");
        if (c.split("").reverse().join("") === c) {
            h = Math.max(h, x*y);
        }
    }
}
console.log(h);
