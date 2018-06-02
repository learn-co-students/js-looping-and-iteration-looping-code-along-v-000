

function printBadges(names) {
  for (let i = 1; i < names.length + 1; i++) {
    console.log(`Welcome ${names[i - 1]}! You are employee #${i}.`);  
  }
  return names
}

function tailsNeverFails() {
  let tails = 0

  while (Math.random() >= 0.5) {
    tails++;
  }
  return `You got ${tails} tails in a row!`
}