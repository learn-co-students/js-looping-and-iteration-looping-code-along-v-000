function printBadges (names) {
  for (let i = 0; i < names.length; i++) {
    console.log(`Welcome ${names[i]}! You are employee #${i+1}.`);
 }

 return names;
}

function coinFlip () {
  return Math.random() >= 0.5;
}

function tailsNeverFails () {
  let i = 0;
  while (coinFlip()) {
    i++;
  }
  return `You got ${i} tails in a row!`;
}
