var names = [];

function printBadges(names) {
  for (let i = 0; i < names.length; i++) {
    console.log(`Welcome ${names[i]}! You are employee #${i + 1}.`);
  }
  return names;
}
// printBadges(names);

// if num > 0.5 its tails... coin flipped again
// if num < 0.5 its heads... tails streak broken

function tailsNeverFails () {
  let tails = 0;

  while (Math.random() >= 0.5) {
    tails ++;
  }

  return `You got ${tails} tails in a row!`;
}
