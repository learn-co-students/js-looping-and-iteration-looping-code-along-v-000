// Code your solutions in this file
const gifts = ['teddy bear', 'drone', 'doll'];

function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
  }
  return gifts;
}
wrapGifts(gifts);

function printBadges(names) {
  for (let i = 0; i < names.length; i++) {
    console.log(`Welcome ${names[i]}! You are employee #${i + 1}.`)
  }
  return names
}

function tailsNeverFails() {
  let tails = 0;                      //set tails counter to zero
  while (Math.random() >= 0.5) {      //set condition
    tails++                           //increment tails
  }
  return `You got ${tails} tails in a row!`  //return how many tails in a row
}
