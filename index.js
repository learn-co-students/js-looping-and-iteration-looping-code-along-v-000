// Code your solutions in this file
function printBadges(names) { 
    for (let i = 0; i < names.length; i++)
    console.log(`Welcome ${names[i]}! You are employee #${i+1}.`)
    return names
}

function tailsNeverFails() {
    function coinFlip() {
        return Math.random() >= 0.5;
    }

    let tailsInARow = 0;

    while(coinFlip()) {
        tailsInARow += 1;
    }

    return `You got ${tailsInARow} tails in a row!`;
}