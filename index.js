// Code your solutions in this file
function printBadges(names) {
  for (let i = 0; i < names.length; i++) {
    console.log(`Welcome ${names[i]}! You are employee #${i + 1}.`);
  }

  return names;
}


// invokes Math.random to simulate coin flips
// returns the number of 'Tail' flips in a row 
function tailsNeverFails() {
  let tailStreak = 0;

  while (Math.random() >= 0.5) {
    tailStreak ++;
  }

  return `You got ${tailStreak} tails in a row!`;
}