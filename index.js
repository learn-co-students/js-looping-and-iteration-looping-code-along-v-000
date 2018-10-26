// Code your solutions in this file
function printBadges(array) {
  for (let counter = 0; counter < array.length; counter++) {
    console.log(`Welcome ${array[counter]}! You are employee #${counter+1}.`);
  }
  return array
}

function tailsNeverFails() {
  let tails = 0;

  while (Math.random() >= 0.5) {
    tails++;
  }

  return `You got ${tails} tails in a row!`;
}
