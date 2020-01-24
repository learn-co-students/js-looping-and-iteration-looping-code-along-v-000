// Code your solutions in this file

function writeCards(names, cardType) {
    let output = []
    for (let i = 0; i < names.length; i++) {
    output.push(`Thank you, ${names[i]}, for the wonderful ${cardType} gift!`);
  }
 
  return output;
}

function countDown(countDownNumber) {
    while (countDownNumber >= 0) {
        console.log(countDownNumber)
        countDownNumber--
    }
}