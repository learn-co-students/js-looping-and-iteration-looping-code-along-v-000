// Code your solutions in this file
const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
  }

  return gifts;
}

wrapGifts(gifts);



const names = []

function printBadges (names) {
  for (let i = 0; i < names.length; i++) {
    console.log(`Welcome ${names[i]}! You are employee #${i + 1}.`);

  }

  return names;
}


function maybeTrue() {
  return Math.random() >= 0.5;
}


function tailsNeverFails() {
  let i = 0

  while (maybeTrue()) {
    i++;
  }
  return `You got ${i} tails in a row!`;

}
