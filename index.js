// Code your solutions in this file
function printBadges(myArray) {
  for (let i = 0; i < myArray.length; i++) {
    console.log(`Welcome ${myArray[i]}! You are employee #${i+1}.`);
  }
  return myArray;
}

function coinFlip() {
  return Math.random() >= 0.5 ? "Tails" : "Heads";
}

function tailsNeverFails() {
  let counter = 0
  while (coinFlip() === "Tails") {
    ++counter;
    }
    return `You got ${counter} tails in a row!`;
}
