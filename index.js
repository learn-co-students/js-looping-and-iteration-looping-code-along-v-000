const array = ["Lisa", "Kaitlin", "Jan"];

function writeCards(array, event) {
  let thankYouCards = [];
  for (let i = 0; i < array.length; i++) {
    thankYouCards.push(`Thank you, ${array[i]}, for the wonderful ${event} gift!`);
  }
  return thankYouCards;
}



function countDown(integer) {
  while (integer >= 0) {
    console.log(integer--);
  }
}
