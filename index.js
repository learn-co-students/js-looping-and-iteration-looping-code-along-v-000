// const names = [ 'Lisa', 'Kaitlin', 'Jan' ]

function writeCards(names, event) {
  let cards = []
  for (let i = 0; i < names.length; i++) {
    cards.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
  }
  return cards
};

function countdown(countdown) {
  while (countdown > 0 ) {
    console.log(countdown);
    countdown -=1;
  }
  console.log(countdown);
}