// Code your solutions in this file

function printBadges(names) {
  for (let i = 0; i < names.length; i++) {
    console.log(`Welcome ${names[i]}! You are employee #${i + 1}.`);
  }

  return names;
}

function tailsNeverFails() {
  let tailsCounter = 0;

  function maybeTails() {
    return Math.random() >= 0.5;
  }

  while (maybeTails()) {
    tailsCounter++
  }

  return `You got ${tailsCounter} tails in a row!`;
}
