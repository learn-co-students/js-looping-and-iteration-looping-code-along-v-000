// Code your solutions in this file
function printBadges(names) {
  for (var i = 0; i < names.length; i++) {
    console.log(`Welcome ${names[i]}! You are employee #${i + 1}.`);
  }
  return names;
}

function tailsNeverFails () {
  let tails = 0;

  while (Math.random() >= 0.5) {
    tails++;
  }

  return `You got ${tails} tails in a row!`;
}

// tails -> 50/50 chance (Math.random() >= 0.5; has 50/50 chance of returning true/false)
// if Math.random() >= 0.5; evaluates to true, add onto tails
// if it's false, exit and return the statement
