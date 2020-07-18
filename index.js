// Code your solutions in this file

function writeCards(namesArray, eventName) {
    let cardsArray = [];
    for (let i = 0; i < namesArray.length; i++) {
        cardsArray.push(`Thank you, ${namesArray[i]}, for the wonderful surprise gift!`)
    }
    return cardsArray; 
}

function countdown(integer) {
while (integer >= 0) {
  console.log(integer);
  integer--
}
}