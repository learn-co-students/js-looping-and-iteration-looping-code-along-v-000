function printBadges(names) {
  for (let i = 0; i < names.length; i++) {
    console.log(`Welcome ${names[i]}! You are employee #${i+1}.`);
  }
  return names;
}

function flip() {
  return Math.random() >= 0.5;
}

function tailsNeverFails() {
  let count = 0;
  while (flip()) {
    count++;
  }
  return `You got ${count} tails in a row!`;
}
