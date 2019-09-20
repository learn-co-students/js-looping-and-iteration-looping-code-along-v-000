// Code your solutions in this file
function printBadges(name) {
  for (let i = 0; i < name.length; i++) {
  console.log (`Welcome ${name[i]}! You are employee #${i + 1}.`);
  }
  return name;
}

function tailsNeverFails() {
  let tailsCount = 0;

  while (Math.random() >= 0.5) {
    tailsCount++;
  }
  return `You got ${tailsCount} tails in a row!`;
}
