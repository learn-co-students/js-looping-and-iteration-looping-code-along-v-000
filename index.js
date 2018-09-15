// Code your solutions in this file
function printBadges(inputArray) {
  for (let i = 0; i < inputArray.length; i++) {
    console.log(`Welcome ${inputArray[i]}! You are employee #${i + 1}.`);
  }
  return inputArray;
}

function tailsNeverFails() {
  let coin = Math.random();
  let numberOfTails = 0;

  while (coin >= 0.5) {
    coin = Math.random();

    numberOfTails++;
  }

  return `You got ${numberOfTails} tails in a row!`;
}
