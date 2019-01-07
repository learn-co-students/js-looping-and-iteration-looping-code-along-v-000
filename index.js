// Code your solutions in this file

function printBadges(badges) {
    for (let i = 0; i < badges.length; i++) {
        console.log(`Welcome ${badges[i]}! You are employee #${[i+1]}.`);
    }
    return badges;
}

// If the Math.random() evaluates to greater than or equal to 0.5, the coin landed on 'Tails' and is flipped again. If the Math.random() evaluates to less than 0.5, the coin landed on 'Heads', and the 'Tails' streak is broken. 
function tailsNeverFails() {
    let numberOfTails = 0
    while(Math.random() >= 0.5) {
      numberOfTails += 1
    }
    return `You got ${numberOfTails} tails in a row!`
}
