function generateBirthdays() {
    let birthdays = new Map();
    
    for (let i = 1; i <= 12; i++) {
        birthdays.set(i, []);
    }

    for (let i = 1; i <= 50; i++) {
        let month = Math.floor(Math.random() * 12) + 1;
        birthdays.get(month).push(`Person${i}`);
    }

    return birthdays;
}

let birthMonthData = generateBirthdays();
console.log("Birth Month Distribution:");
for (let [month, people] of birthMonthData.entries()) {
    console.log(`Month ${month}:`, people);
}
