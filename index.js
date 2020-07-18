// Code your solutions in this file
function writeCards(names, event) {
  const completeCards = [];
  for (let i = 0; i < names.length; i++) {
    completeCards.push(
      `Thank you, ${names[i]}, for the wonderful ${event} gift!`
    );
  }
  return completeCards;
}

function countdown(number) {
  while (number >= 0) {
    console.log(number--);
  }
}
