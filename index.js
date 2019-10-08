// Code your solutions in this file
function writeCards(names, eventName){
  let cards = []
  for (let i = 0; i < names.length; i++){
    cards.push(`Thank you, ${names[i]}, for the wonderful ${eventName} gift!`);
  }
  return cards;
}

function countdown(number){
  while(number >= 0){
    console.log(number);
    number--;
  }
}
