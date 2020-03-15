function writeCards(namesArray, surprise){
  let thankYouCards = []
  for (let i = 0; i < namesArray.length; i++){
    thankYouCards.push(`Thank you, ${namesArray[i]}, for the wonderful ${surprise} gift!`)
  }
  return thankYouCards
}

function countDown(countDown) {
  while (countDown > 0) {
    console.log(countDown);
    countDown -=1;
  }
  console.log(countDown);
}
