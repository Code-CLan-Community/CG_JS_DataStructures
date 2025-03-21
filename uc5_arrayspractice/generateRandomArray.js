let numbers = [];
for (let i = 0; i < 10; i++) {
    numbers.push(Math.floor(Math.random() * 900) + 100);
}
console.log("Random Numbers:", numbers);

let max = -Infinity, secondMax = -Infinity;
let min = Infinity, secondMin = Infinity;

for (let num of numbers) {
    if (num > max) {
        secondMax = max;
        max = num;
    } else if (num > secondMax && num != max) {
        secondMax = num;
    }

    if (num < min) {
        secondMin = min;
        min = num;
    } else if (num < secondMin && num != min) {
        secondMin = num;
    }
}

console.log("2nd Largest:", secondMax);
console.log("2nd Smallest:", secondMin);
