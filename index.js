// Code your solutions in this file
function printBadges(array) {
    for (let index = 0; index < array.length; index++) {
        console.log(`Welcome ${array[index]}! You are employee #${index+1}.`);
    }
    return array;
}

function tailsNeverFails() {
    let result = Math.random();
    let tails = 0;
    while (result >= 0.5) {
        tails++;
        result = Math.random();
    }
    return `You got ${tails} tails in a row!`
}