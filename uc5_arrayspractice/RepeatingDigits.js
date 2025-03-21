function findRepeatingDigits() {
    let result = [];
    for (let i = 10; i <= 100; i++) {
        let str = i.toString();
        if (str[0] === str[1]) result.push(i);
    }
    return result;
}
console.log("Repeating Digits:", findRepeatingDigits());
