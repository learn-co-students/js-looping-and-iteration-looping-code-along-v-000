// Code your solutions in this file
function printBadges(badges) {
  for (let i = 0; i < badges.length; i++) {
    console.log(`Welcome ${badges[i]}! You are employee #${i+1}.`);
  }
  return badges;
}

function tailsNeverFails() {
  let tailsCount = 0
  for (let i = 0; Math.random() >= 0.5; i++) {
    tailsCount++
  }
  return `You got ${tailsCount} tails in a row!`
}
