// Code your solutions in this file

const names = []

function printBadges(names) {
  for (let i = 0; i < names.length; i ++) {
    console.log(`Welcome ${names[i]}! You are employee #${i+1}.`);
  }
  return names;
}

function flippedTails() {
  return Math.random() >= 0.5;
}

function tailsNeverFails() {
  let counter = 0;
   while (flippedTails()) {
     ++counter;
   }
  return `You got ${counter} tails in a row!`;
}
