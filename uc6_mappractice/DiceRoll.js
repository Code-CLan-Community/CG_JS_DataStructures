function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
}

let diceRolls = new Map();
for (let i = 1; i <= 6; i++) {
    diceRolls.set(i, 0);
}

let maxRolls = 10;
let maxNumber, minNumber;

while (true) {
    let roll = rollDice();
    diceRolls.set(roll, diceRolls.get(roll) + 1);

    if ([...diceRolls.values()].some(value => value === maxRolls)) {
        break;
    }
}

console.log("Dice Roll Counts:", Object.fromEntries(diceRolls));

maxNumber = [...diceRolls.entries()].reduce((a, b) => (a[1] > b[1] ? a : b))[0];
minNumber = [...diceRolls.entries()].reduce((a, b) => (a[1] < b[1] ? a : b))[0];

console.log("Number that reached maximum times:", maxNumber);
console.log("Number that was rolled the least:", minNumber);
