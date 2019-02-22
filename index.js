// Code your solutions in this file
function printBadges(arr) {
  for (let number = 0; number < arr.length; number++) {
    console.log(`Welcome ${arr[number]}! You are employee #${number+1}.`);
  }
  return arr;
}

function tailsNeverFails() {
  // if Math.random() evaluates to less than 0.5, the coin landed on Heads
  // if it evaluates to more than 0.5, then it is Tails
  // each time it gets Tails, add 1 to Tails counter
  // when it's not Tails anymore, end it with "You got NUMBER tails in a row!"
  let tailsCount = 0;
  
  function headsOrTails() {
    return Math.random() >= 0.5;
  }
  
  while (headsOrTails()) {
    tailsCount++;
  }
  const string = `You got ${tailsCount} tails in a row!`;
  return string;
}