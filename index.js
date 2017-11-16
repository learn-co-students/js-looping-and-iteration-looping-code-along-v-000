function printBadges(badges) {
  for (let i = 0; i < badges.length; i++) {
    console.log(`Welcome ${badges[i]}! You are employee #${i+1}.`);
  }
  return badges;
}

function tailsNeverFails() {
  let flips = 0;

  while (Math.random() >= 0.5) {
    flips++;
  }

  return `You got ${flips} tails in a row!`;
}
