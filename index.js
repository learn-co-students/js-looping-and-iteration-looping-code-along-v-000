// Code your solutions in this file

let names = ["Ada", "Brendan", "Ali"];

function writeCards(names, event) {
    let messages = [];
    for (let i = 0; i < names.length; i++) {
        messages.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    }
    return messages;
}


function countdown(number) {
    let i = number;
    while (i >= 0) {
        console.log(i);
        i--;
    }
}

