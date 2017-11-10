// Code your solutions in this file
for (let age = 30; age < 40; age++) {
    console.log(`I'm ${age} years old. Happy birthday to me!`);
}

const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
    for (let i = 0; i < gifts.length; i++) {
        console.log(`Wrapped ${gifts[i]} and added a bow!`);
    }

    return gifts;
}

function printBadges(employees) {
    for (let i = 0; i < employees.length; i++) {
        console.log(`Welcome ${employees[i]}! You are employee #${i + 1}.`);
    }
    return employees;
}

function flipCoin() {
    return Math.random() >= 0.5;
}

function tailsNeverFails() {
    let tails = 0;

    while (flipCoin()) {
        tails++;
    }
    return `You got ${tails} tails in a row!`;
}
