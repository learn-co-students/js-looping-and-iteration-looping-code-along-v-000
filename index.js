function writeCards(arrayOfNames, eventName) {
  let cards = [];
  for (let i = 0; i < arrayOfNames.length; i++) {
    cards.push(`Thank you, ${arrayOfNames[i]}, for the wonderful ${eventName} gift!`);
  }
  return cards;
}

function countdown(value) {
  while (value > -1) {
    console.log(value--);
  }
}
