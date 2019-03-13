function printBadges(array) {
  for (var i = 0; i < array.length; i++) {
    console.log(`Welcome ${array[i]}! You are employee #${i+1}.`);
  }
  return array;
}

function tailsNeverFails() {
  let sum = 0;
  while (Math.random() >= 0.5) {
    sum++;
  }
  return `You got ${sum} tails in a row!`;
}
