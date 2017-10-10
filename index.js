// Code your solutions in this file

function printBadges(names) {
  for (let c = 0; c < names.length; c++) {
  console.log(`Welcome ${names[c]}! You are employee #${c + 1}.`);
}
  return names
}

function maybeTrue () {
  return Math.random() >= 0.5;
}

while (maybeTrue()) {
  console.log('And I ran... I ran so far away!');
}

function tailsNeverFails() {
  let c = 0
  while (maybeTrue()) {
    c++
  }
  return `You got ${c} tails in a row!`
}
