function printBadges(array) {
  for (let i = 0; i < array.length; i++) {
    console.log(`Welcome ${array[i]}! You are employee #${i + 1}.`);
  }
  return array;
}

function maybeTrue() {
  return Math.random() >= 0.5;
}

function tailsNeverFails() {
  let i = 0;

  while (maybeTrue()) {
    i++
  }

  return `You got ${i} tails in a row!`
}
