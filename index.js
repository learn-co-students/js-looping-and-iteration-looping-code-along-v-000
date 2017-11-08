// Code your solutions in this file

function printBadges (names) {
  for (let i = 0; i < names.length; i++) {
    console.log(`Welcome ${names[i]}! You are employee #${[i + 1 ]}.`);
  }
  return names;
}

function tailsNeverFails() {
  let tails = 0;

  while (Math.random() >= 0.5) {
    tails++;
  }
  return `You got ${tails} tails in a row!`;
}
 // If the condition evaluates to true, the coin landed on 'Tails' and is flipped
 // again. If the condition evaluates to false, the coin landed on 'Heads', and the
 // 'Tails' streak is broken.
 // At the end of the function, return a message to the user indicating how many
 // times the coin landed on 'Tails' in a row, e.g.:
