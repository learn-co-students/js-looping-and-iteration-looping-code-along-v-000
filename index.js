// Code your solutions in this file
for (let age = 30; age < 40; age++) {
  console.log(`I'm ${age} years old! Happy birthday to me!!`);
}

const gifts = ['teddy bear', 'drone', 'doll'];

function wrapGifts(gifts){
  for (var i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
  }
  return gifts;
}

wrapGifts(gifts);

function printBadges(employeeNames) {
  for (let i = 0; i < employeeNames.length; i++) {
    console.log(`Welcome ${employeeNames[i]}! You are employee #${i + 1}.`);
  }
  return employeeNames;
}

function tailsNeverFails() {
  let tailStreak = 0;
  while (Math.random() >= 0.5) {
    tailStreak++;
  }
  return `You got ${tailStreak} tails in a row!`;
}
