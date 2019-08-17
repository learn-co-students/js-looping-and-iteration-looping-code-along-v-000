// Code your solutions in this file
 
function writeCards(names, eventname) {
    let thankYouCards = []
  for (let i = 0; i < names.length; i++) {
    thankYouCards.push(`Thank you, ${names[i]}, for the wonderful ${eventname} gift!`);
  }
  return thankYouCards
}

function countdown(integer){
    let i = 0;
while (i < 11) {
  console.log(i++);
}
}
 