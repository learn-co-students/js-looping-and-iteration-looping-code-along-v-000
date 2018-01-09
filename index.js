const badges = ["Joe", "Gabe"];

function printBadges(badges) {
  for (let i = 0; i < badges.length; i++) {
    console.log(`Welcome ${badges[i]}! You are employee #${i+1}.`);
  }
  return badges
};

function tailsNeverFails() {
  function tails() {
    return Math.random() >= 0.5;
  }
  let n = 0;
  while (tails()) {
    n = n + 1;
  }
  return `You got ${n} tails in a row!`
}
