function printBadges(names) {
  for (let i = 0; i < names.length; i++) {
      console.log(`Welcome ${names[i]}! You are employee #${i + 1}.`);
  }
  return names;
}

/*
function tailsNeverFails() {
  let i = 0;
  while (Math.random() > 0.5) {
    i++;
  }
  return `You got ${i} tails in a row!`;
}
*/

// Function above will not pass test

function maybeTails() {
  return Math.random() >= 0.5;
}

function tailsNeverFails() {
  let counter = 0;
  while (maybeTails()) {
    counter ++;
  }
  return `You got ${counter} tails in a row!`;
}
