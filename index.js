// Code your solutions in this file

function writeCards(names, eventName) {
    let thankYouMessages = []
    for (let i = 0; i < names.length; i++ ) {
        thankYouMessages.push(`Thank you, ${names[i]}, for the wonderful surprise gift!`)
    }
    return thankYouMessages
}

function countdown(number) {
    while (number >= 0) {
      console.log(number--);
    }

}
