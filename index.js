// Code your solutions in this file

const badges = ['Ada', 'Brendan', 'Ali']

function printBadges(badges) {
  for(let i = 0; i < badges.length; i++) {
    console.log(`Welcome ${badges[i]}! You are employee #${i + 1}.`);
  }
  return badges
}

function tailsNeverFails() {
  let counter = 0
  while(Math.random() >= .5) {
    counter += 1
  }
  return `You got ${counter} tails in a row!`
}

printBadges(badges)
tailsNeverFails()
