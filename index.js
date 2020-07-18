// Code your solutions in this file
function writeCards(cards, event) {
    let thanksLetters = [];
    for(let number = 0; number < (cards.length); number = number + 1) {
        thanksLetters.push(`Thank you, ${cards[number]}, for the wonderful ${event} gift!`)
    }
    return thanksLetters;
}

function countdown(number) {
    let counter = number
    while(counter >= 0 ) {
        console.log(counter);
        counter = counter - 1;
    }
}


