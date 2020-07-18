// Code your solutions in this file
const writeCards = (name, occasion) => {
  let allCards = [];
  for (var i = 0; i < name.length; i++) {
    allCards.push(`Thank you, ${name[i]}, for the wonderful ${occasion} gift!`);
  }

  return allCards;
};

const countdown = (arg) => {
  while(arg >= 0){
    console.log(arg);
    arg--;
  }
}
