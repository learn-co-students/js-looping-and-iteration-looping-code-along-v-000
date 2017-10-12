function printBadges(names) {
  for (i = 0; i < names.length; i++) {
    console.log(`Welcome ${names[i]}! You are employee #${i+1}.`)
  }
  return names;
}

function maybeTails() {
  return Math.random() >= 0.5;
}

function tailsNeverFails() {
  let number_of_tails = 0;
  while (maybeTails()) {
    number_of_tails++
  }
  return `You got ${number_of_tails} tails in a row!`
}
