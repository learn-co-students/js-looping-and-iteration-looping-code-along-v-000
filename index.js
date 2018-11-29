// Code your solutions in this file

function printBadges(badge) {
  for (let i = 0; i < badge.length; i++) {
    console.log(`Welcome ${badge[i]}! You are employee #${i + 1}.`);
  }
  return badge;
}


function flipACoin() {
  return Math.random() >= 0.5 ? 'Tails' : 'Heads';
}

function tailsNeverFails() {
  let x = 0;
  while (flipACoin() === 'Tails') {
    x++;
  }
  return `You got ${x} tails in a row!`;
}
