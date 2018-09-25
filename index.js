// Code your solutions in this file
function printBadges(names) {
  for (let i = 0; i < names.length; i++) {
    console.log(`Welcome ${names[i]}! You are employee #${i + 1}.`);
  }
  return names;
}

function tailsNeverFails() {
  let numberOfTails = 0
  while (Math.random() >= .5) {
    numberOfTails++;
  }
  return `You got ${numberOfTails} tails in a row!`;
}