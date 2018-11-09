// Code your solutions in this file
function printBadges(badges) {
    for (let i = 0; i < badges.length; i++) {
        console.log(`Welcome ${badges[i]}! You are employee #${i+1}.`);
    }
    return badges
}

function tailsNeverFails() {
    let numberOfTails = 0
    while (Math.random() >=0.5) { 
        numberOfTails = numberOfTails+1
    }
    return `You got ${numberOfTails} tails in a row!`
}



// function maybeTrue() {
//     return Math.random() >= 0.5;
// }
 
// while (maybeTrue()) {
//     console.log('And I ran... I ran so far away!');
// }




// function wrapGifts(gifts) {
//     for (let i = 0; i < gifts.length; i++) {
//         console.log(`Wrapped ${gifts[i]} and added a bow!`);
//     }
 