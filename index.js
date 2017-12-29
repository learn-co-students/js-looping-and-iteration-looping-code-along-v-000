// Code your solutions in this file

function printBadges (names) {
  for (let i = 0; i < names.length; i++) {
    console.log(`Welcome ${names[i]}! You are employee #${i+1}.`)
  }
  return names;
}

function tailsNeverFails () {
  let tailsCount = 0;
  while (coinFlip()) {
    tailsCount++;
  }
  return `You got ${tailsCount} tails in a row!`;
}

function coinFlip () {
  return Math.random() >= 0.5;
}
