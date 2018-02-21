// Code your solutions in this file
function printBadges (names) {
  for (let i = 0; i < names.length; i++) {
    console.log(`Welcome ${names[i]}! You are employee #${i + 1}.`);
  }
  return names;
}

function coinFlip () {
  return Math.random() >= 0.5;
}

function tailsNeverFails () {
  let streak = 0;
  while (coinFlip()) {
    streak++
  }
  return `You got ${streak} tails in a row!`;
}
