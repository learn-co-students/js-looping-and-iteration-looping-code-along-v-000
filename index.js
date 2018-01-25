function printBadges(names) {
  for (counter = 0; counter < names.length; counter++) {
    console.log(`Welcome ${names[counter]}! You are employee #${counter + 1}.`)
  }
  return names;
}

function tailsNeverFails() {
  let counter = 0;
  while (Math.random() >= 0.5) {
    counter++;
  }
  return `You got ${counter} tails in a row!`;
}
