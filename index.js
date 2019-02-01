// Code your solutions in this file
function printBadges(badges) {
    for (let i = 0; i < badges.length; i++) {
        console.log(`Welcome ${badges[i]}! You are employee #${i+1}.`);
    }
    return badges;
}

function maybeTails() {
    return Math.random() >= 0.5;
}

function tailsNeverFails() {
    i = 0
    while (maybeTails()) {
        i++;
        
    }
    return `You got ${i} tails in a row!`;
}