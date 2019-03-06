function printBadges(names) {
  for (let count = 0; count < names.length; count++) {
    console.log(`Welcome ${names[count]}! You are employee #${count + 1}.`)
  }
  return names
}

function tailsNeverFails() {
  counter = 0
  coin = Math.random()

  while(coin >= 0.5) {
    coin = Math.random()
    counter++
  };

  return `You got ${counter} tails in a row!`
}
