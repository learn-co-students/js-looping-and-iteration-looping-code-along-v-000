function writeCards(names, event) {
    const message = [];
    for(let i = 0; i < names.length; i++) {
        message.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    }
    return message;
}

function countdown(number) {
    while (number >= 0) {
        console.log(number);
        number--
    }
}