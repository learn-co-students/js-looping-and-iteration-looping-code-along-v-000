// Code your solutions in this file
function printBadges(empNames) {
  for (i = 0; i < empNames.length; i++) {
    console.log(`Welcome ${empNames[i]}! You are employee #${i + 1}.`);
  }

  return empNames;
}

function coinFlip() {
  return Math.random() >= 0.5;
}


function tailsNeverFails() {
  let tailsCount = 0;

  while (coinFlip()) {
    ++tailsCount;
  }

  return `You got ${tailsCount} tails in a row!`;
}
