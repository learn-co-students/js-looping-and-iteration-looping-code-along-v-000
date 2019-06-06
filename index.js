function writeCards(guestName, event) {
  const cards = [];
  for (let i = 0; i < guestName.length; i++) {
    cards.push(`Thank you, ${guestName[i]}, for the wonderful ${event} gift!`);
  };
  return cards;
};

function countdown(number) {
  while (number > 0) {
    console.log(number);
    number -= 1;
  };
  console.log(number);
};
