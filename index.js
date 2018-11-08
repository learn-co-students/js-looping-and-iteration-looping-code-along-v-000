// Code your solutions in this file
const names = ['Ada', 'Brendan', 'Ali'];

function printBadges(names) {
  for (let i = 0; i < names.length; i++) {
    console.log(`Welcome ${names[i]}! You are employee #${i + 1}.`);
  }
  return names;
}

function tailsNeverFails() {
  let i = 0;
  let headTails = Math.random();

  while (headTails >= 0.5) {
    headTails = Math.random();
    i++;
  }

  return `You got ${i} tails in a row!`
}
