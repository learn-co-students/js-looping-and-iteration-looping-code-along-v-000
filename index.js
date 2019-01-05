// Code your solutions in this file
const names = ['Ada', 'Brendan', 'Ali'];

function printBadges(names) {
  for (let i = 1; i <= names.length; i++) {
    console.log(`Welcome ${names[i - 1]}! You are employee #${[i]}.`);
  }
  return names;
}

function tailsNeverFails() {
  let count = 0;
  while (Math.random() >= 0.5) {
    count++;
  }
  return (`You got ${count} tails in a row!`);
}