function writeCards(arrayNames, eventName) {
    let thankYouCards = []
  for (let i = 0; i < arrayNames.length; i++) {
    thankYouCards.push(`Thank you, ${arrayNames[i]}, for the wonderful ${eventName} gift!`);
  }
  return thankYouCards
}

function countDown(num){
  let i = 0;
  while (i < 11) {
  console.log(i++);
  }
}
