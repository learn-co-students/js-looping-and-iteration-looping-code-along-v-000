function printBadges(arr) {
    for (i = 0; i < arr.length; i++) {
        console.log(`Welcome ${arr[i]}! You are employee #${i+1}.`);
    }
    return arr;
}

function tailsNeverFails() {
    let turn = 0;
    while (Math.random() >= 0.5) {
        turn++;
    }
    return `You got ${turn} tails in a row!`;
}
